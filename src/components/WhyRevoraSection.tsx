import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { title: "We run a business too", desc: "Our own systems run a real company every day, so we build for how work actually gets done" },
  { title: "Fast, with AI in our workflow", desc: "Modern AI tools let us deliver in weeks what usually takes months" },
  { title: "One team, start to finish", desc: "Planning, design, development, hosting and support from the same people" },
  { title: "Clear scope, fixed quote", desc: "A written plan and a fixed price before we start, then a simple monthly plan for support" },
];

const WhyRevoraSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="on-dark py-24 px-6 bg-asphalt text-white">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-[-0.01em] text-white mb-6">
            Built by people who run a business, <span className="gradient-text">for businesses.</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Revora started by building the software that runs our own transport company. Now we build the same
            way for others: start from the real problem, ship something that works, and keep improving it.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <span className="mt-2 w-4 h-[3px] rounded-full bg-primary shrink-0" />
              <div>
                <h4 className="font-heading text-lg font-semibold text-white">{f.title}</h4>
                <p className="text-sm text-white/60 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRevoraSection;
