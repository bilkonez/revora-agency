import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { title: "We come from transport", desc: "We know dispatch, driver hours, vehicle deadlines and paperwork first-hand, not from a brochure" },
  { title: "AI that does the boring work", desc: "Reading documents, watching deadlines and calculating costs, so your team can run the fleet" },
  { title: "Local rules built in", desc: "Driving-time rules, tachographs and the realities of cross-border transport in the Balkans and the EU" },
  { title: "Products first, custom when needed", desc: "Start with a ready product, and we build to measure only where you really need it" },
];

const WhyRevoraSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-6">
            Built by transport people, <span className="gradient-text">for transport.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most software for transport is built far from the road. Revora was born inside the industry, so every
            tool we make starts with a problem a real operator, dispatcher or driver deals with every day.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
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
