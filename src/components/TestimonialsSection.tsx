import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "NovaTech Solutions",
    stars: 5,
    quote: "Revora transformed our entire digital presence with AI-driven strategies. Our conversion rates tripled within the first quarter.",
    initials: "SM",
    color: "bg-primary",
  },
  {
    name: "James Rodriguez",
    role: "CMO",
    company: "GrowthLab Digital",
    stars: 5,
    quote: "The AI-powered solutions Revora delivered exceeded every expectation. Their team understands scale like no one else.",
    initials: "JR",
    color: "bg-accent",
  },
  {
    name: "Emily Chen",
    role: "Founder",
    company: "Stackify",
    stars: 5,
    quote: "From concept to launch in record time. Revora's AI-first approach gave us an edge our competitors simply can't match.",
    initials: "EC",
    color: "bg-[hsl(280,85%,55%)]",
  },
  {
    name: "Marcus Thompson",
    role: "CTO",
    company: "DataPulse",
    stars: 4,
    quote: "Exceptional technical depth. They built our AI analytics dashboard from scratch — it's now the backbone of our product.",
    initials: "MT",
    color: "bg-primary",
  },
  {
    name: "Lisa Andersen",
    role: "Head of Marketing",
    company: "BrightPath",
    stars: 5,
    quote: "Revora doesn't just build websites — they engineer AI-powered growth machines. Best investment we've made.",
    initials: "LA",
    color: "bg-accent",
  },
  {
    name: "David Kim",
    role: "Co-founder",
    company: "LaunchPad AI",
    stars: 5,
    quote: "Working with Revora felt like having a world-class AI engineering team in-house. Truly next-level execution.",
    initials: "DK",
    color: "bg-[hsl(280,85%,55%)]",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Real results from real partnerships — here's what leaders across industries say about working with Revora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.stars ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 italic leading-relaxed mb-6 text-sm md:text-base">
                "{t.quote}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
