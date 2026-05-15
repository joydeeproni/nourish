"use client";

import { format, addDays, isSameDay } from "date-fns";

interface DayNavProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function DayNav({ selectedDate, onSelectDate }: DayNavProps) {
  const today = new Date();
  const days = Array.from({ length: 5 }, (_, i) => addDays(today, i));

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      {days.map((day) => {
        const isSelected = isSameDay(day, selectedDate);
        return (
          <button
            key={day.toISOString()}
            onClick={() => onSelectDate(day)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              isSelected
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {isSameDay(day, today) ? "Today" : format(day, "EEE, MMM d")}
          </button>
        );
      })}
    </div>
  );
}
