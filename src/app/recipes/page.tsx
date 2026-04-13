import type { Metadata } from "next";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { RecipeLibrary, type RecipeEntry } from "@/components/recipes/RecipeLibrary";

export const metadata: Metadata = {
  title: "Free Recipe Library | What's For Dinner",
  description:
    "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more. Find your next favorite meal, then get a personalized plan built around it.",
  alternates: {
    canonical: "https://whatsfordinner.fit/recipes",
  },
  openGraph: {
    title: "Free Recipe Library | What's For Dinner",
    description:
      "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more.",
    url: "https://whatsfordinner.fit/recipes",
    siteName: "What's For Dinner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Recipe Library | What's For Dinner",
    description:
      "Browse 800+ recipe ideas for breakfast, lunch, dinner, and snacks. Filter by diet, cuisine, prep time, and more.",
  },
};

function buildRecipes(): RecipeEntry[] {
  const pages = getAllMealPlanPages();
  const recipes: RecipeEntry[] = [];

  for (const page of pages) {
    for (const meal of page.sampleMeals) {
      recipes.push({
        name: meal.name,
        mealType: meal.mealType,
        description: meal.description,
        prepTime: meal.prepTime,
        tags: meal.tags,
        parentSlug: page.slug,
        parentTitle: page.h1,
      });
    }
  }

  // Deduplicate by name (same recipe can appear in multiple plan pages)
  const seen = new Map<string, RecipeEntry>();
  for (const recipe of recipes) {
    const key = recipe.name.toLowerCase();
    if (!seen.has(key)) {
      seen.set(key, recipe);
    }
  }

  // Sort alphabetically for a clean default order
  return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function ItemListJsonLd({ recipes }: { recipes: RecipeEntry[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Recipe Library",
    description:
      "A collection of recipe ideas across every diet, cuisine, and goal from What's For Dinner.",
    url: "https://whatsfordinner.fit/recipes",
    numberOfItems: recipes.length,
    itemListElement: recipes.slice(0, 100).map((recipe, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: recipe.name,
      url: `https://whatsfordinner.fit/meal-plans/${recipe.parentSlug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RecipesPage() {
  const recipes = buildRecipes();

  return (
    <>
      <ItemListJsonLd recipes={recipes} />
      <RecipeLibrary recipes={recipes} />
    </>
  );
}
