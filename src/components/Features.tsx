import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Target, HeadphonesIcon } from 'lucide-react';
import feature1 from '@/assets/feature-1.jpg';
import feature2 from '@/assets/feature-2.jpg';
import feature3 from '@/assets/feature-3.jpg';

const Features = () => {
  const mainFeatures = [
    'Trilha de Preparação – 20 dias de aulas e exercícios práticos (30 min/dia) para preparar você para o atendimento.',
    'Sessão Individual – Atendimento on-line de 1h20 com a Thalyta (para mulheres) ou Wellington (para homens).',
    'Diagnóstico da Causa Raiz – Identificação precisa do bloqueio ou padrão repetitivo que está travando sua vida.',
    'Aplicação do Método NFC – Técnicas sistêmicas exclusivas para liberação e resolução do bloqueio.',
    'Trilha Pós-Atendimento – Aulas e exercícios para manter o progresso e consolidar resultados.',
    'Materiais de Apoio – Ebook completo, box de exercícios sistêmicos e playlist exclusiva.',
    'Suporte Direto – Atendimento via WhatsApp para dúvidas e acompanhamento.',
    'Acesso Estendido – 1 ano de acesso à plataforma e aos conteúdos.'
  ];

  const secondaryFeatures = [
    {
      icon: Users,
      image: feature1,
      title: 'Preparação Completa',
      description: '20 dias de treinamento sistêmico com exercícios práticos para preparar você adequadamente para o atendimento individual.'
    },
    {
      icon: Target,
      image: feature2,
      title: 'Atendimento Individual',
      description: 'Sessão personalizada de 1h20 com especialistas experientes para identificar e resolver bloqueios específicos.'
    },
    {
      icon: HeadphonesIcon,
      image: feature3,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento pós-atendimento com materiais de apoio e suporte direto via WhatsApp durante 1 ano.'
    }
  ];

  return (
    <section className="py-24 bg-background" id="como-funciona">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Você Recebe no NFC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um programa completo que combina preparação, atendimento individual e acompanhamento para resultados duradouros.
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="mb-16">
          <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-primary mb-6">
                Programa Completo NFC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {mainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {secondaryFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-full">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;