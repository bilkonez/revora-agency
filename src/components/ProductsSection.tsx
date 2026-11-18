import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlotivaMark, CoachboardMark, NexaMark } from "@/components/ProductLogos";

const products = [
  {
    logo: FlotivaMark,
    name: "Flotiva",
    badge: "Early access",
    tagline: "One platform for every fleet",
    description:
      "Vehicles, drivers, costs and documents in one place. AI reads receipts and invoices, watches every deadline and driving-time rule, and shows the profit of each trip.",
    points: ["Vehicle deadlines and service alerts", "Driver hours, rest and EU stay tracking", "AI document reading and cost tracking"],
    featured: true,
  },
  {
    logo: CoachboardMark,
    name: "Coachboard",
    tagline: "Charter coach exchange",
    description:
      "Organisers post a charter trip once and get offers from verified coach operators. Operators get new trip requests on their routes.",
    points: ["Verified operators only", "Compare offers side by side", "Built for European routes"],
    featured: false,
  },
  {
    logo: NexaMark,
    name: "Nexa Express",
    tagline: "All couriers, one pickup",
    description:
      "Courier companies join the platform, and senders choose which courier picks up their parcel, side by side in one place.",
    points: ["Compare couriers in one order", "One pickup request for any courier", "New customers for courier companies"],
    featured: false,
  },
];

const ProductsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="products" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">OUR PRODUCTS</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-4">
          Our own products
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Besides client work, we build and run our own software for transport. Same team, same standards.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => {
            const Logo = p.logo;
            return (
              <div
                key={p.name}
                className={`card-glow relative flex flex-col p-8 border rounded-lg ${
                  p.featured ? "border-[#0e3a4f]/40 bg-[#0e3a4f]/[0.04] ring-1 ring-[#0e3a4f]/10" : "border-border/70 bg-card"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Logo size={40} />
                    <h3 className="text-2xl font-heading font-bold text-foreground">{p.name}</h3>
                  </div>
                  {p.badge && (
                    <span className="bg-primary text-primary-foreground text-[10px] shrink-0 tracking-[0.1em] uppercase font-semibold px-3 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="font-condensed text-base font-semibold tracking-[0.06em] uppercase text-accent mb-3">{p.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                <ul className="mt-6 space-y-2 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-[7px] w-3 h-[3px] rounded-full bg-primary shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 text-sm text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:decoration-4 transition-all">
                  {p.featured ? "Request early access →" : "Learn more →"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
