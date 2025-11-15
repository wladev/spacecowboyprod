'use client';

import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: 'tous' | 'entreprise' | 'documentaire' | 'evenementiel';
  videoUrl: string;
  thumbnail: string;
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'tous' | 'entreprise' | 'documentaire' | 'evenementiel'>('tous');
  
  // Données de démonstration - à remplacer par vos propres vidéos
  const projects: Project[] = [
    {
      id: 1,
      title: 'Campagne Entreprise X',
      category: 'entreprise',
      videoUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop'
    },
    {
      id: 2,
      title: 'Documentaire Nature',
      category: 'documentaire',
      videoUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop'
    },
    {
      id: 3,
      title: 'Événement Corporate',
      category: 'evenementiel',
      videoUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop'
    },
    // Ajoutez plus de projets ici
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 lg:py-40 bg-[#0a0a0a] sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">Notre Portfolio</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">Découvrez nos dernières réalisations et laissez-vous inspirer par notre savoir-faire.</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 px-2">
          {['tous', 'entreprise', 'documentaire', 'evenementiel'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-highlight text-white shadow-2xl'
                  : 'bg-[#1a1a2e] text-gray-200 hover:bg-[#16213e] shadow-xl'
              }`}
            >
              {filter === 'tous' ? 'Tout voir' : 
               filter === 'entreprise' ? 'Promotion d\'entreprise' : 
               filter === 'documentaire' ? 'Documentaires' : 'Événementiel'}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 rounded-t-lg sm:rounded-t-xl overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-highlight" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 bg-[#1a1a2e]">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">{project.title}</h3>
                <span className="inline-block px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base lg:text-lg font-bold text-highlight bg-highlight/20 rounded-lg sm:rounded-xl">
                  {project.category === 'entreprise' ? 'Entreprise' : 
                   project.category === 'documentaire' ? 'Documentaire' : 'Événementiel'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <button className="px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 bg-highlight text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl">
            Voir plus de projets
          </button>
        </div>
      </div>
    </section>
  );
}
