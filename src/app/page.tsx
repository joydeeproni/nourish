"use client";

import { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { RefreshCw, Settings } from "lucide-react";
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

  const dateKey = format(selectedDate, "yyyy-MM-dd");

  const getPreferences = (): Preferences => {
    if (typeof window === "undefined") return defaultPreferences;
    const stored = localStorage.getItem("nourish-preferences");
    return stored ? JSON.parse(stored) : defaultPreferences;
  };

  const generatePlan = useCallback(
    async (forceRefresh = false) => {
      // Check cache first
      if (!forceRefresh) {
        const cached = localStorage.getItem(`nourish-plan-${dateKey}`);
        if (cached) {
          setPlan(JSON.parse(cached));
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
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to generate");
        }

        const data: DayPlan = await res.json();
        setPlan(data);
        localStorage.setItem(`nourish-plan-${dateKey}`, JSON.stringify(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [dateKey]
  );

  useEffect(() => {
    generatePlan();
  }, [generatePlan]);

  return (
    <main className="min-h-screen bg-background max-w-md mx-auto px-5 py-8 pb-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <Link href="/preferences">
          <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <button
          onClick={() => generatePlan(true)}
          disabled={loading}
          className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* Date Display */}
      <div className="text-center mb-5">
        <h1 className="text-3xl font-semibold tracking-tight">
          {format(selectedDate, "EEE, MMM d")}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Meal Plan</p>
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
              Generating your meal plan...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-sm text-destructive mb-2">{error}</p>
            <button
              onClick={() => generatePlan(true)}
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
          Refreshing...
        </div>
      )}
    </main>
  );
}
