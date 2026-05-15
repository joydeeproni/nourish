import { NextRequest, NextResponse } from "next/server";
import { generateMealPlan } from "@/lib/gemini";
import { Preferences } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { date, preferences } = (await request.json()) as {
      date: string;
      preferences: Preferences;
    };

    if (!date || !preferences) {
      return NextResponse.json(
        { error: "Missing date or preferences" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const plan = await generateMealPlan(date, preferences);
    return NextResponse.json(plan);
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate meal plan" },
      { status: 500 }
    );
  }
}
