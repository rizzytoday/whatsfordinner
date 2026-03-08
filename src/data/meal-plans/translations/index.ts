import { getMealPlanBySlug } from "../index";
import type { MealPlanPageData, SampleMeal, ValueProp, FAQ } from "../types";
import { readFileSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** The translatable subset of MealPlanPageData. Fields like slug, type,
 *  relatedSlugs, datePublished, and dateModified are NOT translated — they
 *  come from the English base data (slugs get their own mapping). */
export interface TranslatedMealPlanData {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  valueProps: ValueProp[];
  sampleMeals: TranslatedSampleMeal[];
  faqs: FAQ[];
}

/** Sample meals keep mealType/prepTime/tags from English and only translate
 *  the human-readable name, description, and tags labels. */
interface TranslatedSampleMeal {
  name: string;
  description: string;
  tags: string[];
}

/** Shape of the per-locale content JSON: keyed by English slug. */
type LocaleContentMap = Record<string, TranslatedMealPlanData>;

/** Shape of the per-locale slug mapping JSON. */
type SlugMap = Record<string, string>; // englishSlug -> localizedSlug

// ---------------------------------------------------------------------------
// File paths
// ---------------------------------------------------------------------------

const TRANSLATIONS_DIR = join(
  process.cwd(),
  "src/data/meal-plans/translations"
);

function contentPath(locale: string): string {
  return join(TRANSLATIONS_DIR, `${locale}.json`);
}

function slugMapPath(locale: string): string {
  return join(TRANSLATIONS_DIR, "slugs", `${locale}.json`);
}

// ---------------------------------------------------------------------------
// Loaders (with graceful fallback)
// ---------------------------------------------------------------------------

/** Cache to avoid re-reading the same JSON files within a single process. */
const contentCache = new Map<string, LocaleContentMap | null>();
const slugMapCache = new Map<string, SlugMap | null>();

function loadContent(locale: string): LocaleContentMap | null {
  if (contentCache.has(locale)) return contentCache.get(locale)!;
  try {
    const raw = readFileSync(contentPath(locale), "utf-8");
    const parsed = JSON.parse(raw) as LocaleContentMap;
    contentCache.set(locale, parsed);
    return parsed;
  } catch {
    contentCache.set(locale, null);
    return null;
  }
}

function loadSlugMap(locale: string): SlugMap | null {
  if (slugMapCache.has(locale)) return slugMapCache.get(locale)!;
  try {
    const raw = readFileSync(slugMapPath(locale), "utf-8");
    const parsed = JSON.parse(raw) as SlugMap;
    slugMapCache.set(locale, parsed);
    return parsed;
  } catch {
    slugMapCache.set(locale, null);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Merge helper
// ---------------------------------------------------------------------------

/** Merges translated fields onto the English base, preserving non-translatable
 *  fields (slug, type, relatedSlugs, dates) from the base. */
function mergeTranslation(
  base: MealPlanPageData,
  translation: TranslatedMealPlanData
): MealPlanPageData {
  return {
    ...base,
    title: translation.title,
    metaDescription: translation.metaDescription,
    h1: translation.h1,
    intro: translation.intro,
    valueProps: translation.valueProps,
    sampleMeals: base.sampleMeals.map((meal, i) => {
      const translated = translation.sampleMeals[i];
      if (!translated) return meal;
      return {
        ...meal,
        name: translated.name,
        description: translated.description,
        tags: translated.tags,
      } satisfies SampleMeal;
    }),
    faqs: translation.faqs,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns a MealPlanPageData with translated content for the given locale.
 * Falls back to English if:
 * - the locale JSON doesn't exist
 * - the slug isn't in the locale JSON
 * - the English slug doesn't exist in the base data
 *
 * Returns undefined only if the English slug itself is invalid.
 */
export function getTranslatedMealPlan(
  englishSlug: string,
  locale: string
): MealPlanPageData | undefined {
  const base = getMealPlanBySlug(englishSlug);
  if (!base) return undefined;

  // English needs no translation
  if (locale === "en") return base;

  const content = loadContent(locale);
  if (!content) return base;

  const translation = content[englishSlug];
  if (!translation) return base;

  return mergeTranslation(base, translation);
}

/**
 * Returns the localized slug for a given English slug.
 * Falls back to the English slug if no mapping exists.
 */
export function getSlugForLocale(
  englishSlug: string,
  locale: string
): string {
  if (locale === "en") return englishSlug;

  const map = loadSlugMap(locale);
  if (!map) return englishSlug;

  return map[englishSlug] ?? englishSlug;
}

/**
 * Reverse lookup: given a localized slug, returns the English slug.
 * Falls back to returning the input slug if no mapping is found
 * (which handles the case where the slug wasn't translated).
 */
export function getEnglishSlug(
  localizedSlug: string,
  locale: string
): string {
  if (locale === "en") return localizedSlug;

  const map = loadSlugMap(locale);
  if (!map) return localizedSlug;

  // Reverse the map: localizedSlug -> englishSlug
  const entry = Object.entries(map).find(
    ([, translated]) => translated === localizedSlug
  );

  return entry ? entry[0] : localizedSlug;
}

/**
 * Returns all translated slugs available for a locale.
 * Falls back to an empty array if the slug mapping file doesn't exist.
 */
export function getAllTranslatedSlugs(locale: string): string[] {
  const map = loadSlugMap(locale);
  if (!map) return [];

  return Object.values(map);
}
