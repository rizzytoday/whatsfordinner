import Link from "next/link";

const POPULAR_PLANS = [
  { slug: "keto", label: "Keto", emoji: "🥑" },
  { slug: "mediterranean", label: "Mediterranean", emoji: "🫒" },
  { slug: "vegetarian", label: "Vegetarian", emoji: "🥗" },
  { slug: "vegan", label: "Vegan", emoji: "🌱" },
  { slug: "meal-plan-on-a-budget", label: "Budget-Friendly", emoji: "💰" },
  { slug: "high-protein-meal-plan", label: "High Protein", emoji: "💪" },
  { slug: "gluten-free", label: "Gluten Free", emoji: "🌾" },
  { slug: "quick-30-minute-meal-plan", label: "30-Minute Meals", emoji: "⏱️" },
  { slug: "meal-plan-for-family-of-4", label: "For Families", emoji: "👨‍👩‍👧‍👦" },
];

export function PopularMealPlans() {
  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          Popular Meal Plans
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          Personalized weekly plans with recipes and a grocery list, tailored to your diet.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {POPULAR_PLANS.map((plan) => (
            <Link
              key={plan.slug}
              href={`/meal-plans/${plan.slug}`}
              className="group flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-2xl shrink-0">{plan.emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors">
                {plan.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/meal-plans"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            See all meal plans
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
