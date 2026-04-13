"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export interface RecipeEntry {
  name: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  description: string;
  prepTime: string;
  tags: string[];
  parentSlug: string;
  parentTitle: string;
}

const MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack"] as const;

const FEATURED_TAGS = [
  "high-protein",
  "quick",
  "gluten-free",
  "vegetarian",
  "vegan",
  "meal-prep",
  "one-pan",
  "comfort-food",
  "low-carb",
  "budget",
  "keto",
  "dairy-free",
  "mediterranean",
  "high-fiber",
] as const;

const mealTypeBadge: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="7.5" cy="7.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RecipeLibrary({ recipes }: { recipes: RecipeEntry[] }) {
  const [search, setSearch] = useState("");
  const [activeMealType, setActiveMealType] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = recipes;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      );
    }

    if (activeMealType) {
      result = result.filter((r) => r.mealType === activeMealType);
    }

    if (activeTags.size > 0) {
      result = result.filter((r) =>
        [...activeTags].every((tag) => r.tags.includes(tag))
      );
    }

    return result;
  }, [recipes, search, activeMealType, activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  function clearFilters() {
    setSearch("");
    setActiveMealType(null);
    setActiveTags(new Set());
  }

  const hasFilters = search.trim() || activeMealType || activeTags.size > 0;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFBF5" }}>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-orange-500 transition-colors duration-200 mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Recipe Library
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            Browse {recipes.length} recipe ideas across every diet, cuisine, and goal.
            Find something you love, then get a full personalized meal plan built around it.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="w-full rounded-xl border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all duration-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 sm:text-base"
          />
        </div>

        {/* Meal type filters */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {MEAL_TYPES.map((type) => (
              <button
                key={type}
                onClick={() =>
                  setActiveMealType(activeMealType === type ? null : type)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-200 min-h-[44px] ${
                  activeMealType === type
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {FEATURED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 min-h-[36px] ${
                  activeTags.has(tag)
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
                }`}
              >
                {tag}
              </button>
            ))}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 min-h-[36px]"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-stone-400">
          {filtered.length === recipes.length
            ? `${recipes.length} recipes`
            : `${filtered.length} of ${recipes.length} recipes`}
        </p>

        {/* Recipe grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((recipe, i) => {
              const cardKey = `${recipe.parentSlug}-${recipe.name}-${i}`;
              const isExpanded = expandedRecipe === cardKey;

              return (
                <div
                  key={cardKey}
                  onClick={() => setExpandedRecipe(isExpanded ? null : cardKey)}
                  className={`group flex flex-col rounded-2xl border bg-white p-5 transition-all duration-200 cursor-pointer ${
                    isExpanded
                      ? "border-orange-300 shadow-lg"
                      : "border-stone-200 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {/* Top row: badge + prep time */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${mealTypeBadge[recipe.mealType]}`}
                    >
                      {recipe.mealType}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-stone-400">
                      <ClockIcon />
                      {recipe.prepTime}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className={`text-base font-semibold leading-snug mb-2 transition-colors duration-200 ${
                    isExpanded ? "text-orange-600" : "text-stone-900 group-hover:text-orange-600"
                  }`}>
                    {recipe.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm text-stone-500 leading-relaxed mb-4 flex-1 ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}>
                    {recipe.description}
                  </p>

                  {/* Tags */}
                  {recipe.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-stone-50 px-2 py-0.5 text-[10px] font-medium text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expanded: CTA to get full recipe */}
                  {isExpanded && (
                    <div className="mt-2 pt-4 border-t border-stone-100">
                      <p className="text-sm text-stone-500 mb-3">
                        Get the full recipe with ingredients, step-by-step instructions, and a grocery list.
                      </p>
                      <Link
                        href="/onboarding"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 min-h-[44px]"
                      >
                        Get this recipe free
                      </Link>
                      <Link
                        href={`/meal-plans/${recipe.parentSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-1.5 text-xs text-orange-500 hover:text-orange-600 font-medium mt-3 transition-colors duration-200"
                      >
                        <span>Browse {recipe.parentTitle}</span>
                        <ArrowIcon />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium text-stone-400 mb-2">
              No recipes match your filters
            </p>
            <button
              onClick={clearFilters}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-orange-200 bg-white p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-3">
            Want these recipes personalized for your diet?
          </h2>
          <p className="text-stone-500 text-base max-w-lg mx-auto mb-6 leading-relaxed">
            Tell us what you like, your dietary needs, and how many people you cook for.
            Get a full meal plan with recipes and a grocery list in 30 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 hover:shadow-md hover:-translate-y-0.5 min-h-[44px]"
          >
            Get your free 3-day plan
          </Link>
        </div>
      </div>
    </div>
  );
}
