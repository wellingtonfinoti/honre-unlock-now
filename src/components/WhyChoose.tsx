import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, Lock, MessageSquare, CheckCircle2 } from 'lucide-react';

const WhyChoose = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Método Exclusivo NFC',
      description: 'Combina treinamento sistêmico e atendimento individual para resultados rápidos e duradouros.'
    },
    {
      icon: Users,
      title: 'Mais de 5.000 Atendimentos',
      description: 'Experiência prática com pessoas de diversos países e realidades diferentes.'
    },
    {
      icon: CheckCircle2,
      title: 'Benefício em Dobro',
      description: 'Você recebe preparo antes e acompanhamento depois do atendimento.'
    },
    {
      icon: Lock,
      title: 'Ambiente Seguro e Personalizado',
      description: 'Atendimento com Thalyta para mulheres e Wellington para homens.'
    },
    {
      icon: MessageSquare,
      title: 'Suporte Direto no WhatsApp',
      description: 'Equipe disponível para tirar dúvidas e apoiar seu progresso.'
    },
    {
      icon: Shield,
      title: 'Garantia Incondicional de 7 Dias',
      description: 'Você testa sem risco: ou avança ou recebe seu investimento de volta.'
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="beneficios">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher o <span className="text-primary">Honre Instituto</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais competitivos que fazem do NFC a melhor escolha para sua transformação pessoal.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-background border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Pronto para Transformar Sua Vida?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já descobriram o caminho para uma vida mais plena e realizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;