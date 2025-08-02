import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      avatar: avatar1,
      name: 'Heloíza Paula',
      location: 'Londrina - PR',
      text: 'Obrigada Thalyta por todo suporte e pelo trabalho lindo que você faz! Me ajudou muito a gerir melhor minhas emoções, estar no meu devido lugar, no meu casamento e nas minhas decisões. Hoje me sinto em paz, sem aquele turbilhão na mente. Foi incrível meu processo!'
    },
    {
      avatar: avatar2,
      name: 'Rosana Pereira',
      location: 'Maringá - PR',
      text: 'Ontem foi minha primeira aula de dança. Fiquei tão feliz que nem consegui dormir. Desde criança tinha vergonha e medo de dançar, mas depois do processo com vocês, consegui superar esse bloqueio. Foi libertador.'
    },
    {
      avatar: avatar3,
      name: 'Hadassa de Morais',
      location: 'Mandaguaçu - PR',
      text: 'Antes de conhecer a Thalyta e o Wellington, eu estava perdida e dependente de uma situação que me fazia mal. A cada sessão, fui ganhando força, clareza e maturidade. Hoje, minha vida, meu relacionamento e meu trabalho estão muito melhores.'
    },
    {
      avatar: avatar1,
      name: 'Néia',
      location: 'Maringá - PR',
      text: 'Foram tantos pequenos detalhes que se encaixaram. Ao voltar para o meu lugar no feminino, encontrei um parceiro que está no lugar de homem, que me dá segurança. Resolvi questões que carregava há 10 anos e estabilizei minha vida financeira. Gratidão pelo processo!'
    },
    {
      avatar: avatar2,
      name: 'Gabriela Tesolin',
      location: 'Maringá - PR',
      text: 'Vale muito a pena! Quem diria que eu estaria vivendo esse momento? Quis compartilhar com vocês porque o processo me trouxe resultados que eu nem imaginava.'
    }
  ];

  // Auto-slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-background" id="depoimentos">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformações reais de pessoas que decidiram investir em sua evolução pessoal.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonials[currentSlide].avatar} 
                    alt={testimonials[currentSlide].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentSlide].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentSlide].location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;