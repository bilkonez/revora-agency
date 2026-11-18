import { RevoraLogo } from "@/components/ProductLogos";

const Footer = () => (
  <footer className="bg-asphalt py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/55">
      <div className="text-center md:text-left">
        <RevoraLogo light />
        <p className="mt-2">Software built around how your business works.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {([["Services", "services"], ["Our work", "work"], ["Products", "products"], ["Contact", "contact"]] as const).map(([l, id]) => (
          <a
            key={l}
            href={`#${id}`}
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
