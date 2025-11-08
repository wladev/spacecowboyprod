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
    <section id="portfolio" className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Notre Portfolio</h2>
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Découvrez nos dernières réalisations et laissez-vous inspirer par notre savoir-faire.</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-20">
          {['tous', 'entreprise', 'documentaire', 'evenementiel'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-10 py-5 rounded-2xl font-bold text-lg lg:text-xl transition-all transform hover:scale-105 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 rounded-t-xl overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-8 h-8 text-highlight" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10 bg-[#1a1a2e]">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h3>
                <span className="inline-block px-5 py-3 text-base lg:text-lg font-bold text-highlight bg-highlight/20 rounded-xl">
                  {project.category === 'entreprise' ? 'Entreprise' : 
                   project.category === 'documentaire' ? 'Documentaire' : 'Événementiel'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="px-14 py-6 bg-highlight text-white rounded-2xl font-bold text-xl hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl">
            Voir plus de projets
          </button>
        </div>
      </div>
    </section>
  );
}
