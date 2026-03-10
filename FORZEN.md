# What's For Dinner — FORZEN.md

*A deep dive into how this thing works, why we made the decisions we did, and what we learned building it.*

---

## What Is This?

What's For Dinner is an AI meal planner. You tell it your diet (keto, vegan, halal, gluten-free...), your favorite cuisines (Italian, Thai, Indian...), how many people you're feeding, and whether you want to include snacks. It generates a full weekly meal plan — with actual recipes and a consolidated grocery list — tailored to your preferences.

**The core pitch:** Stop asking "what's for dinner?" every night. Let AI plan your whole week in one shot, give you the recipes, and hand you a grocery list so you buy exactly what you need and nothing more.

Free tier gets a 3-day plan instantly, no account required. Paid subscribers get 7-day plans delivered fresh every Sunday.

---

## The Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | Next.js 16 (App Router) | ISR for SEO pages, server components, API routes |
| UI | React 19 + Tailwind 4 | Fast to build, easy to maintain |
| Database | Supabase (Postgres) | Auth + DB in one, real-time capable |
| AI | Claude API (claude-sonnet-4-6) | Best at following complex structured prompts |
| Email | Resend | Reliable delivery + SMTP for Supabase auth |
| Payments | LemonSqueezy | Simple SaaS billing without Stripe complexity |
| Hosting | Vercel | Zero-config, auto-deploys on push |

**Design system:** Warm Minimal Light. Orange (#F97316) on cream (#FFFBF5). CSS-only animations (no GSAP, no Framer Motion). Inter font. No dark mode — ever. It's a food app, it should feel warm and friendly.

---

## How Meal Plan Generation Works

This is the heart of the product.

### The Free Plan (`/api/generate-free-plan`)

Anonymous users hit this endpoint. We generate a 3-day plan using the Claude API with a carefully crafted prompt that includes their dietary preferences, cuisine choices, household size, and any personal notes. The response comes back as structured JSON: days → meals → recipe with ingredients + steps + macros.

The free plan is **never stored in the database** — it gets returned to the client and cached in localStorage. This was a deliberate decision: no DB bloat, no PII for anonymous users, and it forces the upsell naturally (want to keep your plan? Make an account). We do insert a lightweight stats row so we can track usage numbers.

**Abuse prevention** has three layers:
1. **Fingerprint** (permanent) — browser fingerprint stored in localStorage
2. **IP cooldown** (21-day) — same IP can't generate again for 3 weeks
3. **Rate limit** (3/min) — in-memory per-IP, blocks bots

### The Paid Plan (`/api/generate-plan`)

Subscribers get 7-day plans. Same Claude API call, more days, richer output. The plan gets stored in the `meal_plans` table keyed by `user_id + week_id` (the ISO week string like "2026-W10").

Every generation — whether from the cron, a manual regenerate, or first-time dashboard visit — sends a confirmation email via Resend. The email content changes based on which week number it is (week 1 gets "welcome" copy, later weeks get "X hours saved" framing).

Subscribers can regenerate up to 2x/week with a confirmation dialog. Keeps the "just refresh until I get tacos" behavior in check.

### The Weekly Cron (`/api/cron/weekly`)

Runs every Sunday at 8AM UTC via Vercel cron. Loops through all active subscribers, generates a fresh 7-day plan for each, saves to DB, sends the email.

The clever bit: if a subscriber visits the dashboard *before* the cron fires (say, Saturday night), the dashboard auto-generates a plan for them on the spot. The cron then skips them on Sunday since a plan already exists for that week. No duplicates.

---

## The Onboarding Flow

Five steps. Visual, emoji-heavy, fast.

1. **Diet** — pick your dietary style (vegetarian, keto, Mediterranean, etc.)
2. **Cuisine** — favorite food cultures (Italian, Thai, Indian, Mexican...)
3. **Household** — how many people, include snacks yes/no
4. **Goals** — weight loss, muscle gain, heart health, just eating well
5. **Personal note** — free text for anything the AI should know ("my kids hate mushrooms")

After onboarding, we save the profile, then immediately call `/api/generate-plan` to create their first week. No waiting around.

**Promo code flow:** If someone arrived via `/redeem?code=XXX`, the code gets stored in localStorage. Onboarding reads it, redeems the promo before generation, and the user gets their free subscription without ever seeing a paywall. The key insight: the promo code must survive the auth redirect (signup → email confirmation → callback → onboarding), so localStorage is the right storage choice here.

---

## SEO Infrastructure

This is where a lot of engineering time went. The goal was to rank for every diet × cuisine × goal combination people search for.

### Programmatic SEO (pSEO)

**80 unique meal plan pages** at `/meal-plans/[slug]`:
- 10 diet pages (vegetarian, vegan, keto, Mediterranean...)
- 12 cuisine pages (Italian, Thai, Indian, Mexican...)
- 20 combo pages (keto + Italian, vegan + Thai...)
- 6 calorie-target pages (1200, 1500, 1800, 2000, 2500, 3000)
- 6 duration pages (3-day, 5-day, 7-day, 14-day, 21-day, 30-day)
- 10 goal pages (weight loss, muscle gain, pregnancy, diabetes...)
- 10 seasonal/household pages (summer, winter, Ramadan, family of 4...)

Each page has a unique H1, meta description, intro, value props, sample meals, and FAQs. All statically generated with ISR (revalidate every 24h). FAQPage and BreadcrumbList schema on every page.

### Blog (18 Articles)

Alternative-focused content targeting competitor keywords:
- "HelloFresh alternative", "Yummly alternative", "PlateJoy alternative"...
- Plus how-to guides: "how to meal prep", "meal planning for beginners"

Each article has ArticleJsonLd, BreadcrumbJsonLd, canonical URL, and internal cross-links.

### Internationalization (10 Locales)

The full 80-page catalog is translated into: **es, fr, de, pt, tr, ja, ko, zh, ar, hi**.

That's 800 translated pages at `/[locale]/meal-plans/[slug]`. Combined with English + blog + static pages: **920+ indexed pages total**.

Architecture:
- Slug maps: `src/data/meal-plans/translations/slugs/{locale}.json` (80 per locale)
- Content: `src/data/meal-plans/translations/{locale}.json` (translated intro, valueProps, sampleMeals, faqs)
- Translation loader: falls back to English gracefully when a key is missing
- Arabic is RTL — the `[locale]/layout.tsx` sets `dir="rtl"` dynamically
- CJK slugs are romanized (ja=romaji, zh=pinyin, ko=romanized, ar=romanized)

Hreflang tags appear in both sitemap alternates AND page metadata. Sitemap is split into 12 sub-sitemaps to stay under limits.

---

## Key Architectural Decisions

### Free Plans Don't Live in the Database
We return them to the client and let localStorage cache them. Three reasons: no PII for anonymous users, no DB bloat from one-time visitors, and it creates natural upgrade pressure ("want to save this plan? create an account"). A lightweight stats row gets inserted instead for analytics.

### CSS-Only Animations
No GSAP, no Framer Motion. This is a food app, not a portfolio. Tailwind's built-in `transition` classes at 200ms are all we need. Keeps the bundle small and the code simple.

### No Dark Mode
Intentional. Warm orange on cream is the brand. Dark mode would require maintaining a whole parallel color system and would make the food imagery look worse. Hard no.

### Email via Resend SMTP (Not Supabase Built-In)
Learned this the hard way: Supabase's built-in email service is unreliable for production — confirmation emails get delayed or dropped. Resend as the SMTP provider for all Supabase auth emails (confirmation, password reset) is the right call. Costs a bit more but emails actually land.

### Optimistic Locking for Promo Codes
Promo codes have a `max_uses` + `current_uses` count. Race condition: two users try to redeem the last slot simultaneously. Solution: `.eq("current_uses", readValue)` in the update — if someone else already incremented it, the update fails and we return "code already used."

---

## Bugs Hit and Lessons Learned

### "The Email That Looked Fine in Preview But Broke in Gmail"
Gmail clips emails above 102KB of HTML. Apple Mail clips by rendered height. We learned this after shipping emails that got cut off before the CTA button. Fix: put the CTA *above* the meal list, force `color-scheme: light` to prevent dark mode clients from inverting our orange design, and keep HTML under 102KB.

Also: **never use `display:flex` or `gap` in email HTML**. Email clients (Outlook especially) just ignore them. Use `<table>` layouts for everything structural.

### Supabase PromiseLike Doesn't Support `.catch()`
`admin.from('table').insert(data)` returns a PromiseLike, not a real Promise. You can't `.catch()` it. For fire-and-forget operations (like inserting a stats row), use `void admin.from(...)` and let it fail silently rather than crashing the request handler.

### Profile Schema `.strict()` Caused Silent 400s
The Zod schema for profile updates uses `.strict()` — any unknown key causes a 400 error. This bit us when we added new profile fields (like `include_snacks`, `nutrition_goal`) to the DB but forgot to add them to the Zod schema. Onboarding would silently fail to save the profile, then `/api/generate-plan` would error with "Profile not found." Always keep the Zod schema in sync with the DB schema.

### The `wfd_promo_code` localStorage Survival Problem
Promo code users get the code stored in localStorage when they hit `/redeem`. Then they go through: signup → email confirmation → email link → `/callback` → redirect to `/onboarding`. By the time they reach onboarding, localStorage still has the code — but only if we used the user's own browser the whole time. The code needs to survive all those redirects in the same browser session. LocalStorage is perfect for this, but server-side storage (session, cookie) would've been fragile across the auth email redirect.

### Translation at Scale Is a Token Budget Problem
Translating 800 pages (80 pages × 10 locales) hit Anthropic hourly rate limits repeatedly. Key learnings:
- Agents generating 10-page batches work. 80-page batches run out of output tokens or hit limits mid-way.
- Run agents in parallel (12 at once) rather than sequentially — parallelism doesn't burn more of the hourly budget, it just finishes faster.
- Chinese text: AI models sometimes use ASCII double quotes `"` inside strings for emphasis, which breaks JSON. Always validate with Python's `json.load()` and patch before merging.
- The merge script (`/tmp/merge-translations.mjs`) was the right abstraction: agents write chunks to `/tmp/`, main script merges — decouples generation from integration.

### ISR Cache Serving Stale Stats
The stats counter on the homepage (`/api/stats`) was returning cached numbers even after new plans generated. Fix: `export const dynamic = 'force-dynamic'` on the route + `cache: 'no-store'` on the client fetch. ISR is great for static content, hostile for real-time counters.

---

## The Business Model

**Monthly plan**: recurring subscription via LemonSqueezy
**Yearly plan**: discounted, includes 3 referral codes (gifted to friends)
**Gift/promo subs**: no `lemon_customer_id` — "Manage Billing" is hidden, shows "Gift subscription" badge instead

Promo codes are in the `promo_codes` table with type, duration_months, max_uses, current_uses. Create admin codes via SQL:
```sql
INSERT INTO promo_codes (code, type, duration_months, max_uses, current_uses)
VALUES ('CODE', 'admin', 12, 1, 0);
```

---

## Deployment & Operations

- Vercel auto-deploys on every push to `main`. Never run `npx vercel --prod` manually.
- Env vars: everything sensitive lives in Vercel dashboard, not `.env.local`
- Weekly cron is a Vercel cron job — configured in `vercel.json`
- Search Console: sitemap submitted, IndexNow key deployed at `/cd086ba61dbb4e2d9cc8286f2f5424d2.txt`
- Bing Webmaster Tools: sitemap fetched, Site Scan running (787/790 pages clean)

---

## What's Next

- Language switcher on translated pages linking to other locale versions
- Blog article translations (18 articles × 10 locales)
- More pSEO page categories (meal prep, budget cooking, specific health conditions)
- Recipe rating / save favorite meals
- Shopping list sync (Instacart, AnyList integration)
