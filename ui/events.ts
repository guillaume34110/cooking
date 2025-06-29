import { addSlot } from "../state/appState.js";
import { renderSlot } from "./render.js";
import { getLanguage, setLanguage } from "../state/appState.js";

export const bindClickToAddSlot = () =>
  document.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).classList.contains("btn-add")) {
      addSlot();
      renderSlot();
    }
  });

export const bindSelectRecipe = () => {/* TODO */};

export const bindTimerButton = () => {/* TODO */};

export const bindNavButtons = () => {/* TODO */};

export const bindLanguageSwitcher = () =>
  document.addEventListener("click", (e) => {
    const el = e.target as HTMLElement;
    if (el.classList.contains("language-switcher")) {
      const newLang = getLanguage() === "fr" ? "th" : "fr";
      setLanguage(newLang);
      el.textContent = newLang.toUpperCase();
    }
  }); 