import { initializeApp } from './core/app.js';

// Point d'entrée principal de l'application
const startApp = (): void => {
  console.log('🥞 Démarrage de Cooking App...');
  initializeApp();
};

// Démarrer l'app une fois le DOM chargé
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
} 