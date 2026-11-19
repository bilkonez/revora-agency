import { useEffect, useState } from "react";
import { Check, CircleAlert, Sparkles, ArrowUp } from "lucide-react";

// Example tasks the AI console works through. Invented sample data,
// modelled on work Revora's software already does for a transport company.
type Row = { left: string; right: string; tone?: "ok" | "warn" };
type Scenario = {
  tab: string;
  prompt: string;
  title: string;
  rows?: Row[];
  chat?: { who: "customer" | "ai"; text: string }[];
  footer: string;
};

const scenarios: Scenario[] = [
  {
    tab: "Finance",
    prompt: "Match this month's bank statement to our open invoices.",
    title: "Bank statement, November",
    rows: [
      { left: "Alpina Travel  1,850.00 KM", right: "Invoice 2026-209 paid", tone: "ok" },
      { left: "Mostar Events  2,400.00 KM", right: "Invoice 2026-214 paid", tone: "ok" },
      { left: "Fuel card  −600.00 KM", right: "Booked as fuel expense", tone: "ok" },
      { left: "Unknown sender  320.00 KM", right: "Needs your review", tone: "warn" },
    ],
    footer: "3 matched, 1 left for you",
  },
  {
    tab: "Dispatch",
    prompt: "Plan Saturday's trips for our 4 coaches and 6 drivers.",
    title: "Saturday plan",
    rows: [
      { left: "06:00  Sarajevo – Zagreb", right: "Coach 01, Adnan", tone: "ok" },
      { left: "07:30  School line Ilidža", right: "Coach 02, Dario", tone: "ok" },
      { left: "09:00  Mostar – Dubrovnik", right: "Coach 03, Emir", tone: "ok" },
      { left: "Coach 04", right: "Inspection in 3 days, kept free", tone: "warn" },
    ],
    footer: "Driving and rest times checked",
  },
  {
    tab: "Customer support",
    prompt: "Answer questions on our website, day and night.",
    title: "Website chat, 23:41",
    chat: [
      { who: "customer", text: "Do you have a bus to Vienna next Friday?" },
      { who: "ai", text: "Yes, it leaves Sarajevo at 21:00 and costs 58 € one way. Shall I reserve a seat for you?" },
      { who: "customer", text: "Yes, two seats please." },
      { who: "ai", text: "Done. Two seats are held until noon tomorrow, and the details are in your email." },
    ],
    footer: "Hands over to your staff when unsure",
  },
  {
    tab: "Documents",
    prompt: "Write the transport contract for the Zagreb trip.",
    title: "Contract 2026-047",
    rows: [
      { left: "Client and route", right: "Taken from the quote", tone: "ok" },
      { left: "Dates and price", right: "Filled in", tone: "ok" },
      { left: "Terms", right: "Your standard template", tone: "ok" },
      { left: "Signature", right: "Sent to the client", tone: "ok" },
    ],
    footer: "PDF ready in 6 seconds",
  },
];

const TYPE_MS = 26;
const THINK_MS = 900;
const ROW_MS = 380;
const HOLD_MS = 3600;

const AIConsole = () => {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<"typing" | "thinking" | "answer">("typing");
  const [shown, setShown] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  const s = scenarios[i];
  const items = s.rows?.length ?? s.chat?.length ?? 0;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Restart the sequence whenever the task changes.
  useEffect(() => {
    if (reduced) {
      setTyped(s.prompt.length);
      setPhase("answer");
      setShown(items);
    } else {
      setTyped(0);
      setPhase("typing");
      setShown(0);
    }
  }, [i, reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (reduced) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    if (phase === "typing") {
      t = typed < s.prompt.length ? setTimeout(() => setTyped(typed + 1), TYPE_MS) : setTimeout(() => setPhase("thinking"), 250);
    } else if (phase === "thinking") {
      t = setTimeout(() => setPhase("answer"), THINK_MS);
    } else if (shown < items) {
      t = setTimeout(() => setShown(shown + 1), ROW_MS);
    } else if (!paused) {
      t = setTimeout(() => setI((n) => (n + 1) % scenarios.length), HOLD_MS);
    }
    return () => clearTimeout(t);
  }, [phase, typed, shown, items, paused, reduced, s.prompt.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="rounded-[1.25rem] bg-foreground text-white p-2 shadow-[0_50px_100px_-40px_hsl(var(--ink)/0.7)]">
        <div className="flex items-center justify-between px-3 pt-2 pb-3">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-accent" strokeWidth={2} />
            Revora AI
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/55">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Working in your systems
          </span>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-white/[0.08] px-4 py-3.5 min-h-[4.25rem]">
          <p className="flex-1 text-[0.98rem] leading-snug text-white/90">
            {s.prompt.slice(0, typed)}
            {phase === "typing" && <span className="caret ml-0.5 inline-block w-[2px] h-[1.05em] translate-y-[0.18em] bg-accent" />}
          </p>
          <span className={`grid place-items-center w-8 h-8 shrink-0 rounded-full transition-colors ${phase === "typing" ? "bg-white/15" : "bg-primary"}`}>
            <ArrowUp className="w-4 h-4" strokeWidth={2.4} />
          </span>
        </div>

        <div className="mt-2 rounded-xl bg-card text-foreground px-4 sm:px-5 py-4 h-[23.5rem] sm:h-[19rem] overflow-hidden" aria-live="polite">
          {phase === "thinking" && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm h-full justify-center">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Reading your data…
            </div>
          )}
          {phase === "answer" && (
            <>
              <p className="font-display text-lg font-bold">{s.title}</p>
              {s.rows && (
                <ul className="mt-2 divide-y divide-border">
                  {s.rows.slice(0, shown).map((r) => (
                    <li key={r.left} className="word-in flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4 py-2.5 text-[0.9rem]">
                      <span className="text-foreground/75 whitespace-pre">{r.left}</span>
                      <span className={`flex items-center gap-1.5 font-semibold ${r.tone === "warn" ? "text-[hsl(30_85%_40%)]" : ""}`}>
                        {r.tone === "warn" ? (
                          <CircleAlert className="w-4 h-4 shrink-0" />
                        ) : (
                          <Check className="w-4 h-4 shrink-0 text-emerald-600" strokeWidth={2.6} />
                        )}
                        {r.right}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {s.chat && (
                <div className="mt-3 flex flex-col gap-2">
                  {s.chat.slice(0, shown).map((m) => (
                    <p
                      key={m.text}
                      className={`word-in max-w-[85%] rounded-2xl px-3.5 py-2 text-[0.9rem] leading-snug ${
                        m.who === "ai" ? "self-end bg-primary text-primary-foreground rounded-br-md" : "self-start bg-secondary rounded-bl-md"
                      }`}
                    >
                      {m.text}
                    </p>
                  ))}
                </div>
              )}
              {shown >= items && <p className="word-in mt-3 text-sm text-muted-foreground">{s.footer}</p>}
            </>
          )}
        </div>
      </div>

      <div role="tablist" aria-label="Example tasks" className="mt-4 flex flex-wrap gap-2">
        {scenarios.map((sc, n) => (
          <button
            key={sc.tab}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`rounded-full px-4 h-9 text-sm font-semibold transition-colors ${
              n === i ? "bg-foreground text-background" : "bg-card text-foreground/70 hover:text-foreground ring-1 ring-border"
            }`}
          >
            {sc.tab}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Example tasks with sample data.</p>
    </div>
  );
};

const HeroSection = () => (
  <section id="top" className="pt-32 sm:pt-40 pb-24 sm:pb-32">
    <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-card ring-1 ring-border px-3.5 h-8 text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-primary" strokeWidth={2} />
          AI development studio
        </p>
        <h1 className="mt-7 font-display font-extrabold leading-[0.97] tracking-[-0.045em] text-[3rem] sm:text-[4.5rem] xl:text-[5.4rem]">
          We put AI to work in your business.
        </h1>
        <p className="lede mt-7">
          Revora builds AI agents, automations and custom software that take over the repetitive work in your company,
          plus the websites, web domains and hosting they run on.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn-ghost">
            See our work
          </a>
        </div>
      </div>

      <AIConsole />
    </div>
  </section>
);

export default HeroSection;
