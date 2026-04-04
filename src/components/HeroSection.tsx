import { Button } from "@/components/ui/button";

const floatingIcons = [
  { emoji: "🤖", className: "top-[15%] left-[8%] animate-float-slow text-2xl", delay: "0s" },
  { emoji: "💬", className: "top-[25%] right-[10%] animate-float-medium text-xl", delay: "-2s" },
  { emoji: "⚡", className: "bottom-[30%] left-[6%] animate-float-reverse text-2xl", delay: "-1s" },
  { emoji: "📊", className: "top-[18%] right-[22%] animate-float-slow text-lg", delay: "-4s" },
  { emoji: "🧠", className: "bottom-[22%] right-[7%] animate-float-medium text-2xl", delay: "-3s" },
  { emoji: "🚀", className: "top-[40%] left-[4%] animate-float-reverse text-xl", delay: "-5s" },
  { emoji: "💡", className: "bottom-[18%] left-[15%] animate-float-slow text-lg", delay: "-2.5s" },
  { emoji: "⚙️", className: "top-[12%] left-[25%] animate-float-medium text-lg", delay: "-6s" },
  { emoji: "📱", className: "bottom-[35%] right-[18%] animate-float-reverse text-xl", delay: "-1.5s" },
  { emoji: "✨", className: "top-[55%] right-[5%] animate-float-slow text-lg", delay: "-4.5s" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 grid-pattern" />

      {/* Subtle squares pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-foreground rounded-sm"
            style={{
              width: `${20 + (i % 4) * 12}px`,
              height: `${20 + (i % 4) * 12}px`,
              top: `${10 + (i * 7.5) % 85}%`,
              left: `${5 + (i * 13.7) % 90}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Mesh gradient background layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,hsl(var(--accent)/0.12),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_40%_50%_at_10%_50%,hsl(var(--gradient-end)/0.08),transparent)] pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/12 blur-[120px] animate-orb-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/12 blur-[100px] animate-orb-float pointer-events-none" style={{ animationDelay: "-7s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/8 to-accent/8 blur-[140px] animate-orb-float pointer-events-none" style={{ animationDelay: "-3s" }} />

      {/* Floating AI/tech icons */}
      {floatingIcons.map((icon, i) => (
        <span
          key={i}
          className={`absolute pointer-events-none opacity-[0.12] select-none ${icon.className}`}
          style={{ animationDelay: icon.delay }}
          aria-hidden="true"
        >
          {icon.emoji}
        </span>
      ))}

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
