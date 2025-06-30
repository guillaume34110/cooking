import { getLanguage } from '../state/appState.js';

export type RecipeStep = {
  text: {
    fr: string;
    th: string;
  };
  duration: number;
  media: {
    type: 'video' | 'image';
    url: string;
  };
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
  ingredients: {
    fr: string[];
    th: string[];
  };
  image: string; // Image pour la liste des ingrédients
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
    ingredients: {
      fr: [
        '250g de farine',
        '4 œufs',
        '500ml de lait',
        '1 pincée de sel',
        "50g d'huile de coco",
        'huile pour la cuisson'
      ],
      th: [
        'แป้งสาลี 250 กรัม',
        'ไข่ไก่ 4 ฟอง',
        'นม 500 มล.',
        'เกลือเล็กน้อย',
        'น้ำมันมะพร้าว 50 กรัม',
        'น้ำมันสำหรับทอด'
      ]
    },
    image: '/assets/images/ingredientpatecrepe.png',
    video: '/videos/crepe-classique.mp4',
    steps: [
      {
        text: {
          fr: 'Mélanger la farine et les œufs et le lait le sel dans un mixeur',
          th: 'ผสมแป้ง ไข่ และนมในเครื่องปั่น'
        },
        duration: 10,
                  media: {
            type: 'image',
            url: '/assets/images/melangemixeur.png'
          }
      },
      {
        text: {
          fr: 'mixer',
          th: 'เปิดเครื่องปั่น'
        },
        duration: 40,
        media: {
          type: 'image',
          url: '/assets/images/mixermixin.webp'
        }
      },
      {
        text: {
          fr: "Chauffer la poêle et ajouter un peu d'huile 180-200",
          th: 'ตั้งกระทะให้ร้อน แล้วใส่น้ำมันเล็กน้อย 180-200'
        },
        duration: 60,
        media: {
          type: 'image',
          url: '/assets/images/crepeierchaude.png'
        }
      },
      {
        text: {
          fr: 'Verser la pâte et étaler uniformément',
          th: 'เทแป้งลงแล้วกระจายให้ทั่ว'
        },
        duration: 45,
        media: {
          type: 'image',
          url: '/assets/images/crepiereetalage.png'
        }
      },
      {
        text: {
          fr: 'Cuire 2 minutes puis retourner la crêpe',
          th: 'ปิ้ง 2 นาทีแล้วพลิก'
        },
        duration: 120,
        media: {
          type: 'image',
          url: '/assets/images/cuisson.png'
        }
      },
      {
        text: {
          fr: 'Cuire encore 1 minute et servir',
          th: 'ปิ้งอีก 1 นาทีแล้วเสิร์ฟ'
        },
        duration: 60,
        media: {
          type: 'image',
          url: '/assets/images/cuisson.png'
        }
      }
    ]
  }, {
    id: "savon-barre-classique",
    title: {
      fr: "Savon en barre classique",
      th: "สบู่ก้อนสูตรมาตรฐาน"
    },
    description: {
      fr: "Savon saponifié à froid à base d’huile de palme, coco, et huiles fluides, enrichi en lait de coco, talc, et huiles essentielles.",
      th: "สบู่กวนเย็นทำจากน้ำมันปาล์ม น้ำมันมะพร้าว และน้ำมันเหลว เติมน้ำนมมะพร้าว แป้งทัลก์ และน้ำมันหอมระเหย"
    },
    ingredients: {
      fr: [
        "600g d’huile de palme",
        "150g d’huile de coco",
        "250g d’huile fluide (tournesol, colza, riz, maïs, soja, coco)",
        "142g de soude (NaOH)",
        "325g d’eau (dont 50g à retirer pour la trace)",
        "30g de lait de coco",
        "30g de poudre de talc",
        "80g d’huile essentielle",
        "3g de poudre colorée (paprika, matcha, charbon – optionnel)"
      ],
      th: [
        "น้ำมันปาล์ม 600 กรัม",
        "น้ำมันมะพร้าว 150 กรัม",
        "น้ำมันเหลว 250 กรัม (ดอกทานตะวัน คาโนลา ข้าว ข้าวโพด ถั่วเหลือง มะพร้าว)",
        "โซดาไฟ 142 กรัม",
        "น้ำ 325 กรัม (แยกไว้ 50 กรัมสำหรับตอน Trace)",
        "กะทิ 30 กรัม",
        "แป้งทัลก์ 30 กรัม",
        "น้ำมันหอมระเหย 80 กรัม",
        "ผงสี 3 กรัม (ปาปริกา ชาเขียว ถ่านไม้ – ตามต้องการ)"
      ]
    },
    image: "/assets/images/barsoap.png",
    video: "/assets/videos/savon-intro.mp4",
    steps: [
      {
        text: {
          fr: "Peser et mélanger 600g d’huile de palme, 150g d’huile de coco et 250g d’huile fluide dans un grand récipient. Réserver 50g pour la trace.",
          th: "ชั่งและผสมน้ำมันปาล์ม 600 กรัม น้ำมันมะพร้าว 150 กรัม และน้ำมันเหลว 250 กรัม ในภาชนะขนาดใหญ่ แยกไว้ 50 กรัมสำหรับตอน Trace"
        },
        duration: 60,
        media: {
          type: "image",
          url: "/assets/images/huilesinbowl.png"
        }
      },
      {
        text: {
          fr: "Dissoudre 142g de soude dans 325g d’eau. Attention aux vapeurs.",
          th: "ละลายโซดาไฟ 142 กรัม ในน้ำ 325 กรัม ระวังไอร้อน"
        },
        duration: 120,
        media: {
          type: "image",
          url: "/assets/images/soudemix.png"
        }
      },
      {
        text: {
          fr: "Mélanger ensemble dans un petit récipient : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "ผสมส่วนผสมทั้งหมดในถ้วยเล็ก: น้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 90,
        media: {
          type: "image",
          url: "/assets/images/tracemix.png"
        }
      },
      {
        text: {
          fr: "Laisser refroidir les deux mélanges (huiles et soude diluée) à environ 40°C.",
          th: "ปล่อยให้น้ำมันและน้ำด่างเย็นลงที่อุณหภูมิประมาณ 40°C"
        },
        duration: 600,
        media: {
          type: "image",
          url: "/assets/images/cooldown.png"
        }
      },
      {
        text: {
          fr: "Mixer au blender les deux mélanges jusqu'à obtenir la trace (texture crème).",
          th: "ปั่นน้ำมันและน้ำด่างจนถึงช่วง Trace (เนื้อครีม)"
        },
        duration: 30,
        media: {
          type: "image",
          url: "/assets/images/mixsoap.png"
        }
      },
      {
        text: {
          fr: "Ajouter les ingrédients de finition : 50g d’huile réservée, 30g de lait de coco, 30g de talc, 80g d’huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "เติมน้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 60,
        media: {
          type: "image",
          url: "/assets/images/finalmix.png"
        }
      },
      {
        text: {
          fr: "Verser la pâte dans un moule rectangulaire propre.",
          th: "เทส่วนผสมลงในพิมพ์สี่เหลี่ยมที่สะอาด"
        },
        duration: 30,
        media: {
          type: "image",
          url: "/assets/images/moulesavon.png"
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l’eau.",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำสะอาด"
        },
        duration: 60,
        media: {
          type: "image",
          url: "/assets/images/nettoyagesavon.png"
        }
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
    ingredients: recipe.ingredients[language] || recipe.ingredients.fr,
    steps: recipe.steps.map(step => ({
      ...step,
      text: step.text[language] || step.text.fr
    }))
  };
}; 