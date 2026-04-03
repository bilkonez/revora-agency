import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your goals, audience, and competition." },
  { num: "02", title: "AI Strategy", desc: "We map out the architecture, AI stack, and monetization approach." },
  { num: "03", title: "Build with AI", desc: "AI-accelerated development with weekly updates and full transparency." },
  { num: "04", title: "Launch & Scale", desc: "We deploy, monitor, and optimize for growth." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-24 px-6 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">HOW WE WORK</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-12">
          Simple process. Serious results.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s) => (
            <div key={s.num} className="p-6 border border-border/50 rounded-lg bg-card/50">
              <span className="text-4xl md:text-5xl font-heading font-bold gradient-text">{s.num}</span>
              <h3 className="text-base md:text-lg font-heading font-semibold text-foreground mt-4 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
