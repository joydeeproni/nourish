export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  tags: string[];
  nutritionNote?: string;
}

export interface MealSlot {
  type: "breakfast" | "lunch" | "dinner" | "snacks";
  label: string;
  recipes: Recipe[];
}

export interface DayPlan {
  date: string; // ISO date string YYYY-MM-DD
  meals: MealSlot[];
}

export interface PreferenceItem {
  emoji: string;
  text: string;
  category: string;
}

export interface Preferences {
  likes: PreferenceItem[];
  dislikes: PreferenceItem[];
  restrictions: PreferenceItem[];
  notes: string;
}
