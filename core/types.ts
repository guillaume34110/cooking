// core/types.ts

export type Language = 'fr' | 'th';

export type LocalizedString = {
  [key in Language]: string;
};

export type Step = {
  text: LocalizedString;
  duration: number; // in seconds
  video: string; // local path
};

export type Recipe = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  video: string;
  steps: Step[];
};

export type SlotStatus = 'empty' | 'active' | 'finished';

export type SlotState = {
  id: number;
  status: SlotStatus;
  recipeId?: string;
  currentStepIndex: number;
  timerId?: number;
  progress: number;
};

export type AppState = {
  slots: SlotState[];
  availableRecipes: Recipe[];
  activeLanguage: Language;
}; 