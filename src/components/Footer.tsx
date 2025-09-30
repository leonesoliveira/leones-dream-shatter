import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-3xl font-display font-bold text-primary mb-2">
              LEONES
            </h3>
            <p className="text-foreground/60 font-body italic text-sm">
              O Destruidor de Sonhos
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative p-3 bg-card border-2 border-border rounded-lg hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border w-full">
            <p className="text-foreground/60 font-body text-sm">
              © 2025 Leones – O Destruidor de Sonhos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
