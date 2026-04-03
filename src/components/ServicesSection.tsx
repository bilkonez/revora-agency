import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8l-4 8 4 8M24 8l4 8-4 8M18 6l-4 20" />
      </svg>
    ),
    title: "AI Web Development",
    description:
      "From landing pages to full-scale web applications. We build fast, AI-optimized websites designed to convert.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="12" width="20" height="14" rx="2" />
        <rect x="10" y="6" width="12" height="14" rx="2" />
      </svg>
    ),
    title: "AI SaaS Products",
    description:
      "We design and develop AI-powered software products from concept to launch. Scalable, intelligent, and built for growth.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28l7-10 5 6 5-8 7 12" />
        <path d="M26 8l-4 1 1-4" />
        <path d="M22 12l4-4" />
      </svg>
    ),
    title: "AI Monetization",
    description:
      "AI-driven affiliate systems, lead generation platforms, and smart monetization strategies that turn audiences into revenue.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">WHAT WE DO</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-12">
          Three AI-powered ways we grow your business
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glow bg-card border border-border/60 p-8 flex flex-col rounded-lg"
            >
              <div className="text-primary mb-6">{s.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.description}</p>
              <a href="#contact" className="mt-6 text-sm text-primary font-medium hover:brightness-125 transition-all">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
