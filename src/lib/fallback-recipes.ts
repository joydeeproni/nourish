import { DayPlan } from "./types";

// 30 days of pre-built meal plans tailored to preferences
// Kazakh/Turkish cuisine, pregnancy-safe, no fried food, no pork, bland, clean
const fallbackPlans: DayPlan[] = [
  {
    date: "day-1",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b1-1",
            name: "Turkish Breakfast Plate",
            emoji: "🥚",
            ingredients: ["2 eggs", "goat cheese", "raw tomatoes", "cucumber", "sourdough bread", "olives", "fresh dill"],
            instructions: ["Scramble eggs fully in non-stick pan without oil", "Slice tomatoes, cucumbers", "Arrange on plate with goat cheese, olives, dill", "Serve with toasted sourdough"],
            prepTime: "10 min",
            tags: ["pregnancy-safe", "high-protein", "turkish"],
            nutritionNote: "Eggs provide choline essential for baby's brain development"
          },
          {
            id: "b1-2",
            name: "Oatly Yoghurt Bowl",
            emoji: "🥣",
            ingredients: ["full fat yoghurt", "roasted walnuts", "kiwi", "Granny Smith apple"],
            instructions: ["Slice kiwi and apple", "Top yoghurt with fruit and walnuts"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "calcium", "folate"],
            nutritionNote: "Walnuts are rich in omega-3s for baby's brain"
          },
          {
            id: "b1-3",
            name: "Warm Water & Light Ginger Tea",
            emoji: "🍵",
            ingredients: ["warm water", "small piece fresh ginger", "honey (optional)"],
            instructions: ["Start with a glass of lukewarm water", "Steep thin ginger slice in hot water for 3 min", "Sip slowly"],
            prepTime: "3 min",
            tags: ["hydration", "morning-ritual"],
            nutritionNote: "Light ginger can help with morning nausea"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l1-1",
            name: "Mercimek Çorbası",
            emoji: "🍲",
            ingredients: ["1 cup red lentils", "1 potato diced", "1 carrot (raw, grated)", "water", "pinch of cumin", "squeeze of lemon"],
            instructions: ["Boil lentils and potato in water until soft", "Blend until smooth", "Add cumin and lemon juice", "Serve with sourdough"],
            prepTime: "25 min",
            tags: ["pregnancy-safe", "high-iron", "high-folate", "turkish"],
            nutritionNote: "Lentils are packed with folate and iron, crucial during pregnancy"
          },
          {
            id: "l1-2",
            name: "Arugula & Baby Spinach Salad",
            emoji: "🥗",
            ingredients: ["arugula", "baby spinach", "raw tomatoes", "cucumber", "dill", "lemon juice", "sesame seeds"],
            instructions: ["Mix greens in a bowl", "Top with sliced tomatoes, cucumber, fresh dill", "Drizzle lemon juice and sprinkle sesame"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "iron", "vitamin-c"],
            nutritionNote: "Spinach provides iron; lemon helps absorption"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d1-1",
            name: "Beshbarmak",
            emoji: "🍖",
            ingredients: ["lamb (bone-in)", "flat noodles/pasta sheets", "1 onion (raw, sliced thin)", "water", "salt", "fresh dill"],
            instructions: ["Boil lamb in water with salt for 2 hours until tender", "Cook flat noodles in lamb broth", "Layer noodles on plate, top with shredded lamb", "Garnish with raw onion rings and dill", "Serve broth as side soup"],
            prepTime: "2.5 hrs",
            tags: ["pregnancy-safe", "high-protein", "kazakh", "comfort-food"],
            nutritionNote: "Lamb is rich in iron and B12 for pregnancy"
          },
          {
            id: "d1-2",
            name: "Boiled Potato Side",
            emoji: "🥔",
            ingredients: ["3 potatoes", "salt", "fresh parsley"],
            instructions: ["Boil potatoes until fork-tender", "Serve with fresh parsley"],
            prepTime: "20 min",
            tags: ["pregnancy-safe", "energy"],
            nutritionNote: "Potatoes provide potassium and vitamin B6"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s1-1",
            name: "Roasted Nuts Mix",
            emoji: "🥜",
            ingredients: ["roasted walnuts", "roasted cashews"],
            instructions: ["Portion a handful of mixed nuts"],
            prepTime: "1 min",
            tags: ["pregnancy-safe", "omega-3", "protein"],
            nutritionNote: "Healthy fats support baby's brain development"
          },
          {
            id: "s1-2",
            name: "Carrots & Hummus",
            emoji: "🥕",
            ingredients: ["carrot sticks (raw)", "hummus"],
            instructions: ["Wash and cut carrots into sticks", "Serve with hummus"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "fiber", "vitamin-a"],
            nutritionNote: "Vitamin A supports baby's eye development"
          },
          {
            id: "s1-3",
            name: "Granny Smith Apple Slices",
            emoji: "🍏",
            ingredients: ["1 Granny Smith apple"],
            instructions: ["Wash, core, and slice"],
            prepTime: "2 min",
            tags: ["pregnancy-safe", "fiber", "vitamin-c"],
            nutritionNote: "Green apples help with digestion"
          }
        ]
      }
    ]
  },
  {
    date: "day-2",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b2-1",
            name: "Sirniki",
            emoji: "🧀",
            ingredients: ["250g tvorog/quark", "1 egg", "2 tbsp flour", "pinch of salt", "full fat yoghurt"],
            instructions: ["Mix tvorog, egg, flour and salt", "Form small patties", "Bake at 190°C for 15 min until golden (no frying)", "Serve with yoghurt"],
            prepTime: "25 min",
            tags: ["pregnancy-safe", "calcium", "protein"],
            nutritionNote: "High calcium and protein for bone development"
          },
          {
            id: "b2-2",
            name: "Morning Nuts & Warm Water",
            emoji: "🌰",
            ingredients: ["roasted walnuts", "roasted cashews", "lukewarm water"],
            instructions: ["Start with a glass of warm water", "Eat a small handful of mixed nuts"],
            prepTime: "1 min",
            tags: ["morning-ritual", "omega-3"],
            nutritionNote: "Morning nuts kickstart metabolism with healthy fats"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l2-1",
            name: "Tavuk Çorbası",
            emoji: "🍗",
            ingredients: ["chicken breast", "1 potato", "1 carrot (grated raw into soup at end)", "water", "salt", "lemon juice", "parsley"],
            instructions: ["Boil chicken breast in salted water", "Add diced potato, cook until soft", "Shred chicken back into soup", "Stir in grated carrot and lemon", "Garnish with parsley"],
            prepTime: "30 min",
            tags: ["pregnancy-safe", "protein", "turkish"],
            nutritionNote: "Chicken soup provides protein and hydration"
          },
          {
            id: "l2-2",
            name: "Sourdough with Parsley-Dill Pesto",
            emoji: "🍞",
            ingredients: ["sourdough bread", "parsley", "dill", "sour cream", "sesame seeds"],
            instructions: ["Blend parsley and dill with sour cream", "Spread on toasted sourdough", "Sprinkle sesame seeds on top"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "calcium"],
            nutritionNote: "Fresh herbs provide folate and vitamin K"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d2-1",
            name: "Lamb & Potato Soup",
            emoji: "🥘",
            ingredients: ["lamb shoulder chunks", "3 potatoes", "water", "cumin seeds", "salt", "raw onion rings", "dill"],
            instructions: ["Boil lamb in water with cumin seeds for 1.5 hrs", "Add potatoes, cook until tender", "Serve in bowl with raw onion rings and fresh dill"],
            prepTime: "2 hrs",
            tags: ["pregnancy-safe", "comfort-food", "kazakh", "high-iron"],
            nutritionNote: "Lamb provides heme iron, best absorbed form"
          },
          {
            id: "d2-2",
            name: "Crème Fraîche Tomato Salad",
            emoji: "🍅",
            ingredients: ["raw tomatoes", "cucumber", "dill", "crème fraîche"],
            instructions: ["Slice tomatoes and cucumbers", "Top with crème fraîche and dill"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "kazakh", "vitamin-c"],
            nutritionNote: "Tomatoes provide lycopene and vitamin C"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s2-1",
            name: "Watermelon Slices",
            emoji: "🍉",
            ingredients: ["watermelon"],
            instructions: ["Slice and serve chilled"],
            prepTime: "2 min",
            tags: ["pregnancy-safe", "hydration"],
            nutritionNote: "Great hydration and natural sweetness"
          },
          {
            id: "s2-2",
            name: "Popcorn",
            emoji: "🍿",
            ingredients: ["popcorn kernels", "pinch of salt"],
            instructions: ["Air-pop kernels", "Season with light salt"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "whole-grain", "fiber"],
            nutritionNote: "Whole grain snack with fiber"
          }
        ]
      }
    ]
  },
  {
    date: "day-3",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b3-1",
            name: "Spanish Omelette (Fully Cooked)",
            emoji: "🍳",
            ingredients: ["3 eggs", "1 potato (thinly sliced, pre-boiled)", "salt", "parsley"],
            instructions: ["Boil potato slices until just tender", "Beat eggs with salt", "Layer potatoes in non-stick oven-safe pan", "Pour eggs over potatoes", "Bake at 180°C for 20 min until fully set", "Top with parsley"],
            prepTime: "30 min",
            tags: ["pregnancy-safe", "protein", "choline"],
            nutritionNote: "Fully cooked eggs provide safe choline and protein"
          },
          {
            id: "b3-2",
            name: "Aged Havarti on Sourdough",
            emoji: "🧈",
            ingredients: ["sourdough bread", "aged Havarti slices", "fresh dill"],
            instructions: ["Toast sourdough", "Top with Havarti slices and dill"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "calcium"],
            nutritionNote: "Aged cheese is safe during pregnancy and calcium-rich"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l3-1",
            name: "Manti (Kazakh Steamed Dumplings)",
            emoji: "🥟",
            ingredients: ["flour", "water", "salt", "lamb mince", "raw onion (finely diced)", "cumin", "yoghurt", "dill"],
            instructions: ["Make dough with flour, water, salt — rest 30 min", "Mix lamb mince with diced onion and cumin", "Roll dough thin, fill with lamb, fold into dumplings", "Steam for 40 min", "Serve with yoghurt and dill"],
            prepTime: "1.5 hrs",
            tags: ["pregnancy-safe", "kazakh", "protein", "iron"],
            nutritionNote: "Steamed (not fried) — healthy protein and iron from lamb"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d3-1",
            name: "Oven-Grilled Chicken Breast",
            emoji: "🍗",
            ingredients: ["chicken breast", "salt", "cumin", "lemon juice", "parsley"],
            instructions: ["Season chicken with salt, cumin, lemon", "Bake at 200°C for 25 min", "Slice and garnish with parsley"],
            prepTime: "30 min",
            tags: ["pregnancy-safe", "lean-protein"],
            nutritionNote: "Lean protein for muscle development"
          },
          {
            id: "d3-2",
            name: "Pickled Carrot Kazakh Salad",
            emoji: "🥕",
            ingredients: ["carrots (raw, julienned)", "white vinegar", "salt", "parsley"],
            instructions: ["Julienne carrots thinly", "Toss with vinegar and salt", "Let sit 15 min", "Garnish with parsley"],
            prepTime: "20 min",
            tags: ["pregnancy-safe", "kazakh", "vitamin-a"],
            nutritionNote: "Raw carrots are packed with beta-carotene"
          },
          {
            id: "d3-3",
            name: "Arugula & Spinach Side Salad",
            emoji: "🥗",
            ingredients: ["arugula", "baby spinach", "lemon juice", "sesame seeds"],
            instructions: ["Toss greens with lemon juice", "Sprinkle sesame seeds"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "iron", "folate"],
            nutritionNote: "Dark leafy greens provide essential folate"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s3-1",
            name: "Kiwi & Walnut Bowl",
            emoji: "🥝",
            ingredients: ["2 kiwis", "roasted walnuts"],
            instructions: ["Peel and slice kiwis", "Top with crushed walnuts"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "vitamin-c", "omega-3"],
            nutritionNote: "Kiwis have more vitamin C than oranges"
          },
          {
            id: "s3-2",
            name: "Nordic Nut Crisps",
            emoji: "🍘",
            ingredients: ["Danish nut crisps"],
            instructions: ["Serve a portion on a small plate"],
            prepTime: "1 min",
            tags: ["pregnancy-safe", "fiber"],
            nutritionNote: "Whole grain crisps with healthy seeds"
          }
        ]
      }
    ]
  },
  {
    date: "day-4",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b4-1",
            name: "Liver Pâté on Sourdough",
            emoji: "🍞",
            ingredients: ["liver pâté", "sourdough bread", "cucumber slices", "dill"],
            instructions: ["Toast sourdough", "Spread liver pâté", "Top with cucumber and dill"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "iron", "b-vitamins"],
            nutritionNote: "Small portions of liver pâté provide iron and B12 (limit intake)"
          },
          {
            id: "b4-2",
            name: "Hard Boiled Eggs",
            emoji: "🥚",
            ingredients: ["2 eggs", "salt"],
            instructions: ["Boil eggs for 12 min", "Cool in ice water", "Peel and season with salt"],
            prepTime: "15 min",
            tags: ["pregnancy-safe", "protein", "choline"],
            nutritionNote: "Fully cooked eggs are pregnancy-safe and nutrient-dense"
          },
          {
            id: "b4-3",
            name: "Light Ginger Tea",
            emoji: "🍵",
            ingredients: ["thin ginger slice", "hot water"],
            instructions: ["Steep ginger briefly in hot water for 2-3 min"],
            prepTime: "3 min",
            tags: ["hydration"],
            nutritionNote: "May help ease morning nausea"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l4-1",
            name: "Kazakh Lamb Shorpa",
            emoji: "🍲",
            ingredients: ["lamb on bone", "2 potatoes", "1 carrot (added raw at end)", "water", "salt", "cumin", "dill", "parsley"],
            instructions: ["Boil lamb in water with cumin and salt for 1.5 hrs", "Add diced potatoes, cook 20 min", "Grate raw carrot on top before serving", "Garnish with dill and parsley"],
            prepTime: "2 hrs",
            tags: ["pregnancy-safe", "kazakh", "iron", "comfort-food"],
            nutritionNote: "Bone broth provides collagen and minerals"
          },
          {
            id: "l4-2",
            name: "Tomato Cucumber Dill Salad",
            emoji: "🍅",
            ingredients: ["raw tomatoes", "cucumber", "dill", "crème fraîche", "salt"],
            instructions: ["Dice tomatoes and cucumbers", "Toss with crème fraîche, dill, and salt"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "kazakh", "vitamin-c"],
            nutritionNote: "Fresh veggies provide vitamins and fiber"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d4-1",
            name: "Chicken Pide (Turkish Pizza)",
            emoji: "🫓",
            ingredients: ["pizza dough", "chicken breast (diced, baked)", "raw tomato", "aged Havarti", "parsley"],
            instructions: ["Shape dough into boat/oval", "Top with baked chicken, tomato, cheese", "Bake at 220°C for 12-15 min", "Garnish with parsley"],
            prepTime: "25 min",
            tags: ["pregnancy-safe", "turkish", "protein", "calcium"],
            nutritionNote: "Balanced meal with protein, carbs, and calcium"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s4-1",
            name: "Nachos with Hummus",
            emoji: "🌮",
            ingredients: ["plain tortilla chips", "hummus"],
            instructions: ["Serve chips with hummus on the side"],
            prepTime: "1 min",
            tags: ["pregnancy-safe", "fiber"],
            nutritionNote: "Chickpeas in hummus provide plant-based protein"
          },
          {
            id: "s4-2",
            name: "Watermelon Cubes",
            emoji: "🍉",
            ingredients: ["watermelon"],
            instructions: ["Cut into bite-size cubes", "Chill and serve"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "hydration"],
            nutritionNote: "92% water — great pregnancy hydration"
          }
        ]
      }
    ]
  },
  {
    date: "day-5",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b5-1",
            name: "Goat Cheese & Tomato Toast",
            emoji: "🧀",
            ingredients: ["sourdough bread", "goat cheese", "raw tomato slices", "sesame seeds", "fresh basil"],
            instructions: ["Toast sourdough", "Spread goat cheese", "Top with tomato slices, basil, sesame"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "calcium", "protein"],
            nutritionNote: "Goat cheese on sourdough — calcium and whole grains"
          },
          {
            id: "b5-2",
            name: "Yoghurt & Fruit Bowl",
            emoji: "🥣",
            ingredients: ["full fat yoghurt", "Granny Smith apple (diced)", "roasted cashews"],
            instructions: ["Top yoghurt with apple and cashews"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "probiotics", "calcium"],
            nutritionNote: "Probiotics support digestive health during pregnancy"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l5-1",
            name: "Mercimek Çorbası with Sourdough",
            emoji: "🍲",
            ingredients: ["red lentils", "potato", "cumin", "lemon", "salt", "sourdough bread"],
            instructions: ["Boil lentils and potato until soft", "Blend smooth", "Season with cumin, lemon, salt", "Serve with sourdough"],
            prepTime: "25 min",
            tags: ["pregnancy-safe", "folate", "iron", "turkish"],
            nutritionNote: "Folate from lentils helps prevent neural tube defects"
          },
          {
            id: "l5-2",
            name: "Green Salad",
            emoji: "🥗",
            ingredients: ["arugula", "baby spinach", "raw tomato", "dill", "lemon juice"],
            instructions: ["Toss greens with tomato, dill, and lemon"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "iron", "vitamin-c"],
            nutritionNote: "Vitamin C with iron-rich greens boosts absorption"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d5-1",
            name: "Baked Lamb Chops",
            emoji: "🍖",
            ingredients: ["lamb chops", "salt", "cumin", "lemon juice", "parsley"],
            instructions: ["Season chops with salt, cumin, lemon", "Bake at 200°C for 20 min", "Rest 5 min, garnish with parsley"],
            prepTime: "30 min",
            tags: ["pregnancy-safe", "iron", "protein"],
            nutritionNote: "Lamb chops — excellent source of heme iron"
          },
          {
            id: "d5-2",
            name: "Boiled Potatoes with Dill",
            emoji: "🥔",
            ingredients: ["potatoes", "salt", "fresh dill", "touch of sour cream"],
            instructions: ["Boil potatoes until tender", "Serve with dill and sour cream"],
            prepTime: "20 min",
            tags: ["pregnancy-safe", "potassium"],
            nutritionNote: "Potatoes provide energy and potassium"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s5-1",
            name: "Roasted Cashews",
            emoji: "🌰",
            ingredients: ["roasted cashews"],
            instructions: ["Portion a handful"],
            prepTime: "1 min",
            tags: ["pregnancy-safe", "magnesium", "protein"],
            nutritionNote: "Cashews provide magnesium for muscle and nerve function"
          },
          {
            id: "s5-2",
            name: "Kiwi Slices",
            emoji: "🥝",
            ingredients: ["2 kiwis"],
            instructions: ["Peel and slice"],
            prepTime: "2 min",
            tags: ["pregnancy-safe", "vitamin-c", "fiber"],
            nutritionNote: "Kiwis aid digestion and boost immunity"
          }
        ]
      }
    ]
  },
  {
    date: "day-6",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b6-1",
            name: "Scrambled Eggs with Dill",
            emoji: "🍳",
            ingredients: ["3 eggs", "fresh dill", "salt", "sourdough toast"],
            instructions: ["Scramble eggs fully in non-stick pan", "Season with salt and dill", "Serve with toasted sourdough"],
            prepTime: "8 min",
            tags: ["pregnancy-safe", "protein", "choline"],
            nutritionNote: "Eggs provide choline and complete protein"
          },
          {
            id: "b6-2",
            name: "Goat Cheese & Cucumber Plate",
            emoji: "🧀",
            ingredients: ["goat cheese", "cucumber", "raw tomato", "olives"],
            instructions: ["Slice cucumber and tomato", "Arrange with goat cheese and olives"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "calcium", "turkish"],
            nutritionNote: "Calcium-rich morning plate"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l6-1",
            name: "Beshbarmak",
            emoji: "🍖",
            ingredients: ["lamb", "flat noodles", "raw onion", "water", "salt", "dill"],
            instructions: ["Boil lamb until tender (2 hrs)", "Cook noodles in broth", "Layer noodles, top with shredded lamb", "Serve with raw onion and dill"],
            prepTime: "2.5 hrs",
            tags: ["pregnancy-safe", "kazakh", "iron", "comfort-food"],
            nutritionNote: "The ultimate Kazakh comfort food — rich in iron"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d6-1",
            name: "Baked Chicken Thighs",
            emoji: "🍗",
            ingredients: ["chicken thighs", "salt", "cumin", "lemon", "parsley"],
            instructions: ["Season chicken", "Bake at 200°C for 35 min", "Garnish with parsley"],
            prepTime: "40 min",
            tags: ["pregnancy-safe", "protein"],
            nutritionNote: "Chicken thighs have more iron than breast"
          },
          {
            id: "d6-2",
            name: "Kazakh Pickled Carrot Salad",
            emoji: "🥕",
            ingredients: ["carrots (raw, julienned)", "vinegar", "salt", "dill"],
            instructions: ["Julienne carrots", "Dress with vinegar and salt", "Top with dill"],
            prepTime: "10 min",
            tags: ["pregnancy-safe", "kazakh", "vitamin-a"],
            nutritionNote: "Beta-carotene supports immune system"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s6-1",
            name: "Danish Nut Crisps",
            emoji: "🍘",
            ingredients: ["Nordic nut crisps"],
            instructions: ["Serve a portion"],
            prepTime: "1 min",
            tags: ["pregnancy-safe", "fiber", "healthy-fats"],
            nutritionNote: "Seeds and nuts provide essential fatty acids"
          },
          {
            id: "s6-2",
            name: "Apple Slices with Cashews",
            emoji: "🍏",
            ingredients: ["Granny Smith apple", "roasted cashews"],
            instructions: ["Slice apple", "Pair with cashews"],
            prepTime: "2 min",
            tags: ["pregnancy-safe", "fiber", "protein"],
            nutritionNote: "Fiber and protein combo keeps blood sugar stable"
          }
        ]
      }
    ]
  },
  {
    date: "day-7",
    meals: [
      {
        type: "breakfast",
        label: "Breakfast",
        recipes: [
          {
            id: "b7-1",
            name: "Turkish Menemen-Style Eggs",
            emoji: "🍳",
            ingredients: ["3 eggs", "raw tomatoes (added at the very end, barely warmed)", "parsley", "salt", "sourdough"],
            instructions: ["Scramble eggs fully", "Place raw chopped tomatoes on top at the end", "Season with salt and parsley", "Serve with sourdough toast"],
            prepTime: "10 min",
            tags: ["pregnancy-safe", "protein", "turkish"],
            nutritionNote: "Tomatoes added raw preserve vitamin C"
          },
          {
            id: "b7-2",
            name: "Oatly Milk & Walnut Granola",
            emoji: "🥛",
            ingredients: ["Oatly oat milk", "roasted walnuts", "Granny Smith apple (diced)"],
            instructions: ["Pour oat milk into bowl", "Add walnuts and diced apple"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "calcium", "omega-3"],
            nutritionNote: "Fortified oat milk provides calcium and vitamin D"
          }
        ]
      },
      {
        type: "lunch",
        label: "Lunch",
        recipes: [
          {
            id: "l7-1",
            name: "Tavuk Çorbası",
            emoji: "🍗",
            ingredients: ["chicken breast", "potato", "lemon", "salt", "parsley", "dill"],
            instructions: ["Boil chicken and potato", "Shred chicken back in", "Season with lemon and salt", "Top with parsley and dill"],
            prepTime: "30 min",
            tags: ["pregnancy-safe", "protein", "turkish"],
            nutritionNote: "Light, nourishing soup full of protein"
          },
          {
            id: "l7-2",
            name: "Sourdough & Havarti",
            emoji: "🧀",
            ingredients: ["sourdough bread", "aged Havarti"],
            instructions: ["Slice and serve"],
            prepTime: "2 min",
            tags: ["pregnancy-safe", "calcium"],
            nutritionNote: "Aged Havarti is safe and calcium-rich"
          }
        ]
      },
      {
        type: "dinner",
        label: "Dinner",
        recipes: [
          {
            id: "d7-1",
            name: "Comfort Lamb Boil",
            emoji: "🍖",
            ingredients: ["lamb (mutton)", "potatoes", "cumin seeds", "water", "salt", "raw onion rings"],
            instructions: ["Boil mutton with cumin in salted water for 2 hrs", "Add potatoes for last 25 min", "Serve with raw onion rings"],
            prepTime: "2.5 hrs",
            tags: ["pregnancy-safe", "kazakh", "comfort-food", "iron"],
            nutritionNote: "Comfort food — iron-rich and deeply nourishing"
          }
        ]
      },
      {
        type: "snacks",
        label: "Snacks",
        recipes: [
          {
            id: "s7-1",
            name: "Popcorn",
            emoji: "🍿",
            ingredients: ["popcorn kernels", "salt"],
            instructions: ["Air-pop and lightly salt"],
            prepTime: "5 min",
            tags: ["pregnancy-safe", "whole-grain"],
            nutritionNote: "Whole grain fiber snack"
          },
          {
            id: "s7-2",
            name: "Watermelon & Kiwi Plate",
            emoji: "🍉",
            ingredients: ["watermelon", "kiwi"],
            instructions: ["Slice and arrange on plate"],
            prepTime: "3 min",
            tags: ["pregnancy-safe", "vitamin-c", "hydration"],
            nutritionNote: "Hydrating fruits packed with vitamins"
          }
        ]
      }
    ]
  },
  // Days 8-14: Week 2 variations
  {
    date: "day-8",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b8-1", name: "Parsley-Dill Pesto Toast", emoji: "🌿", ingredients: ["sourdough", "parsley", "dill", "sour cream", "sesame", "crushed pistachio"], instructions: ["Blend parsley and dill with sour cream", "Spread on toast", "Top with sesame and crushed pistachio"], prepTime: "5 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Herbs provide folate and vitamin K" },
        { id: "b8-2", name: "Hard Boiled Eggs", emoji: "🥚", ingredients: ["2 eggs", "salt"], instructions: ["Boil 12 min, cool, peel"], prepTime: "15 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Complete protein and choline" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l8-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["red lentils", "potato", "cumin", "lemon"], instructions: ["Boil lentils and potato", "Blend, season with cumin and lemon"], prepTime: "25 min", tags: ["pregnancy-safe", "folate", "turkish"], nutritionNote: "Iron and folate powerhouse" },
        { id: "l8-2", name: "Crème Fraîche Salad", emoji: "🍅", ingredients: ["tomatoes", "cucumbers", "dill", "crème fraîche"], instructions: ["Dice veggies, mix with crème fraîche and dill"], prepTime: "5 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Fresh vitamins and probiotics" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d8-1", name: "Manti", emoji: "🥟", ingredients: ["flour", "lamb mince", "onion", "cumin", "yoghurt"], instructions: ["Make dough, fill with spiced lamb", "Steam 40 min", "Serve with yoghurt"], prepTime: "1.5 hrs", tags: ["pregnancy-safe", "kazakh", "protein"], nutritionNote: "Steamed dumplings — protein-rich comfort food" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s8-1", name: "Carrots & Hummus", emoji: "🥕", ingredients: ["carrot sticks", "hummus"], instructions: ["Dip and enjoy"], prepTime: "2 min", tags: ["pregnancy-safe", "fiber"], nutritionNote: "Vitamin A and plant protein" },
        { id: "s8-2", name: "Mixed Nuts", emoji: "🥜", ingredients: ["roasted walnuts", "cashews"], instructions: ["Portion a handful"], prepTime: "1 min", tags: ["pregnancy-safe", "omega-3"], nutritionNote: "Brain-healthy fats" }
      ]}
    ]
  },
  {
    date: "day-9",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b9-1", name: "Sirniki with Yoghurt", emoji: "🧀", ingredients: ["quark", "egg", "flour", "yoghurt", "kiwi"], instructions: ["Mix quark, egg, flour", "Bake patties at 190°C", "Serve with yoghurt and kiwi"], prepTime: "25 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium-rich breakfast" },
        { id: "b9-2", name: "Warm Water & Nuts", emoji: "🌰", ingredients: ["warm water", "walnuts", "cashews"], instructions: ["Drink warm water, eat nuts"], prepTime: "1 min", tags: ["morning-ritual"], nutritionNote: "Morning routine for metabolism" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l9-1", name: "Lamb Potato Soup", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "raw onion"], instructions: ["Boil lamb 1.5 hrs", "Add potatoes", "Serve with dill and raw onion"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh", "iron"], nutritionNote: "Iron-rich and warming" },
        { id: "l9-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "baby spinach", "lemon", "sesame"], instructions: ["Toss and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Essential folate from greens" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d9-1", name: "Baked Chicken with Potatoes", emoji: "🍗", ingredients: ["chicken thighs", "potatoes", "salt", "cumin", "parsley"], instructions: ["Season chicken and potatoes", "Bake at 200°C for 40 min", "Garnish with parsley"], prepTime: "45 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Complete meal with protein and carbs" },
        { id: "d9-2", name: "Pickled Carrot Salad", emoji: "🥕", ingredients: ["raw carrots", "vinegar", "salt", "parsley"], instructions: ["Julienne, dress with vinegar"], prepTime: "10 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Vitamin A and crunch" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s9-1", name: "Granny Smith Apple", emoji: "🍏", ingredients: ["1 apple"], instructions: ["Wash and eat"], prepTime: "1 min", tags: ["pregnancy-safe", "fiber"], nutritionNote: "Fiber and natural sweetness" },
        { id: "s9-2", name: "Nordic Crisps", emoji: "🍘", ingredients: ["Danish nut crisps"], instructions: ["Serve a portion"], prepTime: "1 min", tags: ["pregnancy-safe", "fiber"], nutritionNote: "Healthy seed-based snack" }
      ]}
    ]
  },
  {
    date: "day-10",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b10-1", name: "Turkish Breakfast Plate", emoji: "🥚", ingredients: ["scrambled eggs", "goat cheese", "tomato", "cucumber", "sourdough", "dill", "olives"], instructions: ["Scramble eggs fully", "Arrange plate with all items"], prepTime: "10 min", tags: ["pregnancy-safe", "turkish", "protein"], nutritionNote: "Balanced morning nutrients" },
        { id: "b10-2", name: "Light Ginger Tea", emoji: "🍵", ingredients: ["ginger", "hot water"], instructions: ["Steep thin ginger slice 3 min"], prepTime: "3 min", tags: ["hydration"], nutritionNote: "Gentle nausea relief" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l10-1", name: "Tavuk Çorbası", emoji: "🍗", ingredients: ["chicken", "potato", "lemon", "dill"], instructions: ["Boil chicken and potato", "Season with lemon", "Top with dill"], prepTime: "30 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Nourishing chicken soup" },
        { id: "l10-2", name: "Sourdough with Havarti", emoji: "🧈", ingredients: ["sourdough", "aged Havarti", "dill"], instructions: ["Toast and top"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium boost" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d10-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "flat noodles", "onion", "dill", "broth"], instructions: ["Boil lamb 2 hrs", "Cook noodles in broth", "Assemble and serve"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh", "comfort-food"], nutritionNote: "Ultimate comfort meal" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s10-1", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice and serve"], prepTime: "2 min", tags: ["pregnancy-safe", "hydration"], nutritionNote: "Hydrating and refreshing" },
        { id: "s10-2", name: "Nachos", emoji: "🌮", ingredients: ["tortilla chips", "hummus"], instructions: ["Serve together"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Satisfying crunch with protein" }
      ]}
    ]
  },
  // Days 11-20
  {
    date: "day-11",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b11-1", name: "Spanish Omelette", emoji: "🍳", ingredients: ["eggs", "potato", "salt", "parsley"], instructions: ["Boil potato slices", "Pour beaten eggs over", "Bake until fully set"], prepTime: "30 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Protein and potassium" },
        { id: "b11-2", name: "Yoghurt with Walnuts", emoji: "🥣", ingredients: ["full fat yoghurt", "walnuts", "kiwi"], instructions: ["Top yoghurt with fruit and nuts"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Probiotics and omega-3s" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l11-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["red lentils", "potato", "cumin", "lemon"], instructions: ["Boil, blend, season"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish", "iron"], nutritionNote: "Iron and folate" },
        { id: "l11-2", name: "Tomato Sesame Bread", emoji: "🍞", ingredients: ["sourdough", "raw tomato", "sesame seeds", "basil"], instructions: ["Toast bread, top with sliced tomato, sesame, basil"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Lycopene and whole grains" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d11-1", name: "Baked Lamb Kofta", emoji: "🍖", ingredients: ["lamb mince", "parsley", "cumin", "salt"], instructions: ["Mix mince with herbs", "Shape into kofta", "Bake at 200°C for 20 min"], prepTime: "30 min", tags: ["pregnancy-safe", "iron", "protein"], nutritionNote: "Iron-rich baked lamb" },
        { id: "d11-2", name: "Arugula Spinach Salad", emoji: "🥗", ingredients: ["arugula", "baby spinach", "lemon", "dill"], instructions: ["Toss and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Folate and iron" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s11-1", name: "Carrots & Hummus", emoji: "🥕", ingredients: ["carrot sticks", "hummus"], instructions: ["Dip and enjoy"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin A" },
        { id: "s11-2", name: "Mixed Nuts", emoji: "🥜", ingredients: ["walnuts", "cashews"], instructions: ["Handful"], prepTime: "1 min", tags: ["pregnancy-safe", "omega-3"], nutritionNote: "Healthy fats" }
      ]}
    ]
  },
  {
    date: "day-12",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b12-1", name: "Liver Pâté Toast", emoji: "🍞", ingredients: ["sourdough", "liver pâté", "cucumber", "dill"], instructions: ["Toast, spread, top"], prepTime: "3 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Iron and B vitamins" },
        { id: "b12-2", name: "Hard Boiled Eggs & Tomato", emoji: "🥚", ingredients: ["eggs", "raw tomato", "salt"], instructions: ["Boil eggs 12 min", "Serve with sliced tomato"], prepTime: "15 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Protein and lycopene" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l12-1", name: "Manti", emoji: "🥟", ingredients: ["dough", "lamb mince", "onion", "cumin", "yoghurt", "dill"], instructions: ["Fill dumplings", "Steam 40 min", "Top with yoghurt and dill"], prepTime: "1.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Steamed protein-packed dumplings" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d12-1", name: "Chicken Margherita Pide", emoji: "🫓", ingredients: ["dough", "chicken", "tomato", "cheese", "basil"], instructions: ["Shape, top, bake at 220°C for 15 min"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced pizza alternative" },
        { id: "d12-2", name: "Kazakh Cucumber Salad", emoji: "🥒", ingredients: ["cucumber", "dill", "crème fraîche", "salt"], instructions: ["Slice cucumber, dress with crème fraîche and dill"], prepTime: "5 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Cooling and hydrating" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s12-1", name: "Popcorn", emoji: "🍿", ingredients: ["kernels", "salt"], instructions: ["Air-pop, salt lightly"], prepTime: "5 min", tags: ["pregnancy-safe", "whole-grain"], nutritionNote: "Fiber-rich whole grain" },
        { id: "s12-2", name: "Kiwi", emoji: "🥝", ingredients: ["2 kiwis"], instructions: ["Peel and eat"], prepTime: "2 min", tags: ["pregnancy-safe", "vitamin-c"], nutritionNote: "Vitamin C powerhouse" }
      ]}
    ]
  },
  {
    date: "day-13",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b13-1", name: "Goat Cheese Scramble", emoji: "🍳", ingredients: ["eggs", "goat cheese", "dill", "sourdough"], instructions: ["Scramble eggs fully", "Crumble goat cheese on top", "Serve with sourdough and dill"], prepTime: "8 min", tags: ["pregnancy-safe", "protein", "calcium"], nutritionNote: "Protein and calcium combo" },
        { id: "b13-2", name: "Warm Water & Cashews", emoji: "🌰", ingredients: ["warm water", "cashews"], instructions: ["Drink water, eat cashews"], prepTime: "1 min", tags: ["morning-ritual"], nutritionNote: "Magnesium and healthy fats" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l13-1", name: "Lamb Shorpa", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "raw onion"], instructions: ["Boil lamb 1.5 hrs", "Add potatoes", "Serve with dill and raw onion"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh", "iron"], nutritionNote: "Deep nourishment from bone broth" },
        { id: "l13-2", name: "Bread with Dill Pesto", emoji: "🌿", ingredients: ["sourdough", "dill", "parsley", "sour cream"], instructions: ["Blend herbs with sour cream", "Spread on bread"], prepTime: "5 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Folate from fresh herbs" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d13-1", name: "Baked Chicken Breast", emoji: "🍗", ingredients: ["chicken breast", "salt", "cumin", "lemon", "parsley"], instructions: ["Season, bake at 200°C for 25 min"], prepTime: "30 min", tags: ["pregnancy-safe", "lean-protein"], nutritionNote: "Lean protein" },
        { id: "d13-2", name: "Boiled Potatoes & Dill", emoji: "🥔", ingredients: ["potatoes", "dill", "salt"], instructions: ["Boil and garnish"], prepTime: "20 min", tags: ["pregnancy-safe"], nutritionNote: "Potassium and energy" },
        { id: "d13-3", name: "Tomato Crème Fraîche Salad", emoji: "🍅", ingredients: ["raw tomato", "crème fraîche", "dill"], instructions: ["Slice tomato, top with crème fraîche and dill"], prepTime: "3 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Vitamin C and probiotics" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s13-1", name: "Apple & Walnuts", emoji: "🍏", ingredients: ["Granny Smith apple", "walnuts"], instructions: ["Slice apple, pair with walnuts"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber and omega-3s" },
        { id: "s13-2", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice and enjoy"], prepTime: "2 min", tags: ["pregnancy-safe", "hydration"], nutritionNote: "Refreshing hydration" }
      ]}
    ]
  },
  {
    date: "day-14",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b14-1", name: "Sirniki with Fruit", emoji: "🧀", ingredients: ["quark", "egg", "flour", "yoghurt", "Granny Smith apple"], instructions: ["Make patties, bake", "Serve with yoghurt and apple slices"], prepTime: "25 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium and protein" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l14-1", name: "Tavuk Çorbası", emoji: "🍗", ingredients: ["chicken", "potato", "lemon", "parsley"], instructions: ["Boil, shred, season"], prepTime: "30 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Nourishing soup" },
        { id: "l14-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "baby spinach", "tomato", "lemon"], instructions: ["Toss and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Iron-rich greens" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d14-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "noodles", "onion", "dill", "broth"], instructions: ["Boil lamb", "Cook noodles", "Assemble"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron and comfort" },
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s14-1", name: "Nachos & Hummus", emoji: "🌮", ingredients: ["tortilla chips", "hummus"], instructions: ["Serve together"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Plant protein snack" },
        { id: "s14-2", name: "Kiwi & Cashews", emoji: "🥝", ingredients: ["kiwi", "cashews"], instructions: ["Slice kiwi, pair with cashews"], prepTime: "2 min", tags: ["pregnancy-safe", "vitamin-c"], nutritionNote: "Vitamin C and magnesium" }
      ]}
    ]
  },
  // Days 15-21: Week 3
  {
    date: "day-15",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b15-1", name: "Turkish Breakfast", emoji: "🥚", ingredients: ["scrambled eggs", "goat cheese", "tomato", "cucumber", "olives", "sourdough", "dill"], instructions: ["Scramble eggs, arrange plate"], prepTime: "10 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced morning plate" },
        { id: "b15-2", name: "Ginger Tea", emoji: "🍵", ingredients: ["ginger", "water"], instructions: ["Steep lightly"], prepTime: "3 min", tags: ["hydration"], nutritionNote: "Gentle nausea relief" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l15-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["lentils", "potato", "cumin", "lemon"], instructions: ["Boil, blend, season"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish", "folate"], nutritionNote: "Folate and iron" },
        { id: "l15-2", name: "Havarti & Sourdough", emoji: "🧈", ingredients: ["sourdough", "aged Havarti"], instructions: ["Toast and serve"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d15-1", name: "Comfort Lamb Boil", emoji: "🍖", ingredients: ["mutton", "potatoes", "cumin", "raw onion"], instructions: ["Boil mutton 2 hrs, add potatoes, serve with onion"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh", "comfort-food"], nutritionNote: "Iron-rich comfort meal" },
        { id: "d15-2", name: "Pickled Carrot Salad", emoji: "🥕", ingredients: ["carrots", "vinegar", "salt", "dill"], instructions: ["Julienne, dress, garnish"], prepTime: "10 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Beta-carotene" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s15-1", name: "Danish Crisps", emoji: "🍘", ingredients: ["Nordic nut crisps"], instructions: ["Serve"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Seeds and fiber" },
        { id: "s15-2", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice"], prepTime: "2 min", tags: ["pregnancy-safe", "hydration"], nutritionNote: "Hydration" }
      ]}
    ]
  },
  {
    date: "day-16",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b16-1", name: "Scrambled Eggs & Dill Toast", emoji: "🍳", ingredients: ["eggs", "dill", "sourdough", "goat cheese"], instructions: ["Scramble eggs, serve on toast with goat cheese and dill"], prepTime: "8 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Protein and calcium" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l16-1", name: "Kazakh Lamb Shorpa", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "parsley"], instructions: ["Boil lamb, add potatoes, garnish"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh", "iron"], nutritionNote: "Nourishing broth" },
        { id: "l16-2", name: "Crème Fraîche Salad", emoji: "🍅", ingredients: ["tomato", "cucumber", "dill", "crème fraîche"], instructions: ["Dice and mix"], prepTime: "5 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Fresh vitamins" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d16-1", name: "Baked Chicken Pide", emoji: "🫓", ingredients: ["dough", "chicken", "cheese", "tomato"], instructions: ["Shape, top, bake"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced meal" },
        { id: "d16-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "lemon", "sesame"], instructions: ["Toss and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Iron and folate" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s16-1", name: "Hummus & Carrots", emoji: "🥕", ingredients: ["hummus", "carrot sticks"], instructions: ["Dip"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin A" },
        { id: "s16-2", name: "Roasted Nuts", emoji: "🥜", ingredients: ["walnuts", "cashews"], instructions: ["Handful"], prepTime: "1 min", tags: ["pregnancy-safe", "omega-3"], nutritionNote: "Brain-healthy fats" }
      ]}
    ]
  },
  {
    date: "day-17",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b17-1", name: "Yoghurt Bowl", emoji: "🥣", ingredients: ["full fat yoghurt", "kiwi", "walnuts", "apple"], instructions: ["Top yoghurt with fruit and nuts"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Probiotics and calcium" },
        { id: "b17-2", name: "Warm Water", emoji: "💧", ingredients: ["lukewarm water"], instructions: ["Drink first thing"], prepTime: "0 min", tags: ["hydration"], nutritionNote: "Morning hydration" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l17-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "noodles", "onion", "dill"], instructions: ["Boil lamb, cook noodles, assemble"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Favorite comfort food" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d17-1", name: "Baked Lamb Chops", emoji: "🍖", ingredients: ["lamb chops", "salt", "cumin", "lemon"], instructions: ["Season, bake 20 min"], prepTime: "25 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Heme iron" },
        { id: "d17-2", name: "Boiled Potatoes", emoji: "🥔", ingredients: ["potatoes", "dill", "sour cream"], instructions: ["Boil, serve with toppings"], prepTime: "20 min", tags: ["pregnancy-safe"], nutritionNote: "Energy and potassium" },
        { id: "d17-3", name: "Tomato Sesame Salad", emoji: "🍅", ingredients: ["tomato", "sesame", "basil"], instructions: ["Slice, drizzle, garnish"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Lycopene" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s17-1", name: "Popcorn", emoji: "🍿", ingredients: ["kernels", "salt"], instructions: ["Air-pop"], prepTime: "5 min", tags: ["pregnancy-safe", "whole-grain"], nutritionNote: "Whole grain fiber" },
        { id: "s17-2", name: "Apple Slices", emoji: "🍏", ingredients: ["Granny Smith apple"], instructions: ["Slice and eat"], prepTime: "2 min", tags: ["pregnancy-safe", "fiber"], nutritionNote: "Fiber and freshness" }
      ]}
    ]
  },
  {
    date: "day-18",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b18-1", name: "Hard Boiled Eggs & Havarti", emoji: "🥚", ingredients: ["eggs", "aged Havarti", "tomato", "sourdough"], instructions: ["Boil eggs, slice cheese and tomato, toast bread"], prepTime: "15 min", tags: ["pregnancy-safe", "protein", "calcium"], nutritionNote: "Complete breakfast" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l18-1", name: "Tavuk Çorbası", emoji: "🍗", ingredients: ["chicken", "potato", "lemon", "dill"], instructions: ["Boil, shred, season, garnish"], prepTime: "30 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Protein-rich soup" },
        { id: "l18-2", name: "Parsley Dill Pesto Bread", emoji: "🌿", ingredients: ["sourdough", "parsley", "dill", "sour cream", "pistachio"], instructions: ["Blend herbs, spread, top with pistachio"], prepTime: "5 min", tags: ["pregnancy-safe"], nutritionNote: "Herb nutrition" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d18-1", name: "Manti", emoji: "🥟", ingredients: ["dough", "lamb", "onion", "cumin", "yoghurt"], instructions: ["Make, fill, steam, serve with yoghurt"], prepTime: "1.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Steamed and protein-rich" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s18-1", name: "Nachos", emoji: "🌮", ingredients: ["tortilla chips", "hummus"], instructions: ["Dip and crunch"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Plant protein" },
        { id: "s18-2", name: "Kiwi", emoji: "🥝", ingredients: ["kiwis"], instructions: ["Peel, slice"], prepTime: "2 min", tags: ["pregnancy-safe", "vitamin-c"], nutritionNote: "Vitamin C" }
      ]}
    ]
  },
  {
    date: "day-19",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b19-1", name: "Sirniki", emoji: "🧀", ingredients: ["quark", "egg", "flour", "yoghurt"], instructions: ["Mix, form patties, bake"], prepTime: "25 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium breakfast" },
        { id: "b19-2", name: "Nuts & Tea", emoji: "🌰", ingredients: ["walnuts", "cashews", "ginger tea"], instructions: ["Eat nuts, sip tea"], prepTime: "3 min", tags: ["morning-ritual"], nutritionNote: "Morning energy boost" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l19-1", name: "Lamb Potato Soup", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "raw onion", "dill"], instructions: ["Boil, add potatoes, serve"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron and warmth" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d19-1", name: "Baked Chicken Thighs", emoji: "🍗", ingredients: ["chicken thighs", "cumin", "salt", "lemon"], instructions: ["Season, bake 35 min"], prepTime: "40 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "More iron than breast" },
        { id: "d19-2", name: "Crème Fraîche Cucumber Salad", emoji: "🥒", ingredients: ["cucumber", "crème fraîche", "dill"], instructions: ["Slice, dress"], prepTime: "3 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Cooling and fresh" },
        { id: "d19-3", name: "Arugula Spinach Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "lemon", "sesame"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Folate" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s19-1", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Hydration" },
        { id: "s19-2", name: "Danish Crisps", emoji: "🍘", ingredients: ["nut crisps"], instructions: ["Serve"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber" }
      ]}
    ]
  },
  {
    date: "day-20",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b20-1", name: "Spanish Omelette", emoji: "🍳", ingredients: ["eggs", "potato", "salt"], instructions: ["Boil potato, pour eggs, bake fully"], prepTime: "30 min", tags: ["pregnancy-safe", "protein"], nutritionNote: "Protein and energy" },
        { id: "b20-2", name: "Goat Cheese & Tomato", emoji: "🧀", ingredients: ["goat cheese", "raw tomato", "dill"], instructions: ["Slice and arrange"], prepTime: "2 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l20-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["lentils", "potato", "cumin", "lemon"], instructions: ["Boil, blend, season"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Folate and iron" },
        { id: "l20-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "tomato", "dill", "lemon"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Greens" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d20-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "noodles", "onion", "dill"], instructions: ["Boil lamb, cook noodles, assemble"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh", "comfort-food"], nutritionNote: "Ultimate comfort" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s20-1", name: "Carrots & Hummus", emoji: "🥕", ingredients: ["carrots", "hummus"], instructions: ["Dip"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin A" },
        { id: "s20-2", name: "Mixed Nuts", emoji: "🥜", ingredients: ["walnuts", "cashews"], instructions: ["Handful"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Omega-3s" }
      ]}
    ]
  },
  // Days 21-30: Week 4-5
  {
    date: "day-21",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b21-1", name: "Turkish Breakfast", emoji: "🥚", ingredients: ["eggs", "goat cheese", "tomato", "cucumber", "olives", "sourdough", "dill"], instructions: ["Scramble eggs, arrange plate"], prepTime: "10 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced morning" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l21-1", name: "Lamb Shorpa", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "onion"], instructions: ["Boil, cook, garnish"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron and minerals" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d21-1", name: "Baked Chicken & Veggies", emoji: "🍗", ingredients: ["chicken", "potatoes", "salt", "cumin", "parsley"], instructions: ["Season, bake together"], prepTime: "45 min", tags: ["pregnancy-safe"], nutritionNote: "One-pan meal" },
        { id: "d21-2", name: "Pickled Carrots", emoji: "🥕", ingredients: ["carrots", "vinegar", "salt"], instructions: ["Julienne, pickle"], prepTime: "10 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Beta-carotene" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s21-1", name: "Popcorn", emoji: "🍿", ingredients: ["kernels", "salt"], instructions: ["Air-pop"], prepTime: "5 min", tags: ["pregnancy-safe"], nutritionNote: "Whole grain" },
        { id: "s21-2", name: "Apple & Cashews", emoji: "🍏", ingredients: ["apple", "cashews"], instructions: ["Slice apple, pair"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber and protein" }
      ]}
    ]
  },
  {
    date: "day-22",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b22-1", name: "Liver Pâté on Sourdough", emoji: "🍞", ingredients: ["sourdough", "liver pâté", "dill"], instructions: ["Toast, spread, garnish"], prepTime: "3 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Iron and B12" },
        { id: "b22-2", name: "Yoghurt & Kiwi", emoji: "🥣", ingredients: ["yoghurt", "kiwi", "walnuts"], instructions: ["Top yoghurt with kiwi and walnuts"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium and vitamin C" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l22-1", name: "Tavuk Çorbası", emoji: "🍗", ingredients: ["chicken", "potato", "lemon", "parsley"], instructions: ["Boil, shred, season"], prepTime: "30 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Protein soup" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d22-1", name: "Comfort Lamb Boil", emoji: "🍖", ingredients: ["mutton", "potatoes", "cumin", "raw onion"], instructions: ["Boil 2 hrs, add potatoes, serve with onion"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron-rich comfort" },
        { id: "d22-2", name: "Tomato Dill Salad", emoji: "🍅", ingredients: ["tomato", "dill", "crème fraîche"], instructions: ["Slice and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Vitamins" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s22-1", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Hydration" },
        { id: "s22-2", name: "Nachos", emoji: "🌮", ingredients: ["chips", "hummus"], instructions: ["Dip"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Crunch and protein" }
      ]}
    ]
  },
  {
    date: "day-23",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b23-1", name: "Scrambled Eggs Turkish Style", emoji: "🍳", ingredients: ["eggs", "tomato (raw on top)", "parsley", "sourdough"], instructions: ["Scramble fully, top with raw tomato and parsley"], prepTime: "8 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Protein and vitamins" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l23-1", name: "Manti", emoji: "🥟", ingredients: ["dough", "lamb", "onion", "cumin", "yoghurt", "dill"], instructions: ["Fill, steam, serve with yoghurt"], prepTime: "1.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Steamed protein" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d23-1", name: "Beef Pide", emoji: "🫓", ingredients: ["dough", "beef mince", "tomato", "cheese"], instructions: ["Shape, top, bake"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Iron from beef" },
        { id: "d23-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "lemon"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Folate" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s23-1", name: "Mixed Nuts", emoji: "🥜", ingredients: ["walnuts", "cashews"], instructions: ["Handful"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Healthy fats" },
        { id: "s23-2", name: "Kiwi", emoji: "🥝", ingredients: ["kiwis"], instructions: ["Peel, eat"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin C" }
      ]}
    ]
  },
  {
    date: "day-24",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b24-1", name: "Goat Cheese Toast & Eggs", emoji: "🧀", ingredients: ["sourdough", "goat cheese", "hard boiled egg", "dill"], instructions: ["Toast, spread cheese, serve with sliced egg and dill"], prepTime: "15 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium and protein" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l24-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["lentils", "potato", "cumin", "lemon"], instructions: ["Boil, blend, season"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish", "folate"], nutritionNote: "Folate powerhouse" },
        { id: "l24-2", name: "Cucumber Dill Salad", emoji: "🥒", ingredients: ["cucumber", "dill", "crème fraîche"], instructions: ["Slice and dress"], prepTime: "3 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Cooling" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d24-1", name: "Baked Lamb Kofta", emoji: "🍖", ingredients: ["lamb mince", "parsley", "cumin"], instructions: ["Shape, bake 20 min"], prepTime: "30 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Iron" },
        { id: "d24-2", name: "Boiled Potatoes & Dill", emoji: "🥔", ingredients: ["potatoes", "dill", "salt"], instructions: ["Boil, garnish"], prepTime: "20 min", tags: ["pregnancy-safe"], nutritionNote: "Energy" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s24-1", name: "Nordic Crisps", emoji: "🍘", ingredients: ["nut crisps"], instructions: ["Serve"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber" },
        { id: "s24-2", name: "Apple", emoji: "🍏", ingredients: ["Granny Smith apple"], instructions: ["Eat"], prepTime: "0 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber" }
      ]}
    ]
  },
  {
    date: "day-25",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b25-1", name: "Sirniki & Fruit", emoji: "🧀", ingredients: ["quark", "egg", "flour", "yoghurt", "kiwi"], instructions: ["Bake patties, serve with yoghurt and kiwi"], prepTime: "25 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l25-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "noodles", "onion", "dill"], instructions: ["Full traditional prep"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Comfort and iron" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d25-1", name: "Chicken Pide", emoji: "🫓", ingredients: ["dough", "chicken", "cheese", "basil"], instructions: ["Shape, top, bake"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s25-1", name: "Hummus & Carrots", emoji: "🥕", ingredients: ["hummus", "carrots"], instructions: ["Dip"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin A" },
        { id: "s25-2", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Hydration" }
      ]}
    ]
  },
  {
    date: "day-26",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b26-1", name: "Turkish Breakfast", emoji: "🥚", ingredients: ["eggs", "goat cheese", "tomato", "cucumber", "sourdough", "olives", "dill"], instructions: ["Full spread"], prepTime: "10 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Balanced" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l26-1", name: "Lamb Soup", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "raw onion"], instructions: ["Boil, cook, serve"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron" },
        { id: "l26-2", name: "Tomato Crème Fraîche Salad", emoji: "🍅", ingredients: ["tomato", "crème fraîche", "dill"], instructions: ["Slice, dress"], prepTime: "3 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Vitamins" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d26-1", name: "Baked Chicken Breast", emoji: "🍗", ingredients: ["chicken", "cumin", "salt", "lemon", "parsley"], instructions: ["Season, bake 25 min"], prepTime: "30 min", tags: ["pregnancy-safe"], nutritionNote: "Lean protein" },
        { id: "d26-2", name: "Arugula Spinach Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "lemon", "sesame"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Folate" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s26-1", name: "Popcorn", emoji: "🍿", ingredients: ["kernels"], instructions: ["Air-pop"], prepTime: "5 min", tags: ["pregnancy-safe"], nutritionNote: "Whole grain" },
        { id: "s26-2", name: "Cashews", emoji: "🌰", ingredients: ["cashews"], instructions: ["Eat"], prepTime: "0 min", tags: ["pregnancy-safe"], nutritionNote: "Magnesium" }
      ]}
    ]
  },
  {
    date: "day-27",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b27-1", name: "Spanish Omelette", emoji: "🍳", ingredients: ["eggs", "potato", "salt", "parsley"], instructions: ["Boil potato, eggs, bake"], prepTime: "30 min", tags: ["pregnancy-safe"], nutritionNote: "Protein" },
        { id: "b27-2", name: "Havarti & Sourdough", emoji: "🧈", ingredients: ["sourdough", "Havarti"], instructions: ["Toast, top"], prepTime: "3 min", tags: ["pregnancy-safe", "calcium"], nutritionNote: "Calcium" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l27-1", name: "Tavuk Çorbası", emoji: "🍗", ingredients: ["chicken", "potato", "lemon", "dill"], instructions: ["Boil, shred, season"], prepTime: "30 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Nourishing" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d27-1", name: "Comfort Lamb Boil", emoji: "🍖", ingredients: ["mutton", "potatoes", "cumin", "raw onion"], instructions: ["Boil 2 hrs, add potatoes"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron comfort" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s27-1", name: "Kiwi & Walnuts", emoji: "🥝", ingredients: ["kiwi", "walnuts"], instructions: ["Slice, pair"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Vitamin C and omega-3" },
        { id: "s27-2", name: "Nachos", emoji: "🌮", ingredients: ["chips", "hummus"], instructions: ["Dip"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Crunch" }
      ]}
    ]
  },
  {
    date: "day-28",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b28-1", name: "Pesto Toast with Poached Eggs", emoji: "🌿", ingredients: ["sourdough", "parsley", "dill", "sour cream", "eggs", "pistachio"], instructions: ["Blend herb pesto, spread on toast", "Poach eggs fully (firm yolk)", "Top with crushed pistachio"], prepTime: "12 min", tags: ["pregnancy-safe"], nutritionNote: "Folate and protein" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l28-1", name: "Manti", emoji: "🥟", ingredients: ["dough", "lamb", "onion", "cumin", "yoghurt"], instructions: ["Fill, steam, serve"], prepTime: "1.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Protein" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d28-1", name: "Baked Lamb Chops", emoji: "🍖", ingredients: ["lamb chops", "salt", "cumin", "lemon"], instructions: ["Season, bake"], prepTime: "25 min", tags: ["pregnancy-safe", "iron"], nutritionNote: "Iron" },
        { id: "d28-2", name: "Pickled Carrot Salad", emoji: "🥕", ingredients: ["carrots", "vinegar", "dill"], instructions: ["Julienne, dress"], prepTime: "10 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Beta-carotene" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s28-1", name: "Danish Crisps", emoji: "🍘", ingredients: ["nut crisps"], instructions: ["Serve"], prepTime: "1 min", tags: ["pregnancy-safe"], nutritionNote: "Seeds" },
        { id: "s28-2", name: "Watermelon", emoji: "🍉", ingredients: ["watermelon"], instructions: ["Slice"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Hydration" }
      ]}
    ]
  },
  {
    date: "day-29",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b29-1", name: "Scrambled Eggs & Goat Cheese", emoji: "🍳", ingredients: ["eggs", "goat cheese", "dill", "sourdough"], instructions: ["Scramble, crumble cheese, serve with toast"], prepTime: "8 min", tags: ["pregnancy-safe"], nutritionNote: "Protein and calcium" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l29-1", name: "Mercimek Çorbası", emoji: "🍲", ingredients: ["lentils", "potato", "cumin", "lemon"], instructions: ["Boil, blend, season"], prepTime: "25 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "Folate" },
        { id: "l29-2", name: "Green Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "dill", "lemon"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe"], nutritionNote: "Iron" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d29-1", name: "Beshbarmak", emoji: "🍖", ingredients: ["lamb", "noodles", "onion", "dill"], instructions: ["Full prep"], prepTime: "2.5 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Comfort" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s29-1", name: "Apple & Nuts", emoji: "🍏", ingredients: ["apple", "walnuts"], instructions: ["Slice, pair"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Fiber and fats" },
        { id: "s29-2", name: "Popcorn", emoji: "🍿", ingredients: ["kernels"], instructions: ["Air-pop"], prepTime: "5 min", tags: ["pregnancy-safe"], nutritionNote: "Whole grain" }
      ]}
    ]
  },
  {
    date: "day-30",
    meals: [
      { type: "breakfast", label: "Breakfast", recipes: [
        { id: "b30-1", name: "Turkish Breakfast Feast", emoji: "🥚", ingredients: ["scrambled eggs", "goat cheese", "aged Havarti", "tomato", "cucumber", "olives", "sourdough", "dill", "parsley"], instructions: ["Full Turkish breakfast spread"], prepTime: "15 min", tags: ["pregnancy-safe", "turkish"], nutritionNote: "The ultimate breakfast" },
        { id: "b30-2", name: "Warm Water & Ginger Tea", emoji: "🍵", ingredients: ["warm water", "ginger"], instructions: ["Drink water first, then tea"], prepTime: "3 min", tags: ["hydration"], nutritionNote: "Morning ritual" }
      ]},
      { type: "lunch", label: "Lunch", recipes: [
        { id: "l30-1", name: "Lamb Potato Soup", emoji: "🥘", ingredients: ["lamb", "potatoes", "cumin", "dill", "raw onion"], instructions: ["Classic prep"], prepTime: "2 hrs", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Iron and minerals" },
        { id: "l30-2", name: "Crème Fraîche Tomato Salad", emoji: "🍅", ingredients: ["tomato", "cucumber", "dill", "crème fraîche"], instructions: ["Dice, mix"], prepTime: "5 min", tags: ["pregnancy-safe", "kazakh"], nutritionNote: "Fresh vitamins" }
      ]},
      { type: "dinner", label: "Dinner", recipes: [
        { id: "d30-1", name: "Baked Chicken with Potatoes", emoji: "🍗", ingredients: ["chicken", "potatoes", "cumin", "salt", "parsley"], instructions: ["Season all, bake together 40 min"], prepTime: "45 min", tags: ["pregnancy-safe"], nutritionNote: "Complete dinner" },
        { id: "d30-2", name: "Arugula Spinach Salad", emoji: "🥗", ingredients: ["arugula", "spinach", "lemon", "sesame", "dill"], instructions: ["Toss"], prepTime: "3 min", tags: ["pregnancy-safe", "folate"], nutritionNote: "Folate and iron" }
      ]},
      { type: "snacks", label: "Snacks", recipes: [
        { id: "s30-1", name: "Mixed Fruit & Nut Bowl", emoji: "🥝", ingredients: ["kiwi", "Granny Smith apple", "watermelon", "walnuts", "cashews"], instructions: ["Dice fruits, top with nuts"], prepTime: "5 min", tags: ["pregnancy-safe", "vitamins"], nutritionNote: "Full spectrum of vitamins and healthy fats" },
        { id: "s30-2", name: "Hummus & Carrots", emoji: "🥕", ingredients: ["hummus", "carrot sticks"], instructions: ["Dip"], prepTime: "2 min", tags: ["pregnancy-safe"], nutritionNote: "Plant protein and vitamin A" }
      ]}
    ]
  }
];

export function getFallbackPlan(date: string): DayPlan {
  // Use the date to deterministically pick a plan (rotate through 30 days)
  const d = new Date(date);
  const dayOfYear = Math.floor(
    (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = ((dayOfYear % fallbackPlans.length) + fallbackPlans.length) % fallbackPlans.length;
  const plan = fallbackPlans[index];
  return { ...plan, date };
}
