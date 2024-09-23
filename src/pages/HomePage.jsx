import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Feautres from "../components/Feautres";
import Footer from "../components/Footer";
import Hero from "./../components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Cta />
      <Feautres />
      <Contact />
      <Footer />
    </main>
  );
}
