import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const FinalCTA = () => {
  const benefits = [
    'Acesso imediato à plataforma',
    'Suporte direto via WhatsApp',
    'Garantia incondicional de 7 dias',
    'Atendimento individual personalizado',
    '1 ano de acesso aos conteúdos'
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garanta Agora Seu{' '}
                <span className="text-primary">Atendimento Exclusivo</span> e{' '}
                <span className="text-primary">Comece Sua Transformação</span> Hoje
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Não deixe para amanhã a oportunidade de transformar sua vida. 
                Vagas limitadas para garantir a qualidade do atendimento.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full sm:w-auto shadow-glow">
                Começar Minha Transformação Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="minimal" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>

            {/* Urgency Message */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-foreground">Vagas Limitadas</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Para garantir a qualidade do atendimento, limitamos o número de vagas por mês. 
                  Garante já a sua!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Image/Mockup */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Success story" 
                className="w-full h-auto rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay card */}
              <Card className="absolute -bottom-6 -left-6 bg-background shadow-glow max-w-xs">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5.000+</div>
                    <div className="text-sm text-muted-foreground">Vidas Transformadas</div>
                  </div>
                </CardContent>
              </Card>
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

export default FinalCTA;