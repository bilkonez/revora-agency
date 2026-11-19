import { RevoraMark } from "@/components/ProductLogos";

const Footer = () => (
  <footer className="bg-foreground text-white/60 border-t border-white/10">
    <div className="wrap py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm">
      <div className="flex items-center gap-3">
        <RevoraMark size={26} />
        <span className="font-display text-lg font-extrabold text-white tracking-[-0.03em]">Revora</span>
        <span className="hidden md:inline">AI development, digital solutions, web domains and hosting</span>
      </div>
      <span>&copy; {new Date().getFullYear()} Revora</span>
    </div>
  </footer>
);

export default Footer;
