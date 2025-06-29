import { getLanguage, getSlots } from "../state/appState.js";

const q = (sel: string) => document.querySelector(sel) as HTMLElement;

export const renderSlot = () => {
  const app = q("#app");
  app.innerHTML = "";
  getSlots().forEach((slot) => {
    const div = document.createElement("div");
    div.className = "slot";
    div.dataset.id = slot.id;
    div.innerHTML = `<button class="btn-add">+</button>`;
    app.appendChild(div);
  });
};

export const renderLanguageSwitcher = () => {
  const existing = q(".language-switcher");
  if (existing) {
    existing.textContent = getLanguage().toUpperCase();
    return;
  }
  const btn = document.createElement("button");
  btn.className = "language-switcher";
  btn.textContent = getLanguage().toUpperCase();
  document.body.appendChild(btn);
};

export const renderStep = (html: string) => {
  const slot = q(".slot");
  slot.innerHTML = html;
};

export const renderTimerBar = (ratio: number) => {
  const bar = q(".timer-bar") || document.createElement("div");
  bar.className = "timer-bar";
  bar.style.width = `${ratio * 100}%`;
  q(".slot").appendChild(bar);
}; 