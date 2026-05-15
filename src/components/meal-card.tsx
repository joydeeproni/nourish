"use client";

import { MealSlot, Recipe } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <Sheet>
      <SheetTrigger className="flex flex-col items-center gap-1 min-w-[60px] hover:opacity-70 transition-opacity">
        <span className="text-2xl">{recipe.emoji}</span>
        <span className="text-[10px] text-muted-foreground leading-tight text-center max-w-[70px] truncate">
          {recipe.name}
        </span>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-2xl">
        <SheetHeader className="text-left pb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{recipe.emoji}</span>
            <div>
              <SheetTitle className="text-lg">{recipe.name}</SheetTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Clock className="w-3 h-3" />
                <span>{recipe.prepTime}</span>
              </div>
            </div>
          </div>
        </SheetHeader>

        <div className="flex gap-1.5 flex-wrap mb-4">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {recipe.nutritionNote && (
          <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mb-4">
            {recipe.nutritionNote}
          </p>
        )}

        <Separator className="mb-4" />

        <div className="space-y-4 overflow-y-auto pb-8">
          <div>
            <h3 className="font-medium text-sm mb-2">Ingredients</h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-foreground mt-0.5">·</span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-2">Instructions</h3>
            <ol className="space-y-2">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-foreground font-medium shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function MealCard({ meal }: { meal: MealSlot }) {
  const labelMap: Record<string, string> = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snacks: "Snacks",
  };

  return (
    <Card className="border-0 shadow-sm bg-muted/30">
      <CardContent className="p-5">
        <div className="flex items-center justify-center gap-2 mb-3">
          {meal.recipes.slice(0, 4).map((r) => (
            <RecipeDetail key={r.id} recipe={r} />
          ))}
        </div>
        <div className="text-center">
          <p className="font-heading font-normal text-sm">{labelMap[meal.type]}</p>
          <p className="text-xs text-muted-foreground">
            {meal.recipes.length} recipe{meal.recipes.length !== 1 ? "s" : ""}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
