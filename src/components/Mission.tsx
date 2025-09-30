import { useEffect, useRef, useState } from "react";
import { Flame, Crown, Sword, Target } from "lucide-react";

const missions = [
  {
    icon: Flame,
    title: "Poder",
    description: "A força absoluta que quebra correntes e destrói limitações impostas pelos fracos."
  },
  {
    icon: Crown,
    title: "Domínio",
    description: "Controle total sobre o destino, sem se curvar a ilusões ou falsas promessas."
  },
  {
    icon: Sword,
    title: "Coragem",
    description: "A bravura de enfrentar a verdade nua e crua, mesmo quando ela dói profundamente."
  },
  {
    icon: Target,
    title: "Impacto",
    description: "Deixar uma marca indelével no mundo, moldando realidades através da ação decisiva."
  }
];

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="missao"
      ref={sectionRef}
      className="py-24 px-6 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Pilares do Legado
          </h2>
          <p className="text-xl text-foreground/70 font-body max-w-2xl mx-auto">
            Os princípios inabaláveis que definem a essência de Leones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <div
                key={mission.title}
                className={`group relative bg-background border-2 border-border rounded-lg p-8 hover:border-primary transition-all duration-500 hover:scale-105 hover:glow-red ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {mission.title}
                  </h3>
                  
                  <p className="text-foreground/70 font-body leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
