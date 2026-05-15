import { Preferences } from "./types";

export const CATEGORIES = [
  "All",
  "Cuisine",
  "Proteins",
  "Dairy & Eggs",
  "Fruits",
  "Veggies & Salads",
  "Grains & Bread",
  "Soups",
  "Snacks",
  "Drinks",
  "Cooking Style",
  "Spices & Herbs",
] as const;

export const defaultPreferences: Preferences = {
  likes: [
    // Cuisine
    { emoji: "🇰🇿", text: "Kazakhstani food — soups, salads, beshbarmak, manti", category: "Cuisine" },
    { emoji: "🇹🇷", text: "Turkish breakfast — favorite thing in the world", category: "Cuisine" },
    { emoji: "🇹🇷", text: "Mercimek çorbası, tavuk çorbası, simple Turkish soups", category: "Cuisine" },
    { emoji: "🇰🇿", text: "Kazakh salads — pickled carrots, crème fraîche with tomatoes/cucumbers/dill", category: "Cuisine" },
    { emoji: "🇰🇿", text: "Beshbarmak — absolute favorite food", category: "Cuisine" },
    { emoji: "🇰🇿", text: "Bland food preferred — Central Asian style", category: "Cuisine" },

    // Proteins
    { emoji: "🐑", text: "Lamb over beef — preferred protein", category: "Proteins" },
    { emoji: "🍖", text: "Lamb soup — boiled in water with potatoes and meat", category: "Proteins" },
    { emoji: "🥩", text: "Boiled mutton with cumin seeds, potatoes, raw onions — comfort food", category: "Proteins" },
    { emoji: "🫕", text: "Liver pâté", category: "Proteins" },
    { emoji: "🧀", text: "Sirniki (Russian cheese pancakes)", category: "Proteins" },

    // Dairy & Eggs
    { emoji: "🥚", text: "Fully hard boiled eggs or scrambled only", category: "Dairy & Eggs" },
    { emoji: "🍳", text: "Spanish omelette — fully cooked through", category: "Dairy & Eggs" },
    { emoji: "🧀", text: "Goat cheese and aged Havarti", category: "Dairy & Eggs" },
    { emoji: "🥛", text: "Oat milk — only Oatly brand", category: "Dairy & Eggs" },
    { emoji: "🥣", text: "Full fat yoghurt", category: "Dairy & Eggs" },

    // Fruits
    { emoji: "🍏", text: "Green Granny Smith apples", category: "Fruits" },
    { emoji: "🥝", text: "Kiwis", category: "Fruits" },
    { emoji: "🍉", text: "Watermelons", category: "Fruits" },

    // Veggies & Salads
    { emoji: "🥗", text: "Green mix salad — arugula and baby spinach from Netto only", category: "Veggies & Salads" },
    { emoji: "🍅", text: "Raw tomatoes only — not cooked", category: "Veggies & Salads" },
    { emoji: "🥕", text: "Carrots and hummus", category: "Veggies & Salads" },
    { emoji: "🍅", text: "Tomatoes with sesame drizzled on top", category: "Veggies & Salads" },

    // Grains & Bread
    { emoji: "🍞", text: "Sourdough bread", category: "Grains & Bread" },
    { emoji: "🫓", text: "Pizza — chicken or Margherita, Turkish pide", category: "Grains & Bread" },
    { emoji: "🌿", text: "Bread with parsley-dill pesto sauce mixed with sour cream", category: "Grains & Bread" },

    // Soups
    { emoji: "🍲", text: "Mercimek çorbası (lentil soup)", category: "Soups" },
    { emoji: "🍗", text: "Tavuk çorbası (chicken soup)", category: "Soups" },
    { emoji: "🥘", text: "Lamb soup — boiled with potatoes", category: "Soups" },

    // Snacks
    { emoji: "🥜", text: "Roasted walnuts, roasted cashews", category: "Snacks" },
    { emoji: "🌮", text: "Nachos and popcorn", category: "Snacks" },
    { emoji: "🍘", text: "Danish Nordic crisps and nut crisps", category: "Snacks" },
    { emoji: "🌰", text: "Nuts in morning — morning ritual", category: "Snacks" },

    // Drinks
    { emoji: "💧", text: "Lukewarm water in morning", category: "Drinks" },
    { emoji: "🍵", text: "Light ginger tea", category: "Drinks" },

    // Spices & Herbs
    { emoji: "🌿", text: "Parsley and dill — loves them", category: "Spices & Herbs" },
    { emoji: "🌱", text: "Basil, crushed pistachio", category: "Spices & Herbs" },

    // Cooking Style
    { emoji: "♨️", text: "Baked or grilled food only", category: "Cooking Style" },
    { emoji: "🍣", text: "Sushi — sometimes, once a month max", category: "Cooking Style" },
  ],
  dislikes: [
    // Veggies & Salads
    { emoji: "🥗", text: "All salads except arugula + baby spinach mix", category: "Veggies & Salads" },
    { emoji: "🥕", text: "Boiled carrots", category: "Veggies & Salads" },
    { emoji: "🍅", text: "Cooked tomatoes — only raw", category: "Veggies & Salads" },

    // Fruits
    { emoji: "🍈", text: "Cantaloupe — absolutely not", category: "Fruits" },
    { emoji: "🍍", text: "Pineapple — cannot eat", category: "Fruits" },

    // Dairy & Eggs
    { emoji: "🥚", text: "Half cooked / runny eggs", category: "Dairy & Eggs" },

    // Cuisine
    { emoji: "🇮🇹", text: "Italian breakfast", category: "Cuisine" },
    { emoji: "🍝", text: "Pasta, spaghetti, lasagna of any kind", category: "Cuisine" },
    { emoji: "🍛", text: "Biriyani and Indian food — except very mild butter chicken occasionally", category: "Cuisine" },

    // Cooking Style
    { emoji: "🛢️", text: "Too much oil or visibly oily food", category: "Cooking Style" },
    { emoji: "🔥", text: "Burnt food, barbeque, burnt texture", category: "Cooking Style" },

    // Spices & Herbs
    { emoji: "🫚", text: "Ginger in food (light ginger tea is fine)", category: "Spices & Herbs" },
    { emoji: "🌶️", text: "Spices, chillies, onions, garlic", category: "Spices & Herbs" },
    { emoji: "🫙", text: "Cinnamon, cardamom, any strong warm spice", category: "Spices & Herbs" },
    { emoji: "👃", text: "Any food with strong smell", category: "Spices & Herbs" },

    // Proteins
    { emoji: "🌭", text: "Sucuk (not a favorite in Turkish breakfast)", category: "Proteins" },
  ],
  restrictions: [
    { emoji: "🤰", text: "PREGNANT — all meals must be pregnancy-safe", category: "Health" },
    { emoji: "🚫", text: "NO pork, NO bacon — absolutely not", category: "Dietary" },
    { emoji: "🚫", text: "NO fried food of any kind — ABSOLUTE rule", category: "Cooking Style" },
    { emoji: "🫗", text: "No oil cooking — try to use no oil at all", category: "Cooking Style" },
    { emoji: "🔥", text: "No charcoal grilled food", category: "Cooking Style" },
    { emoji: "♨️", text: "Only baked or grilled (oven/pan) food", category: "Cooking Style" },
    { emoji: "🌶️", text: "No strong spices or chillies", category: "Spices & Herbs" },
    { emoji: "🥚", text: "No raw or undercooked eggs", category: "Dairy & Eggs" },
    { emoji: "🐟", text: "No raw fish (sushi once a month — cooked rolls only)", category: "Dietary" },
    { emoji: "🫙", text: "No strong-smelling warm spices (cinnamon, cardamom)", category: "Spices & Herbs" },
  ],
  notes:
    "She is from Kazakhstan. Comfort food is just boiled mutton with cumin seeds, potatoes, and raw onions. Balanced diet should include: soup, nuts, veggies, fruits, meat/chicken, bread/rice/roti/paratha across the day. Keep meals simple, clean, and bland. Focus on nutrition for pregnancy.",
};
