import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { MealCardGrid, WeekPreviewCTA } from "@/components/blog/MealCard";

export const metadata: Metadata = {
  title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week",
  description:
    "A practical guide to family meal planning that actually works. Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes. Free weekly plan included.",
  openGraph: {
    title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week",
    description:
      "A practical guide to family meal planning that actually works. Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes. Free weekly plan included.",
    siteName: "What's For Dinner",
    type: "article",
    url: "https://whatsfordinner.fit/blog/meal-planning-for-families",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week",
    description:
      "A practical guide to family meal planning that actually works. Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes.",
  },
  alternates: {
    canonical: "https://whatsfordinner.fit/blog/meal-planning-for-families",
  },
};

export default function MealPlanningForFamiliesArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Meal Planning for Families: Feed a Family of 4 for Under $100/Week"
        description="A practical guide to family meal planning that actually works. Balanced meals kids will eat, a single grocery trip, and dinner on the table in 30 minutes. Free weekly plan included."
        url="https://whatsfordinner.fit/blog/meal-planning-for-families"
        datePublished="2026-03-13"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I meal plan for a family of 4?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start by planning 5-7 dinners for the week that the whole family can eat. Focus on meals that take 30 minutes or less on weeknights, use overlapping ingredients to reduce waste, and build in one or two leftover nights. Write a single consolidated grocery list and shop once. Include kid-friendly elements on every plate so nobody needs a separate meal.",
                },
              },
              {
                "@type": "Question",
                name: "How much should a family of 4 spend on groceries per week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "According to the USDA, a family of 4 spends $200-350 per week on groceries on average. With meal planning, most families can bring this down to $85-150 per week by eliminating impulse purchases, reducing food waste, buying protein in bulk, and using seasonal produce. The key is shopping from a planned list instead of browsing the aisles.",
                },
              },
              {
                "@type": "Question",
                name: "What are easy family dinners for picky eaters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best family dinners for picky eaters are build-your-own meals where everyone customizes their plate: taco bars, pasta with a choice of sauces, rice bowls, pizza nights, and stir-fries. Always include one 'safe' element per plate that you know the kids will eat. Over time, repeated exposure to new foods alongside familiar ones builds acceptance.",
                },
              },
              {
                "@type": "Question",
                name: "Is meal planning worth it for families?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Families benefit more from meal planning than any other household type because the costs of not planning are multiplied. Feeding 4 people without a plan means more impulse purchases, more food waste, more takeout, and more daily stress about what to cook. Meal planning saves families an average of $50-100 per week on groceries and eliminates the nightly 'what's for dinner' scramble.",
                },
              },
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://whatsfordinner.fit" },
          { name: "Blog", url: "https://whatsfordinner.fit/blog" },
          { name: "Meal Planning for Families (2026)", url: "https://whatsfordinner.fit/blog/meal-planning-for-families" },
        ]}
      />
      <article className="blog-article">
      <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4">
        Guides
      </span>
      <p className="text-sm text-stone-400 mb-8">Updated March 2026</p>

      <h1 className="text-3xl font-bold text-stone-900 mb-4 mt-8">
        Meal Planning for Families: The Practical Guide (2026)
      </h1>

      {/* Intro */}
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Family dinner is the hardest meal to get right. You&apos;ve got picky
          eaters, clashing schedules, budget pressure, and the sheer volume of
          food a family of four burns through in a week. Most families end up
          rotating the same five dinners until everyone&apos;s bored, or they
          give up and order pizza. Again.
        </p>
        <p>
          A family meal plan fixes this. Not by turning you into a gourmet chef
          or requiring you to spend your entire Sunday in the kitchen &mdash;
          but by making one focused decision each week so you don&apos;t have
          to make 21 scattered ones. This guide covers how to plan meals your
          whole family will actually eat, keep your grocery bill under $100 a
          week, and get dinner on the table in 30 minutes on a Tuesday night.
        </p>
      </div>

      {/* TL;DR */}
      <div className="bg-stone-50 rounded-xl p-5 my-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">TL;DR</p>
        <ul className="space-y-1 text-sm text-stone-600">
          <li>Feed a family of 4 for $75&ndash;100/week with planned meals</li>
          <li>Every dinner in 30 minutes or less</li>
          <li>Picky eaters? Build-your-own meal nights solve it</li>
          <li>AI generates the plan + recipes + grocery list automatically</li>
        </ul>
      </div>

      {/* Why family meal planning is different */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Why Family Meal Planning Is Different
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Meal planning for one or two people is straightforward &mdash; pick
          some recipes, buy the ingredients, cook when you&apos;re hungry.
          Families are a different beast entirely:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>More mouths means more waste if you don&apos;t plan.</strong>{" "}
            A family of four goes through roughly 1,500 meals a month. Without
            a plan, you overbuy, forget ingredients, and throw away food that
            went bad before anyone ate it. The USDA estimates the average
            American family wastes 30-40% of their food. That&apos;s $150 a
            month in the trash.
          </li>
          <li>
            <strong>Kids are picky.</strong> You can&apos;t just make
            whatever sounds good to you. Half the table will push their plate
            away if there&apos;s a mushroom visible from three feet away. Every
            meal needs to work for adults and kids, or you end up cooking two
            dinners every night.
          </li>
          <li>
            <strong>Schedules clash.</strong> Soccer practice on Tuesday,
            late meeting on Wednesday, someone&apos;s at a friend&apos;s house
            on Thursday. A family meal plan has to be flexible enough to survive
            a week that never goes exactly as expected.
          </li>
          <li>
            <strong>Batch cooking becomes essential.</strong> When you&apos;re
            feeding four, cooking once and eating twice is the single biggest
            time hack available. Monday&apos;s roast chicken becomes
            Wednesday&apos;s chicken quesadillas. Sunday&apos;s big pot of
            chili feeds the family for two days. Planning for leftovers
            isn&apos;t lazy &mdash; it&apos;s strategic.
          </li>
        </ul>
        <p>
          The point is: individual meal planning advice doesn&apos;t translate
          to families. If you&apos;re brand new to this, our{" "}
          <Link
            href="/meal-plans/meal-plan-for-beginners"
            className="text-orange-500 underline"
          >
            beginner meal plan guide
          </Link>{" "}
          covers the fundamentals &mdash; but families need a system designed
          for the chaos of feeding multiple people with different preferences,
          on different schedules, without losing your mind or your budget.
        </p>

        {/* Stat callout */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">$100/week for a family of 4</p>
          <p className="text-sm text-stone-500 mt-1">Balanced meals, one grocery trip, dinner on the table in 30 minutes. That&apos;s what a meal plan does.</p>
        </div>
      </div>

      {/* Sample family meal plan */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🍽️ A Sample Family Meal Plan (Family of 4)
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s a full week for a family of four. Dinners are the anchor
          &mdash; breakfasts and lunches are simple, repeatable, and low-effort.
          Everything on this plan can be made by a normal person with a normal
          kitchen. Estimated weekly grocery cost: <strong>$85&ndash;100</strong>.
        </p>
        <WeekPreviewCTA
          days={[
            { day: "Monday", meals: [
              { mealType: "breakfast", name: "Scrambled Eggs with Toast", prepTime: "10 min", calories: "$1.50" },
              { mealType: "lunch", name: "Turkey & Cheese Sandwiches", prepTime: "5 min", calories: "$2.00" },
              { mealType: "dinner", name: "Sheet Pan Chicken Thighs with Potatoes & Green Beans", prepTime: "35 min", calories: "$3.50" },
            ]},
            { day: "Tuesday", meals: [
              { mealType: "breakfast", name: "Overnight Oats with Banana", prepTime: "5 min", calories: "$1.00" },
              { mealType: "lunch", name: "PB&J with Apple Slices", prepTime: "5 min", calories: "$1.50" },
              { mealType: "dinner", name: "Beef Taco Bar with All the Toppings", prepTime: "25 min", calories: "$4.00" },
            ]},
            { day: "Wednesday", meals: [
              { mealType: "breakfast", name: "Yogurt with Granola & Fruit", prepTime: "5 min", calories: "$1.50" },
              { mealType: "lunch", name: "Leftover Chicken Quesadillas", prepTime: "10 min", calories: "$1.00" },
              { mealType: "dinner", name: "Chicken Quesadillas with Rice & Beans", prepTime: "20 min", calories: "$2.50" },
            ]},
            { day: "Thursday", meals: [
              { mealType: "breakfast", name: "Cereal with Milk & Berries", prepTime: "5 min", calories: "$1.00" },
              { mealType: "lunch", name: "Pasta Salad (Prepped Sunday)", prepTime: "5 min", calories: "$1.50" },
              { mealType: "dinner", name: "One-Pot Pasta with Turkey, Spinach & Marinara", prepTime: "25 min", calories: "$3.00" },
            ]},
          ]}
          groceryItems={[
            "Chicken thighs (3 lbs)",
            "Ground beef (2 lbs)",
            "Ground turkey (1 lb)",
            "Tortillas (flour, 16-pack)",
            "Spaghetti (1 lb)",
            "Rice (2 lbs)",
            "Canned black beans (2)",
            "Marinara sauce (24 oz)",
            "Shredded cheese (16 oz)",
            "Eggs (1 dozen)",
            "Bread (1 loaf)",
            "Baby spinach (5 oz)",
            "Potatoes (3 lbs)",
            "Green beans (1 lb)",
            "Bananas & apples",
          ]}
        />
        <p>
          <strong>Breakfasts (rotate through the week):</strong> Scrambled eggs
          with toast, overnight oats, yogurt with granola and fruit, cereal.
          Keep it simple &mdash; nobody needs a gourmet breakfast on a school
          morning.
        </p>
        <p>
          <strong>Lunches (school/work-friendly):</strong> Turkey and cheese
          sandwiches, PB&amp;J with apple slices, leftovers from the night
          before in a thermos, pasta salad made on Sunday. Pack the night before
          to save morning chaos.
        </p>
        <p>
          Notice the pattern: weeknight dinners are fast and low-effort. Weekend
          meals are where you do your ambitious cooking (and generate leftovers
          for Sunday). Two meals intentionally use leftovers from earlier in the
          week. This isn&apos;t cutting corners &mdash; it&apos;s planning smart.
        </p>
      </div>

      {/* The 30-minute rule */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        ⏱️ The 30-Minute Rule
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Here&apos;s a rule that will save your family meal plan from falling
          apart: every weeknight dinner must be on the table in 30 minutes or
          less. No exceptions. Save the 90-minute recipes for weekends when you
          actually have time and energy.
        </p>
        <p>
          This isn&apos;t about sacrificing quality. It&apos;s about choosing the
          right meals for the right days. Here are three family dinners that
          clock in under 30 minutes:
        </p>
        <MealCardGrid meals={[
          { name: "Stir-Fried Rice with Eggs & Frozen Veggies", mealType: "dinner", prepTime: "15 min · ~$4", description: "Scramble eggs, toss in frozen stir-fry vegetables and leftover rice, hit it with soy sauce. Kids love it because it's mild. Adults love it because it's fast.", tags: ["quick", "kid-friendly"] },
          { name: "Black Bean Quesadillas with Avocado", mealType: "dinner", prepTime: "20 min · ~$5", description: "Tortillas, canned black beans, shredded cheese, whatever veggies you have. Press in a pan until crispy, serve with avocado and salsa. Even the pickiest kid will eat a cheese quesadilla.", tags: ["budget", "vegetarian"] },
          { name: "Spaghetti with Meat Sauce", mealType: "dinner", prepTime: "25 min · ~$6", description: "Brown ground beef or turkey while the pasta boils. Add jarred marinara, toss with pasta, grate parmesan on top. Classic, fast, universally accepted.", tags: ["family-favorite", "one-pot"] },
        ]} />
        <p>
          The 30-minute rule also means you need to think about prep time when
          you&apos;re choosing recipes. A recipe with 10 ingredients that all
          need to be chopped is not a 30-minute recipe, no matter what the food
          blog says. Look for meals with short ingredient lists and minimal prep.
          For more quick dinner ideas, check out our{" "}
          <Link
            href="/meal-plans/quick-30-minute-meal-plan"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            30-minute meal plan
          </Link>
          .
        </p>
      </div>

      {/* Picky eaters */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Getting Picky Eaters On Board
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          The number one reason family meal plans fail: parents end up cooking
          separate meals for the kids. Chicken nuggets for the children, actual
          dinner for the adults. That doubles your work, doubles your grocery
          bill, and teaches kids they can opt out of eating what everyone else
          eats. Don&apos;t do it.
        </p>
        <p>
          Instead, use these strategies that actually work:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Serve one meal for everyone.</strong> This is non-negotiable.
            You are not a short-order cook. If you make chicken stir-fry, everyone
            gets chicken stir-fry. The child doesn&apos;t have to finish it, but
            the alternative is not a separate meal.
          </li>
          <li>
            <strong>Include one &quot;safe&quot; element per plate.</strong> Every
            meal should have at least one thing you know the kids will eat &mdash;
            rice, bread, fruit, pasta, cheese. This way they won&apos;t go hungry
            even if they reject the main dish. It takes the pressure off.
          </li>
          <li>
            <strong>Let kids pick one dinner per week.</strong> Give them agency.
            If your seven-year-old chooses pancakes for dinner on Thursday, make
            pancakes for dinner on Thursday. They&apos;re far more likely to eat
            meals they had a voice in choosing.
          </li>
          <li>
            <strong>Build-your-own meals are your best friend.</strong> Taco bars,
            pizza nights, rice bowls, baked potato bars &mdash; any meal where
            everyone customizes their own plate eliminates the &quot;I don&apos;t
            like this&quot; problem entirely. Same ingredients, different
            combinations, zero complaints.
          </li>
          <li>
            <strong>Exposure works. It just takes time.</strong> Research shows
            kids need 10&ndash;15 exposures to a new food before they&apos;ll
            willingly eat it. Put a small portion of the new food on their plate
            alongside familiar items. Don&apos;t force it, don&apos;t bribe,
            don&apos;t negotiate. Just keep serving it. By exposure 12, the
            broccoli mysteriously becomes acceptable.
          </li>
        </ul>

        {/* Pro tip callout */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 my-6">
          <p className="text-sm font-semibold text-amber-800">The taco night trick</p>
          <p className="text-sm text-amber-700 mt-1">Build-your-own nights (tacos, bowls, wraps) let everyone customize their plate. Same ingredients, zero complaints. Schedule one per week.</p>
        </div>
      </div>

      {/* Mid-article CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Get a personalized family meal plan free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your household size, dietary preferences, and budget. Get a
          complete meal plan with recipes and a grocery list &mdash; built for
          your family, delivered by email.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Try Free &rarr;
        </Link>
      </div>

      {/* The family grocery list */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        🛒 The Family Grocery List
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          A meal plan without a grocery list is just a wish list. The grocery
          list is where the real savings happen &mdash; it&apos;s the difference
          between a focused $90 shop and a wandering $180 one.
        </p>

        {/* Quick stat */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-4 my-6">
          <p className="text-2xl font-bold text-stone-800">1 trip. 1 list. 7 dinners.</p>
          <p className="text-sm text-stone-500 mt-1">A consolidated grocery list means no mid-week panic runs. Everything you need for the week, bought once.</p>
        </div>

        <p>
          When you plan your meals for the week, write a{" "}
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            consolidated grocery list
          </Link>{" "}
          that combines ingredients across all meals. If three recipes use
          onions, you write &quot;onions&quot; once with the total quantity.
          This eliminates duplicate buying and makes your shopping trip faster.
        </p>
        <p>
          Budget tips that actually move the needle for families (see our full{" "}
          <Link
            href="/meal-plans/meal-plan-on-a-budget"
            className="text-orange-500 underline"
          >
            budget meal plan
          </Link>{" "}
          for more):
        </p>
        <ul className="list-disc list-inside space-y-2 pl-1">
          <li>
            <strong>Buy protein in bulk.</strong> A family-pack of chicken thighs
            costs $2&ndash;3 less per pound than individual packs. Buy it, portion
            it, freeze what you won&apos;t use this week. Same goes for ground
            beef and pork.
          </li>
          <li>
            <strong>Use seasonal produce.</strong> In-season fruits and vegetables
            are cheaper, taste better, and last longer. Asparagus in spring,
            tomatoes in summer, squash in fall, citrus in winter. Plan your
            meals around what&apos;s cheap right now.
          </li>
          <li>
            <strong>Stick to the list.</strong> This is the hardest one. The
            grocery store is designed to make you buy things you don&apos;t need.
            End caps, sample stations, eye-level placement &mdash; it&apos;s all
            engineered to increase your spend. Bring the list, buy the list,
            leave.
          </li>
          <li>
            <strong>Don&apos;t shop hungry.</strong> You already knew this one.
            But seriously &mdash; eat before you go. A{" "}
            <Link
              href="/blog/save-money-groceries-meal-planning"
              className="text-orange-500 hover:text-orange-600 underline"
            >
              planned grocery trip on a full stomach
            </Link>{" "}
            saves $20&ndash;30 per visit compared to an unplanned hungry one.
          </li>
        </ul>
      </div>

      {/* Let AI handle it */}
      <h2 className="text-xl font-semibold text-stone-800 mt-10 mb-4">
        Let AI Handle It
      </h2>
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          You now know how to plan meals for a family. The question is whether
          you want to do it manually every single week for the rest of time, or
          let a system handle it for you.
        </p>
        <p>
          What&apos;s For Dinner generates a personalized family meal plan with
          recipes and a consolidated grocery list every week. Set your household
          size to 4, enter your dietary preferences and budget, and you&apos;ll
          receive a complete plan by email every Sunday. No browsing recipes, no
          building lists, no deciding what to cook.
        </p>
        <p>
          The AI accounts for everything a family needs: balanced meals that
          satisfy adults and kids, realistic cooking times for weeknights,
          overlapping ingredients to minimize waste, and portions calibrated for
          your household size. If someone in the family is vegetarian, allergic
          to dairy, or hates cilantro &mdash; set it once and every plan
          respects it automatically.
        </p>
        <p>
          A free 3-day plan lets you see exactly what you&apos;d get. The full
          weekly service is $7.99/mo &mdash; less than a single takeout order
          for a family of four.{" "}
          <Link
            href="/onboarding"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Try it free
          </Link>
          .
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center my-10">
        <p className="text-lg font-semibold text-stone-800 mb-2">
          Your first family meal plan is free
        </p>
        <p className="text-stone-500 text-sm mb-5">
          Set your family&apos;s preferences in two minutes. Get a personalized
          meal plan with recipes and a grocery list by email &mdash; built for
          your household. $7.99/mo after your trial.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Start Your Free Plan &rarr;
        </Link>
      </div>

      {/* Related articles + meal plans */}
      <div className="border-t border-stone-100 mt-12 pt-8">
        <p className="text-sm font-medium text-stone-400 mb-4">
          Related articles
        </p>
        <div className="space-y-3">
          <Link
            href="/blog/meal-planning-for-beginners"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Beginners: 5-Step Guide (2026)
          </Link>
          <Link
            href="/blog/meal-plan-with-grocery-list"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Plan with Grocery List: The Complete Solution
          </Link>
          <Link
            href="/blog/save-money-groceries-meal-planning"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            How to Save Money on Groceries with Meal Planning
          </Link>
          <Link
            href="/blog/cooking-for-your-partner"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Cooking for Your Partner: 10 Impressive Meals Anyone Can Make
          </Link>
          <Link
            href="/blog/meal-planning-for-two"
            className="text-orange-500 hover:text-orange-600 underline text-sm block"
          >
            Meal Planning for Two: No More Waste, No More Guessing
          </Link>
        </div>
        <p className="text-sm font-medium text-stone-400 mt-6 mb-4">
          Browse meal plans
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/meal-plans/meal-plan-for-family-of-4" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Family</Link>
          <Link href="/meal-plans/meal-plan-on-a-budget" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Budget</Link>
          <Link href="/meal-plans/quick-30-minute-meal-plan" className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Quick 30-Minute</Link>
          <Link href="/meal-plans" className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">View all &rarr;</Link>
        </div>
      </div>
      </article>
    </>
  );
}
