export type Language = 'fr' | 'th';

export type SlotState = {
  id: string;
  isEmpty: boolean;
  recipeId?: string;
  currentStepIndex: number;
  isRunning: boolean;
  isPaused: boolean;
  timerProgress: number;
  startTime?: number;
  pausedTime?: number;
  showingIngredients: boolean; // Nouvelle propriété pour l'étape ingrédients
};

export type AppState = {
  language: Language;
  slots: SlotState[];
  selectedSlotId?: string;
  selectedRecipeId?: string;
  isModalOpen: boolean;
};

// État initial de l'application
const initialState: AppState = {
  language: 'fr',
  slots: [
    {
      id: 'slot-0',
      isEmpty: true,
      currentStepIndex: 0,
      isRunning: false,
      isPaused: false,
      timerProgress: 0,
      showingIngredients: false
    }
  ],
  isModalOpen: false
};

let currentState: AppState = { ...initialState };

// Getters purs
export const getAppState = (): AppState => ({ ...currentState });

export const getLanguage = (): Language => currentState.language;

export const getSlots = (): SlotState[] => [...currentState.slots];

export const getSlotById = (id: string): SlotState | undefined => 
  currentState.slots.find(slot => slot.id === id);

export const getActiveSlots = (): SlotState[] => 
  currentState.slots.filter(slot => !slot.isEmpty);

export const hasActiveSlots = (): boolean => 
  currentState.slots.some(slot => !slot.isEmpty);

export const isModalOpen = (): boolean => currentState.isModalOpen;

export const getSelectedSlotId = (): string | undefined => currentState.selectedSlotId;

export const getSelectedRecipeId = (): string | undefined => currentState.selectedRecipeId;

// Setters purs
export const setLanguage = (language: Language): void => {
  currentState = { ...currentState, language };
};

export const setModalOpen = (isOpen: boolean): void => {
  currentState = { ...currentState, isModalOpen: isOpen };
};

export const setSelectedSlot = (slotId: string): void => {
  currentState = { ...currentState, selectedSlotId: slotId };
};

export const setSelectedRecipe = (recipeId: string): void => {
  currentState = { ...currentState, selectedRecipeId: recipeId };
};

export const addNewSlot = (): string => {
  const newSlotId = `slot-${currentState.slots.length}`;
  const newSlot: SlotState = {
    id: newSlotId,
    isEmpty: true,
    currentStepIndex: 0,
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    showingIngredients: false
  };
  
  currentState = {
    ...currentState,
    slots: [...currentState.slots, newSlot]
  };
  
  return newSlotId;
};

export const updateSlot = (slotId: string, updates: Partial<SlotState>): void => {
  currentState = {
    ...currentState,
    slots: currentState.slots.map(slot => 
      slot.id === slotId ? { ...slot, ...updates } : slot
    )
  };
};

export const removeSlot = (slotId: string): void => {
  currentState = {
    ...currentState,
    slots: currentState.slots.filter(slot => slot.id !== slotId)
  };
};

export const startRecipeInSlot = (slotId: string, recipeId: string): void => {
  updateSlot(slotId, {
    isEmpty: false,
    recipeId,
    currentStepIndex: 0,
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    showingIngredients: true // Démarrer par l'étape ingrédients
  });
};

export const startCookingFromIngredients = (slotId: string): void => {
  updateSlot(slotId, {
    showingIngredients: false,
    currentStepIndex: 0,
    isRunning: false,
    isPaused: false,
    timerProgress: 0
  });
};

export const resetSlot = (slotId: string): void => {
  updateSlot(slotId, {
    isEmpty: true,
    recipeId: undefined,
    currentStepIndex: 0,
    isRunning: false,
    isPaused: false,
    timerProgress: 0,
    startTime: undefined,
    pausedTime: undefined,
    showingIngredients: false
  });
}; 