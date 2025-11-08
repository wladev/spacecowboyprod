export default function About() {
  const stats = [
    { value: '100+', label: 'Projets réalisés' },
    { value: '50+', label: 'Clients satisfaits' },
    { value: '10+', label: 'Années d\'expérience' },
    { value: '24/7', label: 'Support client' },
  ];

  return (
    <section id="about" className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-highlight/20 rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Équipe Space Cowboy Production"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">Notre expertise au service de votre image</h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Chez Space Cowboy Production, nous combinons créativité et technologie de pointe pour donner vie à vos idées. 
              Notre équipe d'experts en production vidéo et en intelligence artificielle travaille sans relâche pour créer 
              des contenus uniques qui marquent les esprits.
            </p>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-16 leading-relaxed">
              Que vous ayez besoin d'une vidéo d'entreprise percutante, d'un documentaire captivant ou d'une couverture 
              événementielle dynamique, nous avons les compétences et la passion pour dépasser vos attentes.
            </p>
            
            <div className="grid grid-cols-2 gap-8 lg:gap-10 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 lg:p-10 bg-[#1a1a2e] rounded-2xl hover:bg-[#16213e] transition-colors border-2 border-highlight/20">
                  <div className="text-5xl lg:text-6xl font-bold text-highlight mb-4">{stat.value}</div>
                  <div className="text-gray-300 text-lg lg:text-xl font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
