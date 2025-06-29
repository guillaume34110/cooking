import { AppState, Recipe } from '../core/types';

let state: AppState = {
  slots: [],
  availableRecipes: [],
  activeLanguage: 'fr',
};

export const getAppState = (): Readonly<AppState> => {
  return state;
};

export const initializeState = (recipes: Recipe[]) => {
  state.availableRecipes = recipes;
  state.slots = [{
    id: 0,
    status: 'empty',
    currentStepIndex: 0,
    progress: 0,
  }];
};

export const updateSlotState = (slotId: number, updates: object) => {
  const slotIndex = state.slots.findIndex(s => s.id === slotId);
  if (slotIndex === -1) return;
  
  state.slots[slotIndex] = { ...state.slots[slotIndex], ...updates };
};

export const addSlot = () => {
  const newSlot = {
    id: state.slots.length,
    status: 'empty' as const,
    currentStepIndex: 0,
    progress: 0,
  };
  state.slots.push(newSlot);
};

export const setAvailableRecipes = (recipes: Recipe[]) => {
  state.availableRecipes = recipes;
};

export const setLanguage = (lang: 'fr' | 'th') => {
  state.activeLanguage = lang;
}; 