import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, BookOpen, Church } from "lucide-react";

const Caminho = () => {
  return (
    <section id="caminho" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Nosso Caminho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa missão, visão, valores e o que acreditamos
          </p>
        </div>

        <Tabs defaultValue="missao" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="missao" className="text-sm md:text-base">
              Missão, Visão e Valores
            </TabsTrigger>
            <TabsTrigger value="credo" className="text-sm md:text-base">
              Nosso Credo
            </TabsTrigger>
            <TabsTrigger value="cultos" className="text-sm md:text-base">
              Cultos e Celebrações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="missao" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-primary/20">
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-2xl font-display">Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 font-body">
                    Pregar o Evangelho de Jesus Cristo, formar discípulos e promover transformação 
                    através do amor, da fé e da comunhão em família.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-accent/20">
                <CardHeader>
                  <Eye className="w-10 h-10 text-accent mb-3" />
                  <CardTitle className="text-2xl font-display">Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 font-body">
                    Ser uma igreja referência em amor, acolhimento e ensino bíblico, 
                    alcançando vidas e expandindo o Reino de Deus em nossa comunidade e além.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-primary/20">
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-2xl font-display">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-foreground/80 font-body space-y-2">
                    <li>• Amor e Acolhimento</li>
                    <li>• Fé e Oração</li>
                    <li>• Família e Pertencimento</li>
                    <li>• Ensino da Palavra</li>
                    <li>• Serviço ao Próximo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="credo" className="animate-fade-in">
            <Card className="shadow-medium border-primary/20">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-3xl font-display text-center">
                  Nosso Credo Apostólico
                </CardTitle>
                <CardDescription className="text-center text-base">
                  A base da nossa fé cristã
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="text-foreground/80 font-body space-y-4 text-center md:text-left">
                  <p className="text-base md:text-lg leading-relaxed">
                    Creio em Deus Pai Todo-Poderoso, Criador do Céu e da Terra.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Creio em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; 
                    nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos Céus, 
                    está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Creio no Espírito Santo, na Santa Igreja universal, na comunhão dos Santos, 
                    na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cultos" className="animate-fade-in">
            <Card className="shadow-medium border-accent/20">
              <CardHeader>
                <Church className="w-12 h-12 text-accent mb-4 mx-auto" />
                <CardTitle className="text-3xl font-display text-center">
                  Cultos e Celebrações
                </CardTitle>
                <CardDescription className="text-center text-base">
                  Participe dos nossos momentos de louvor e adoração
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <p className="text-foreground/80 font-body text-lg leading-relaxed mb-6">
                      Participe dos nossos cultos e celebrações semanais; momentos de louvor, oração e comunhão, 
                      para fortalecer sua fé e vivenciar a Palavra de Deus.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="font-display font-bold text-xl text-primary mb-2">
                        Culto de Domingo
                      </h4>
                      <p className="text-foreground/70 font-body">
                        Domingos às 10h e 18h<br/>
                        Louvor, pregação e Santa Ceia
                      </p>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="font-display font-bold text-xl text-primary mb-2">
                        Culto de Oração
                      </h4>
                      <p className="text-foreground/70 font-body">
                        Quartas-feiras às 19h30<br/>
                        Intercessão e busca espiritual
                      </p>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="font-display font-bold text-xl text-primary mb-2">
                        Escola Bíblica
                      </h4>
                      <p className="text-foreground/70 font-body">
                        Domingos às 9h<br/>
                        Estudo e ensino da Palavra
                      </p>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="font-display font-bold text-xl text-primary mb-2">
                        Culto de Jovens
                      </h4>
                      <p className="text-foreground/70 font-body">
                        Sextas-feiras às 20h<br/>
                        Louvor e comunhão
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Caminho;
