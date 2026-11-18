import { useEffect, useRef, useState } from "react";
import { projects } from "@/content";
import { RevoraMark } from "@/components/ProductLogos";

const SLIDE_MS = 4200;

// The reel: every real project we built, then the visitor's own business.
const reel = [
  ...projects.map((p) => ({ key: p.id, word: p.audience, tab: p.tab, caption: p.caption, shot: p.main })),
  { key: "you", word: "your business", tab: "Yours", caption: "Your project, built the same way", shot: null },
];

const YourProject = () => (
  <div className="aspect-[16/10] w-full grid place-items-center bg-[radial-gradient(hsl(var(--ink)/0.08)_1px,transparent_1px)] [background-size:22px_22px]">
    <div className="text-center px-6">
      <RevoraMark size={64} className="mx-auto" />
      <p className="mt-6 font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.03em]">This screen is for you.</p>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        Tell us what slows your business down. We plan it, build it and keep it running.
      </p>
      <a href="#contact" className="btn-primary mt-7">
        Start a project
      </a>
    </div>
  </div>
);

const HeroSection = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    reel.forEach((r) => r.shot && (new Image().src = r.shot.src));
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((n) => (n + 1) % reel.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, paused, reduced]);

  // The frame starts tilted back and straightens as you scroll into it.
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced) {
      if (stage.current) stage.current.style.transform = "none";
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = stage.current;
      if (!el) return;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.85)));
      el.style.transform = `perspective(1600px) rotateX(${(1 - p) * 24}deg) scale(${0.9 + p * 0.1})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const cur = reel[i];

  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="wrap relative">
        <h1 className="font-display font-extrabold leading-[0.98] tracking-[-0.045em] text-[2.9rem] sm:text-[4.75rem] lg:text-[6.4rem]">
          <span className="block">We build software for</span>
          <span className="relative block" aria-live="polite">
            <span key={cur.key} className="word-in inline-block">
              {cur.word}
            </span>
            <span className="caret ml-1 inline-block w-[0.09em] h-[0.82em] translate-y-[0.06em] bg-accent" aria-hidden="true" />
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="lede">
            Revora is a software studio. We build web apps, business systems, websites and AI automation, and we look
            after your web domain and hosting, for companies in any industry.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn-ghost">
              See our work
            </a>
          </div>
        </div>

        <div
          className="mt-16 sm:mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div role="tablist" aria-label="Projects" className="flex gap-2 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
            {reel.map((r, n) => (
              <button
                key={r.key}
                role="tab"
                aria-selected={n === i}
                onClick={() => setI(n)}
                className={`relative shrink-0 overflow-hidden rounded-full px-4 h-10 text-sm font-semibold transition-colors ${
                  n === i ? "bg-foreground text-background" : "bg-card text-foreground/70 hover:text-foreground ring-1 ring-border"
                }`}
              >
                {r.tab}
                {n === i && !reduced && (
                  <span
                    key={`${r.key}-${paused}`}
                    className="progress absolute left-0 bottom-0 h-[3px] w-full bg-accent"
                    style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative isolate">
          <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 w-screen top-[38%] -bottom-20 sm:-bottom-28 bg-foreground -z-10" />
          <div ref={stage} className="origin-[50%_0%] will-change-transform">
          <figure className="frame">
            <div className="frame-bar">
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-dot" />
            </div>
            <div key={cur.key} className="shot-in">
              {cur.shot ? (
                <img src={cur.shot.src} alt={cur.shot.alt} width={1200} height={750} className="block w-full h-auto" />
              ) : (
                <YourProject />
              )}
            </div>
          </figure>
          </div>
          <figcaption className="mt-5 text-sm text-white/60">{cur.caption}</figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
