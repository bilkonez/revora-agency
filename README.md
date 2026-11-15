# Revora Agency Build

Build a professional, minimalist agency landing page for Revora — a digital agency at revora.agency.

BRAND IDENTITY

Name: Revora
Tagline: Built to scale, made to convert.
Positioning: A modern digital agency helping businesses grow through web development, SaaS products, and digital monetization.
Tone: Sharp, confident, no-fluff. Like a premium tech company, not a creative studio.


COLOR SCHEME & VISUAL STYLE

Background: Deep dark navy or near-black (#0a0a0f or #080810)
Primary accent: Electric blue or cold cyan (#0066ff or #00c2ff)
Secondary accent: Pure white for text
Subtle detail color: Muted grey for secondary text (#8890a4)
Style: Dark theme, ultra-clean, sharp edges, no rounded corners on major elements, thin 1px borders with low opacity for cards and sections
Texture: Subtle grid or dot pattern overlay on hero background, very low opacity (5-8%)
No gradients that look cheap — if gradients, use linear, dark-to-darker with a hint of accent color


TYPOGRAPHY

Heading font: Syne or Space Grotesk — bold, geometric, modern (import from Google Fonts)
Body font: Inter or DM Sans — clean and readable
Heading size: Large and commanding — hero H1 should be 72-80px desktop
Letter spacing: Slightly tight on headings (-0.02em), normal on body
All caps labels: Use for section labels and nav items, small size, tracked out (+0.15em)


PAGE STRUCTURE
1. NAVIGATION

Full-width, sticky on scroll, transparent initially then dark on scroll
Left: Revora logo (text-based, white, bold, clean — no icon needed)
Right: nav links — Services, About, Work, Contact — all caps, small
Far right: CTA button — "Get a Quote" — outlined style, accent color border, white text
Thin bottom border appears on scroll

2. HERO SECTION

Full viewport height
Large H1: "Built to scale,\nMade to convert." — split across two lines, massive
Below H1: subtitle paragraph — "Revora is a digital agency specializing in web development, SaaS products, and monetization systems that generate real revenue."
Two CTA buttons side by side:

Primary: "Start a Project" — solid accent blue background
Secondary: "See Our Services" — outlined, white border


Below buttons: small trust line — "Web Development · SaaS Products · Digital Monetization"
Hero has a subtle animated background — very slow moving gradient orb or particle mesh in deep blue, barely visible

3. SERVICES SECTION

Section label: "WHAT WE DO" in small caps, accent color
Heading: "Three ways we grow your business"
Three service cards in a row, dark card background slightly lighter than page (#0f0f1a), 1px border, hover state lifts the card slightly with a glow

Card 1 — Web Development

Icon: minimal line icon (code brackets or similar)
Title: "Web Development"
Description: "From landing pages to full-scale web applications. We build fast, conversion-optimized websites that work."
Bottom link: "Learn more →"

Card 2 — SaaS Products

Icon: minimal line icon (layers or cube)
Title: "SaaS Products"
Description: "We design and develop software products from concept to launch. Scalable, modern, and built for growth."
Bottom link: "Learn more →"

Card 3 — Digital Monetization

Icon: minimal line icon (chart or lightning bolt)
Title: "Digital Monetization"
Description: "Affiliate systems, lead generation platforms, and traffic monetization strategies that turn audiences into revenue."
Bottom link: "Learn more →"

4. WHY REVORA SECTION

Two-column layout: left is heading + paragraph, right is a list of bullet points or stats
Heading: "We don't just build — we build for results."
Paragraph: "Most agencies deliver a website and walk away. Revora builds digital systems designed to generate leads, retain users, and scale revenue from day one."
Right side: 4 short feature points with a small accent icon/dash before each:

Fast delivery — MVPs and landing pages in days, not months
Revenue-first design — every decision is made with conversion in mind
Full-stack execution — design, development, and strategy under one roof
Transparent pricing — no surprises, no hidden costs



5. PROCESS SECTION

Section label: "HOW WE WORK"
Heading: "Simple process. Serious results."
Four numbered steps in a horizontal row (or 2x2 grid on mobile):

Discovery — We learn your goals, audience, and competition.
Strategy — We map out the architecture, stack, and monetization approach.
Build — Rapid development with weekly updates and full transparency.
Launch & Scale — We deploy, monitor, and optimize for growth.


Numbers should be large, accent colored, almost decorative

6. PRICING SECTION

Section label: "PRICING"
Heading: "Straightforward pricing."
Three pricing cards in a row. Middle card is highlighted (recommended):

Starter — €499

Landing page or simple website
Up to 5 sections
Mobile responsive
Contact form integration
1 revision round
CTA: "Get Started"

Business — €999 (MOST POPULAR badge)

Full website up to 10 pages
CMS integration
SEO foundation
Analytics setup
3 revision rounds
CTA: "Get Started"

Premium — €1,999+

SaaS MVP or complex web app
Custom functionality
Monetization integration
Ongoing support available
Fully custom scope
CTA: "Let's Talk"
Below pricing cards: small note — "Need something ongoing? Our monthly retainer starts at €79/month."

7. CONTACT / CTA SECTION

Full-width dark section, slightly different background tone
Large centered heading: "Ready to build something real?"
Subtext: "Tell us about your project and we'll get back to you within 24 hours."
Simple contact form: Name, Email, Project type (dropdown: Web Development / SaaS / Monetization / Other), Message
Submit button: "Send Message" — solid accent blue
Below form: email address — hello@revora.agency

8. FOOTER

Dark, minimal
Left: Revora logo + tagline in small text
Center: nav links repeated
Right: "© 2025 Revora. All rights reserved."
Very thin top border


INTERACTIONS & ANIMATIONS

Page load: staggered fade-in on hero elements (logo → H1 → subtitle → buttons), each with 150ms delay
Scroll reveal: sections fade up as they enter viewport (transform: translateY(20px) → 0, opacity 0 → 1)
Hover on service cards: slight translateY(-4px) + subtle blue glow shadow
Hover on CTA buttons: background lightens slightly, smooth transition 200ms
Nav: smooth background transition on scroll
Cursor: default, no custom cursor needed


TECHNICAL REQUIREMENTS

Single HTML file with embedded CSS and JS (no external frameworks except Google Fonts)
Fully responsive — mobile, tablet, desktop
Smooth scroll on nav links
All sections have IDs for anchor navigation
Performance-optimized — no heavy libraries
Clean semantic HTML structure


WHAT TO AVOID

No purple gradients
No stock photography or placeholder images
No cartoon illustrations
No rounded pill buttons (sharp or slightly rounded max 4px)
No white background sections
No generic "lorem ipsum" — use the real copy provided above
No emoji in UI

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://revora-build-master.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e05c2a7f-5a0a-4625-8114-0b7ff37c063a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
