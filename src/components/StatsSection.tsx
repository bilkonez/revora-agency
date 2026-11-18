import { Truck, UtensilsCrossed, ShoppingBag, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const segments = [
  { icon: Truck, title: "Transport & logistics", desc: "Dispatch, fleet records, quotes, invoices and contracts" },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Restaurants, cafés and hotels: orders, bookings and stock" },
  { icon: ShoppingBag, title: "Retail & e-commerce", desc: "Online shops, product catalogues and order handling" },
  { icon: Users, title: "Clubs & services", desc: "Sports clubs, associations, offices and service companies" },
];

// Industries strip: examples of who Revora builds for.
const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="px-6 py-16 border-b border-border/70">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className="section-label mb-8">Who we build for</p>
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
