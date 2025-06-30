# 🥞 Cooking App

Application de recettes mobile-first avec TypeScript Vanilla et Capacitor, inspirée des jeux Nintendo DS.

## 🚀 Démo en ligne

L'application est déployée automatiquement sur GitHub Pages : [https://guillaumegaillard.github.io/cooking/](https://guillaumegaillard.github.io/cooking/)

## ✨ Fonctionnalités

- **Interface mobile-first** inspirée des jeux Nintendo DS
- **Support multilingue** (Français/Thaï) avec alphabet authentique
- **Système de slots** pour gérer plusieurs recettes en parallèle
- **Navigation par flèches** élégante avec animations
- **Support médias hybride** (images et vidéos) pour chaque étape
- **Étape ingrédients** avant cuisson avec image dédiée
- **Timers avancés** avec indicateurs visuels et notifications audio
- **Architecture modulaire** TypeScript Vanilla (sans framework)

## 🏗️ Architecture

```
src/
├── core/          # Logique métier (app, audio, runner, translations)
├── state/         # Gestion d'état global
├── ui/            # Interface utilisateur (render, events)  
├── recipes/       # Chargeur de recettes et types
└── styles/        # CSS modulaire par composant
```

## 🛠️ Développement

### Installation

```bash
npm install
```

### Développement local

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

### Build de production

```bash
npm run build
```

### Build pour GitHub Pages

```bash
npm run build:gh
```

## 📱 Déploiement mobile (Android)

### Première installation Capacitor

```bash
npm run cap:add
```

### Synchronisation et ouverture dans Android Studio

```bash
npm run cap:sync
npm run cap:open
```

### Build et run Android

```bash
npm run cap:run
```

## 🚀 Déploiement GitHub Pages

### Automatique (recommandé)

Le déploiement se fait automatiquement via GitHub Actions à chaque push sur `main`.

### Manuel

```bash
npm run deploy:gh
```

## 🎮 Utilisation

1. **Ajouter une recette** : Cliquer sur le `+` dans un slot vide
2. **Sélectionner une recette** : Choisir dans la popup (génération dynamique)
3. **Voir les ingrédients** : L'étape ingrédients s'affiche avec image
4. **Commencer la cuisine** : Cliquer sur "Commencer la cuisine"
5. **Navigation** : Utiliser les flèches `←` `→` pour naviguer
6. **Timers** : Lancer/mettre en pause avec les boutons de contrôle
7. **Langue** : Basculer entre FR et ไทย dans le header

## 🔧 Technologies

- **TypeScript Vanilla** (aucun framework)
- **Vite** (build tool et dev server)
- **Capacitor** (déploiement mobile)
- **CSS modulaire** (architecture par composants)
- **GitHub Pages** (déploiement web)
- **GitHub Actions** (CI/CD automatique)

## 📝 Recettes disponibles

- **Crêpe classique** 🥞 (images uniquement)
- **Savon en barre classique** 🧼 (saponification à froid)

## 🌍 Support multilingue

L'application supporte nativement :
- **Français** (FR)
- **Thaïlandais** (ไทย) avec alphabet authentique

## 📄 Licence

MIT License 