"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { classifyGroceryItems } from "@/lib/staple-classifier";
import type { GroceryCategory } from "@/types/meal-plan";

interface GroceryListProps {
  categories: GroceryCategory[];
  estimatedCost?: string;
  columns?: boolean;
  userPantryItems?: string[];
}

export function GroceryList({ categories, estimatedCost, columns = false, userPantryItems }: GroceryListProps) {
  const { t } = useT();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [staplesExpanded, setStaplesExpanded] = useState(false);

  const { keyCategories, stapleItems } = useMemo(
    () => classifyGroceryItems(categories, userPantryItems),
    [categories, userPantryItems],
  );

  function toggleItem(key: string) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const totalKeyItems = keyCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const totalItems = totalKeyItems + stapleItems.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-stone-800">
                {t("plan.groceryList")}
              </h3>
              {estimatedCost && (
                <span className="text-xs font-medium text-lime-700 bg-lime-50 border border-lime-200 rounded-full px-2.5 py-0.5">
                  ~{estimatedCost}
                </span>
              )}
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              {t("plan.itemsChecked", { checked: String(checkedCount), total: String(totalItems) })}
              {stapleItems.length > 0 && (
                <span className="text-stone-300"> &middot; {stapleItems.length} {t("plan.pantryStaples")}</span>
              )}
            </p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              {t("plan.print")}
            </Button>
            <span className="text-[10px] text-stone-400 print:hidden">{t("plan.fridgeNote")}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className={cn("print:space-y-3", columns ? "" : "space-y-5")}>
        {/* KEY ITEMS — what you actually need to buy */}
        {keyCategories.length > 0 && (
          <div className={cn(columns && "columns-2 xl:columns-3 gap-8")}>
            {keyCategories.map((cat, catIdx) => (
              <div key={cat.category} className={cn(columns ? "break-inside-avoid mb-5" : "mb-5 last:mb-0")}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                    {cat.category}
                  </h4>
                  <span className="text-[10px] text-stone-400">
                    {cat.items.length} {t("plan.items")}
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {cat.items.map((item, itemIdx) => {
                    const key = `key-${catIdx}-${itemIdx}`;
                    const isChecked = !!checked[key];

                    return (
                      <li key={key}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleItem(key)}
                            className="w-4 h-4 rounded border-stone-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                          />
                          <span
                            className={cn(
                              "text-sm transition-all duration-200",
                              isChecked
                                ? "line-through text-stone-400"
                                : "text-stone-600 group-hover:text-stone-800",
                            )}
                          >
                            {item.amount} {item.unit} {item.name}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* STAPLE ITEMS — likely already in your kitchen */}
        {stapleItems.length > 0 && (
          <div className="pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setStaplesExpanded(!staplesExpanded)}
              className="flex items-center gap-2 w-full text-left mb-3 group print:pointer-events-none"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={cn(
                  "text-stone-300 transition-transform duration-200 print:hidden",
                  staplesExpanded && "rotate-90",
                )}
              >
                <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-stone-400 group-hover:text-stone-500 transition-colors">
                {t("plan.likelyAtHome")}
              </span>
              <span className="text-[10px] text-stone-300">
                {stapleItems.length} {t("plan.items")}
              </span>
            </button>

            {/* Always show in print, toggle on screen */}
            <div className={cn(
              "print:!block",
              staplesExpanded ? "block" : "hidden sm:block",
            )}>
              <ul className="space-y-1">
                {stapleItems.map((item, idx) => {
                  const key = `staple-${idx}`;
                  const isChecked = !!checked[key];

                  return (
                    <li key={key}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(key)}
                          className="w-3.5 h-3.5 rounded border-stone-200 text-stone-400 focus:ring-stone-300 focus:ring-offset-0 cursor-pointer"
                        />
                        <span
                          className={cn(
                            "text-xs transition-all duration-200",
                            isChecked
                              ? "line-through text-stone-300"
                              : "text-stone-400",
                          )}
                        >
                          {item.amount} {item.unit} {item.name}
                          {idx === 0 && (
                            <span className="text-[10px] text-stone-300 italic ml-2 print:hidden">
                              {t("plan.likelyAtHomeNote")}
                            </span>
                          )}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
