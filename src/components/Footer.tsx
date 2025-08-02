import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Honre Instituto</h3>
            <p className="text-background/80">© 2025 Honre Instituto. Todos os direitos reservados.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-background/80 hover:text-background transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-background transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-background transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-background transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Desenvolvido com ♥ para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;