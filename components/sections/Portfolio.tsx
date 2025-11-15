'use client';

import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: 'tous' | 'entreprise' | 'documentaire' | 'evenementiel';
  videoUrl: string; // soit ID YouTube, soit .mp4
  // thumbnail: string;
  isYoutube?: boolean; // NEW → pour différencier YT / MP4
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'tous' | 'entreprise' | 'documentaire' | 'evenementiel'>('tous');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Campagne Entreprise X',
      category: 'entreprise',
      videoUrl: 'zKOtC9oSjxM', // ID YouTube
      // thumbnail: '`https://img.youtube.com/vi/${project.videoId}/0.jpg`',
      isYoutube: true
    },
    {
      id: 2,
      title: 'Documentaire Nature',
      category: 'documentaire',
      videoUrl: 'ubAt5jmC45M', // fichier mp4 local
      // thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
      isYoutube: false
    },
    {
      id: 3,
      title: 'Événement Corporate',
      category: 'evenementiel',
      videoUrl: '92ngPYby6hU', // ID YouTube
      // thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
      isYoutube: true
    },
  ];

  const filteredProjects = activeFilter === 'tous'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section id="portfolio" className="py-16 sm:py-20 md:py-28 lg:py-40 bg-[#0a0a0a] sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          {/* Titre */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Notre Portfolio
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Découvrez nos dernières réalisations et laissez-vous inspirer par notre savoir-faire.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['tous', 'entreprise', 'documentaire', 'evenementiel'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-highlight text-white shadow-2xl'
                    : 'bg-[#1a1a2e] text-gray-200 hover:bg-[#16213e] shadow-xl'
                }`}
              >
                {filter === 'tous'
                  ? 'Tout voir'
                  : filter === 'entreprise'
                  ? "Promotion d'entreprise"
                  : filter === 'documentaire'
                  ? 'Documentaires'
                  : 'Événementiel'}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedVideo(project)}
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${project.videoUrl}/0.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Play */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Titre + Catégorie */}
                <div className="p-6 bg-[#1a1a2e]">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <span className="inline-block px-4 py-2 text-sm font-bold text-highlight bg-highlight/20 rounded-lg">
                    {project.category === 'entreprise'
                      ? 'Entreprise'
                      : project.category === 'documentaire'
                      ? 'Documentaire'
                      : 'Événementiel'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton voir plus */}
          <div className="text-center mt-16">
            <button className="px-10 py-5 bg-highlight text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-2xl">
              Voir plus de projets
            </button>
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          {/* Bouton fermer */}
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>

          {/* Contenu vidéo */}
          <div className="w-full max-w-6xl aspect-video">
            {selectedVideo.isYoutube ? (
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${selectedVideo.videoUrl}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video
                src={selectedVideo.videoUrl}
                autoPlay
                controls
                className="w-full h-full rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
