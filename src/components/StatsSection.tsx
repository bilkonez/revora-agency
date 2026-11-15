import { Bus, Truck, Package, Car } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const segments = [
  { icon: Bus, title: "Coaches & buses", desc: "Charter, school and line transport, tours and excursions" },
  { icon: Truck, title: "Trucks", desc: "Domestic and international freight, FTL and LTL" },
  { icon: Package, title: "Couriers", desc: "Parcel pickup and delivery, many stops a day" },
  { icon: Car, title: "Vans & light fleets", desc: "Light cargo, service fleets and company vehicles" },
];

// Segments strip: who Revora builds for.
const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="px-6 py-16 border-b border-border/70">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-8">Built for</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 rounded-xl overflow-hidden border border-border/70">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-card p-6">
                <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
