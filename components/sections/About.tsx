export default function About() {
  const stats = [
    { value: '100+', label: 'Projets réalisés' },
    { value: '50+', label: 'Clients satisfaits' },
    { value: '10+', label: 'Années d\'expérience' },
    { value: '24/7', label: 'Support client' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-highlight/20 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary/10 rounded-full -z-10" />
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Équipe Space Cowboy Production"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight">Notre expertise au service de votre image</h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Chez Space Cowboy Production, nous combinons créativité et technologie de pointe pour donner vie à vos idées. 
              Notre équipe d'experts en production vidéo et en intelligence artificielle travaille sans relâche pour créer 
              des contenus uniques qui marquent les esprits.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-12 md:mb-16 leading-relaxed">
              Que vous ayez besoin d'une vidéo d'entreprise percutante, d'un documentaire captivant ou d'une couverture 
              événementielle dynamique, nous avons les compétences et la passion pour dépasser vos attentes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-[#1a1a2e] rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-[#16213e] transition-colors border-2 border-highlight/20">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-highlight mb-2 sm:mb-3 md:mb-4">{stat.value}</div>
                  <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
