import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LayoutDashboard, Globe, Sparkles, ShoppingCart, Plug, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Software development",
    description:
      "Custom web apps and business systems built around how your team works: orders, scheduling, quotes and invoices, stock, records and dashboards.",
  },
  {
    icon: Globe,
    title: "Websites",
    description:
      "Fast, modern websites for companies, clubs and organisations, with content that updates itself where possible, such as results, offers or schedules.",
  },
  {
    icon: Sparkles,
    title: "AI & automation",
    description:
      "AI that does the repetitive work: reading invoices, receipts and bank statements, sorting email, drafting documents and keeping data in sync.",
  },
  {
    icon: ShoppingCart,
    title: "Online shops",
    description:
      "Webshops with product catalogues, order handling and delivery options, connected to your suppliers and stock where it makes sense.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "We connect the tools you already use, so data moves between your website, apps, accounting and suppliers without copying by hand.",
  },
  {
    icon: LifeBuoy,
    title: "Web domains & hosting",
    description:
      "We register your domain, set up hosting, business email and SSL, and keep everything updated, backed up and running on a simple monthly plan.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">DIGITAL SOLUTIONS</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-4">
          If it can be built in software, we build it
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Development, websites, AI, web domains and hosting: everything your business needs online, from one team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-glow bg-card border border-border/70 p-8 flex flex-col rounded-xl">
                <Icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
