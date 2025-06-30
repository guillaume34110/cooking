import { bindAllEvents } from '../ui/events.js';
import { renderInitialState } from '../ui/render.js';
import { loadTranslations, updatePageMetadata } from './translations.js';

export const initializeApp = (): void => {
  console.log('⚡ Initialisation de l\'application...');
  
  setupInitialState();
  loadInitialTranslations();
  bindAllEventHandlers();
  renderAppInterface();
};

const setupInitialState = (): void => {
  console.log('📋 Configuration de l\'état initial...');
};

const loadInitialTranslations = (): void => {
  console.log('🌐 Chargement des traductions...');
  loadTranslations();
  updatePageMetadata();
};

const bindAllEventHandlers = (): void => {
  console.log('🔗 Configuration des événements...');
  bindAllEvents();
};

const renderAppInterface = (): void => {
  console.log('🎨 Rendu de l\'interface...');
  renderInitialState();
}; 