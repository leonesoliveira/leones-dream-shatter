import { Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Doacoes = () => {
  const areas = [
    {
      icon: Heart,
      title: "Projetos Sociais",
      description: "Apoie iniciativas que levam amor e esperança às comunidades carentes através de ações concretas."
    },
    {
      icon: Users,
      title: "Ajuda Comunitária",
      description: "Contribua com programas de assistência a famílias em situação de vulnerabilidade social."
    },
    {
      icon: Sparkles,
      title: "Saiba Como Colaborar",
      description: "Conheça todas as formas de contribuir e fazer parte dessa corrente de solidariedade e amor."
    }
  ];

  return (
    <section id="doacoes" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Doações e Ações Sociais
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
            Contribua com nossas ações sociais, ajudando a levar amor e apoio a quem mais precisa. 
            Transforme vidas por meio de gestos de solidariedade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="text-center hover:scale-105 hover:shadow-medium transition-all duration-300 border-border hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-display text-primary">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-6 shadow-medium hover:scale-105 transition-all duration-300"
          >
            Contribua Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Sua doação faz a diferença na vida de muitas pessoas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Doacoes;
