import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "€499",
    features: [
      "Landing page or simple website",
      "Up to 5 sections",
      "Mobile responsive",
      "Contact form integration",
      "1 revision round",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "€999",
    features: [
      "Full website up to 10 pages",
      "CMS integration",
      "SEO foundation",
      "Analytics setup",
      "3 revision rounds",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "€1,999+",
    features: [
      "SaaS MVP or complex web app",
      "Custom functionality",
      "Monetization integration",
      "Ongoing support available",
      "Fully custom scope",
    ],
    cta: "Let's Talk",
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="py-24 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-4">PRICING</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.02em] text-foreground mb-12">
          Straightforward pricing.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 border rounded-lg ${
                plan.popular
                  ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border/60 bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] tracking-[0.1em] uppercase font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-heading font-semibold text-foreground">{plan.name}</h3>
              <p className="text-4xl font-heading font-bold text-foreground mt-4">{plan.price}</p>
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "hero" : "hero-outline"}
                size="lg"
                className="mt-8 w-full"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Need something ongoing? Our monthly retainer starts at €79/month.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
