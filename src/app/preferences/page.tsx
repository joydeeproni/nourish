"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Plus, X, Save } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Preferences } from "@/lib/types";
import { defaultPreferences } from "@/lib/default-preferences";

function PreferenceList({
  title,
  items,
  onAdd,
  onRemove,
}: {
  title: string;
  items: string[];
  onAdd: (item: string) => void;
  onRemove: (index: number) => void;
}) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <Label className="text-sm font-medium mb-3 block">{title}</Label>
      <div className="space-y-1.5 mb-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-muted/40 rounded-lg px-3 py-2 text-sm group"
          >
            <span className="flex-1">{item}</span>
            <button
              onClick={() => onRemove(i)}
              className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add new..."
          className="text-sm"
        />
        <Button size="sm" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default function PreferencesPage() {
  const [prefs, setPrefs] = useState<Preferences>(defaultPreferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("nourish-preferences");
    if (stored) setPrefs(JSON.parse(stored));
  }, []);

  const save = () => {
    localStorage.setItem("nourish-preferences", JSON.stringify(prefs));
    // Clear cached plans so they regenerate with new preferences
    Object.keys(localStorage)
      .filter((k) => k.startsWith("nourish-plan-"))
      .forEach((k) => localStorage.removeItem(k));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateList = (
    key: "likes" | "dislikes" | "restrictions",
    action: "add" | "remove",
    value: string | number
  ) => {
    setPrefs((prev) => ({
      ...prev,
      [key]:
        action === "add"
          ? [...prev[key], value as string]
          : prev[key].filter((_, i) => i !== value),
    }));
  };

  return (
    <main className="min-h-screen bg-background max-w-md mx-auto px-5 py-8 pb-24">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/">
          <ArrowLeft className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <h1 className="text-xl font-heading font-normal">Food Preferences</h1>
      </div>

      <div className="space-y-6">
        <PreferenceList
          title="Likes"
          items={prefs.likes}
          onAdd={(item) => updateList("likes", "add", item)}
          onRemove={(i) => updateList("likes", "remove", i)}
        />

        <Separator />

        <PreferenceList
          title="Dislikes"
          items={prefs.dislikes}
          onAdd={(item) => updateList("dislikes", "add", item)}
          onRemove={(i) => updateList("dislikes", "remove", i)}
        />

        <Separator />

        <PreferenceList
          title="Dietary Restrictions"
          items={prefs.restrictions}
          onAdd={(item) => updateList("restrictions", "add", item)}
          onRemove={(i) => updateList("restrictions", "remove", i)}
        />

        <Separator />

        <div>
          <Label className="text-sm font-medium mb-2 block">
            Additional Notes
          </Label>
          <Textarea
            value={prefs.notes}
            onChange={(e) => setPrefs((p) => ({ ...p, notes: e.target.value }))}
            rows={4}
            className="text-sm"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t max-w-md mx-auto">
        <Button onClick={save} className="w-full" size="lg">
          <Save className="w-4 h-4 mr-2" />
          {saved ? "Saved!" : "Save Preferences"}
        </Button>
      </div>
    </main>
  );
}
