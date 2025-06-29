# 📖 Guide d'Utilisation - Cooking App

## 🚀 Démarrage Rapide

### 1. Lancement de l'application
```bash
npm install
npm run dev
```
Puis ouvrez http://localhost:3000 dans votre navigateur.

### 2. Interface Principale

L'application démarre avec **une seule crêpière vide** affichant un bouton `+` au centre.

## 🎮 Utilisation Pas à Pas

### Étape 1 : Sélectionner une Recette
1. **Cliquez sur le bouton `+`** dans la crêpière vide
2. Une **modale en roue** s'ouvre avec 3 recettes disponibles :
   - 🥞 **Crêpe classique** (6 étapes, ~8 minutes)
   - 🍯 **Crêpe sucrée** (4 étapes, ~6 minutes)  
   - 🧀 **Crêpe salée** (5 étapes, ~35 minutes avec repos)

3. **Cliquez sur une recette** pour la sélectionner (elle devient dorée)
4. **Cliquez sur "Choisir"** pour confirmer

### Étape 2 : Suivre la Recette
Une fois la recette lancée, l'interface change complètement :

#### Interface de Recette Active
- **En-tête** : Nom de la recette + bouton "Fermer"
- **Vidéo** : Démonstration de l'étape actuelle (en boucle)
- **Instructions** : Texte explicatif de l'étape
- **Timer** : Affichage du temps + contrôles
- **Barre de Progression** : Avancement visuel du timer
- **Navigation** : Boutons Précédent/Suivant

#### Contrôles du Timer
- **▶️ Démarrer** : Lance le timer de l'étape
- **⏸️ Pause** : Met en pause (le bouton devient "Reprendre")
- **🔄 Réinitialiser** : Remet le timer à zéro

### Étape 3 : Navigation Automatique
🎯 **Fonctionnalité clé** : Une fois le timer lancé, l'application enchaîne automatiquement :

1. ⏱️ **Timer démarre** → Barre de progression se remplit
2. 🔔 **Timer se termine** → Notification sonore/visuelle 
3. ⏭️ **Auto-transition** → Passage automatique à l'étape suivante après 2 secondes
4. ▶️ **Auto-start** → Le timer de la nouvelle étape démarre automatiquement

### Étape 4 : Ajouter d'Autres Crêpières
Dès qu'une recette est active, un **bouton `+` rond** apparaît en haut à droite.

1. **Cliquez sur ce bouton** pour ajouter une nouvelle crêpière
2. **Répétez le processus** pour lancer d'autres recettes en parallèle
3. **Gérez plusieurs recettes** simultanément !

## 🌐 Changement de Langue

En haut à droite : **FR** | **TH**
- **FR** : Interface en français
- **TH** : Interface en thaï (ไทย)

Le changement est **instantané** et affecte :
- ✅ Interface utilisateur
- ✅ Noms des recettes
- ✅ Instructions des étapes
- ✅ Textes des boutons

## 🎨 Thème Visuel

L'application utilise une **palette crêperie authentique** :
- 🟤 **Brun doré** : Éléments principaux
- 🟫 **Brun foncé** : Textes et accents
- 🟡 **Beige crème** : Arrière-plans
- ✨ **Animations fluides** : Survol et transitions

## 📱 Utilisation Mobile

L'application est **mobile-first** :
- ✅ **Responsive** : S'adapte à tous les écrans
- ✅ **Tactile** : Optimisé pour le touch
- ✅ **Performance** : Fluide sur mobile

### Test Mobile
Pour tester sur mobile :
1. Activez les **outils développeur** (F12)
2. Cliquez sur l'**icône mobile** 
3. Sélectionnez une **taille d'écran** (iPhone, Android, etc.)

## 🔧 Fonctionnalités Avancées

### Gestion Multi-Slots
- ✅ **Slots illimités** : Ajoutez autant de crêpières que nécessaire
- ✅ **Gestion indépendante** : Chaque slot a son propre état
- ✅ **Fermeture individuelle** : Bouton "Fermer" sur chaque recette

### Navigation Flexible
- ↩️ **Étape précédente** : Retour possible à tout moment
- ⏭️ **Étape suivante** : Passage manuel optionnel
- 🔄 **Réinitialisation** : Reset de l'étape courante

### Notifications
- 🔊 **Son** : Notification audio de fin de timer
- 👁️ **Visuel** : Flash d'écran doré si pas d'audio
- 📱 **Navigateur** : Notification push si autorisée

## 🚨 Résolution de Problèmes

### La vidéo ne s'affiche pas
➡️ **Cause** : Fichiers vidéos manquants (placeholders actuellement)
➡️ **Solution** : Remplacez les placeholders dans `/public/videos/`

### Le son ne fonctionne pas  
➡️ **Cause** : Fichier audio manquant ou autorisations navigateur
➡️ **Solution** : Ajoutez un vrai fichier MP3 dans `/public/sounds/`

### L'application ne se charge pas
➡️ **Vérifiez** :
1. `npm install` a bien fonctionné
2. Port 3000 disponible
3. Navigateur moderne (ES2020 requis)

## 📦 Build et Déploiement

### Build Web
```bash
npm run build
# Fichiers générés dans /dist
```

### Package Android
```bash
# Première fois seulement
npm run cap:add

# À chaque modification
npm run cap:sync

# Ouvrir Android Studio  
npm run cap:open

# Build direct sur device
npm run cap:run
```

## 🎯 Cas d'Usage Recommandés

### 👩‍🍳 **Usage Personnel**
- Suivre des recettes étape par étape
- Apprendre de nouvelles techniques
- Cuisiner en famille avec guidance

### 🏫 **Usage Éducatif**  
- Cours de cuisine interactifs
- Formation professionnelle
- Ateliers multilingues

### 👥 **Usage Professionnel**
- Brigade de cuisine synchronisée
- Formation de personnel
- Standardisation de recettes

## 💡 Conseils d'Utilisation

1. **🎧 Utilisez des écouteurs** pour une meilleure expérience audio
2. **📱 Placez l'appareil bien visible** pendant la cuisine  
3. **🧽 Gardez les mains propres** pour utiliser l'écran tactile
4. **⏰ Respectez les timers** pour de meilleurs résultats
5. **🌐 Essayez les deux langues** pour apprendre du vocabulaire culinaire

---

**🥞 Bon appétit et bonne cuisine !** 