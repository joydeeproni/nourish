"use client";

import { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { RefreshCw, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { DayNav } from "@/components/day-nav";
import { MealCard } from "@/components/meal-card";
import { DayPlan, Preferences } from "@/lib/types";
import { defaultPreferences } from "@/lib/default-preferences";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [plan, setPlan] = useState<DayPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAIPlan, setIsAIPlan] = useState(false);

  const dateKey = format(selectedDate, "yyyy-MM-dd");

  const getPreferences = (): Preferences => {
    if (typeof window === "undefined") return defaultPreferences;
    const stored = localStorage.getItem("nourish-preferences");
    return stored ? JSON.parse(stored) : defaultPreferences;
  };

  const generatePlan = useCallback(
    async (useAI = false) => {
      // Check cache first (only for non-AI requests)
      if (!useAI) {
        const cached = localStorage.getItem(`nourish-plan-${dateKey}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          setPlan(parsed);
          setIsAIPlan(parsed._ai === true);
          return;
        }
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: dateKey,
            preferences: getPreferences(),
            useAI,
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to generate");
        }

        const data: DayPlan = await res.json();
        const tagged = { ...data, _ai: useAI };
        setPlan(data);
        setIsAIPlan(useAI);
        localStorage.setItem(`nourish-plan-${dateKey}`, JSON.stringify(tagged));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [dateKey]
  );

  useEffect(() => {
    generatePlan(false);
  }, [generatePlan]);

  return (
    <main className="min-h-screen bg-background max-w-md mx-auto px-5 py-8 pb-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <Link href="/preferences">
          <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => generatePlan(true)}
            disabled={loading}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 bg-muted/50 px-2.5 py-1.5 rounded-full"
          >
            <Sparkles className={`w-3.5 h-3.5 ${loading ? "animate-pulse" : ""}`} />
            <span>AI</span>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem(`nourish-plan-${dateKey}`);
              generatePlan(false);
            }}
            disabled={loading}
            className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Date Display */}
      <div className="text-center mb-5">
        <h1 className="text-3xl font-heading font-normal tracking-tight">
          {format(selectedDate, "EEE, MMM d")}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Meal Plan{isAIPlan ? " · AI generated" : ""}
        </p>
      </div>

      {/* Day Navigation */}
      <div className="mb-6">
        <DayNav selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      </div>

      {/* Meal Cards */}
      <div className="space-y-3">
        {loading && !plan && (
          <div className="text-center py-16">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Loading meal plan...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-sm text-destructive mb-2">{error}</p>
            <button
              onClick={() => generatePlan(false)}
              className="text-sm underline text-muted-foreground"
            >
              Try again
            </button>
          </div>
        )}

        {plan &&
          plan.meals.map((meal) => <MealCard key={meal.type} meal={meal} />)}
      </div>

      {loading && plan && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-full text-sm shadow-lg">
          Generating with AI...
        </div>
      )}
    </main>
  );
}
