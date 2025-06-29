import { renderLanguageSwitcher, renderSlot } from "./ui/render.js";
import {
  bindClickToAddSlot,
  bindSelectRecipe,
  bindTimerButton,
  bindNavButtons,
} from "./ui/events.js";
import { initState, addSlot } from "./state/appState.js";
import { bindLanguageSwitcher } from "./ui/events.js";

const start = () => {
  initState();
  renderLanguageSwitcher();
  addSlot();
  renderSlot();
  bindLanguageSwitcher();
  bindClickToAddSlot();
  bindSelectRecipe();
  bindTimerButton();
  bindNavButtons();
};

document.addEventListener("DOMContentLoaded", start); 