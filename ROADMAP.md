# What's For Dinner - Roadmap

## Status: LAUNCHED & LIVE
Last audit: March 10, 2026
First payment received. Product Hunt scheduled.

---

## What's Already Shipped

### Core Product
- [x] AI meal plan generation with recipes + grocery list (3-day free, 7-day paid)
- [x] 5-step onboarding (household, budget, diet, preferences, delivery)
- [x] Dashboard with plan view, past plans, regeneration (2x/week)
- [x] Grocery list with category grouping + checkboxes
- [x] Print-friendly plan view
- [x] Meal feedback (like/dislike — influences future AI generations)
- [x] Mock plan mode for dev (USE_MOCK_PLAN env var)

### Subscriptions & Payments
- [x] LemonSqueezy checkout (monthly + yearly)
- [x] Full webhook handler (created, updated, cancelled, expired, payment_failed, resumed)
- [x] Customer portal (manage billing)
- [x] Promo/gift code system with atomic redemption + admin panel
- [x] Referral codes for yearly subscribers (3 codes each, DINNER-XXXX-XXXX format)
- [x] Gifted subscription expiry via cron

### Emails (Resend)
- [x] Weekly meal plan email (dynamic hero based on week number, day-by-day meals)
- [x] Free plan delivery email with upsell nudge
- [x] Nurture sequence for free users (Day 3 → monthly CTA, Day 7 → yearly CTA)
- [x] Unsubscribe flow (HMAC token, RFC 8058 List-Unsubscribe, email_opted_out flag)
- [x] Supabase auth emails via Resend SMTP (confirmation, password reset)
- [x] HTML-safe email templates (no flexbox, no gradients, color-scheme:light forced)

### Auth
- [x] Email/password signup with confirmation
- [x] Google OAuth
- [x] Protected routes via middleware
- [x] Promo code survival across auth redirects (localStorage)
- [x] Callback route with plan/redirect param handling

### SEO — 920+ Pages
- [x] 80 pSEO meal plan pages with FAQPage + BreadcrumbList schema
- [x] 18 blog articles (10 alternatives + 4 guides + roundup + for couples)
- [x] 800 translated pages across 10 locales (es, fr, de, pt, tr, ja, ko, zh, ar, hi)
- [x] hreflang on all pages (sitemap + metadata)
- [x] Multi-sitemap index (12 sub-sitemaps)
- [x] Dynamic OG images per meal plan page + blog
- [x] WebSite + SoftwareApplication + FAQPage schema in root layout
- [x] robots.txt, IndexNow key, Google Search Console + Bing Webmaster Tools
- [x] Custom 404 page

### Security
- [x] 3-layer free plan abuse prevention (fingerprint + IP + timing + honeypot + UA filter)
- [x] Rate limiting on all public API routes
- [x] HMAC-SHA256 webhook verification
- [x] CRON_SECRET timing-safe auth
- [x] Unsubscribe tokens with 90-day expiry
- [x] Zod strict validation on all API inputs
- [x] Claude prompt injection sanitization
- [x] HTML escaping in email templates
- [x] PII masking in error logs

---

## What's Next

### Shipped This Session (March 10)
- [x] **Meal swap** — refresh icon on every meal card. Claude Haiku generates replacement, patches DB, updates UI instantly.
- [x] **Required delivery email** — onboarding email field now required. Nurture sequence always has an address.
- [x] **Funnel analytics** — Vercel Analytics events: onboarding_step_completed + onboarding_completed.
- [x] **Welcome email** — fires non-blocking when first plan starts generating. Arrives while user waits.
- [x] **Checkout return page** — polls subscription status every 2s, redirects to dashboard when webhook fires. No more "did my payment work?" confusion.
- [x] **Yearly upsell card** — orange nudge for monthly subscribers. Save $29/yr + 3 invite links callout.
- [x] **Resend webhooks** — bounces/complaints auto-opt-out (sender reputation). Opens/clicks logged.

---

### High Impact — Do Next

- [ ] **Cancellation survey** — intercept before they cancel via LemonSqueezy. One question: "Why are you leaving?" Last-chance save + churn data. Could reduce churn 10-20%.
- [ ] **Pause/skip week** — "skip this week" button on dashboard. High retention value. Beats cancelling.
- [ ] **Social sharing** — "My meal plan this week" OG image generator. One click → Twitter/Instagram card. Free distribution every Sunday from every subscriber.
- [ ] **Checkout return nudge for non-subscribers** — users who land on `/checkout/return` without a subscription (abandoned) → retarget with a follow-up email.

### SEO Expansion

- [ ] **Blog translations** — 18 articles × 10 locales. Same pipeline as meal plan pages. Massive long-tail traffic.
- [ ] **Language switcher** — translated pages need locale nav UI. Hreflang is set, just no way to switch in UI.
- [ ] **More pSEO categories** — IBS-friendly, PCOS diet, thyroid-friendly, meal prep, budget cooking. Each = 10 new locales × 10 = 100 pages.
- [ ] **Recipe pages** — individual SEO pages per recipe ("easy keto chicken thigh recipe"). High search volume, direct product funnel.

### Growth Levers

- [ ] **Referral incentive for free users** — "refer a friend, get 1 month free" instead of just yearly subscribers. Viral loop.
- [ ] **"Share your plan" page** — public read-only version of a week's plan. Users share it, it drives signups.
- [ ] **Email nurture for subscribers who churn** — when subscription cancels, trigger a 2-email re-engagement sequence (day 7, day 30).
- [ ] **Seasonal meal plan pushes** — Ramadan, Christmas, Thanksgiving, summer BBQ. Timely content + email campaigns.

### Product Depth

- [ ] **Favorite meals** — heart icon on meal cards, saves to `meal_feedback` table, biases future plans. Table already exists.
- [ ] **Shopping list export** — export grocery list as PDF or share to AnyList/Apple Reminders.
- [ ] **Nutrition summary** — weekly macro breakdown (protein/carbs/fat totals). Visible on plan page.
- [ ] **Leftover tracking** — mark ingredients as "still have this", reduce next week's list.
- [ ] **Grocery delivery** — Instacart deep link from grocery list. One click to cart.

### Technical Health

- [ ] **Webhook idempotency** — dedupe LemonSqueezy retries by event ID.
- [ ] **Cron per-user timeout** — 90s cap per user so one slow Claude call doesn't block everyone.
- [ ] **Error monitoring** — Sentry. Flying blind on production errors right now.
- [ ] **Email open rate visibility** — build a simple `/admin/email-stats` page reading Vercel logs or Resend API.

---

## Metrics to Track

| Metric | Now | Month 1 Target | Month 3 Target |
|--------|-----|----------------|----------------|
| Free plans generated | — | 100+ | 500+ |
| Paid subscribers | 1 | 10+ | 50+ |
| Free → paid conversion | — | >5% | >8% |
| Monthly churn | — | <15% | <10% |
| Email open rate | — | >40% | >40% |
| Organic search clicks | — | 100+/mo | 1000+/mo |
