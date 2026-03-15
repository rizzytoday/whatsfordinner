import type { Metadata } from "next";
import Link from "next/link";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { NON_DEFAULT_LOCALES, getLocaleConfig } from "@/lib/i18n/locales";

const hubLanguages: Record<string, string> = {
  en: "https://whatsfordinner.fit/meal-plans",
  "x-default": "https://whatsfordinner.fit/meal-plans",
};
for (const loc of NON_DEFAULT_LOCALES) {
  hubLanguages[getLocaleConfig(loc).hreflang] =
    `https://whatsfordinner.fit/${loc}/meal-plans`;
}

export const metadata: Metadata = {
  title: "Meal Plans for Every Diet and Cuisine",
  description: "Browse personalized weekly meal plans for every diet (keto, vegan, halal, gluten-free) and cuisine (Italian, Thai, Indian, and more). Free 3-day plan included.",
  alternates: { canonical: "https://whatsfordinner.fit/meal-plans", languages: hubLanguages },
  openGraph: {
    title: "Meal Plans for Every Diet and Cuisine",
    description: "Browse personalized weekly meal plans for every diet and cuisine. Free 3-day plan included.",
    url: "https://whatsfordinner.fit/meal-plans",
    siteName: "What's For Dinner",
    type: "website",
  },
};

const sections = [
  { key: "diet", heading: "By Diet", label: "Diet" },
  { key: "cuisine", heading: "By Cuisine", label: "Cuisine" },
  { key: "health", heading: "Health Conditions", label: "Health" },
  { key: "goal", heading: "By Goal", label: "Goal" },
  { key: "method", heading: "Cooking Methods", label: "Method" },
  { key: "genz", heading: "Gen Z & Young Adults", label: "Life" },
  { key: "lifestyle", heading: "Life Stages", label: "Lifestyle" },
  { key: "budget", heading: "Budget & Lifestyle", label: "Budget" },
  { key: "practical", heading: "Practical Guides", label: "Practical" },
  { key: "occasion", heading: "Seasonal & Occasions", label: "Occasion" },
  { key: "seasonal", heading: "Seasonal Specials", label: "Seasonal" },
  { key: "household", heading: "By Household Size", label: "Household" },
  { key: "calorie", heading: "By Calories", label: "Calories" },
  { key: "duration", heading: "By Duration", label: "Duration" },
  { key: "combo", heading: "Popular Combinations", label: "Combo" },
] as const;

export default function MealPlansIndex() {
  const all = getAllMealPlanPages();

  const grouped = sections
    .map((s) => ({
      ...s,
      pages: all.filter((p) => p.type === s.key),
    }))
    .filter((s) => s.pages.length > 0);

  return (
    <div className="py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
        Personalized Meal Plans for Every Diet, Cuisine &amp; Lifestyle
      </h1>
      <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl">
        AI-powered weekly meal plans with recipes and grocery lists, tailored to your dietary needs, favorite flavors, and life stage. Try free.
      </p>

      {grouped.map((section) => (
        <section key={section.key} className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-5">{section.heading}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {section.pages.map((page) => (
              <Link
                key={page.slug}
                href={`/meal-plans/${page.slug}`}
                className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                  {section.label}
                </span>
                <h3 className="text-sm font-medium text-stone-800 mt-1">{page.h1}</h3>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Related reading */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">Learn More</h2>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Getting Started</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <Link href="/blog/meal-planning-for-beginners" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for Beginners</h3>
          </Link>
          <Link href="/blog/best-meal-planning-apps" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Roundup</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Best Meal Planning Apps 2026</h3>
          </Link>
          <Link href="/blog/weekly-meal-plan" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Plan Your Entire Week in 10 Minutes</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Save Money</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <Link href="/blog/eating-healthy-on-a-budget" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Eating Healthy on a Budget</h3>
          </Link>
          <Link href="/blog/cheap-meals-for-one" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">15 Dinners Under $3/Serving</h3>
          </Link>
          <Link href="/blog/best-budget-meal-plans" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Budget</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Best Budget Meal Plans 2026</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Life Situations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/blog/meal-planning-for-families" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Family</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for Families</h3>
          </Link>
          <Link href="/blog/meal-planning-for-college" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for College Students</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">vs Alternatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/blog/best-meal-kit-alternatives" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Comparison</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">5 Cheap Alternatives to Meal Kits</h3>
          </Link>
          <Link href="/blog/how-to-stop-ordering-takeout" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">How to Stop Ordering Takeout</h3>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-orange-500 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Your first week is free
        </h2>
        <p className="text-orange-100 text-sm sm:text-base mb-6 max-w-md mx-auto">
          Get a personalized 3-day meal plan with recipes and a grocery list. No credit card required.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-md transition-colors"
        >
          Start Your Free Plan
        </Link>
      </section>
    </div>
  );
}
