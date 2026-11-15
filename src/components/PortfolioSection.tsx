import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CoachboardMark, NexaMark } from "@/components/ProductLogos";
import { Lock } from "lucide-react";

const img = (name: string) => `${import.meta.env.BASE_URL}portfolio/${name}`;

const projects = [
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
          Products already on the road
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">Screens from our own apps, as they look today.</p>

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

          {/* Private client work */}
          <div className="rounded-xl border border-dashed border-border bg-card/70 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <span className="w-12 h-12 rounded-xl bg-asphalt text-primary flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" strokeWidth={1.75} />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-foreground">Custom TMS for a coach operator</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Dispatch with a live map, maintenance, quotes, invoices, transport contracts and tours, in daily use
                by the operator's office. This is a private client system, so we show it on a call.
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 whitespace-nowrap"
            >
              Ask for a demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
