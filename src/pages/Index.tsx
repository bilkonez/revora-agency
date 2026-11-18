import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Services, Work, Process, About, FAQ } from "@/components/Sections";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <Services />
      <Work />
      <Process />
      <About />
      <FAQ />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
