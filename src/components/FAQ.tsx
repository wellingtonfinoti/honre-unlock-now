import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Como funciona a garantia?',
      answer: 'Você tem 7 dias após a compra para testar. Se não for para você, devolvemos 100% do valor.'
    },
    {
      question: 'O atendimento é presencial ou online?',
      answer: 'O NFC é 100% online, com sessões ao vivo e acesso à plataforma de qualquer lugar do mundo.'
    },
    {
      question: 'Quem vai me atender?',
      answer: 'Mulheres são atendidas pela Thalyta e homens pelo Wellington, garantindo um ambiente seguro e direcionado.'
    },
    {
      question: 'Quanto tempo dura o atendimento individual?',
      answer: 'A sessão tem duração média de 1h20, realizada em data e horário combinados.'
    },
    {
      question: 'Preciso de conhecimento prévio?',
      answer: 'O NFC foi criado para qualquer pessoa, mesmo sem experiência anterior com constelação sistêmica.'
    },
    {
      question: 'Em quanto tempo vejo resultados?',
      answer: 'Muitos clientes relatam mudanças já no primeiro contato e continuam evoluindo com as trilhas de acompanhamento.'
    },
    {
      question: 'Por quanto tempo terei acesso ao conteúdo?',
      answer: 'Você terá 1 ano de acesso à plataforma, materiais, bônus e suporte.'
    },
    {
      question: 'Posso parcelar o valor?',
      answer: 'Sim. Você pode pagar em até 12x no cartão ou à vista com desconto.'
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="faq">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre o programa NFC.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;