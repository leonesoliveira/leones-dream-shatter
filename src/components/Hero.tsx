import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "LEONES – O DESTRUIDOR DE SONHOS";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

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
          alt="Leones Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-6 tracking-tight">
          {typedText}
          <span className="inline-block w-1 h-12 md:h-16 bg-primary ml-2 animate-pulse"></span>
        </h1>

        <p className="text-lg md:text-2xl text-foreground/80 font-body mb-12 max-w-2xl mx-auto italic">
          Onde seus sonhos acabam, meu legado começa
        </p>

        <button
          onClick={() => scrollToSection("sobre")}
          className="group relative px-8 py-4 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent hover:scale-105 glow-red"
        >
          <span className="relative z-10">Conheça Minha História</span>
          <div className="absolute inset-0 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float"
      >
        <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
      </button>
    </section>
  );
};

export default Hero;
