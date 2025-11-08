# Guide de démarrage rapide 🚀

Bienvenue dans votre nouveau site Space Cowboy Production !

## Étapes pour commencer

### 1. Installation des dépendances

```bash
npm install
```

### 2. Ajouter votre contenu

#### Vidéo Hero (Important !)
La vidéo d'arrière-plan du hero est essentielle pour l'effet visuel.

**Option A**: Utiliser une vidéo temporaire
- Téléchargez une vidéo de stock gratuite sur [Pexels](https://www.pexels.com/videos/) ou [Pixabay](https://pixabay.com/videos/)
- Renommez-la `hero-background.mp4`
- Placez-la dans `/public/videos/`

**Option B**: Utiliser votre propre vidéo
- Optimisez votre vidéo (voir `/public/videos/README.md`)
- Placez-la dans `/public/videos/hero-background.mp4`

#### Images Portfolio
1. Ajoutez vos images de projets dans `/public/images/`
2. Nommez-les de manière descriptive (ex: `projet-entreprise-x.jpg`)
3. Mettez à jour le fichier `/components/sections/Portfolio.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Nom de votre projet',
    category: 'entreprise', // ou 'documentaire', 'evenementiel'
    videoUrl: '#', // Lien vers la vidéo complète
    thumbnail: '/images/votre-image.jpg'
  },
  // Ajoutez autant de projets que nécessaire
];
```

#### Image À propos
- Ajoutez une photo de votre équipe ou studio dans `/public/images/about.jpg`

### 3. Personnaliser le contenu

#### Informations de contact
Modifiez `/components/sections/Contact.tsx`:
- Adresse
- Téléphone
- Email
- Liens réseaux sociaux

#### Textes et descriptions
- **Hero**: `/components/sections/Hero.tsx` - Titre et sous-titre
- **About**: `/components/sections/About.tsx` - Description de l'entreprise
- **Stats**: Mettez à jour les statistiques dans About.tsx

#### Couleurs (optionnel)
Si vous souhaitez changer la palette de couleurs:
1. Modifiez `/tailwind.config.js`
2. Modifiez `/app/globals.css`

### 4. Lancer le site

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### 5. Tester sur mobile

Le site est responsive, testez-le sur différents appareils:
- Utilisez les DevTools de Chrome (F12 > Toggle device toolbar)
- Testez sur votre téléphone en accédant à `http://[votre-ip-locale]:3000`

## Problèmes courants

### La vidéo hero ne s'affiche pas
- Vérifiez que le fichier existe: `/public/videos/hero-background.mp4`
- Vérifiez le format (MP4 recommandé)
- Essayez avec une vidéo plus petite

### Les images portfolio ne s'affichent pas
- Vérifiez les chemins dans `Portfolio.tsx`
- Assurez-vous que les images sont dans `/public/images/`
- Vérifiez les noms de fichiers (sensibles à la casse)

### Erreurs de build
```bash
# Nettoyez et réinstallez
rm -rf .next node_modules
npm install
npm run dev
```

## Prochaines étapes

1. ✅ Ajouter votre contenu (vidéos, images, textes)
2. ✅ Tester le site localement
3. ✅ Configurer le formulaire de contact (backend nécessaire)
4. ✅ Optimiser les images et vidéos
5. ✅ Déployer sur Vercel ou votre hébergeur

## Besoin d'aide ?

Consultez le fichier `README.md` pour plus de détails techniques.

---

**Bon développement ! 🎬✨**
