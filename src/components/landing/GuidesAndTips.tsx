import Link from "next/link";

const FEATURED_POSTS = [
  { slug: "meal-planning-for-beginners", title: "Meal Planning for Beginners", emoji: "📋" },
  { slug: "best-meal-planning-apps", title: "Best Meal Planning Apps", emoji: "📱" },
  { slug: "eating-healthy-on-a-budget", title: "Eating Healthy on a Budget", emoji: "🥦" },
  { slug: "cheap-meals-for-one", title: "Cheap Meals for One", emoji: "🍳" },
  { slug: "meal-planning-for-families", title: "Meal Planning for Families", emoji: "👨‍👩‍👧" },
  { slug: "how-to-stop-ordering-takeout", title: "How to Stop Ordering Takeout", emoji: "🚫" },
];

export function GuidesAndTips() {
  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          Guides & Tips
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          Everything you need to start meal planning and eat better every week.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-xl shrink-0 mt-0.5">{post.emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors leading-snug">
                {post.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            Read more
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
