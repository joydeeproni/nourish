import { NextRequest, NextResponse } from "next/server";
import { generateMealPlan } from "@/lib/gemini";
import { getFallbackPlan } from "@/lib/fallback-recipes";
import { Preferences } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { date, preferences, useAI } = (await request.json()) as {
      date: string;
      preferences: Preferences;
      useAI?: boolean;
    };

    if (!date || !preferences) {
      return NextResponse.json(
        { error: "Missing date or preferences" },
        { status: 400 }
      );
    }

    // If AI not requested or no API key, use fallback
    if (!useAI || !process.env.GEMINI_API_KEY) {
      return NextResponse.json(getFallbackPlan(date));
    }

    try {
      const plan = await generateMealPlan(date, preferences);
      return NextResponse.json(plan);
    } catch (aiError) {
      console.error("Gemini error, falling back:", aiError);
      // Fallback to pre-built recipes on AI failure
      return NextResponse.json(getFallbackPlan(date));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Generation error:", message, error);
    return NextResponse.json(
      { error: `Failed to generate meal plan: ${message}` },
      { status: 500 }
    );
  }
}
