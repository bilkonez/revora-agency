import { Button } from "@/components/ui/button";
import { Bus, Truck, Package, Car } from "lucide-react";

// Illustrative fleet board: shows the kind of view Revora software gives an operator.
// Example rows only, not live data.
const boardRows = [
  { icon: Bus, unit: "Coach 12", route: "Sarajevo → Zagreb", status: "On route", eta: "14:20", tone: "ok" },
  { icon: Truck, unit: "Truck 07", route: "Mostar → Graz", status: "Loading", eta: "16:05", tone: "wait" },
  { icon: Package, unit: "Courier 3", route: "City centre · 12 stops", status: "On route", eta: "17:30", tone: "ok" },
  { icon: Car, unit: "Van 04", route: "Tuzla → Beograd", status: "Rest due", eta: "45 min", tone: "warn" },
];

const toneClass: Record<string, string> = {
  ok: "bg-emerald-400/15 text-emerald-300",
  wait: "bg-sky-400/15 text-sky-300",
  warn: "bg-primary/20 text-primary",
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="on-dark relative min-h-screen flex items-center overflow-hidden bg-asphalt text-white">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      {/* Route lines in the background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-40 720 C 260 640, 380 420, 640 400 S 1040 520, 1480 300" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="6 10" />
        <path d="M-40 260 C 300 300, 520 180, 760 240 S 1180 120, 1480 160" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="6 10" />
        <path d="M200 960 C 320 700, 520 640, 760 600 S 1160 680, 1300 960" fill="none" stroke="hsl(38 95% 52%)" strokeWidth="2" strokeDasharray="6 10" />
        {[[640, 400], [760, 240], [760, 600], [1040, 470]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="hsl(38 95% 52%)" />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center w-full">
        <div className="min-w-0">
          <p className="opacity-0 animate-fade-up inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-white/60" style={{ animationDelay: "100ms" }}>
            <span className="w-2 h-2 rounded-full bg-primary" /> AI software for transport
          </p>
          <h1
            className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-heading font-bold leading-[1.04] tracking-[-0.01em] opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Software for
            <br />
            <span className="gradient-text">everything on wheels.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Revora builds AI software for coach and bus operators, trucking companies, couriers and every
            business that runs vehicles. Less paperwork, no missed deadlines, clear costs on every trip.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Button variant="hero" size="lg" onClick={() => scrollTo("#products")}>
              Explore Our Products
            </Button>
            <Button
              size="lg"
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 text-base font-semibold"
              onClick={() => scrollTo("#contact")}
            >
              Talk to Us
            </Button>
          </div>
        </div>

        {/* Fleet board illustration */}
        <div className="min-w-0 opacity-0 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="rounded-xl border border-white/10 bg-[hsl(var(--asphalt-2))]/90 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span className="font-condensed text-sm font-semibold tracking-[0.12em] uppercase text-white/80">Fleet today</span>
              <span className="flex items-center gap-2 text-[11px] text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> live
              </span>
            </div>
            <ul className="divide-y divide-white/5">
              {boardRows.map((r) => {
                const Icon = r.icon;
                return (
                  <li key={r.unit} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5">
                    <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-white/80" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-condensed text-base font-semibold tracking-wide text-white">{r.unit}</p>
                      <p className="text-xs text-white/50 truncate">{r.route}</p>
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${toneClass[r.tone]}`}>{r.status}</span>
                    <span className="font-condensed text-base font-semibold text-white/80 min-w-12 sm:min-w-14 text-right tabular-nums whitespace-nowrap">{r.eta}</span>
                  </li>
                );
              })}
            </ul>
            <div className="px-4 sm:px-5 py-3 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-1 items-center justify-between text-xs text-white/50">
              <span>2 vehicle deadlines this week</span>
              <span className="text-primary font-semibold">Service: Coach 12 · 6 days</span>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-white/35 text-right">Illustration of the Flotiva fleet view</p>
        </div>
      </div>

      {/* Road with moving lane markings */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[hsl(220_26%_7%)] border-t border-white/5">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 lane-dashes" />
      </div>
    </section>
  );
};

export default HeroSection;
