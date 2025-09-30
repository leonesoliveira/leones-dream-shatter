import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um endereço de email válido.");
      return;
    }

    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ouvir você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Informações de Contato */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Endereço</h4>
                <p className="text-foreground/70 font-body">
                  Rua da Fé, 123 - Centro<br/>
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Telefone</h4>
                <p className="text-foreground/70 font-body">
                  (11) 98765-4321<br/>
                  (11) 3456-7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                <p className="text-foreground/70 font-body">
                  contato@familiacaminho.com.br
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-display font-semibold text-foreground mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:text-primary-foreground font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:text-primary-foreground font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                >
                  <span className="text-primary group-hover:text-primary-foreground font-bold">yt</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-6 shadow-soft hover:shadow-medium transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
