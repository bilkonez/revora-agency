import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-orb-float pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Built to scale,
          <br />
          Made to convert.
        </h1>

        <p
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Revora is a digital agency specializing in web development, SaaS products, and
          monetization systems that generate real revenue.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          <Button variant="hero" size="lg" onClick={() => scrollTo("#contact")}>
            Start a Project
          </Button>
          <Button variant="hero-outline" size="lg" onClick={() => scrollTo("#services")}>
            See Our Services
          </Button>
        </div>

        <p
          className="mt-12 text-xs tracking-[0.15em] uppercase text-muted-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          Web Development · SaaS Products · Digital Monetization
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
