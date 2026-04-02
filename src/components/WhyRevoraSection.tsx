import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { title: "Fast delivery", desc: "MVPs and landing pages in days, not months" },
  { title: "Revenue-first design", desc: "Every decision is made with conversion in mind" },
  { title: "Full-stack execution", desc: "Design, development, and strategy under one roof" },
  { title: "Transparent pricing", desc: "No surprises, no hidden costs" },
];

const WhyRevoraSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-6">
            We don't just build — we build for results.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most agencies deliver a website and walk away. Revora builds digital systems designed to
            generate leads, retain users, and scale revenue from day one.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 bg-primary shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRevoraSection;
