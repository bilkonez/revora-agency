import { RevoraLogo } from "@/components/ProductLogos";

const Footer = () => (
  <footer className="bg-asphalt py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/55">
      <div className="text-center md:text-left">
        <RevoraLogo light />
        <p className="mt-2">AI software for everything on wheels.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["Products", "Services", "About", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-white transition-colors text-xs tracking-[0.1em] uppercase"
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
