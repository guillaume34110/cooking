import { getSlotById, updateSlot } from '../state/appState.js';
import { getRecipeById } from '../recipes/recipeLoader.js';
import { renderSlot, renderTimerProgress, renderTimerControls, animateStepChange } from '../ui/render.js';

const activeTimers = new Map<string, number>();

export const startTimer = (slotId: string): void => {
  const slot = getSlotById(slotId);
  if (!slot || slot.isEmpty) return;
  
  if (slot.isRunning) {
    pauseTimer(slotId);
    return;
  }
  
  const recipe = getRecipeById(slot.recipeId!);
  if (!recipe) return;
  
  const currentStep = recipe.steps[slot.currentStepIndex];
  if (!currentStep) return;
  
  const startTime = Date.now() - (slot.pausedTime || 0);
  
  updateSlot(slotId, {
    isRunning: true,
    isPaused: false,
    startTime
  });
  
  startTimerInterval(slotId, currentStep.duration);
  renderTimerControls(slotId);
};

export const pauseTimer = (slotId: string): void => {
  const slot = getSlotById(slotId);
  if (!slot || !slot.isRunning) return;
  
  const elapsed = Date.now() - (slot.startTime || 0);
  
  updateSlot(slotId, {
    isRunning: false,
    isPaused: true,
    pausedTime: elapsed
  });
  
  stopTimerInterval(slotId);
  renderTimerControls(slotId);
};

export const resetTimer = (slotId: string): void => {
  updateSlot(slotId, {
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    startTime: undefined,
    pausedTime: undefined
  });
  
  stopTimerInterval(slotId);
  renderTimerProgress(slotId, 0);
  renderTimerControls(slotId);
};

export const goToNextStep = (slotId: string): void => {
  console.log(`🔄 Navigation vers étape suivante pour slot ${slotId}`);
  const slot = getSlotById(slotId);
  if (!slot || slot.isEmpty) return;
  
  const recipe = getRecipeById(slot.recipeId!);
  if (!recipe) return;
  
  const nextStepIndex = slot.currentStepIndex + 1;
  if (nextStepIndex >= recipe.steps.length) {
    console.log(`⚠️ Déjà à la dernière étape (${slot.currentStepIndex + 1}/${recipe.steps.length})`);
    return;
  }
  
  stopTimerInterval(slotId);
  
  updateSlot(slotId, {
    currentStepIndex: nextStepIndex,
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    startTime: undefined,
    pausedTime: undefined
  });
  
  renderSlot(slotId);
  animateStepChange(slotId);
  
  // Auto-start du timer pour l'étape suivante
  window.setTimeout(() => startTimer(slotId), 500);
};

export const goToPreviousStep = (slotId: string): void => {
  console.log(`🔄 Navigation vers étape précédente pour slot ${slotId}`);
  const slot = getSlotById(slotId);
  if (!slot || slot.isEmpty) return;
  
  if (slot.currentStepIndex === 0) {
    console.log(`⚠️ Déjà à la première étape`);
    return;
  }
  
  stopTimerInterval(slotId);
  
  updateSlot(slotId, {
    currentStepIndex: slot.currentStepIndex - 1,
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    startTime: undefined,
    pausedTime: undefined
  });
  
  renderSlot(slotId);
  animateStepChange(slotId);
};

const startTimerInterval = (slotId: string, duration: number): void => {
  const intervalId = window.setInterval(() => {
    updateTimerProgress(slotId, duration);
  }, 100);
  
  activeTimers.set(slotId, intervalId);
};

const stopTimerInterval = (slotId: string): void => {
  const intervalId = activeTimers.get(slotId);
  if (intervalId) {
    window.clearInterval(intervalId);
    activeTimers.delete(slotId);
  }
};

const updateTimerProgress = (slotId: string, duration: number): void => {
  const slot = getSlotById(slotId);
  if (!slot || !slot.isRunning) return;
  
  const elapsed = Date.now() - (slot.startTime || 0);
  const progress = Math.min((elapsed / (duration * 1000)) * 100, 100);
  
  updateSlot(slotId, { timerProgress: progress });
  renderTimerProgress(slotId, progress);
  
  if (progress >= 100) {
    onTimerComplete(slotId);
  }
};

const onTimerComplete = (slotId: string): void => {
  console.log(`⏰ Timer terminé pour ${slotId}`);
  
  playTimerEndSound();
  stopTimerInterval(slotId);
  
  updateSlot(slotId, {
    isRunning: false,
    isPaused: false,
    timerProgress: 100
  });
  
  renderTimerControls(slotId);
  
  // Auto-transition vers l'étape suivante après 2 secondes
  window.setTimeout(() => {
    goToNextStep(slotId);
  }, 2000);
};

const playTimerEndSound = (): void => {
  const audio = document.getElementById('timer-audio') as HTMLAudioElement;
  
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.warn('⚠️ Impossible de jouer le son:', error);
    });
  } else {
    // Feedback visuel simple
    document.body.style.backgroundColor = '#D4AF37';
    window.setTimeout(() => {
      document.body.style.backgroundColor = '';
    }, 300);
  }
}; 