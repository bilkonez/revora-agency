import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 grid-pattern" />

      {/* Mesh gradient background layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,hsl(var(--accent)/0.12),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_40%_50%_at_10%_50%,hsl(var(--gradient-end)/0.08),transparent)] pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/12 blur-[120px] animate-orb-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/12 blur-[100px] animate-orb-float pointer-events-none" style={{ animationDelay: "-7s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/8 to-accent/8 blur-[140px] animate-orb-float pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-heading font-bold leading-[1.08] tracking-[-0.02em] text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Built to scale,
          <br />
          <span className="gradient-text">Made to convert.</span>
        </h1>

        <p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Revora is an AI-powered digital agency specializing in web development, SaaS products, and
          AI-driven monetization systems that generate real revenue.
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
          AI Web Development · AI SaaS Products · AI-Driven Monetization
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
