import { addSlot } from "../state/appState.js";
import { renderSlot } from "./render.js";
import { getLanguage, setLanguage } from "../state/appState.js";
export const bindClickToAddSlot = () => document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
        addSlot();
        renderSlot();
    }
});
export const bindSelectRecipe = () => { };
export const bindTimerButton = () => { };
export const bindNavButtons = () => { };
export const bindLanguageSwitcher = () => document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("language-switcher")) {
        const newLang = getLanguage() === "fr" ? "th" : "fr";
        setLanguage(newLang);
        el.textContent = newLang.toUpperCase();
    }
});
