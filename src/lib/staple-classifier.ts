import type { GroceryCategory } from "@/types/meal-plan";

/**
 * Default pantry staples — items most kitchens keep stocked.
 * Conservative list: only universally common items.
 * Lowercase for matching.
 */
const DEFAULT_STAPLES = new Set([
  // Oils & fats
  "olive oil", "vegetable oil", "canola oil", "cooking spray", "butter", "coconut oil",
  // Salt & pepper
  "salt", "pepper", "black pepper", "sea salt", "kosher salt",
  // Common spices
  "garlic powder", "onion powder", "cumin", "paprika", "chili powder",
  "oregano", "basil", "thyme", "cinnamon", "cayenne pepper", "red pepper flakes",
  "bay leaves", "turmeric", "italian seasoning", "curry powder",
  // Baking
  "flour", "all-purpose flour", "sugar", "brown sugar", "baking powder",
  "baking soda", "vanilla extract", "cornstarch",
  // Condiments
  "soy sauce", "vinegar", "white vinegar", "apple cider vinegar",
  "ketchup", "mustard", "dijon mustard", "mayonnaise",
  "hot sauce", "worcestershire sauce", "tomato paste",
  "honey", "maple syrup",
  // Pantry staples
  "rice", "white rice", "pasta", "spaghetti",
  "chicken broth", "vegetable broth", "beef broth",
  "canned tomatoes", "diced tomatoes", "crushed tomatoes",
]);

/**
 * Items that are staples only when used in small quantities.
 * "1 tbsp sesame oil" = staple, "1 cup sesame oil" = key buy.
 */
const SMALL_QUANTITY_STAPLES = new Set([
  "sesame oil", "fish sauce", "rice vinegar", "balsamic vinegar",
  "tahini", "miso paste", "sriracha", "hoisin sauce",
  "oyster sauce", "cream cheese", "parmesan", "parmesan cheese",
  "peanut butter", "almond butter", "cocoa powder",
  "lemon juice", "lime juice",
]);

/** Units that indicate small quantities */
const SMALL_UNITS = new Set([
  "tsp", "teaspoon", "teaspoons",
  "tbsp", "tablespoon", "tablespoons",
  "pinch", "dash", "splash", "drizzle",
  "clove", "cloves",
]);

/** Amounts that are clearly small */
const SMALL_AMOUNTS = new Set([
  "1", "2", "3", "1/2", "1/4", "1/3", "½", "¼", "⅓",
]);

function isSmallQuantity(amount: string, unit: string): boolean {
  const normalizedUnit = unit.toLowerCase().trim();
  const normalizedAmount = amount.toLowerCase().trim();

  // "to taste", "as needed", "pinch" = always small
  if (["to taste", "as needed", "pinch", "dash"].includes(normalizedAmount)) return true;
  if (SMALL_UNITS.has(normalizedUnit)) return true;

  // Small amount + generic unit (e.g., "1 tbsp")
  if (SMALL_AMOUNTS.has(normalizedAmount) && SMALL_UNITS.has(normalizedUnit)) return true;

  return false;
}

function normalizeItemName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    // Strip common qualifiers
    .replace(/^(fresh|dried|ground|whole|extra[- ]virgin|light|dark|low[- ]sodium|unsalted)\s+/, "")
    .replace(/,.*$/, ""); // "salt, to taste" -> "salt"
}

/**
 * Classify grocery items as key buys or staples.
 * Works client-side — no DB needed. Free plans get smart defaults too.
 */
export function classifyGroceryItems(
  categories: GroceryCategory[],
  userPantryItems?: string[],
): { keyCategories: GroceryCategory[]; stapleItems: { category: string; name: string; amount: string; unit: string }[] } {
  const userStaples = new Set(
    (userPantryItems ?? []).map((item) => item.toLowerCase().trim()),
  );

  const keyCategories: GroceryCategory[] = [];
  const stapleItems: { category: string; name: string; amount: string; unit: string }[] = [];

  for (const cat of categories) {
    const keyItems = [];

    for (const item of cat.items) {
      const normalized = normalizeItemName(item.name);
      let isStaple = false;

      // 1. User explicitly marked as pantry item
      if (userStaples.has(normalized)) {
        isStaple = true;
      }
      // 2. In default staples list
      else if (DEFAULT_STAPLES.has(normalized)) {
        isStaple = true;
      }
      // 3. Small quantity of a conditional staple
      else if (
        SMALL_QUANTITY_STAPLES.has(normalized) &&
        isSmallQuantity(item.amount, item.unit)
      ) {
        isStaple = true;
      }

      if (isStaple) {
        stapleItems.push({
          category: cat.category,
          name: item.name,
          amount: item.amount,
          unit: item.unit,
        });
      } else {
        keyItems.push(item);
      }
    }

    if (keyItems.length > 0) {
      keyCategories.push({ category: cat.category, items: keyItems });
    }
  }

  return { keyCategories, stapleItems };
}

/**
 * Pre-built pantry categories for the settings UI.
 * Each category has common items users can toggle.
 */
export const PANTRY_PRESETS = {
  "Oils & Fats": [
    "Olive oil", "Vegetable oil", "Coconut oil", "Butter", "Cooking spray",
  ],
  "Spices & Seasonings": [
    "Salt", "Black pepper", "Garlic powder", "Onion powder", "Cumin",
    "Paprika", "Chili powder", "Oregano", "Basil", "Thyme",
    "Cinnamon", "Cayenne pepper", "Red pepper flakes", "Bay leaves",
    "Turmeric", "Italian seasoning", "Curry powder",
  ],
  "Baking": [
    "Flour", "Sugar", "Brown sugar", "Baking powder", "Baking soda",
    "Vanilla extract", "Cornstarch",
  ],
  "Condiments": [
    "Soy sauce", "Vinegar", "Ketchup", "Mustard", "Mayonnaise",
    "Hot sauce", "Worcestershire sauce", "Honey", "Maple syrup",
    "Tomato paste", "Dijon mustard",
  ],
  "Grains & Pasta": [
    "Rice", "Pasta", "Spaghetti",
  ],
  "Canned & Broth": [
    "Chicken broth", "Vegetable broth", "Canned tomatoes", "Diced tomatoes",
  ],
} as const;
