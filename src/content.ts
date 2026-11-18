// Site copy and project data, kept in one place so sections stay consistent.

export const img = (name: string) => `${import.meta.env.BASE_URL}portfolio/${name}`;

export type Project = {
  id: string;
  name: string;
  audience: string; // shown in the hero headline: "We build software for ___"
  tab: string; // short label for the hero switcher
  caption: string;
  summary: string;
  client: string;
  built: string;
  status: string;
  main: { src: string; alt: string };
  second: { src: string; alt: string };
  note?: string;
};

export const projects: Project[] = [
  {
    id: "tms",
    name: "Transport management system",
    audience: "bus companies",
    tab: "Bus company",
    caption: "Transport management system for a coach company, in daily use",
    summary:
      "The system that runs a coach company's office every day: dispatch calendar, trips and travel orders, maintenance and fuel, quotes, invoices and contracts, with alerts before any deadline expires.",
    client: "Coach and bus operator",
    built: "Dispatch, finance, maintenance, contracts",
    status: "In daily use",
    main: { src: img("tms-dashboard.webp"), alt: "TMS dashboard with today's trips, revenue, costs and deadline alerts" },
    second: { src: img("tms-kalendar.webp"), alt: "TMS dispatch calendar with trips per day, vehicle and driver" },
    note: "Shown with demo data. The client's real data stays private.",
  },
  {
    id: "kolina",
    name: "NK Kolina",
    audience: "football clubs",
    tab: "Football club",
    caption: "NK Kolina website, where results and the table update on their own",
    summary:
      "Website for a local football club. League table, results, fixtures and top scorers sync from the official federation data, so nobody at the club has to type in a score.",
    client: "Football club",
    built: "Website with automatic results",
    status: "Live",
    main: { src: img("kolina-home.webp"), alt: "NK Kolina website home page with the next match card" },
    second: { src: img("kolina-results.webp"), alt: "NK Kolina league table, top scorers and match results" },
  },
  {
    id: "nexa",
    name: "Nexa Express",
    audience: "courier services",
    tab: "Courier service",
    caption: "Nexa Express, one order and one tracking number for any courier",
    summary:
      "One place to send a parcel with any courier. The sender enters the shipment once, Nexa passes the pickup to a courier partner, and the parcel is tracked with one number.",
    client: "Courier platform",
    built: "Ordering, partner routing, tracking",
    status: "Built",
    main: { src: img("nexa-home.webp"), alt: "Nexa Express home page with a parcel tracking timeline" },
    second: { src: img("nexa-posalji.webp"), alt: "Nexa Express order form, step one: sender details" },
  },
  {
    id: "coachboard",
    name: "Coachboard",
    audience: "travel organisers",
    tab: "Travel organiser",
    caption: "Coachboard, where organisers get offers from verified coach operators",
    summary:
      "Organisers post a coach trip once, operators near the route send their price, and the organiser compares offers side by side. In English, Bosnian and German.",
    client: "Charter coach marketplace",
    built: "Two portals, offers, VAT checks",
    status: "Built",
    main: { src: img("coachboard-home.webp"), alt: "Coachboard home page with a trip request form and a tour board" },
    second: { src: img("coachboard-how.webp"), alt: "Coachboard screen comparing offers from three operators" },
  },
];

export const services = [
  {
    title: "Software development",
    body: "Web apps and business systems built around how your team works: orders, scheduling, quotes and invoices, stock, records and dashboards.",
  },
  {
    title: "Websites",
    body: "Fast, modern websites for companies, clubs and organisations, with content that updates itself where it can, such as results, offers or timetables.",
  },
  {
    title: "AI and automation",
    body: "AI that takes over repetitive work: reading invoices, receipts and bank statements, sorting email, drafting documents and keeping data in sync.",
  },
  {
    title: "Online shops",
    body: "Webshops with product catalogues, order handling and delivery options, connected to your suppliers and stock where it makes sense.",
  },
  {
    title: "Integrations",
    body: "We connect the tools you already use, so data moves between your website, apps, accounting and suppliers without copying by hand.",
  },
  {
    title: "Web domains and hosting",
    body: "We register your domain and set up hosting, business email and SSL, then keep everything updated, backed up and running on a monthly plan.",
  },
];

export const steps = [
  { title: "Listen", body: "We learn how your business works today and what slows you down." },
  { title: "Plan and quote", body: "You get a written plan of what we will build and a fixed price." },
  { title: "Build", body: "We build in short steps and show you working versions along the way." },
  { title: "Launch and support", body: "We launch, train your team, and stay on to host and improve it." },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Software development, web apps, websites, online shops, integrations, AI automation, web domains and hosting, for companies in any industry. If you are not sure something can be built, ask us.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on what you need. After a first call we send a written plan and a fixed price, so you know the cost before any work starts.",
  },
  {
    q: "How long does it take?",
    a: "A website usually takes one to three weeks, a business app a few weeks to a couple of months. You see working versions along the way, not only at the end.",
  },
  {
    q: "What happens after launch?",
    a: "We look after your domain and hosting and maintain the software on a monthly plan: updates, fixes, backups and small improvements.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Usually yes. We connect to existing systems through their APIs or exports, so you keep what works and we build only what is missing.",
  },
  {
    q: "Do you work with clients outside Bosnia and Herzegovina?",
    a: "Yes. We work remotely in English and Bosnian, Croatian or Serbian, with clients across the region and the EU.",
  },
];
