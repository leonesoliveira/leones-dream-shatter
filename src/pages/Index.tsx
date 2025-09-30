import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Caminho from "@/components/Caminho";
import Ministerios from "@/components/Ministerios";
import Eventos from "@/components/Eventos";
import Doacoes from "@/components/Doacoes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Caminho />
      <Ministerios />
      <Eventos />
      <Doacoes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
