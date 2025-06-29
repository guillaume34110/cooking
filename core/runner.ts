import { Recipe, Step } from "./types";
import { getAppState, updateSlotState } from "../state/appState";

// Runner ne devrait pas déclencher de render. 
// Les événements (clics) déclenchent le runner, puis un render.

export const createRecipeRunner = (slotId: number, recipe: Recipe) => {
    const findSlot = () => getAppState().slots.find(s => s.id === slotId);

    const getCurrentStep = (): Step | undefined => {
        const slot = findSlot();
        return slot ? recipe.steps[slot.currentStepIndex] : undefined;
    };

    const updateState = (updates: object) => {
        updateSlotState(slotId, updates);
    };

    const stopTimer = () => {
        const slot = findSlot();
        if (slot?.timerId) {
            clearInterval(slot.timerId);
            updateState({ timerId: undefined });
        }
    };
    
    const goToStep = (stepIndex: number) => {
        if (stepIndex < 0 || stepIndex >= recipe.steps.length) return;
        stopTimer();
        updateState({ currentStepIndex: stepIndex, progress: 0 });
        startTimer(); // Le render sera appelé par l'event handler
    };

    const goToNextStep = () => {
        const slot = findSlot();
        if (!slot || isFinished()) return;
        goToStep(slot.currentStepIndex + 1);
    };
    
    const onTimerEnd = () => {
        if (isFinished()) {
            updateState({ status: 'finished', progress: 100 });
        } else {
            goToNextStep();
        }
    };
    
    const startTimer = () => {
        const step = getCurrentStep();
        if (!step || step.duration <= 0) return;

        let progress = 0;
        const interval = 100; // ms
        const totalTenthsOfSecond = step.duration * 10;
        
        const timerId = setInterval(() => {
            progress++;
            const newProgress = (progress / totalTenthsOfSecond) * 100;
            updateState({ progress: newProgress });
            // Le rendu est déclenché par un `requestAnimationFrame` dans `main.ts` pour la performance
            
            if (progress >= totalTenthsOfSecond) {
                stopTimer();
                onTimerEnd();
            }
        }, interval);

        updateState({ timerId: timerId as unknown as number });
    };

    const isFinished = (): boolean => {
        const slot = findSlot();
        return slot ? slot.currentStepIndex >= recipe.steps.length -1 : true;
    };

    return {
        start: () => {
            updateState({ status: 'active', recipeId: recipe.id, currentStepIndex: 0, progress: 0 });
            startTimer();
        },
        goToNextStep,
        goToPreviousStep: () => {
            const slot = findSlot();
            if (!slot) return;
            goToStep(slot.currentStepIndex - 1);
        },
        resetCurrentStep: () => {
            const slot = findSlot();
            if (!slot) return;
            goToStep(slot.currentStepIndex);
        },
        stopTimer,
        isFinished,
        getCurrentStep,
        slotId,
        recipe
    };
};

// Garder une trace des runners actifs
export const activeRunners: Map<number, ReturnType<typeof createRecipeRunner>> = new Map(); 