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
      <section className="py-32 lg:py-40 bg-gradient-to-r from-primary to-highlight/80 text-white">
        <div className="container mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">Prêt à donner vie à votre projet vidéo ?</h2>
          <p className="text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto leading-relaxed">
            Notre équipe est prête à vous accompagner dans la réalisation de votre projet. 
            Contactez-nous dès aujourd'hui pour discuter de vos besoins.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-primary px-16 py-7 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>
    </>
  );
}
