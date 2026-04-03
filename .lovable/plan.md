

## Testimonials Section

### What
New `TestimonialsSection.tsx` component with 6 client testimonial cards featuring names, companies, roles, star ratings, and quotes in English. Placed between `PricingSection` and `ContactSection` in `Index.tsx`.

### Data
6 testimonials with varied industries:
1. Sarah Mitchell, CEO @ NovaTech Solutions — 5 stars
2. James Rodriguez, CMO @ GrowthLab Digital — 5 stars
3. Emily Chen, Founder @ Stackify — 5 stars
4. Marcus Thompson, CTO @ DataPulse — 4 stars
5. Lisa Andersen, Head of Marketing @ BrightPath — 5 stars
6. David Kim, Co-founder @ LaunchPad AI — 5 stars

### Design
- Section label: "TESTIMONIALS" in accent color, uppercase, tracked
- Heading: "What our clients say" with gradient text
- 3-column grid (desktop), 1-column (mobile)
- Cards: white bg, subtle border, rounded-lg, shadow on hover with slight translateY lift
- Each card: star rating (filled yellow stars), quote text in italic, client name bold, role + company in muted text
- Avatar: colored initials circle (using brand colors)
- Scroll reveal animation using existing `useScrollReveal` hook + staggered delays via CSS

### Files Changed
1. **Create** `src/components/TestimonialsSection.tsx` — full component
2. **Edit** `src/pages/Index.tsx` — import and place between Pricing and Contact

