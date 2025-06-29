import { initializeState, getAppState, setAvailableRecipes } from './state/appState';
import { renderApp } from './ui/render';
import { bindAddSlotButton, bindSlotActions } from './ui/events';
import { Recipe } from './core/types';

const loadRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await fetch('/recipes/crepe-classique.json'); // Path absolute from web root
        if (!response.ok) {
            console.error(`Error loading recipes: ${response.statusText}`);
            return [];
        }
        const recipe = await response.json();
        return [recipe];
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        return [];
    }
};

const main = async () => {
    // 1. On initialise TOUJOURS l'état et l'UI de base d'abord.
    // Cela garantit qu'on n'a jamais de page blanche.
    initializeState([]); 
    renderApp();
    bindAddSlotButton();
    bindSlotActions();

    // 2. Ensuite, on essaie de charger les données.
    const recipes = await loadRecipes();
    
    // 3. On met à jour l'état avec les recettes si elles sont chargées
    if (recipes.length > 0) {
        setAvailableRecipes(recipes);
        // On pourrait re-render si nécessaire, mais ici ce n'est pas utile
        // car les recettes ne sont utilisées que dans la modale.
    } else {
        // On pourrait afficher une erreur à l'utilisateur ici.
        console.log("Aucune recette n'a pu être chargée, mais l'application est prête.");
    }
};

main(); 