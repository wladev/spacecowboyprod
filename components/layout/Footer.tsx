import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/logo.png" alt="Space Cowboy Production" className="h-14 w-auto" />
              <h3 className="text-2xl font-bold text-white">
                Space Cowboy <span className="text-highlight">Production</span>
              </h3>
            </div>
            <p className="mb-6 text-gray-400">
              Création de contenu vidéo d'exception, propulsé par l'IA et sublimé par l'expertise humaine.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: getSocialIcon(platform) }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Services', href: '#services' },
                { name: 'À propos', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-highlight transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Vidéos d\'entreprise',
                'Documentaires',
                'Couverture événementielle',
                'Motion Design',
                'Post-production',
              ].map((service) => (
                <li key={service} className="flex items-center">
                  <svg className="w-4 h-4 text-highlight mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="hover:text-white transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Space Cowboy Production. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-sm text-gray-500 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-sm text-gray-500 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className="text-sm text-gray-500 hover:text-white transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Fonction utilitaire pour les icônes de réseaux sociaux
function getSocialIcon(platform: string) {
  const icons: { [key: string]: string } = {
    facebook: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
    instagram: '<svg fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>',
    linkedin: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>',
    youtube: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><path fill="currentColor" d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg>'
  };
  return icons[platform] || '';
}
