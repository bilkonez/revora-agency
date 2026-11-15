import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Listen", desc: "We look at how your fleet, office and drivers work today." },
  { num: "02", title: "Fit", desc: "We match you with a product, or plan what needs to be built to measure." },
  { num: "03", title: "Set up", desc: "We move your vehicles, drivers and documents in and train your team." },
  { num: "04", title: "Support", desc: "We stay with you, and your feedback shapes the next version." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">HOW WE WORK</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-12">
          From first call to the road
        </h2>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dashed road connecting the stops */}
          <div
            className="hidden lg:block absolute top-6 left-6 right-6 h-[3px]"
            style={{ background: "repeating-linear-gradient(90deg, hsl(var(--foreground) / .25) 0 14px, transparent 14px 24px)" }}
            aria-hidden="true"
          />
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-condensed text-xl font-bold ring-8 ring-background">
                {s.num}
              </span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-5 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
