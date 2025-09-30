import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Castelo das Sombras" },
  { src: gallery2, alt: "A Espada Lendária" },
  { src: gallery3, alt: "Trono da Escuridão" },
  { src: gallery4, alt: "Armadura do Conquistador" }
];

const Gallery = () => {
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
      id="galeria"
      ref={sectionRef}
      className="py-24 px-6 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Fragmentos do Legado
          </h2>
          <p className="text-xl text-foreground/70 font-body max-w-2xl mx-auto">
            Testemunhos visuais da jornada pela escuridão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Red Glow Effect on Hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-500 rounded-lg glow-red"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-display font-bold text-foreground">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
