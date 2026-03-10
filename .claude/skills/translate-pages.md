# Translate Meal Plan Pages

Translates missing content (intro, valueProps, sampleMeals, faqs) for pSEO pages
across the 10 non-English locales.

## When to Use
- After adding new pSEO pages (they start with English fallback)
- When checking translation coverage across locales

## Check Coverage
```bash
node /tmp/check-translations.mjs
```
If the script doesn't exist, create it to check each locale for untranslated pages
(detect by absence of native script characters).

## Translation Workflow
1. Identify which locales + pages need translation
2. Read source English content from `src/data/meal-plans/translations/{locale}.json`
   or from the data files in `src/data/meal-plans/`
3. Spawn focused agents — one per locale batch of 10-20 pages max
4. Each agent writes to `/tmp/tr-{locale}-{batch}.json`
5. Merge with: `node /tmp/merge-translations.mjs`

## Merge Script Location
`/tmp/merge-translations.mjs` — combines chunk files into locale JSONs.
Reads: `/tmp/tr-{locale}-{0|1|2|3}.json` for all non-Spanish locales.

## Output Format Per Page
```json
{
  "slug": {
    "intro": "translated string",
    "valueProps": [{"heading": "...", "description": "..."}],
    "sampleMeals": [{"name": "...", "description": "...", "tags": ["..."]}],
    "faqs": [{"question": "...", "answer": "..."}]
  }
}
```

## Locales
es, fr, de, pt, tr, ja, ko, zh, ar, hi
- Arabic (ar) is the only RTL locale
- CJK locales: use native script in content, romanized slugs in slug maps
- Chinese (zh): avoid ASCII double quotes inside strings — use 「」 or \u201c\u201d
