import { GoogleGenerativeAI } from "@google/generative-ai";
import { Preferences, DayPlan } from "./types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateMealPlan(
  date: string,
  preferences: Preferences
): Promise<DayPlan> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `You are a pregnancy nutrition expert. Generate a full day meal plan for ${date}.

IMPORTANT CONTEXT: The person is pregnant. All food must be pregnancy-safe.

FOOD PREFERENCES - LIKES:
${preferences.likes.map((l) => `- ${l}`).join("\n")}

FOOD PREFERENCES - DISLIKES:
${preferences.dislikes.map((d) => `- ${d}`).join("\n")}

DIETARY RESTRICTIONS:
${preferences.restrictions.map((r) => `- ${r}`).join("\n")}

ADDITIONAL NOTES:
${preferences.notes}

Generate exactly 4 meal slots: breakfast, lunch, dinner, snacks.
Each meal slot should have 2-4 recipe suggestions.
Each recipe should be simple, clean, and healthy for pregnancy.

Respond ONLY with valid JSON matching this exact structure (no markdown, no code fences):
{
  "date": "${date}",
  "meals": [
    {
      "type": "breakfast",
      "label": "Breakfast",
      "recipes": [
        {
          "id": "unique-id",
          "name": "Recipe Name",
          "emoji": "🥗",
          "ingredients": ["ingredient 1", "ingredient 2"],
          "instructions": ["step 1", "step 2"],
          "prepTime": "15 min",
          "tags": ["pregnancy-safe", "high-iron"],
          "nutritionNote": "Brief pregnancy nutrition benefit"
        }
      ]
    },
    {
      "type": "lunch",
      "label": "Lunch",
      "recipes": [...]
    },
    {
      "type": "dinner",
      "label": "Dinner",
      "recipes": [...]
    },
    {
      "type": "snacks",
      "label": "Snacks",
      "recipes": [...]
    }
  ]
}

Use relevant food emojis. Keep recipes simple and quick. Focus on the liked foods and Kazakh/Turkish cuisine. Ensure nutritional balance across the day.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Strip markdown code fences if present
  const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

  try {
    return JSON.parse(cleaned) as DayPlan;
  } catch {
    throw new Error("Failed to parse meal plan from AI response");
  }
}
