import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Igreja Família Caminho"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-6 tracking-tight animate-fade-in">
          Família Caminho
        </h1>

        <p className="text-xl md:text-3xl text-foreground/80 font-body mb-12 max-w-3xl mx-auto animate-slide-up">
          Uma família para pertencer, um caminho para viver
        </p>

        <button
          onClick={() => scrollToSection("caminho")}
          className="group relative px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent hover:scale-105 shadow-medium"
        >
          <span className="relative z-10">Conheça mais sobre nós</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("caminho")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
