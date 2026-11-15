import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RevoraLogo } from "@/components/ProductLogos";

const navLinks = [
  { label: "PRODUCTS", href: "#products" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "HOW WE WORK", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="Revora">
          <RevoraLogo light={!scrolled && !mobileOpen} />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-xs tracking-[0.15em] font-semibold transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" className="bg-primary text-primary-foreground hover:brightness-105 font-semibold" onClick={() => handleClick("#contact")}>
            Talk to Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border/50 px-6 pb-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left py-3 text-sm tracking-[0.1em] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" className="mt-2 w-full bg-primary text-primary-foreground font-semibold" onClick={() => handleClick("#contact")}>
            Talk to Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
