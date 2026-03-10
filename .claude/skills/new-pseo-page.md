# New pSEO Meal Plan Page

Creates a new programmatic SEO meal plan page with all required fields,
translation slug mappings, and verifies it builds correctly.

## Steps

1. **Determine page type**: diet | cuisine | combo
2. **Create the data file** in `src/data/meal-plans/` following `MealPlanPageData` type:
   - slug, title, metaDescription, h1, type, dateModified
   - intro, valueProps (3), sampleMeals (5 with tags), faqs (5)
   - relatedPages array
3. **Register it** in `src/data/meal-plans/index.ts` — import and spread into ALL_PAGES
4. **Add slug mappings** to all 10 locale files in `src/data/meal-plans/translations/slugs/{locale}.json`
   - CJK: use romanized slugs (ja=romaji, ko=romanized, zh=pinyin, ar=romanized)
5. **Add translation skeleton** to each `src/data/meal-plans/translations/{locale}.json`
   - Copy English fields as fallback — translate later
6. **Verify**: `npm run build` should pass, page appears at `/meal-plans/{slug}`

## Data Type Reference

```typescript
type MealPlanPageData = {
  slug: string;
  title: string;           // "X Meal Plan" — for <title> tag
  metaDescription: string; // 150-160 chars
  h1: string;              // Unique, benefit-focused
  type: "diet" | "cuisine" | "combo";
  dateModified: string;    // "YYYY-MM-DD"
  intro: string;           // 2-3 sentences, conversational
  valueProps: Array<{ heading: string; description: string }>; // exactly 3
  sampleMeals: Array<{ name: string; description: string; tags: string[] }>; // exactly 5
  faqs: Array<{ question: string; answer: string }>; // exactly 5
  relatedPages: string[];  // slugs of 3-4 related pages
};
```

## Locale Files Location
- Slug maps: `src/data/meal-plans/translations/slugs/{es,fr,de,pt,tr,ja,ko,zh,ar,hi}.json`
- Content: `src/data/meal-plans/translations/{es,fr,de,pt,tr,ja,ko,zh,ar,hi}.json`
