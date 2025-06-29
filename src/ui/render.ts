import { getSlots, getSlotById, hasActiveSlots } from '../state/appState.js';
import { getRecipeById, getLocalizedRecipe } from '../recipes/recipeLoader.js';
import { getTranslation } from '../core/translations.js';

export const renderInitialState = (): void => {
  console.log('🎨 Rendu initial de l\'interface');
  renderAllSlots();
  updateAddSlotButton();
};

export const renderAllSlots = (): void => {
  const container = document.getElementById('slots-container');
  if (!container) return;
  
  container.innerHTML = '';
  const slots = getSlots();
  
  slots.forEach(slot => {
    const slotElement = createSlotElement(slot);
    container.appendChild(slotElement);
  });
};

export const renderSlot = (slotId: string): void => {
  const slot = getSlotById(slotId);
  if (!slot) return;
  
  const existingElement = document.getElementById(slotId);
  if (!existingElement) return;
  
  const newElement = createSlotElement(slot);
  existingElement.replaceWith(newElement);
};

const createSlotElement = (slot: any): HTMLElement => {
  const slotDiv = document.createElement('div');
  slotDiv.className = slot.isEmpty ? 'slot empty-slot' : 'slot recipe-slot';
  slotDiv.id = slot.id;
  
  if (slot.isEmpty) {
    slotDiv.innerHTML = createEmptySlotHTML();
  } else {
    slotDiv.innerHTML = createRecipeSlotHTML(slot);
  }
  
  return slotDiv;
};

const createEmptySlotHTML = (): string => {
  return `
    <div class="slot-content">
      <div class="add-recipe-btn">
        <span class="plus-icon">+</span>
        <p class="add-text" data-i18n="add-recipe">${getTranslation('add-recipe')}</p>
      </div>
    </div>
  `;
};

const createRecipeSlotHTML = (slot: any): string => {
  const recipe = getRecipeById(slot.recipeId);
  if (!recipe) return createEmptySlotHTML();
  
  const localizedRecipe = getLocalizedRecipe(recipe);
  const currentStep = localizedRecipe.steps[slot.currentStepIndex];
  if (!currentStep) return createEmptySlotHTML();
  
  return `
    <div class="slot-content">
      <div class="recipe-header">
        <h3 class="recipe-title">${localizedRecipe.title}</h3>
        <button class="close-recipe-btn" data-slot="${slot.id}" data-action="close">
          ${getTranslation('close-recipe')}
        </button>
      </div>
      
      <video class="recipe-video" autoplay loop muted>
        <source src="${currentStep.video || recipe.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
      </video>
      
      <div class="step-content">
        <div class="step-info">
          <span>${getTranslation('step')} ${slot.currentStepIndex + 1} ${getTranslation('of')} ${recipe.steps.length}</span>
        </div>
        
        <p class="step-text">${currentStep.text}</p>
        
        <div class="timer-section">
          <div class="timer-display">
            <span class="timer-text">${formatTime(currentStep.duration)}</span>
            <div class="timer-controls">
              <button class="btn btn-primary timer-btn" data-slot="${slot.id}" data-action="start">
                ${getTranslation(slot.isRunning ? 'pause-timer' : 'start-timer')}
              </button>
              <button class="btn btn-secondary timer-btn" data-slot="${slot.id}" data-action="reset">
                ${getTranslation('reset-step')}
              </button>
            </div>
          </div>
          <div class="timer-progress">
            <div class="timer-progress-bar" style="width: ${slot.timerProgress}%"></div>
          </div>
        </div>
        
        <div class="step-navigation">
          <button class="btn btn-secondary" data-slot="${slot.id}" data-action="previous" 
                  ${slot.currentStepIndex === 0 ? 'disabled' : ''}>
            ${getTranslation('previous-step')}
          </button>
          <button class="btn btn-primary" data-slot="${slot.id}" data-action="next"
                  ${slot.currentStepIndex >= recipe.steps.length - 1 ? 'disabled' : ''}>
            ${getTranslation('next-step')}
          </button>
        </div>
      </div>
    </div>
  `;
};

export const renderTimerProgress = (slotId: string, progress: number): void => {
  const progressBar = document.querySelector(`#${slotId} .timer-progress-bar`) as HTMLElement;
  if (!progressBar) return;
  
  progressBar.style.width = `${progress}%`;
  
  if (progress > 90) {
    progressBar.classList.add('ending');
  } else {
    progressBar.classList.remove('ending');
  }
};

export const renderTimerControls = (slotId: string): void => {
  const slot = getSlotById(slotId);
  if (!slot) return;
  
  const timerBtn = document.querySelector(`#${slotId} .timer-btn[data-action="start"]`) as HTMLButtonElement;
  if (!timerBtn) return;
  
  timerBtn.textContent = getTranslation(slot.isRunning ? 'pause-timer' : 'start-timer');
};

export const updateAddSlotButton = (): void => {
  const addSlotBtn = document.getElementById('add-slot-btn');
  if (!addSlotBtn) return;
  
  if (hasActiveSlots()) {
    addSlotBtn.classList.remove('hidden');
  } else {
    addSlotBtn.classList.add('hidden');
  }
};

export const showModal = (): void => {
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  clearRecipeSelection();
};

export const hideModal = (): void => {
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;
  
  modal.classList.add('hidden');
};

const clearRecipeSelection = (): void => {
  const options = document.querySelectorAll('.recipe-option.selected');
  options.forEach(option => option.classList.remove('selected'));
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}; 