import Hero from "@/components/views/home/Hero";
import AboutUs from "@/components/views/home/AboutUs";
import Services from "@/components/views/home/Services";
import Clients from "@/components/views/home/Clients";
import Contact from "@/components/views/home/Contact";
import ButtonWhatsApp from "@/components/ui/ButtonWhatsApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Clients />
      <Contact />

      <ButtonWhatsApp />
    </>
  );
}
