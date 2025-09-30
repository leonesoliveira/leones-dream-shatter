import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Eventos = () => {
  const eventos = [
    {
      title: "Conferência de Fé e Vida",
      date: "15 de Março, 2025",
      time: "19h às 22h",
      location: "Templo Principal",
      description: "Três noites de pregação poderosa, louvor e ministração. Venha renovar sua fé e experimentar a presença de Deus."
    },
    {
      title: "Acampamento de Jovens",
      date: "22-24 de Março, 2025",
      time: "Sexta a Domingo",
      location: "Chácara Família Caminho",
      description: "Fim de semana de comunhão, aventuras e crescimento espiritual para os jovens da igreja."
    },
    {
      title: "Ação Social Comunitária",
      date: "5 de Abril, 2025",
      time: "9h às 14h",
      location: "Bairro Nova Esperança",
      description: "Distribuição de alimentos, roupas e atendimento médico gratuito para a comunidade."
    },
    {
      title: "Celebração de Páscoa",
      date: "20 de Abril, 2025",
      time: "10h e 18h",
      location: "Templo Principal",
      description: "Culto especial celebrando a ressurreição de Jesus Cristo, com Santa Ceia e apresentações."
    }
  ];

  return (
    <section id="eventos" className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe dos nossos eventos e celebrações especiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  {evento.title}
                </CardTitle>
                <CardDescription className="space-y-2 text-base mt-3">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="w-4 h-4" />
                    <span>{evento.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock className="w-4 h-4" />
                    <span>{evento.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="w-4 h-4" />
                    <span>{evento.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-body mb-4">
                  {evento.description}
                </p>
                <Button className="w-full bg-primary hover:bg-accent transition-colors">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;
