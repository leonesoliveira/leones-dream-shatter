import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCaminhoOpen, setIsCaminhoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setIsCaminhoOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl md:text-3xl font-display font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            Família Caminho
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-all duration-300"
            >
              Início
            </button>
            
            {/* Caminho Dropdown */}
            <div className="relative group">
              <button
                className="text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-1"
              >
                Caminho
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => scrollToSection("caminho")}
                  className="block w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors first:rounded-t-lg"
                >
                  Missão, Visão e Valores
                </button>
                <button
                  onClick={() => scrollToSection("caminho")}
                  className="block w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                >
                  Nosso Credo Apostólico
                </button>
                <button
                  onClick={() => scrollToSection("caminho")}
                  className="block w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors last:rounded-b-lg"
                >
                  Cultos e Celebrações
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("ministerios")}
              className="text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-all duration-300"
            >
              Ministérios
            </button>
            <button
              onClick={() => scrollToSection("eventos")}
              className="text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-all duration-300"
            >
              Eventos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-all duration-300"
            >
              Fale Conosco
            </button>
            <button
              onClick={() => scrollToSection("doacoes")}
              className="px-4 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-accent transition-colors duration-300 shadow-soft"
            >
              Doações
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-colors"
            >
              Início
            </button>
            
            {/* Caminho Mobile */}
            <div>
              <button
                onClick={() => setIsCaminhoOpen(!isCaminhoOpen)}
                className="flex items-center justify-between w-full text-left text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-colors"
              >
                Caminho
                <ChevronDown size={16} className={`transition-transform duration-300 ${isCaminhoOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCaminhoOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button
                    onClick={() => scrollToSection("caminho")}
                    className="block w-full text-left text-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    Missão, Visão e Valores
                  </button>
                  <button
                    onClick={() => scrollToSection("caminho")}
                    className="block w-full text-left text-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    Nosso Credo Apostólico
                  </button>
                  <button
                    onClick={() => scrollToSection("caminho")}
                    className="block w-full text-left text-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    Cultos e Celebrações
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("ministerios")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-colors"
            >
              Ministérios
            </button>
            <button
              onClick={() => scrollToSection("eventos")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-colors"
            >
              Eventos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground/80 hover:text-primary font-body font-medium text-sm tracking-wide transition-colors"
            >
              Fale Conosco
            </button>
            <button
              onClick={() => scrollToSection("doacoes")}
              className="block w-full text-left text-primary hover:text-accent font-body font-semibold text-sm tracking-wide transition-colors"
            >
              Doações
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
