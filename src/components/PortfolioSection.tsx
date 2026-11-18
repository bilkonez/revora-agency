import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CoachboardMark, NexaMark } from "@/components/ProductLogos";
import { Wrench, Trophy } from "lucide-react";

const TmsMark = ({ size = 44 }: { size?: number }) => (
  <span className="inline-flex items-center justify-center rounded-[10px] bg-asphalt text-primary" style={{ width: size, height: size }}>
    <Wrench className="w-5 h-5" strokeWidth={1.75} />
  </span>
);

const KolinaMark = ({ size = 44 }: { size?: number }) => (
  <span className="inline-flex items-center justify-center rounded-[10px] bg-[#0f6b3f] text-[#e7a929]" style={{ width: size, height: size }}>
    <Trophy className="w-5 h-5" strokeWidth={1.75} />
  </span>
);

const img = (name: string) => `${import.meta.env.BASE_URL}portfolio/${name}`;

const projects = [
  {
    logo: TmsMark,
    name: "Transport management system",
    kind: "Business system · Coach operator · in daily use",
    description:
      "The system that runs a coach company's office every day: dashboard with deadlines and cash, dispatch calendar, trips and travel orders, maintenance, fuel, quotes, invoices and contracts.",
    highlights: ["Dispatch calendar for the whole fleet", "Quote → pro forma → invoice in one flow", "Alerts for registrations, inspections and driver cards"],
    main: { src: img("tms-dashboard.webp"), alt: "TMS dashboard with today's trips, revenue, costs and deadline alerts" },
    second: { src: img("tms-kalendar.webp"), alt: "TMS dispatch calendar with trips per day, vehicle and driver" },
    note: "Shown with demo data. The client's real data stays private.",
    url: "tms",
  },
  {
    logo: KolinaMark,
    name: "NK Kolina",
    kind: "Club website · Football",
    description:
      "Website for a local football club. League table, results, fixtures and top scorers update automatically from the official federation data, so the club never has to type in a score.",
    highlights: ["Results and table synced automatically", "Every season since 2018 in one place", "Club history, stadium, kit and memberships"],
    main: { src: img("kolina-home.webp"), alt: "NK Kolina website home page with the next match card" },
    second: { src: img("kolina-results.webp"), alt: "NK Kolina league table, top scorers and match results" },
    url: "kolina",
  },
  {
    logo: CoachboardMark,
    name: "Coachboard",
    kind: "Charter coach exchange · Europe",
    description:
      "Organisers post a coach trip once, operators near the route send their price, and the organiser compares offers side by side. Available in Bosnian, English and German.",
    highlights: ["Trip request in two minutes", "Offers from verified operators", "Operator portal with VAT check"],
    main: { src: img("coachboard-home.webp"), alt: "Coachboard home page with a trip request form and a tour board" },
    second: { src: img("coachboard-how.webp"), alt: "Coachboard screen comparing offers from three operators" },
    url: "coachboard",
  },
  {
    logo: NexaMark,
    name: "Nexa Express",
    kind: "Courier platform · Bosnia and Herzegovina",
    description:
      "One place to send a parcel with any courier. The sender enters the shipment once, Nexa passes the pickup to a courier partner, and the parcel is tracked with one Nexa number.",
    highlights: ["Order without registration", "Six-step guided order", "Tracking across courier partners"],
    main: { src: img("nexa-home.webp"), alt: "Nexa Express home page with a parcel tracking timeline" },
    second: { src: img("nexa-posalji.webp"), alt: "Nexa Express order form, step one: sender details" },
    url: "nexa",
  },
];

const BrowserFrame = ({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) => (
  <div className={`rounded-xl border border-border/80 bg-card overflow-hidden ${small ? "shadow-xl" : "shadow-2xl"} shadow-[hsl(var(--asphalt))]/15`}>
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/70 bg-secondary/70">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
    <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" width={1200} height={750} />
  </div>
);

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="work" className="py-24 px-6 bg-secondary/50 border-y border-border/70">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">Our work</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.01em] text-foreground mb-4">
          Projects in use today
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">Real screens from software we built, as it looks today.</p>

        <div className="space-y-24">
          {projects.map((p, i) => {
            const Logo = p.logo;
            const flip = i % 2 === 1;
            return (
              <div key={p.name} className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
                <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Logo size={44} />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">{p.name}</h3>
                      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted-foreground">{p.kind}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-[7px] w-3 h-[3px] rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {"note" in p && p.note && <p className="mt-6 text-xs text-muted-foreground italic">{p.note}</p>}
                </div>

                <div className={`relative min-w-0 pb-10 sm:pb-16 ${flip ? "lg:order-1" : ""}`}>
                  <div className="sm:w-[88%]">
                    <BrowserFrame {...p.main} />
                  </div>
                  <div className="hidden sm:block absolute bottom-0 right-0 w-[52%]">
                    <BrowserFrame {...p.second} small />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
