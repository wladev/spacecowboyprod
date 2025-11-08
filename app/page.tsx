import dynamic from 'next/dynamic';

// Import dynamique des composants pour le chargement optimisé
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), { ssr: true });
const About = dynamic(() => import('@/components/sections/About'), { ssr: true });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: true });

export default function Home() {
  return (
    <>
      {/* Section Hero avec vidéo en arrière-plan */}
      <Hero />
      
      {/* Section Portfolio avec filtres */}
      <Portfolio />
      
      {/* Section À propos */}
      <About />
      
      {/* Section Contact */}
      <Contact />
      
      {/* Call-to-action pour inciter à l'action */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-gradient-to-r from-primary to-highlight/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight">Prêt à donner vie à votre projet vidéo ?</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10 sm:mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed px-4">
            Notre équipe est prête à vous accompagner dans la réalisation de votre projet. 
            Contactez-nous dès aujourd'hui pour discuter de vos besoins.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-primary px-8 sm:px-10 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-7 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>
    </>
  );
}
