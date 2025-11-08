'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollPosition / 500); // Ajustez la valeur pour contrôler la vitesse de fondu
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          opacity,
          transition: 'opacity 0.1s ease-out',
        }}
      >
        {/* Fond de secours avec gradient si la vidéo n'est pas disponible */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Cache la vidéo si elle ne charge pas
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenu du héros */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Des vidéos qui racontent votre histoire
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
          Création de contenu vidéo d'exception, propulsé par l'IA et sublimé par l'expertise humaine.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a 
            href="#portfolio" 
            className="bg-highlight text-white px-14 py-6 rounded-2xl text-xl lg:text-2xl font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
          >
            Découvrir notre portfolio
          </a>
          <a 
            href="#contact" 
            className="bg-white text-primary px-14 py-6 rounded-2xl text-xl lg:text-2xl font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-8 h-14 border-4 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
