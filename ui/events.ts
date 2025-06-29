import { addSlot, getAppState, updateSlotState } from "../state/appState";
import { renderApp, renderRecipeModal } from "./render";
import { activeRunners, createRecipeRunner } from "../core/runner";

const handleSlotAction = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const action = target.dataset.action;
    const slotIdAttr = target.closest('[data-slot-id]')?.getAttribute('data-slot-id') || target.getAttribute('data-slot-id');
    const slotId = parseInt(slotIdAttr || '-1');

    if (action === 'add-recipe') {
        renderRecipeModal(slotId);
        bindRecipeSelection(); // On attache l'event de la modale juste après sa création
        return;
    }
    
    const runner = activeRunners.get(slotId);
    if (!runner) return;

    switch (action) {
        case 'next': runner.goToNextStep(); break;
        case 'prev': runner.goToPreviousStep(); break;
        case 'reset': runner.resetCurrentStep(); break;
        case 'close':
            runner.stopTimer();
            activeRunners.delete(slotId);
            updateSlotState(slotId, { status: 'empty', recipeId: undefined, currentStepIndex: 0, progress: 0 });
            break;
    }
    renderApp();
    bindSlotActions(); // Re-bind for new elements
};

export const bindSlotActions = () => {
    document.querySelectorAll<HTMLElement>('[data-action]').forEach(element => {
        // Simple way to avoid re-binding
        if ((element as any).isBound) return;
        element.addEventListener('click', handleSlotAction);
        (element as any).isBound = true;
    });
};

export const bindRecipeSelection = () => {
    const button = document.getElementById('select-recipe-button') as HTMLButtonElement;
    const modal = document.getElementById('recipe-modal');
    if (!button || !modal) return;

    // Evite le double-binding
    if ((button as any).isBound) return;
    (button as any).isBound = true;

    button.addEventListener('click', () => {
        const slotId = parseInt(button.dataset.slotId!);
        const selectedRecipeElem = modal.querySelector<HTMLElement>('.recipe-wheel-item.selected');
        const recipeId = selectedRecipeElem?.dataset.recipeId;
        const recipe = getAppState().availableRecipes.find(r => r.id === recipeId);

        if (recipe) {
            const runner = createRecipeRunner(slotId, recipe);
            activeRunners.set(slotId, runner);
            runner.start();
        }
        
        modal.remove();
        renderApp();
        bindSlotActions();
    });
    
    modal.querySelectorAll<HTMLElement>('.recipe-wheel-item').forEach(item => {
        item.addEventListener('click', () => {
            modal.querySelector<HTMLElement>('.selected')?.classList.remove('selected');
            item.classList.add('selected');
        });
    });
};

export const bindAddSlotButton = () => {
    const button = document.getElementById('add-slot-button');
    if (!button) return;
    if ((button as any).isBound) return; 

    button.addEventListener('click', () => {
        addSlot();
        renderApp();
        bindSlotActions();
    });
    (button as any).isBound = true;
}; 