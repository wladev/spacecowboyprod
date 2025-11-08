# Space Cowboy Production 

Site vitrine moderne pour Space Cowboy Production - Création vidéo professionnelle avec IA.

## Fonctionnalités

- **Design épuré et moderne** avec Tailwind CSS
- **Vidéo en arrière-plan** dans le header qui s'estompe au scroll
- **Portfolio filtrable** par catégories (Tout voir, Promotion d'entreprise, Documentaires)
- **Animations fluides** et transitions élégantes
- **Responsive design** optimisé pour tous les appareils
- **Performance optimisée** avec Next.js 16 et React 19

## Prérequis

- Node.js 18+ 
- npm, yarn, pnpm ou bun

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
spacecowboyprod/
├── app/
│   ├── layout.tsx          # Layout principal avec Header et Footer
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # En-tête avec navigation
│   │   └── Footer.tsx      # Pied de page
│   └── sections/
│       ├── Hero.tsx        # Section hero avec vidéo background
│       ├── Portfolio.tsx   # Portfolio avec filtres
│       ├── About.tsx       # Section à propos
│       └── Contact.tsx     # Formulaire de contact
├── public/
│   ├── images/             # Images du site
│   └── videos/             # Vidéos (notamment hero-background.mp4)
└── tailwind.config.js      # Configuration Tailwind
```

## Personnalisation

### Couleurs

Les couleurs du thème sont définies dans `tailwind.config.js` et `app/globals.css`:

- **Primary**: `#1a1a2e` (Bleu foncé)
- **Secondary**: `#16213e` (Bleu marine)
- **Accent**: `#0f3460` (Bleu profond)
- **Highlight**: `#e94560` (Rouge/Rose vif)

### Vidéo Hero

Placez votre vidéo de fond dans `/public/videos/hero-background.mp4`

### Images Portfolio

Ajoutez vos images dans `/public/images/` et mettez à jour les données dans `components/sections/Portfolio.tsx`

### Projets Portfolio

Modifiez le tableau `projects` dans `components/sections/Portfolio.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Votre projet',
    category: 'entreprise', // ou 'documentaire', 'evenementiel'
    videoUrl: '#',
    thumbnail: '/images/votre-image.jpg'
  },
  // ...
];
```

## Déploiement

### Vercel (Recommandé)

```bash
npm run build
```

Déployez facilement sur [Vercel](https://vercel.com/new).

### Docker

```bash
docker build -t spacecowboyprod .
docker run -p 3000:3000 spacecowboyprod
```

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Prochaines étapes

1. **Ajouter votre vidéo hero** dans `/public/videos/hero-background.mp4`
2. **Ajouter vos images** de portfolio dans `/public/images/`
3. **Personnaliser le contenu** dans chaque composant
4. **Configurer le formulaire de contact** avec votre backend/service email
5. **Ajouter Google Analytics** ou autre outil d'analyse
6. **Optimiser les images** avec next/image

## Support

Pour toute question ou assistance, contactez l'équipe de développement.

## Licence

  2025 Space Cowboy Production. Tous droits réservés.
