# Stud

Ce projet génère des murs pour maisons à ossature bois.

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
# -> http://localhost:3000
```

## Build

```bash
# Générer la version de production
npm run build
```

Les fichiers sont générés dans le dossier `build/`.

## Déploiement

Le projet est configuré pour un déploiement automatique sur **Netlify**.

Connectez simplement votre repo GitHub à Netlify, la configuration `netlify.toml` s'occupe du reste :
- Commande de build : `npm run build`
- Dossier de publication : `build`

---

Projet créé avec [Create React App](https://github.com/facebook/create-react-app).
