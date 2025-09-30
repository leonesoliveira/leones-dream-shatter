import { Users, Mic, Megaphone, HandHeart, Sparkles, Music, BookOpen, Drama } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Ministerios = () => {
  const ministerios = [
    {
      icon: Users,
      title: "Liderança",
      description: "Conduzindo a igreja com sabedoria, amor e dedicação ao Reino de Deus."
    },
    {
      icon: Mic,
      title: "Pastoral",
      description: "Cuidado espiritual, aconselhamento e pastoreio da comunidade."
    },
    {
      icon: Megaphone,
      title: "Comunicação e Mídias",
      description: "Transmitindo a mensagem através de canais modernos e eficazes."
    },
    {
      icon: HandHeart,
      title: "Acolhimento",
      description: "Recebendo cada pessoa com amor, carinho e hospitalidade."
    },
    {
      icon: Sparkles,
      title: "Oração",
      description: "Intercessão contínua pela igreja, família e comunidade."
    },
    {
      icon: Music,
      title: "Liturgia",
      description: "Louvor e adoração que elevam nossa conexão com Deus."
    },
    {
      icon: BookOpen,
      title: "Ensino Bíblico",
      description: "Formando discípulos através do estudo profundo da Palavra."
    },
    {
      icon: Drama,
      title: "Teatro e Artes",
      description: "Expressando a fé através da criatividade e das artes."
    }
  ];

  return (
    <section id="ministerios" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Nossos Ministérios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Seja um Voluntário – Nossa casa oferece ministérios em diversas áreas. 
            Exercite seu chamado, aqui é seu lugar, uma família para pertencer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministerios.map((ministerio, index) => {
            const Icon = ministerio.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-105 hover:shadow-medium transition-all duration-300 cursor-pointer border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                    {ministerio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-foreground/70">
                    {ministerio.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ministerios;
