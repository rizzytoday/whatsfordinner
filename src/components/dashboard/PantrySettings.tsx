"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { PANTRY_PRESETS } from "@/lib/staple-classifier";

export function PantrySettings() {
  const { t } = useT();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch current pantry items on mount
  useEffect(() => {
    fetch("/api/pantry")
      .then((r) => r.json())
      .then((data) => {
        if (data.items) {
          setSelected(new Set(data.items.map((i: { name: string }) => i.name)));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Debounced save
  const save = useCallback((items: Set<string>) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      const payload = Array.from(items).map((name) => {
        // Find which category this item belongs to
        for (const [cat, presetItems] of Object.entries(PANTRY_PRESETS)) {
          if ((presetItems as readonly string[]).includes(name)) return { name, category: cat };
        }
        return { name, category: "Custom" };
      });

      fetch("/api/pantry", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: payload }),
      })
        .then(() => {
          setSaved(true);
          setTimeout(() => setSaved(false), 2000);
        })
        .catch(() => {});
    }, 1000);
  }, []);

  function toggle(name: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      save(next);
      return next;
    });
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <div className="h-4 w-24 bg-stone-100 rounded animate-pulse" />
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-stone-800">
              {t("dashboard.pantryTitle")}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {t("dashboard.pantrySubtitle")}
            </p>
          </div>
          {saved && (
            <span className="text-xs text-lime-600 font-medium transition-opacity duration-200">
              {t("dashboard.pantrySaved")}
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-5">
        <div className="space-y-4">
          {Object.entries(PANTRY_PRESETS).map(([category, items]) => (
            <div key={category}>
              <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wide mb-1.5">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(items as readonly string[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggle(item)}
                    className={cn(
                      "px-2.5 py-1 text-xs rounded-full border transition-all duration-200",
                      selected.has(item)
                        ? "bg-orange-50 border-orange-300 text-orange-700 font-medium"
                        : "bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
