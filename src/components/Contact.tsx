import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    // Success message
    toast.success("Mensagem enviada com sucesso! Leones entrará em contato em breve.");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-foreground/70 font-body">
            Ouse confrontar a verdade. Envie sua mensagem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-body font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground font-body"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-body font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground font-body"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-body font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
              Mensagem
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground font-body resize-none"
              placeholder="Escreva sua mensagem..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 glow-red"
            >
              <span>Enviar Mensagem</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
