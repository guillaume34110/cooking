const state = {
    language: "fr",
    slots: [],
};
export const initState = () => state;
export const addSlot = () => state.slots.push({ id: `slot-${Date.now()}` });
export const removeSlot = (id) => (state.slots = state.slots.filter((s) => s.id !== id));
export const setLanguage = (lang) => (state.language = lang);
export const getSlots = () => state.slots;
export const getLanguage = () => state.language;
