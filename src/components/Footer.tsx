const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <div className="text-center md:text-left">
        <span className="font-heading font-bold text-foreground">Revora</span>
        <span className="ml-3">AI software for everything on wheels.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["Products", "Services", "About", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-foreground transition-colors text-xs tracking-[0.1em] uppercase"
          >
            {l}
          </a>
        ))}
      </div>
      <span className="text-center">&copy; {new Date().getFullYear()} Revora. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
