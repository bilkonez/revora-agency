const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <div>
        <span className="font-heading font-bold text-foreground">Revora</span>
        <span className="ml-3">Built to scale, made to convert.</span>
      </div>
      <div className="flex gap-6">
        {["Services", "About", "Pricing", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-foreground transition-colors text-xs tracking-[0.1em] uppercase"
          >
            {l}
          </a>
        ))}
      </div>
      <span>&copy; 2025 Revora. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
