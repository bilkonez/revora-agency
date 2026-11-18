import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RevoraMark } from "@/components/ProductLogos";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="wrap flex h-[4.5rem] items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Revora, back to top">
          <RevoraMark size={30} />
          <span className="font-display text-[1.375rem] font-extrabold tracking-[-0.03em]">Revora</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] font-medium text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary h-10 px-5 text-sm">
            Start a project
          </a>
        </div>

        <button
          className="md:hidden -mr-2 p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden wrap pb-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium border-b border-border">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">
            Start a project
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
