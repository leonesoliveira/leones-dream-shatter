import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-portrait.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative group">
              <img
                src={aboutImage}
                alt="Leones Portrait"
                className="rounded-lg shadow-2xl w-full h-auto object-cover glow-red-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              A Lenda de Leones
            </h2>
            <h3 className="text-2xl font-display text-accent italic">
              O Destruidor de Sonhos
            </h3>

            <div className="space-y-4 text-foreground/80 font-body leading-relaxed">
              <p>
                Em terras onde a esperança floresce, surge uma sombra que a consome. 
                Leones não é apenas um nome — é uma profecia, um presságio de mudança inevitável.
              </p>
              <p>
                Forjado nas chamas da adversidade e temperado pela dura realidade, 
                Leones transcendeu as ilusões que prendem os fracos. Onde outros veem 
                sonhos impossíveis, ele vê apenas fumaça destinada a se dissipar.
              </p>
              <p className="text-primary font-semibold">
                "Seus sonhos são belos, mas a realidade é absoluta. 
                Eu sou o espelho que reflete a verdade implacável."
              </p>
              <p>
                Não tema Leones. Respeite-o. Pois onde ele passa, apenas os fortes 
                permanecem de pé, libertos das correntes de falsas esperanças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
