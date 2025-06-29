# 🥞 Cooking App - Application de Recettes Mobile

Application web mobile-first de gestion de recettes de cuisine, inspirée du jeu de cuisine Nintendo DS. Développée en **TypeScript Vanilla** sans framework, avec **Capacitor** pour le packaging Android.

## 🎯 Fonctionnalités

- **Slots de crêpières** : Interface avec slots multiples pour gérer plusieurs recettes simultanément
- **Recettes interactives** : Navigation étape par étape avec timers automatiques
- **Multilingue** : Support français et thaï avec chargement dynamique
- **Vidéos intégrées** : Chaque étape avec sa vidéo explicative en auto-loop
- **Timers visuels** : Barre de progression et notifications sonores
- **Offline first** : Fonctionne sans connexion internet
- **Mobile optimisé** : Interface responsive et tactile

## 🗂️ Architecture

```
src/
├── core/           # Logique métier pure
│   ├── app.ts      # Initialisation de l'application
│   ├── runner.ts   # Gestion des recettes et timers
│   ├── translations.ts # Système multilingue
│   └── audio.ts    # Gestion notifications sonores
├── state/          # Gestion de l'état global
│   └── appState.ts # État des slots et données
├── ui/             # Interface utilisateur
│   ├── render.ts   # Rendu HTML et DOM
│   ├── events.ts   # Gestion événements utilisateur
│   └── styles/
│       └── main.css # Styles theme crêperie
├── recipes/        # Données des recettes
│   └── recipeLoader.ts # Chargement et localisation
└── main.ts         # Point d'entrée
```

## 🚀 Installation et Utilisation

### Développement local

```bash
# Installation des dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build
```

### Package Android avec Capacitor

```bash
# Ajouter la plateforme Android
npm run cap:add

# Synchroniser les fichiers
npm run cap:sync

# Ouvrir Android Studio
npm run cap:open

# Build et run sur device
npm run cap:run
```

## 📱 Utilisation

1. **Démarrage** : L'app affiche une crêpière vide avec bouton `+`
2. **Sélection** : Clic sur `+` ouvre la modale de sélection de recette
3. **Navigation** : Une fois la recette choisie, navigation étape par étape
4. **Timers** : Chaque étape a son timer avec progression visuelle
5. **Auto-flow** : Les timers enchaînent automatiquement les étapes
6. **Multi-slots** : Possibilité d'ajouter plusieurs crêpières simultanées

## 🎨 Thème Visuel

- **Couleurs** : Palette beige/brun/crème inspirée des crêperies traditionnelles
- **Typography** : Lisible et conviviale
- **Animations** : Transitions fluides et feedback visuel
- **Responsive** : Optimisé mobile-first

## 🌐 Internationalisation

- **Français** (fr) : Langue par défaut
- **Thaï** (th) : Traduction complète
- **Extensible** : Architecture prête pour d'autres langues

## 📋 Contraintes Techniques

- ✅ **Pas de frameworks** : Vanilla TypeScript uniquement
- ✅ **Pas de classes** : Architecture fonctionnelle pure
- ✅ **Fonctions courtes** : Max 5 lignes, nommage explicite
- ✅ **Contextes séparés** : Organisation par domaine métier
- ✅ **ES Modules** : Import/export modernes uniquement

## 🎯 Prochaines Étapes

1. **Assets** : Remplacer les placeholders par de vraies vidéos et sons
2. **Recettes** : Ajouter plus de recettes variées
3. **Fonctionnalités** : 
   - Sauvegarde de progression
   - Mode hors-ligne complet
   - Notifications push
   - Partage de recettes

## 🛠️ Technologies

- **TypeScript** : Typage strict et moderne
- **Vite** : Build tool rapide et moderne  
- **Capacitor** : Package natif cross-platform
- **CSS** : Variables CSS et animations pures
- **ES2020** : Syntaxe JavaScript moderne

## 📄 Licence

MIT - Libre d'utilisation et de modification 