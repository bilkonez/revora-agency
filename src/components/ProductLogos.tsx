// Logos of Revora and its products.
// Coachboard and Nexa Express marks are copied from their own repos (balkan-bus-bridge, nexa-express);
// keep them in sync if those change.

type MarkProps = { size?: number; className?: string };

// Revora: a road in perspective with the centre line in signal amber.
export const RevoraMark = ({ size = 28, className }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#141a26" />
    <path d="M7 26L13.5 7M25 26L18.5 7" stroke="#f7f5f0" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M16 24.5v-3.6M16 17.6v-2.8M16 11.8v-2" stroke="#f5a524" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// Flotiva: an F drawn as two lanes, with a vehicle (amber dot) at the end of the top lane.
export const FlotivaMark = ({ size = 28, className }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#0e3a4f" />
    <path d="M10.5 23.5V9h8.5M10.5 16.2h7" fill="none" stroke="#f7f5f0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="23" cy="9" r="3.3" fill="#f5a524" />
  </svg>
);

// Coachboard: a small departure board, first row lit.
export const CoachboardMark = ({ size = 28, className }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" className={className} aria-hidden="true">
    <rect width="28" height="28" rx="7" fill="oklch(0.22 0.04 255)" />
    <circle cx="8" cy="9" r="2.2" fill="oklch(0.83 0.16 82)" />
    <rect x="12.5" y="7.6" width="9" height="2.8" rx="1.4" fill="oklch(0.83 0.16 82)" />
    <circle cx="8" cy="14" r="2.2" fill="oklch(0.99 0 0 / .55)" />
    <rect x="12.5" y="12.6" width="6" height="2.8" rx="1.4" fill="oklch(0.99 0 0 / .55)" />
    <circle cx="8" cy="19" r="2.2" fill="oklch(0.99 0 0 / .55)" />
    <rect x="12.5" y="17.6" width="7.5" height="2.8" rx="1.4" fill="oklch(0.99 0 0 / .55)" />
  </svg>
);

// Nexa Express: the N drawn as a delivery route, destination dot top-right.
export const NexaMark = ({ size = 28, className }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#1b1d22" />
    <path d="M9.5 23V9.5l13 13V9.5" fill="none" stroke="#fbfaf7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22.5" cy="9.5" r="3.5" fill="#ee6a2c" />
  </svg>
);

export const RevoraLogo = ({ light = false }: { light?: boolean }) => (
  <span className="inline-flex items-center gap-2.5">
    <RevoraMark />
    <span className={`font-heading text-xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>Revora</span>
  </span>
);
