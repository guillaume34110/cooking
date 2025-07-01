import { getLanguage } from '../state/appState.js';
import { getImagePath, getVideoPath } from '../core/assets.js';

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
    image: getImagePath('ingredientpatecrepe.png'),
    video: getVideoPath('crepe-classique.mp4'),
    steps: [
      {
        text: {
          fr: 'Mélanger la farine et les œufs et le lait le sel dans un mixeur',
          th: 'ผสมแป้ง ไข่ และนมในเครื่องปั่น'
        },
        duration: 10,
                  media: {
            type: 'image',
            url: getImagePath('melangemixeur.png')
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
          url: getImagePath('mixermixin.webp')
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
          url: getImagePath('crepeierchaude.png')
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
          url: getImagePath('crepiereetalage.png')
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
          url: getImagePath('cuisson.png')
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
          url: getImagePath('cuisson.png')
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
      fr: "Savon saponifié à froid à base d'huile de palme, coco, et huiles fluides, enrichi en lait de coco, talc, et huiles essentielles.",
      th: "สบู่กวนเย็นทำจากน้ำมันปาล์ม น้ำมันมะพร้าว และน้ำมันเหลว เติมน้ำนมมะพร้าว แป้งทัลก์ และน้ำมันหอมระเหย"
    },
    ingredients: {
      fr: [
        "600g d'huile de palme",
        "150g d'huile de coco",
        "250g d'huile fluide (tournesol, colza, riz, maïs, soja, coco)",
        "142g de soude (NaOH)",
        "325g d'eau ",
        "30g de lait de coco",
        "30g de poudre de talc",
        "80g d'huile essentielle",
        "3g de poudre colorée (paprika, matcha, charbon – optionnel)"
      ],
      th: [
        "น้ำมันปาล์ม 600 กรัม",
        "น้ำมันมะพร้าว 150 กรัม",
        "น้ำมันเหลว 250 กรัม (ดอกทานตะวัน คาโนลา ข้าว ข้าวโพด ถั่วเหลือง มะพร้าว)",
        "โซดาไฟ 142 กรัม",
        "น้ำ 325 กรัม ",
        "กะทิ 30 กรัม",
        "แป้งทัลก์ 30 กรัม",
        "น้ำมันหอมระเหย 80 กรัม",
        "ผงสี 3 กรัม (ปาปริกา ชาเขียว ถ่านไม้ – ตามต้องการ)"
      ]
    },
    image: getImagePath("barsoap.png"),
    video: getVideoPath("savon-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Peser et mélanger 600g d'huile de palme, 150g d'huile de coco et 250g d'huile fluide dans un grand récipient. Réserver 50g pour la trace.",
          th: "ชั่งและผสมน้ำมันปาล์ม 600 กรัม น้ำมันมะพร้าว 150 กรัม และน้ำมันเหลว 250 กรัม ในภาชนะขนาดใหญ่ แยกไว้ 50 กรัมสำหรับตอน Trace"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("huilesinbowl.png")
        }
      },
      {
        text: {
          fr: "Dissoudre 142g de soude dans 325g d'eau. Attention aux vapeurs.",
          th: "ละลายโซดาไฟ 142 กรัม ในน้ำ 325 กรัม ระวังไอร้อน"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("soudemix.png")
        }
      },
      {
        text: {
          fr: "Mélanger ensemble dans un petit récipient : 50g d'huile réservée, 30g de lait de coco, 30g de talc, 80g d'huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "ผสมส่วนผสมทั้งหมดในถ้วยเล็ก: น้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 90,
        media: {
          type: "image",
          url: getImagePath("tracemix.png")
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
          url: getImagePath("cooldown.png")
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
          url: getImagePath("mixsoap.png")
        }
      },
      {
        text: {
          fr: "Ajouter les ingrédients de finition : 50g d'huile réservée, 30g de lait de coco, 30g de talc, 80g d'huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "เติมน้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
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
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau.",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำสะอาด"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "savon-moule-custom",
    title: {
      fr: "Savon moulé custom",
      th: "สบู่ก้อนพิมพ์ลาย"
    },
    description: {
      fr: "Savon saponifié à froid pour moules custom, à base d'huile de palme et coco.",
      th: "สบู่กวนเย็นสำหรับพิมพ์ลาย ทำจากน้ำมันปาล์มและน้ำมันมะพร้าว"
    },
    ingredients: {
      fr: [
        "800g d'huile de palme",
        "200g d'huile de coco",
        "142g de soude (NaOH)",
        "325g d'eau",
        "30g de lait de coco",
        "30g de poudre de talc",
        "80g d'huile essentielle",
        "3g de poudre colorée (paprika, matcha, charbon – optionnel)"
      ],
      th: [
        "น้ำมันปาล์ม 800 กรัม",
        "น้ำมันมะพร้าว 200 กรัม",
        "โซดาไฟ 142 กรัม",
        "น้ำ 325 กรัม",
        "กะทิ 30 กรัม",
        "แป้งทัลก์ 30 กรัม",
        "น้ำมันหอมระเหย 80 กรัม",
        "ผงสี 3 กรัม (ปาปริกา ชาเขียว ถ่านไม้ – ตามต้องการ)"
      ]
    },
    image: getImagePath("moulesavon.png"),
    video: getVideoPath("savon-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Peser et mélanger 800g d'huile de palme et 200g d'huile de coco dans un grand récipient. Réserver 50g pour la trace.",
          th: "ชั่งและผสมน้ำมันปาล์ม 800 กรัม และน้ำมันมะพร้าว 200 กรัม ในภาชนะขนาดใหญ่ แยกไว้ 50 กรัมสำหรับตอน Trace"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("huilesinbowl.png")
        }
      },
      {
        text: {
          fr: "Dissoudre 142g de soude dans 325g d'eau. Attention aux vapeurs.",
          th: "ละลายโซดาไฟ 142 กรัม ในน้ำ 325 กรัม ระวังไอร้อน"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("soudemix.png")
        }
      },
      {
        text: {
          fr: "Mélanger ensemble dans un petit récipient : 50g d'huile réservée, 30g de lait de coco, 30g de talc, 80g d'huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "ผสมส่วนผสมทั้งหมดในถ้วยเล็ก: น้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 90,
        media: {
          type: "image",
          url: getImagePath("tracemix.png")
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
          url: getImagePath("cooldown.png")
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
          url: getImagePath("mixsoap.png")
        }
      },
      {
        text: {
          fr: "Ajouter les ingrédients de finition : 50g d'huile réservée, 30g de lait de coco, 30g de talc, 80g d'huile essentielle, et 3g de poudre colorée (facultatif).",
          th: "เติมน้ำมันที่แยกไว้ 50 กรัม กะทิ 30 กรัม แป้งทัลก์ 30 กรัม น้ำมันหอมระเหย 80 กรัม และผงสี 3 กรัม (ถ้ามี)"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Verser la pâte dans des moules custom.",
          th: "เทส่วนผสมลงในพิมพ์ลาย"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau.",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำสะอาด"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "baume-anti-moustique",
    title: {
      fr: "Baume anti-moustique",
      th: "บาล์มกันยุง"
    },
    description: {
      fr: "Baume solide anti-moustique naturel avec 5% d'huiles essentielles répulsives (10 pots x 50ml)",
      th: "บาล์มกันยุงธรรมชาติด้วยน้ำมันหอมระเหยไล่ยุง 5% (10 กระปุก x 50ml)"
    },
    ingredients: {
      fr: [
        "100g de cire d'abeille",
        "150g d'huile de coco",
        "125g d'huile de palme",
        "125g d'huile de tournesol ou canola",
        "10g d'huile essentielle de lavande officinale",
        "7,5g d'huile essentielle de tea tree",
        "5g d'huile essentielle de girofle",
        "5g d'huile essentielle de sandalwood",
        "2,5g d'huile essentielle de cannelle (écorce)",
        "Cristaux de menthol (facultatif)"
      ],
      th: [
        "ขี้ผึ้งธรรมชาติ 100 กรัม",
        "น้ำมันมะพร้าว 150 กรัม",
        "น้ำมันปาล์ม 125 กรัม",
        "น้ำมันดอกทานตะวันหรือคาโนลา 125 กรัม",
        "น้ำมันหอมระเหยลาเวนเดอร์ 10 กรัม",
        "น้ำมันหอมระเหยทีทรี 7.5 กรัม",
        "น้ำมันหอมระเหยกานพลู 5 กรัม",
        "น้ำมันหอมระเหยแซนดัลวูด 5 กรัม",
        "น้ำมันหอมระเหยอบเชยเปลือก 2.5 กรัม",
        "ผลึกเมนทอล (ตามต้องการ)"
      ]
    },
    image: getImagePath("huilesinbowl.png"),
    video: getVideoPath("baume-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Peser et préparer tous les ingrédients : 100g de cire d'abeille, 150g d'huile de coco, 125g d'huile de palme, 125g d'huile de tournesol",
          th: "ชั่งและเตรียมส่วนผสมทั้งหมด: ขี้ผึ้ง 100g น้ำมันมะพร้าว 150g น้ำมันปาล์ม 125g น้ำมันดอกทานตะวัน 125g"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("huilesinbowl.png")
        }
      },
      {
        text: {
          fr: "Faire fondre la cire d'abeille avec toutes les huiles dans une casserole à feu doux pendant 5 minutes sans dépasser 60°C",
          th: "ละลายขี้ผึ้งกับน้ำมันทั้งหมดในกระทะไฟอ่อน 5 นาที ไม่เกิน 60°C"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Retirer du feu et laisser refroidir légèrement (environ 40°C)",
          th: "ยกออกจากไฟและปล่อยให้เย็นลงเล็กน้อย (ประมาณ 40°C)"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
                    {
         text: {
            fr: "Ajouter les huiles essentielles : 10g de lavande, 7,5g de tea tree, 5g de girofle, 5g de sandalwood, 2,5g de cannelle",
            th: "เติมน้ำมันหอมระเหย: ลาเวนเดอร์ 10g ทีทรี 7.5g กานพลู 5g แซนดัลวูด 5g อบเชย 2.5g"
         },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Mélanger délicatement pour bien incorporer les huiles essentielles",
          th: "คนเบาๆ ให้น้ำมันหอมระเหยผสมเข้ากันดี"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("melangemixeur.png")
        }
      },
      {
        text: {
          fr: "Verser rapidement dans 10 pots de 50ml avant que le mélange ne fige",
          th: "เทลงในกระปุก 50ml จำนวน 10 ใบอย่างรวดเร็วก่อนที่จะแข็งตัว"
        },
        duration: 90,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Laisser refroidir complètement à température ambiante (environ 30 minutes)",
          th: "ปล่อยให้เย็นสนิทที่อุณหภูมิห้อง (ประมาณ 30 นาที)"
        },
        duration: 1800,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau chaude savonneuse",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำอ่างและสบู่"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "baume-calm-relief",
    title: {
      fr: "Baume Calm Relief",
      th: "บาล์มผ่อนคลาย"
    },
    description: {
      fr: "Baume compact nourrissant et apaisant avec 5% d'huiles essentielles (1kg)",
      th: "บาล์มบำรุงและผ่อนคลายด้วยน้ำมันหอมระเหย 5% (1kg)"
    },
    ingredients: {
      fr: [
        "250g de cire d'abeille",
        "250g de beurre de karité",
        "250g d'huile de tournesol ou huile de riz",
        "200g d'huile de coco",
        "1g de vitamine E (optionnel)",
        "7,5g d'huile essentielle de lavande",
        "5g d'huile essentielle de tea tree",
        "3,75g d'huile essentielle de bois de cèdre",
        "2,5g d'huile essentielle de santal",
        "1,25g d'huile essentielle d'osmanthus",
        "1,25g d'huile essentielle de thym ou romarin (optionnel)"
      ],
      th: [
        "ขี้ผึ้งธรรมชาติ 250 กรัม",
        "เนยชีอา 250 กรัม",
        "น้ำมันดอกทานตะวันหรือน้ำมันข้าว 250 กรัม",
        "น้ำมันมะพร้าว 200 กรัม",
        "วิตามิน E 1 กรัม (ตามต้องการ)",
        "น้ำมันหอมระเหยลาเวนเดอร์ 7.5 กรัม",
        "น้ำมันหอมระเหยทีทรี 5 กรัม",
        "น้ำมันหอมระเหยไม้ซีดาร์ 3.75 กรัม",
        "น้ำมันหอมระเหยแซนทัล 2.5 กรัม",
        "น้ำมันหอมระเหยออสมันธุส 1.25 กรัม",
        "น้ำมันหอมระเหยไทม์หรือโรสแมรี่ 1.25 กรัม (ตามต้องการ)"
      ]
    },
    image: getImagePath("huilesinbowl.png"),
    video: getVideoPath("baume-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Préparer tous les ingrédients : peser 250g de cire d'abeille, 250g de beurre de karité, 250g d'huile de tournesol, 200g d'huile de coco",
          th: "เตรียมส่วนผสมทั้งหมด: ชั่งขี้ผึ้ง 250g เนยชีอา 250g และน้ำมันพืชทั้งหมด"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("huilesinbowl.png")
        }
      },
      {
        text: {
          fr: "Faire fondre la cire d'abeille directement dans toutes les huiles (coco, tournesol) à feu doux",
          th: "ละลายขี้ผึ้งโดยตรงในน้ำมันทั้งหมด (มะพร้าว ดอกทานตะวัน) ไฟอ่อน"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Ajouter le beurre de karité et continuer à chauffer en mélangeant jusqu'à ce que tout soit fondu",
          th: "เติมเนยชีอาและให้ความร้อนต่อไปโดยคนจนทุกอย่างละลาย"
        },
        duration: 40,
        media: {
          type: "image",
          url: getImagePath("melangemixeur.png")
        }
      },
      {
        text: {
          fr: "Retirer du feu et laisser refroidir jusqu'à environ 45°C",
          th: "ยกออกจากไฟและปล่อยให้เย็นลงที่ประมาณ 45°C"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Incorporer les huiles essentielles : 7,5g lavande, 5g tea tree, 3,75g bois de cèdre, 2,5g santal, 1,25g osmanthus, 1,25g thym/romarin",
          th: "เติมน้ำมันหอมระเหย: ลาเวนเดอร์ 7.5g ทีทรี 5g ไม้ซีดาร์ 3.75g แซนทัล 2.5g ออสมันธุส 1.25g ไทม์/โรสแมรี่ 1.25g"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("tracemix.png")
        }
      },
      {
        text: {
          fr: "Couler immédiatement dans les pots en évitant les courants d'air",
          th: "เทลงในกระปุกทันทีโดยหลีกเลี่ยงลมพัด"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Laisser refroidir complètement à température ambiante (environ 2 heures)",
          th: "ปล่อยให้เย็นสนิทที่อุณหภูมิห้อง (ประมาณ 2 ชั่วโมง)"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau chaude savonneuse",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำอุ่นและสบู่"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "baume-repair-balm",
    title: {
      fr: "Repair Balm",
      th: "บาล์มซ่อมแซม"
    },
    description: {
      fr: "Baume cicatrisant solide pour petites plaies, brûlures légères et zones sèches avec 5% d'huiles essentielles (1kg)",
      th: "บาล์มรักษาแผลสำหรับแผลเล็ก ไฟไหม้เล็กน้อย และผิวแห้งด้วยน้ำมันหอมระเหย 5% (1kg)"
    },
    ingredients: {
      fr: [
        "250g de cire d'abeille",
        "200g de beurre de karité",
        "200g d'huile de coco",
        "150g d'huile de tournesol",
        "100g d'huile de son de riz",
        "100g d'huile de riz ou canola",
        "10g d'huile essentielle de tea tree",
        "10g d'huile essentielle de lavande",
        "7,5g d'huile essentielle de bois de cèdre",
        "5g d'huile essentielle d'eucalyptus",
        "5g d'huile essentielle de thym",
        "5g d'huile essentielle de romarin",
        "5g d'huile essentielle de citronnelle",
        "2,5g d'huile essentielle de santal ou rose (optionnel)"
      ],
      th: [
        "ขี้ผึ้งธรรมชาติ 250 กรัม",
        "เนยชีอา 200 กรัม",
        "น้ำมันมะพร้าว 200 กรัม",
        "น้ำมันดอกทานตะวัน 150 กรัม",
        "น้ำมันรำข้าว 100 กรัม",
        "น้ำมันข้าวหรือคาโนลา 100 กรัม",
        "น้ำมันหอมระเหยทีทรี 10 กรัม",
        "น้ำมันหอมระเหยลาเวนเดอร์ 10 กรัม",
        "น้ำมันหอมระเหยไม้ซีดาร์ 7.5 กรัม",
        "น้ำมันหอมระเหยยูคาลิปตัส 5 กรัม",
        "น้ำมันหอมระเหยไทม์ 5 กรัม",
        "น้ำมันหอมระเหยโรสแมรี่ 5 กรัม",
        "น้ำมันหอมระเหยตะไคร้ 5 กรัม",
        "น้ำมันหอมระเหยแซนทัลหรือโรส 2.5 กรัม (ตามต้องการ)"
      ]
    },
    image: getImagePath("huilesinbowl.png"),
    video: getVideoPath("baume-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Préparer tous les ingrédients : peser 250g de cire d'abeille, 200g de beurre de karité et toutes les huiles végétales",
          th: "เตรียมส่วนผสมทั้งหมด: ชั่งขี้ผึ้ง 250g เนยชีอา 200g และน้ำมันพืชทั้งหมด"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("huilesinbowl.png")
        }
      },
      {
        text: {
          fr: "Faire fondre la cire d'abeille avec l'huile de coco à feu doux",
          th: "ละลายขี้ผึ้งกับน้ำมันมะพร้าวไฟอ่อน"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Ajouter les autres huiles (tournesol, son de riz, riz/canola) et le beurre de karité",
          th: "เติมน้ำมันอื่นๆ (ดอกทานตะวัน รำข้าว ข้าว/คาโนลา) และเนยชีอา"
        },
        duration: 40,
        media: {
          type: "image",
          url: getImagePath("melangemixeur.png")
        }
      },
      {
        text: {
          fr: "Mélanger jusqu'à ce que tout soit fondu et homogène",
          th: "คนจนทุกอย่างละลายและเข้ากันดี"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Retirer du feu et laisser refroidir jusqu'à environ 40-45°C",
          th: "ยกออกจากไฟและปล่อยให้เย็นลงที่ประมาณ 40-45°C"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Incorporer les huiles essentielles : 10g tea tree, 10g lavande, 7,5g bois de cèdre, 5g eucalyptus, 5g thym, 5g romarin, 5g citronnelle, 2,5g santal/rose",
          th: "เติมน้ำมันหอมระเหย: ทีทรี 10g ลาเวนเดอร์ 10g ไม้ซีดาร์ 7.5g ยูคาลิปตัส 5g ไทม์ 5g โรสแมรี่ 5g ตะไคร้ 5g แซนทัล/โรส 2.5g"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("tracemix.png")
        }
      },
      {
        text: {
          fr: "Mélanger délicatement pour bien répartir les huiles essentielles",
          th: "คนเบาๆ ให้น้ำมันหอมระเหยกระจายทั่วดี"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Verser immédiatement dans des pots stériles",
          th: "เทลงในกระปุกที่ฆ่าเชื้อแล้วทันที"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Laisser refroidir complètement pour former une couche protectrice solide",
          th: "ปล่อยให้เย็นสนิทเพื่อสร้างชั้นป้องกันที่แข็ง"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau chaude savonneuse",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำอุ่นและสบู่"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "sticks-glaces-fruits",
    title: {
      fr: "Sticks glacés aux fruits",
      th: "ไอติมแท่งผลไม้"
    },
    description: {
      fr: "Recette générique pour préparer des sticks glacés aux fruits frais",
      th: "สูตรทั่วไปสำหรับทำไอติมแท่งผลไม้สด"
    },
    ingredients: {
      fr: [
        "1kg de fruits frais (mangue, fraise, ananas, etc.)",
        "400ml d'eau",
        "160-240g de sucre (selon le fruit)",
        "2 cuillères à soupe de jus de citron (optionnel)",
        "Tubes en plastique",
        "Élastiques",
        "Entonnoir",
        "Louche",
        "Bac perforé"
      ],
      th: [
        "ผลไม้สด 1 กิโลกรัม (มะม่วง สตรอเบอรี่ สับปะรด ฯลฯ)",
        "น้ำ 400 มล.",
        "น้ำตาล 160-240 กรัม (ตามผลไม้)",
        "น้ำมะนาว 2 ช้อนโต๊ะ (ตามต้องการ)",
        "หลอดพลาสติก",
        "ยางรัด",
        "ช่วง",
        "ทัพพี",
        "ถาดรู"
      ]
    },
    image: getImagePath("ingredientpatecrepe.png"),
    video: getVideoPath("sticks-intro.mp4"),
    steps: [
      {
        text: {
          fr: "Laver et découper 1kg de fruits en morceaux. Retirer noyaux et pépins si nécessaire",
          th: "ล้างและหั่นผลไม้ 1kg เป็นชิ้น เอาเม็ดและเล็บออกถ้าจำเป็น"
        },
        duration: 600,
        media: {
          type: "image",
          url: getImagePath("ingredientpatecrepe.png")
        }
      },
      {
        text: {
          fr: "Mettre les fruits, 400ml d'eau et 160-240g de sucre dans le blender",
          th: "ใส่ผลไม้ น้ำ 400ml และน้ำตาล 160-240g ลงในเครื่องปั่น"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("melangemixeur.png")
        }
      },
      {
        text: {
          fr: "Mixer au blender jusqu'à obtenir un mélange lisse et homogène",
          th: "ปั่นจนได้ส่วนผสมที่เนียนและเข้ากันดี"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("mixermixin.webp")
        }
      },
      {
        text: {
          fr: "Ajouter 2 cuillères à soupe de jus de citron si désiré et mixer brièvement",
          th: "เติมน้ำมะนาว 2 ช้อนโต๊ะ ถ้าต้องการ และปั่นสั้นๆ"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Préparer les tubes en plastique et l'entonnoir",
          th: "เตรียมหลอดพลาสติกและช่วง"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Remplir les tubes avec le liquide en utilisant l'entonnoir et la louche",
          th: "เติมหลอดด้วยของเหลวโดยใช้ช่วงและทัพพี"
        },
        duration: 480,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Fermer hermétiquement chaque tube avec un élastique",
          th: "ปิดหลอดแต่ละอันให้แน่นด้วยยางรัด"
        },
        duration: 300,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Placer tous les tubes dans un bac perforé pour le drainage",
          th: "วางหลอดทั้งหมดในถาดรูเพื่อระบายน้ำ"
        },
        duration: 120,
        media: {
          type: "image",
          url: getImagePath("moulesavon.png")
        }
      },
      {
        text: {
          fr: "Mettre le bac perforé dans des sacs plastiques puis placer au congélateur",
          th: "ใส่ถาดรูในถุงพลาสติกแล้ววางในช่องแช่แข็ง"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Laisser congeler pendant au moins 4-6 heures ou une nuit complète",
          th: "ปล่อยให้แข็งอย่างน้อย 4-6 ชั่วโมง หรือค้างคืน"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cooldown.png")
        }
      },
      {
        text: {
          fr: "Nettoyer tous les ustensiles à l'eau savonneuse",
          th: "ล้างอุปกรณ์ทั้งหมดด้วยน้ำและสบู่"
        },
        duration: 180,
        media: {
          type: "image",
          url: getImagePath("nettoyagesavon.png")
        }
      }
    ]
  },
  {
    id: "crepe-oeuf-jambon-fromage",
    title: {
      fr: "Crêpe œuf jambon fromage",
      th: "เครปไข่แฮมชีส"
    },
    description: {
      fr: "Garniture complète pour crêpe salée avec œuf, jambon et fromage (nécessite une crêpe de base déjà cuite)",
      th: "ไส้เครปเค็มพร้อมไข่ แฮม และชีส (ต้องมีเครปพื้นฐานที่ปิ้งแล้ว)"
    },
    ingredients: {
      fr: [
        "1 crêpe classique déjà cuite et légèrement refroidie",
        "1 œuf",
        "2-3 tranches de jambon",
        "30-40g de fromage râpé (gruyère, emmental)",
        "1 pincée de sel",
        "1 pincée de poivre",
        "1 cuillère à café d'huile de coco",
        "Herbes fraîches (optionnel)"
      ],
      th: [
        "เครปคลาสสิก 1 แผ่น ที่ปิ้งและเย็นแล้วเล็กน้อย",
        "ไข่ไก่ 1 ฟอง",
        "แฮม 2-3 ชิ้น",
        "ชีสขูด 30-40 กรัม",
        "เกลือเล็กน้อย",
        "พริกไทยเล็กน้อย",
        "น้ำมันมะพร้าว 1 ช้อนชา",
        "สมุนไพรสด (ตามต้องการ)"
      ]
    },
    image: getImagePath("crepiereetalage.png"),
    video: getVideoPath("crepe-garnie.mp4"),
    steps: [
      {
        text: {
          fr: "Préparer une crêpe classique selon la recette de base et la laisser refroidir légèrement",
          th: "เตรียมเครปคลาสสิกตามสูตรพื้นฐานและปล่อยให้เย็นเล็กน้อย"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Remettre la crêpe sur la crêpière à feu moyen-doux",
          th: "วางเครปกลับบนกระทะเครปไฟกลางอ่อน"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepeierchaude.png")
        }
      },
      {
        text: {
          fr: "Casser l'œuf au centre de la crêpe et l'étaler délicatement",
          th: "ตอกไข่ตรงกลางเครปและกระจายเบาๆ"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Assaisonner l'œuf avec une pincée de sel et de poivre",
          th: "ปรุงรสไข่ด้วยเกลือและพริกไทยเล็กน้อย"
        },
        duration: 15,
        media: {
          type: "image",
          url: getImagePath("ingredientpatecrepe.png")
        }
      },
      {
        text: {
          fr: "Disposer les tranches de jambon autour de l'œuf",
          th: "วางชิ้นแฮมรอบๆ ไข่"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Saupoudrer le fromage râpé sur toute la surface",
          th: "โรยชีสขูดทั่วผิว"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Cuire 1 minutes jusqu'à ce que l'œuf soit pris et le fromage fondu",
          th: "ปิ้ง 1 นาทีจนไข่สุกและชีสละลาย"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Replier les bords de la crêpe pour former un carré ou rectangle",
          th: "พับขอบเครปให้เป็นรูปสี่เหลี่ยม"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Ajouter un peu d'huile de coco sur les bords et cuire encore 1 minute",
          th: "เติมน้ำมันมะพร้าวเล็กน้อยที่ขอบและปิ้งอีก 1 นาที"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Servir immédiatement, garnir d'herbes fraîches si désiré",
          th: "เสิร์ฟทันที โรยสมุนไพรสดถ้าต้องการ"
        },
        duration: 20,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      }
    ]
  },
  {
    id: "crepe-banane-chocolat",
    title: {
      fr: "Crêpe banane chocolat",
      th: "เครปกล้วยช็อกโกแลต"
    },
    description: {
      fr: "Garniture sucrée pour crêpe avec banane et chocolat (nécessite une crêpe de base déjà cuite)",
      th: "ไส้เครปหวานด้วยกล้วยและช็อกโกแลต (ต้องมีเครปพื้นฐานที่ปิ้งแล้ว)"
    },
    ingredients: {
      fr: [
        "1 crêpe classique déjà cuite et légèrement refroidie",
        "1 banane mûre",
        "30-40g de chocolat noir ou au lait (en morceaux)",
        "1 cuillère à café d'huile de coco",
        "1 cuillère à soupe de sucre (optionnel)",
        "1 pincée de cannelle (optionnel)",
        "Quelques amandes effilées (optionnel)"
      ],
      th: [
        "เครปคลาสสิก 1 แผ่น ที่ปิ้งและเย็นแล้วเล็กน้อย",
        "กล้วยสุก 1 ลูก",
        "ช็อกโกแลตดำหรือนม 30-40 กรัม (หั่นชิ้น)",
        "น้ำมันมะพร้าว 1 ช้อนชา",
        "น้ำตาล 1 ช้อนโต๊ะ (ตามต้องการ)",
        "อบเชยป่น เล็กน้อย (ตามต้องการ)",
        "อัลมอนด์สไลซ์ เล็กน้อย (ตามต้องการ)"
      ]
    },
    image: getImagePath("crepiereetalage.png"),
    video: getVideoPath("crepe-sucree.mp4"),
    steps: [
      {
        text: {
          fr: "Préparer une crêpe classique selon la recette de base et la laisser refroidir légèrement",
          th: "เตรียมเครปคลาสสิกตามสูตรพื้นฐานและปล่อยให้เย็นเล็กน้อย"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Éplucher et trancher la banane en rondelles d'environ 0,5cm",
          th: "ปอกและหั่นกล้วยเป็นชิ้นหนาประมาณ 0.5 ซม."
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("ingredientpatecrepe.png")
        }
      },
      {
        text: {
          fr: "Remettre la crêpe sur la crêpière à feu doux",
          th: "วางเครปกลับบนกระทะเครปไฟอ่อน"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepeierchaude.png")
        }
      },
      {
        text: {
          fr: "Disposer les rondelles de banane sur une moitié de la crêpe",
          th: "วางชิ้นกล้วยบนครึ่งหนึ่งของเครป"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Ajouter les morceaux de chocolat sur les bananes",
          th: "ใส่ชิ้นช็อกโกแลตบนกล้วย"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("finalmix.png")
        }
      },
      {
        text: {
          fr: "Saupoudrer de sucre et de cannelle si désiré",
          th: "โรยน้ำตาลและอบเชยถ้าต้องการ"
        },
        duration: 20,
        media: {
          type: "image",
          url: getImagePath("ingredientpatecrepe.png")
        }
      },
      {
        text: {
          fr: "Cuire 1-2 minutes jusqu'à ce que le chocolat commence à fondre",
          th: "ปิ้ง 1-2 นาทีจนช็อกโกแลตเริ่มละลาย"
        },
        duration: 90,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Replier la crêpe en deux pour couvrir la garniture",
          th: "พับเครปครึ่งหนึ่งเพื่อปิดไส้"
        },
        duration: 20,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Ajouter un peu d'huile de coco sur les bords et cuire encore 1 minute",
          th: "เติมน้ำมันมะพร้าวเล็กน้อยที่ขอบและปิ้งอีก 1 นาที"
        },
        duration: 60,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Servir immédiatement, garnir d'amandes effilées si désiré",
          th: "เสิร์ฟทันที โรยอัลมอนด์สไลซ์ถ้าต้องการ"
        },
        duration: 20,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      }
    ]
  },
  {
    id: "crepe-confiture",
    title: {
      fr: "Crêpe à la confiture",
      th: "เครปแยม"
    },
    description: {
      fr: "Garniture sucrée classique pour crêpe avec confiture (nécessite une crêpe de base déjà cuite)",
      th: "ไส้เครปหวานคลาสสิกด้วยแยม (ต้องมีเครปพื้นฐานที่ปิ้งแล้ว)"
    },
    ingredients: {
      fr: [
        "1 crêpe classique déjà cuite et légèrement refroidie",
        "2-3 cuillères à soupe de confiture (fraise, abricot, etc.)",
        "1 cuillère à café d'huile de coco",
        "1 cuillère à café de sucre glace (optionnel)",
        "Quelques fruits frais (optionnel)",
        "1 pincée de zeste de citron (optionnel)"
      ],
      th: [
        "เครปคลาสสิก 1 แผ่น ที่ปิ้งและเย็นแล้วเล็กน้อย",
        "แยม 2-3 ช้อนโต๊ะ (สตรอเบอรี่ แอปริคอต ฯลฯ)",
        "น้ำมันมะพร้าว 1 ช้อนชา",
        "น้ำตาลไอซิ่ง 1 ช้อนชา (ตามต้องการ)",
        "ผลไม้สด เล็กน้อย (ตามต้องการ)",
        "เปลือกมะนาวขูด เล็กน้อย (ตามต้องการ)"
      ]
    },
    image: getImagePath("crepiereetalage.png"),
    video: getVideoPath("crepe-sucree.mp4"),
    steps: [
      {
        text: {
          fr: "Préparer une crêpe classique selon la recette de base et la laisser refroidir légèrement",
          th: "เตรียมเครปคลาสสิกตามสูตรพื้นฐานและปล่อยให้เย็นเล็กน้อย"
        },
        duration: 10,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Remettre la crêpe sur la crêpière à feu très doux",
          th: "วางเครปกลับบนกระทะเครปไฟอ่อนมาก"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepeierchaude.png")
        }
      },
      {
        text: {
          fr: "Étaler la confiture uniformément sur toute la surface de la crêpe",
          th: "ทาแยมให้ทั่วผิวเครปอย่างสม่ำเสมอ"
        },
        duration: 45,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Réchauffer délicatement pendant 30 secondes pour tiédir la confiture",
          th: "อุ่นเบาๆ 30 วินาทีให้แยมอุ่น"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Replier la crêpe en quatre ou rouler selon votre préférence",
          th: "พับเครปเป็นสี่หรือม้วนตามต้องการ"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("crepiereetalage.png")
        }
      },
      {
        text: {
          fr: "Ajouter un peu d'huile de coco sur les bords et cuire encore 30 secondes",
          th: "เติมน้ำมันมะพร้าวเล็กน้อยที่ขอบและปิ้งอีก 30 วินาที"
        },
        duration: 30,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
        }
      },
      {
        text: {
          fr: "Servir immédiatement, saupoudrer de sucre glace si désiré",
          th: "เสิร์ฟทันที โรยน้ำตาลไอซิ่งถ้าต้องการ"
        },
        duration: 20,
        media: {
          type: "image",
          url: getImagePath("cuisson.png")
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