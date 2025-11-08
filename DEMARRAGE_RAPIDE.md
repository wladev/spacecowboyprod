# 🚀 Démarrage Rapide - 5 minutes

## Étape 1: Lancer le serveur (30 secondes)

```bash
cd /home/wladesty/DD650/workspace/spacecowboyprod
npm run dev
```

Ouvrez votre navigateur sur **http://localhost:3000**

## Étape 2: Ajouter une vidéo temporaire (2 minutes)

Le site a besoin d'une vidéo pour le hero. Voici comment en obtenir une rapidement:

### Option rapide - Télécharger une vidéo gratuite

1. Allez sur https://www.pexels.com/videos/
2. Recherchez "technology" ou "business" ou "creative"
3. Téléchargez une vidéo (choisissez HD 1920x1080)
4. Renommez-la `hero-background.mp4`
5. Placez-la dans `/public/videos/hero-background.mp4`

**Suggestions de vidéos**:
- https://www.pexels.com/video/abstract-digital-art-3129957/
- https://www.pexels.com/video/digital-projection-of-abstract-geometrical-lines-3129671/
- https://www.pexels.com/video/view-of-a-futuristic-tunnel-3141211/

### Alternative - Vidéo placeholder

Si vous n'avez pas de vidéo tout de suite, le site fonctionnera quand même. La section hero affichera simplement le fond sans vidéo.

## Étape 3: Ajouter vos projets (2 minutes)

Ouvrez `/components/sections/Portfolio.tsx` et modifiez:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Votre Premier Projet',
    category: 'entreprise',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: '/images/projet1.jpg'
  },
  {
    id: 2,
    title: 'Votre Deuxième Projet',
    category: 'documentaire',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: '/images/projet2.jpg'
  },
  // Ajoutez autant de projets que vous voulez
];
```

## Étape 4: Personnaliser les textes (30 secondes)

### Hero - `/components/sections/Hero.tsx`
Ligne 42-44: Changez le titre et le sous-titre

### Contact - `/components/sections/Contact.tsx`
Lignes 30-60: Mettez à jour votre adresse, téléphone, email

## ✅ C'est tout !

Votre site est maintenant personnalisé et prêt à être utilisé.

## 📚 Pour aller plus loin

- **Documentation complète**: Lisez `README.md`
- **Guide détaillé**: Consultez `GUIDE_DEMARRAGE.md`
- **Liste des tâches**: Voir `TODO.md`
- **Récapitulatif**: Voir `PROJET_COMPLETE.md`

## 🆘 Problèmes courants

### Le serveur ne démarre pas
```bash
rm -rf .next
npm install
npm run dev
```

### La vidéo ne s'affiche pas
- Vérifiez que le fichier existe: `ls -lh public/videos/hero-background.mp4`
- Vérifiez le format (doit être MP4)
- Essayez avec une vidéo plus petite (< 10MB)

### Les images ne s'affichent pas
- Placez vos images dans `/public/images/`
- Vérifiez les chemins dans `Portfolio.tsx`
- Les chemins doivent commencer par `/images/` (pas `/public/images/`)

## 🎯 Prochaines étapes recommandées

1. ✅ Ajouter la vidéo hero
2. ✅ Ajouter 3-5 projets au portfolio
3. ✅ Personnaliser les textes
4. ✅ Tester sur mobile
5. ✅ Déployer sur Vercel (gratuit)

---

**Bon développement ! 🎬✨**
