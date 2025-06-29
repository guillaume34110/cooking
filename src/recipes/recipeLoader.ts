import { getLanguage } from '../state/appState.js';

export type RecipeStep = {
  text: {
    fr: string;
    th: string;
  };
  duration: number;
  video?: string;
};

export type Recipe = {
  id: string;
  title: {
    fr: string;
    th: string;
  };
  description: {
    fr: string;
    th: string;
  };
  video: string;
  steps: RecipeStep[];
};

// Données des recettes intégrées
const recipes: Recipe[] = [
  {
    id: 'crepe-classique',
    title: {
      fr: 'Crêpe classique',
      th: 'เครปคลาสสิก'
    },
    description: {
      fr: 'Une délicieuse crêpe traditionnelle française',
      th: 'เครปแบบดั้งเดิมของฝรั่งเศสที่อร่อย'
    },
    video: '../public/videos/crepe-classique.mp4',
    steps: [
      {
        text: {
          fr: 'Mélanger la farine et les œufs dans un bol',
          th: 'ผสมแป้งและไข่ในชาม'
        },
        duration: 120,
        video: '../public/videos/mix-ingredients.mp4'
      },
      {
        text: {
          fr: 'Ajouter le lait progressivement en remuant',
          th: 'เติมนมทีละน้อยแล้วคนให้เข้ากัน'
        },
        duration: 90,
        video: '../public/videos/add-milk.mp4'
      },
      {
        text: {
          fr: 'Chauffer la poêle et ajouter un peu de beurre',
          th: 'ตั้งกระทะแล้วใส่เนยนิดหน่อย'
        },
        duration: 60,
        video: '../public/videos/heat-pan.mp4'
      },
      {
        text: {
          fr: 'Verser la pâte et étaler uniformément',
          th: 'เทแป้งลงแล้วกระจายให้ทั่ว'
        },
        duration: 45,
        video: '../public/videos/pour-batter.mp4'
      },
      {
        text: {
          fr: 'Cuire 2 minutes puis retourner la crêpe',
          th: 'ปิ้ง 2 นาทีแล้วพลิก'
        },
        duration: 120,
        video: '../public/videos/flip-crepe.mp4'
      },
      {
        text: {
          fr: 'Cuire encore 1 minute et servir',
          th: 'ปิ้งอีก 1 นาทีแล้วเสิร์ฟ'
        },
        duration: 60,
        video: '../public/videos/serve-crepe.mp4'
      }
    ]
  },
  {
    id: 'crepe-sucree',
    title: {
      fr: 'Crêpe sucrée',
      th: 'เครปหวาน'
    },
    description: {
      fr: 'Crêpe avec sucre et garniture sucrée',
      th: 'เครปใส่น้ำตาลและไส้หวาน'
    },
    video: '../public/videos/crepe-sucree.mp4',
    steps: [
      {
        text: {
          fr: 'Préparer la pâte à crêpe avec du sucre vanillé',
          th: 'เตรียมแป้งเครปใส่น้ำตาลวานิลา'
        },
        duration: 150,
        video: '../public/videos/sweet-batter.mp4'
      },
      {
        text: {
          fr: 'Cuire la crêpe comme une crêpe classique',
          th: 'ทำเครปแบบเดียวกับเครปธรรมดา'
        },
        duration: 180,
        video: '../public/videos/cook-sweet-crepe.mp4'
      },
      {
        text: {
          fr: 'Ajouter confiture ou chocolat selon le goût',
          th: 'ใส่แยมหรือช็อกโกแลตตามใจชอบ'
        },
        duration: 30,
        video: '../public/videos/add-toppings.mp4'
      },
      {
        text: {
          fr: 'Plier et servir chaud',
          th: 'พับแล้วเสิร์ฟร้อนๆ'
        },
        duration: 20,
        video: '../public/videos/fold-serve.mp4'
      }
    ]
  },
  {
    id: 'crepe-salee',
    title: {
      fr: 'Crêpe salée',
      th: 'เครปเค็ม'
    },
    description: {
      fr: 'Galette de sarrasin avec garniture salée',
      th: 'แกเลตต์เซาร์บลูแอตใส่ไส้เค็ม'
    },
    video: '../public/videos/crepe-salee.mp4',
    steps: [
      {
        text: {
          fr: 'Mélanger farine de sarrasin, œuf et eau salée',
          th: 'ผสมแป้งเซาร์บลูแอต ไข่ และน้ำเกลือ'
        },
        duration: 90,
        video: '../public/videos/buckwheat-batter.mp4'
      },
      {
        text: {
          fr: 'Laisser reposer la pâte 30 minutes',
          th: 'พักแป้ง 30 นาที'
        },
        duration: 1800,
        video: '../public/videos/rest-batter.mp4'
      },
      {
        text: {
          fr: 'Cuire la galette dans une poêle bien chaude',
          th: 'ทำแกเลตต์ในกระทะร้อนจัด'
        },
        duration: 120,
        video: '../public/videos/cook-galette.mp4'
      },
      {
        text: {
          fr: 'Ajouter jambon, fromage et œuf au centre',
          th: 'ใส่แฮม ชีส และไข่ตรงกลาง'
        },
        duration: 60,
        video: '../public/videos/add-savory-filling.mp4'
      },
      {
        text: {
          fr: 'Plier les bords et servir immédiatement',
          th: 'พับขอบแล้วเสิร์ฟทันที'
        },
        duration: 30,
        video: '../public/videos/fold-galette.mp4'
      }
    ]
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getAllRecipes = (): Recipe[] => {
  return [...recipes];
};

export const getLocalizedRecipe = (recipe: Recipe) => {
  const language = getLanguage();
  
  return {
    ...recipe,
    title: recipe.title[language] || recipe.title.fr,
    description: recipe.description[language] || recipe.description.fr,
    steps: recipe.steps.map(step => ({
      ...step,
      text: step.text[language] || step.text.fr
    }))
  };
}; 