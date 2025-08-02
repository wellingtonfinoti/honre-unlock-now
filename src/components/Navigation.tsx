import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Honre Instituto</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre o NFC
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              Perguntas Frequentes
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Quero Minha Vaga
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#sobre" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Sobre o NFC
              </a>
              <a href="#como-funciona" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#beneficios" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Perguntas Frequentes
              </a>
              <div className="px-3 py-2">
                <Button variant="hero" size="lg" className="w-full">
                  Quero Minha Vaga
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;