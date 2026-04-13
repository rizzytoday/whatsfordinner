import { breakfastRecipes } from "./breakfast";
import { breakfastExtendedRecipes } from "./breakfast-extended";
import { lunchRecipes } from "./lunch";
import { lunchExtendedRecipes } from "./lunch-extended";
import { dinnerRecipes } from "./dinner";
import { dinnerExtendedRecipes } from "./dinner-extended";
import { snackRecipes } from "./snack";
import { snackExtendedRecipes } from "./snack-extended";
import { dessertRecipes } from "./desserts";
import { globalCuisineRecipes } from "./global-cuisines";
import { comfortClassicsRecipes } from "./comfort-classics";
import { healthyLightRecipes } from "./healthy-light";
import type { FullRecipe } from "./types";

const ALL_RECIPES: FullRecipe[] = [
  ...breakfastRecipes,
  ...breakfastExtendedRecipes,
  ...lunchRecipes,
  ...lunchExtendedRecipes,
  ...dinnerRecipes,
  ...dinnerExtendedRecipes,
  ...snackRecipes,
  ...snackExtendedRecipes,
  ...dessertRecipes,
  ...globalCuisineRecipes,
  ...comfortClassicsRecipes,
  ...healthyLightRecipes,
];

// Validate no duplicate slugs at import time
const slugs = ALL_RECIPES.map((r) => r.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  throw new Error(`Duplicate recipe slugs: ${dupes.join(", ")}`);
}

export function getAllRecipes(): FullRecipe[] {
  return ALL_RECIPES;
}

export function getRecipeBySlug(slug: string): FullRecipe | undefined {
  return ALL_RECIPES.find((r) => r.slug === slug);
}

export type { FullRecipe, RecipeIngredient, RecipeStep, NutritionInfo } from "./types";
