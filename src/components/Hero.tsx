import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Achievement Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="text-primary bg-primary/10 border-primary/20 px-4 py-2 text-sm font-semibold animate-glow">
                ⭐ +5.000 atendimentos realizados!
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Encontre a Raiz do Seu{' '}
                <span className="text-primary">Bloqueio</span> e Descubra o{' '}
                <span className="text-primary">Caminho de Solução</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Treinamento Sistêmico + Sessão Individual para eliminar padrões repetitivos 
                e desbloquear sua vida em um único atendimento.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="shadow-glow">
                Quero o NFC Agora
              </Button>
              <Button variant="minimal" size="xl">
                Saiba Mais
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                São 9 anos de experiência e + de 5.000 atendimentos realizados em diversos países
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Professional team" 
                className="w-full h-auto rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;