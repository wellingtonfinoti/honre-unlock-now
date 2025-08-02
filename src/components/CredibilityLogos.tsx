const CredibilityLogos = () => {
  const partners = [
    { name: 'Partner 1', logo: '🏢' },
    { name: 'Partner 2', logo: '🎯' },
    { name: 'Partner 3', logo: '⭐' },
    { name: 'Partner 4', logo: '🔥' },
    { name: 'Partner 5', logo: '💎' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Parceiros que confiam em nosso trabalho
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-2xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <span className="text-3xl">{partner.logo}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos;