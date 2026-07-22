import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Deroulement from "@/components/Deroulement";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Deroulement />
        <About />
        <Pricing />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
