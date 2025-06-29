export type Language = "fr" | "th";

export type Slot = {
  id: string;
  recipeId?: string;
};

const state = {
  language: "fr" as Language,
  slots: [] as Slot[],
};

export const initState = () => state;

export const addSlot = () => state.slots.push({ id: `slot-${Date.now()}` });

export const removeSlot = (id: string) =>
  (state.slots = state.slots.filter((s) => s.id !== id));

export const setLanguage = (lang: Language) => (state.language = lang);

export const getSlots = () => state.slots;

export const getLanguage = () => state.language; 