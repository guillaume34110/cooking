import { getLanguage } from '../state/appState.js';

export type TranslationKey = 
  | 'add-recipe'
  | 'select-recipe' 
  | 'choose'
  | 'cancel'
  | 'crepe-classique-title'
  | 'crepe-sucree-title'
  | 'crepe-salee-title'
  | 'start-timer'
  | 'pause-timer'
  | 'resume-timer'
  | 'stop-timer'
  | 'reset-step'
  | 'previous-step'
  | 'next-step'
  | 'close-recipe'
  | 'step'
  | 'of'
  | 'minutes'
  | 'seconds'
  | 'finished'
  | 'timer-ended';

type Translations = {
  [key in TranslationKey]: {
    fr: string;
    th: string;
  };
};

const translations: Translations = {
  'add-recipe': {
    fr: 'Ajouter une recette',
    th: 'เพิ่มสูตรอาหาร'
  },
  'select-recipe': {
    fr: 'Sélectionner la recette',
    th: 'เลือกสูตรอาหาร'
  },
  'choose': {
    fr: 'Choisir',
    th: 'เลือก'
  },
  'cancel': {
    fr: 'Annuler',
    th: 'ยกเลิก'
  },
  'crepe-classique-title': {
    fr: 'Crêpe classique',
    th: 'เครปคลาสสิก'
  },
  'crepe-sucree-title': {
    fr: 'Crêpe sucrée',
    th: 'เครปหวาน'
  },
  'crepe-salee-title': {
    fr: 'Crêpe salée',
    th: 'เครปเค็ม'
  },
  'start-timer': {
    fr: 'Démarrer',
    th: 'เริ่ม'
  },
  'pause-timer': {
    fr: 'Pause',
    th: 'หยุดชั่วคราว'
  },
  'resume-timer': {
    fr: 'Reprendre',
    th: 'ดำเนินต่อ'
  },
  'stop-timer': {
    fr: 'Arrêter',
    th: 'หยุด'
  },
  'reset-step': {
    fr: 'Réinitialiser',
    th: 'รีเซ็ต'
  },
  'previous-step': {
    fr: 'Précédent',
    th: 'ก่อนหน้า'
  },
  'next-step': {
    fr: 'Suivant',
    th: 'ถัดไป'
  },
  'close-recipe': {
    fr: 'Fermer',
    th: 'ปิด'
  },
  'step': {
    fr: 'Étape',
    th: 'ขั้นตอน'
  },
  'of': {
    fr: 'sur',
    th: 'จาก'
  },
  'minutes': {
    fr: 'minutes',
    th: 'นาที'
  },
  'seconds': {
    fr: 'secondes',
    th: 'วินาที'
  },
  'finished': {
    fr: 'Terminé !',
    th: 'เสร็จแล้ว!'
  },
  'timer-ended': {
    fr: 'Temps écoulé !',
    th: 'หมดเวลาแล้ว!'
  }
};

export const getTranslation = (key: TranslationKey): string => {
  const language = getLanguage();
  return translations[key][language] || translations[key].fr;
};

export const loadTranslations = (): void => {
  console.log('🌐 Traductions chargées');
};

export const updatePageTranslations = (): void => {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n') as TranslationKey;
    if (key && translations[key]) {
      element.textContent = getTranslation(key);
    }
  });
}; 