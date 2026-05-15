"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Plus, X, Save } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Preferences, PreferenceItem } from "@/lib/types";
import { defaultPreferences, CATEGORIES } from "@/lib/default-preferences";

type Section = "likes" | "dislikes" | "restrictions";

const SECTION_CONFIG: {
  key: Section;
  label: string;
  emoji: string;
  color: string;
}[] = [
  { key: "likes", label: "Likes", emoji: "💚", color: "bg-emerald-50 text-emerald-700" },
  { key: "dislikes", label: "Dislikes", emoji: "🚫", color: "bg-red-50 text-red-700" },
  { key: "restrictions", label: "Restrictions", emoji: "⚠️", color: "bg-amber-50 text-amber-700" },
];

function PreferenceChip({
  item,
  onRemove,
}: {
  item: PreferenceItem;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-1.5 bg-muted/50 rounded-full px-3 py-1.5 text-sm group">
      <span>{item.emoji}</span>
      <span className="flex-1 truncate">{item.text}</span>
      <button
        onClick={onRemove}
        className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}

function AddItemForm({
  onAdd,
  categories,
}: {
  onAdd: (item: PreferenceItem) => void;
  categories: string[];
}) {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("🍽️");
  const [category, setCategory] = useState(categories[1] || "Cuisine");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd({ emoji, text: text.trim(), category });
      setText("");
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      <div className="flex gap-2">
        <Input
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="w-12 text-center text-lg px-1"
          maxLength={4}
        />
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add preference..."
          className="text-sm flex-1"
        />
        <Button size="sm" variant="outline" onClick={handleAdd}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {categories.slice(1).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
              category === cat
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PreferencesPage() {
  const [prefs, setPrefs] = useState<Preferences>(defaultPreferences);
  const [saved, setSaved] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("likes");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const stored = localStorage.getItem("nourish-preferences");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Migrate old string format to new PreferenceItem format
      if (parsed.likes && typeof parsed.likes[0] === "string") {
        // Old format, use defaults
        return;
      }
      setPrefs(parsed);
    }
  }, []);

  const save = () => {
    localStorage.setItem("nourish-preferences", JSON.stringify(prefs));
    Object.keys(localStorage)
      .filter((k) => k.startsWith("nourish-plan-"))
      .forEach((k) => localStorage.removeItem(k));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const currentItems = prefs[activeSection];

  const categoriesInUse = useMemo(() => {
    const cats = new Set(currentItems.map((item) => item.category));
    return ["All", ...Array.from(cats).sort()];
  }, [currentItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return currentItems;
    return currentItems.filter((item) => item.category === activeCategory);
  }, [currentItems, activeCategory]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, PreferenceItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const removeItem = (section: Section, item: PreferenceItem) => {
    setPrefs((prev) => ({
      ...prev,
      [section]: prev[section].filter(
        (i) => !(i.text === item.text && i.emoji === item.emoji)
      ),
    }));
  };

  const addItem = (section: Section, item: PreferenceItem) => {
    setPrefs((prev) => ({
      ...prev,
      [section]: [...prev[section], item],
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

      {/* Section Tabs */}
      <div className="flex gap-2 mb-4">
        {SECTION_CONFIG.map((sec) => (
          <button
            key={sec.key}
            onClick={() => {
              setActiveSection(sec.key);
              setActiveCategory("All");
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors flex-1 justify-center ${
              activeSection === sec.key
                ? sec.color
                : "bg-muted/30 text-muted-foreground"
            }`}
          >
            <span>{sec.emoji}</span>
            <span>{sec.label}</span>
            <span className="text-[10px] opacity-60">
              {prefs[sec.key].length}
            </span>
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
        {categoriesInUse.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-2.5 py-1 rounded-full text-xs transition-colors ${
              activeCategory === cat
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grouped Items */}
      <div className="space-y-5">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {category}
            </p>
            <div className="flex flex-col gap-1.5">
              {items.map((item, i) => (
                <PreferenceChip
                  key={`${item.emoji}-${item.text}-${i}`}
                  item={item}
                  onRemove={() => removeItem(activeSection, item)}
                />
              ))}
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            No items in this category
          </p>
        )}
      </div>

      {/* Add New */}
      <Separator className="my-5" />
      <Label className="text-sm font-medium mb-1 block">Add New</Label>
      <AddItemForm
        onAdd={(item) => addItem(activeSection, item)}
        categories={CATEGORIES as unknown as string[]}
      />

      {/* Notes */}
      <Separator className="my-5" />
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

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t max-w-md mx-auto">
        <Button onClick={save} className="w-full" size="lg">
          <Save className="w-4 h-4 mr-2" />
          {saved ? "Saved!" : "Save Preferences"}
        </Button>
      </div>
    </main>
  );
}
