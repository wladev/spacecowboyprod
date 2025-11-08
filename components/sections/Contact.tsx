'use client';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire à implémenter
    alert('Votre message a été envoyé avec succès !');
  };

  return (
    <section id="contact" className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Contactez-nous</h2>
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed">
            Prêt à donner vie à votre prochain projet vidéo ? Parlons-en !
          </p>
        </div>

        <div className="bg-[#1a1a2e] rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-primary text-white p-16 lg:p-20">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">Informations de contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-highlight/20 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Adresse</h4>
                    <p className="text-primary-100">123 Rue de la Création<br />75000 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-highlight/20 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Téléphone</h4>
                    <p className="text-primary-100">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-highlight/20 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-primary-100">contact@spacecowboyprod.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', icon: 'facebook', url: '#' },
                    { name: 'Instagram', icon: 'instagram', url: '#' },
                    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
                    { name: 'YouTube', icon: 'youtube', url: '#' },
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-highlight transition-colors"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-5 h-5" dangerouslySetInnerHTML={{
                        __html: getSocialIcon(social.icon)
                      }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-16 lg:p-20 bg-[#16213e]">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-3">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-600 bg-[#1a1a2e] text-white focus:ring-2 focus:ring-highlight focus:border-highlight transition-all text-lg"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-200 mb-3">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-600 bg-[#1a1a2e] text-white focus:ring-2 focus:ring-highlight focus:border-highlight transition-all text-lg"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-gray-200 mb-3">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-600 bg-[#1a1a2e] text-white focus:ring-2 focus:ring-highlight focus:border-highlight transition-all text-lg"
                    placeholder="À propos de mon projet vidéo"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-200 mb-3">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-600 bg-[#1a1a2e] text-white focus:ring-2 focus:ring-highlight focus:border-highlight transition-all text-lg resize-none"
                    placeholder="Dites-nous en plus sur votre projet..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-highlight text-white py-6 px-8 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-highlight/50 shadow-lg"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fonction utilitaire pour les icônes de réseaux sociaux
function getSocialIcon(platform: string) {
  const icons: { [key: string]: string } = {
    facebook: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
    instagram: '<svg fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>',
    linkedin: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>',
    youtube: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><path fill="#fff" d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg>'
  };
  return icons[platform] || '';
}
