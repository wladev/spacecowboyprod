# Vidéos

Ce dossier contient les vidéos utilisées sur le site.

## Vidéo Hero Background

**Fichier requis**: `hero-background.mp4`

### Spécifications recommandées

- **Format**: MP4 (H.264)
- **Résolution**: 1920x1080px (Full HD) minimum
- **Durée**: 10-30 secondes (en boucle)
- **Taille**: < 10MB (optimisé pour le web)
- **Framerate**: 30fps
- **Codec audio**: Pas nécessaire (la vidéo est en mute)

### Conseils

1. **Compression**: Utilisez des outils comme HandBrake ou FFmpeg pour optimiser
2. **Contenu**: Choisissez une vidéo qui représente votre activité
3. **Mouvement**: Préférez des mouvements lents et fluides
4. **Couleurs**: Assurez-vous que le texte blanc reste lisible

### Exemple de compression avec FFmpeg

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec none -crf 28 -preset slow hero-background.mp4
```

## Vidéos Portfolio

Pour les vidéos de portfolio, vous pouvez:
- Les héberger sur YouTube/Vimeo et utiliser leurs players
- Les héberger sur un CDN
- Les placer dans ce dossier si elles sont optimisées
