import { 
  setLanguage, 
  setModalOpen, 
  setSelectedSlot, 
  setSelectedRecipe,
  getSelectedSlotId,
  getSelectedRecipeId,
  addNewSlot,
  startRecipeInSlot,
  resetSlot,
  startCookingFromIngredients
} from '../state/appState.js';
import { 
  renderSlot, 
  renderAllSlots, 
  showModal, 
  hideModal, 
  updateAddSlotButton 
} from './render.js';
import { updatePageTranslations } from '../core/translations.js';
import { 
  startTimer, 
  pauseTimer, 
  resetTimer, 
  goToNextStep, 
  goToPreviousStep 
} from '../core/runner.js';

export const bindAllEvents = (): void => {
  bindLanguageSwitcher();
  bindSlotEvents();
  bindModalEvents();
  bindAddSlotButton();
  console.log('✅ Tous les événements configurés');
};

const bindLanguageSwitcher = (): void => {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      const newLang = target.dataset.lang as 'fr' | 'th';
      
      if (!newLang) return;
      
      setLanguage(newLang);
      updateLanguageUI(newLang);
      updatePageTranslations();
      renderAllSlots();
    });
  });
};

const updateLanguageUI = (activeLanguage: string): void => {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(button => {
    const buttonElement = button as HTMLButtonElement;
    if (buttonElement.dataset.lang === activeLanguage) {
      buttonElement.classList.add('active');
    } else {
      buttonElement.classList.remove('active');
    }
  });
};

const bindSlotEvents = (): void => {
  const container = document.getElementById('slots-container');
  if (!container) return;
  
  container.addEventListener('click', handleSlotClick);
};

const handleSlotClick = (e: Event): void => {
  const target = e.target as HTMLElement;
  
  // Gestion du clic sur slot vide
  if (target.closest('.add-recipe-btn')) {
    const slot = target.closest('.slot') as HTMLElement;
    if (!slot) return;
    
    setSelectedSlot(slot.id);
    setModalOpen(true);
    showModal();
    return;
  }
  
  // Rechercher l'élément avec data-action dans l'arbre DOM (remonte jusqu'à trouver un bouton)
  const actionElement = target.closest('[data-action]') as HTMLElement;
  if (!actionElement) return;
  
  const action = actionElement.dataset.action;
  const slotId = actionElement.dataset.slot;
  
  if (!action || !slotId) return;
  
  // Empêcher l'action si le bouton est désactivé
  if (actionElement.hasAttribute('disabled')) return;
  
  handleSlotAction(slotId, action);
};

const handleSlotAction = (slotId: string, action: string): void => {
  console.log(`🎯 Action détectée: ${action} sur slot ${slotId}`);
  
  switch (action) {
    case 'start':
      startTimer(slotId);
      break;
    case 'pause':
      pauseTimer(slotId);
      break;
    case 'reset':
      resetTimer(slotId);
      break;
    case 'next':
      goToNextStep(slotId);
      break;
    case 'previous':
      goToPreviousStep(slotId);
      break;
    case 'close':
      closeRecipe(slotId);
      break;
    case 'start-cooking':
      handleStartCooking(slotId);
      break;
    default:
      console.warn(`⚠️ Action inconnue: ${action}`);
  }
};

const handleStartCooking = (slotId: string): void => {
  startCookingFromIngredients(slotId);
  renderSlot(slotId);
  // Auto-start du timer pour la première étape
  window.setTimeout(() => startTimer(slotId), 500);
};

const closeRecipe = (slotId: string): void => {
  resetSlot(slotId);
  renderSlot(slotId);
  updateAddSlotButton();
};

const bindModalEvents = (): void => {
  bindRecipeSelection();
  bindModalButtons();
  bindModalBackdrop();
};

const bindRecipeSelection = (): void => {
  const wheelContainer = document.querySelector('.wheel-container');
  if (!wheelContainer) return;
  
  // Utiliser la délégation d'événements pour gérer les clics sur les options générées dynamiquement
  wheelContainer.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const recipeOption = target.closest('.recipe-option') as HTMLElement;
    
    if (!recipeOption) return;
    
    const recipeId = recipeOption.dataset.recipe;
    if (!recipeId) return;
    
    clearRecipeSelection();
    recipeOption.classList.add('selected');
    setSelectedRecipe(recipeId);
  });
};

const bindModalButtons = (): void => {
  const selectBtn = document.getElementById('select-recipe-btn');
  const cancelBtn = document.getElementById('cancel-recipe-btn');
  
  selectBtn?.addEventListener('click', handleRecipeSelection);
  cancelBtn?.addEventListener('click', handleModalCancel);
};

const bindModalBackdrop = (): void => {
  const backdrop = document.querySelector('.modal-backdrop');
  backdrop?.addEventListener('click', handleModalCancel);
};

const handleRecipeSelection = (): void => {
  const selectedSlotId = getSelectedSlotId();
  const selectedRecipeId = getSelectedRecipeId();
  
  if (!selectedSlotId || !selectedRecipeId) return;
  
  startRecipeInSlot(selectedSlotId, selectedRecipeId);
  setModalOpen(false);
  hideModal();
  renderSlot(selectedSlotId);
  updateAddSlotButton();
};

const handleModalCancel = (): void => {
  setModalOpen(false);
  hideModal();
  clearRecipeSelection();
};

const bindAddSlotButton = (): void => {
  const addBtn = document.getElementById('add-slot-btn');
  
  addBtn?.addEventListener('click', () => {
    addNewSlot();
    renderAllSlots();
  });
};

const clearRecipeSelection = (): void => {
  const selected = document.querySelectorAll('.recipe-option.selected');
  selected.forEach(option => option.classList.remove('selected'));
}; 