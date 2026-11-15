import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, suffix: "", label: "Products for transport" },
  { value: 4, suffix: "", label: "Segments: coaches, trucks, couriers, vans" },
  { value: 100, suffix: "%", label: "Focused on transport" },
];

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

const StatItem = ({ value, suffix, label, inView, prefix }: { value: number; suffix: string; label: string; inView: boolean; prefix?: string }) => {
  const count = useCountUp(value, inView);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-heading font-bold gradient-text">
        {prefix}{count}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground tracking-wide">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
