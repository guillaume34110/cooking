import { getAppState } from "../state/appState";
import { Recipe, SlotState } from "../core/types";

const getLocalizedText = (textObj: { fr: string, th: string }): string => {
    return textObj[getAppState().activeLanguage];
};

const renderTimerBar = (progress: number): string => {
    return `
        <div class="timer-bar-container">
            <div class="timer-bar-progress" style="width: ${progress}%;"></div>
        </div>
    `;
};

const renderStep = (slot: SlotState, recipe: Recipe): string => {
    const step = recipe.steps[slot.currentStepIndex];
    if (!step) return '<div>Recette terminée !</div>';

    return `
        <div class="recipe-view" data-slot-id="${slot.id}">
            <video class="recipe-video" src="${step.video}" autoplay loop muted></video>
            <div class="step-text">${getLocalizedText(step.text)}</div>
            ${renderTimerBar(slot.progress)}
            <div class="nav-buttons">
                <button class="nav-button" data-action="prev">Précédent</button>
                <button class="nav-button" data-action="reset">Réinitialiser</button>
                <button class="nav-button" data-action="next">Suivant</button>
            </div>
            <button class="nav-button" data-action="close">Terminer</button>
        </div>
    `;
};

const renderSlot = (slot: SlotState): string => {
    const { status, recipeId } = slot;
    const recipe = getAppState().availableRecipes.find(r => r.id === recipeId);

    const content = () => {
        switch (status) {
            case 'empty':
                return `<div class="slot-placeholder" data-action="add-recipe" data-slot-id="${slot.id}">+</div>`;
            case 'active':
                return recipe ? renderStep(slot, recipe) : 'Erreur: recette non trouvée';
            case 'finished':
                return `<div>${getLocalizedText(recipe!.title)} terminée ! <button data-action="close" data-slot-id="${slot.id}">Fermer</button></div>`;
            default:
                return '';
        }
    };
    
    return `<div class="slot ${status === 'active' ? 'active' : ''}" id="slot-${slot.id}">${content()}</div>`;
};

export const renderRecipeModal = (slotId: number) => {
    const { availableRecipes } = getAppState();
    const items = availableRecipes.map((recipe, index) =>
        `<div class="recipe-wheel-item ${index === 0 ? 'selected' : ''}" data-recipe-id="${recipe.id}">
            ${getLocalizedText(recipe.title)}
        </div>`
    ).join('');

    const modalHTML = `
        <div class="modal-overlay" id="recipe-modal">
            <div class="modal-content">
                <h2 class="modal-title">Sélectionner la recette</h2>
                <div class="recipe-wheel">${items}</div>
                <button class="modal-button" id="select-recipe-button" data-slot-id="${slotId}">Choisir</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    // La liaison se fait dans events.ts qui sera appelé après la création de la modale
};

export const renderApp = () => {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    
    const { slots } = getAppState();
    appContainer.innerHTML = slots.map(renderSlot).join('');

    const addSlotButton = document.getElementById('add-slot-button')!;
    const hasActiveSlots = slots.some(s => s.status !== 'empty');
    addSlotButton.style.display = hasActiveSlots ? 'block' : 'none';
}; 