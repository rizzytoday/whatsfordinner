#!/usr/bin/env node

/**
 * Batch-submit all meal plan URLs (English + 10 i18n locales) to IndexNow.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs          # submit to IndexNow
 *   node scripts/indexnow-submit.mjs --dry    # just print URLs, don't submit
 */

import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const HOST = "whatsfordinner.fit";
const KEY = "cd086ba61dbb4e2d9cc8286f2f5424d2";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const NON_DEFAULT_LOCALES = [
  "es",
  "fr",
  "de",
  "pt",
  "ja",
  "ko",
  "zh",
  "ar",
  "tr",
  "hi",
];

// ---------------------------------------------------------------------------
// Read English slugs from data files
// ---------------------------------------------------------------------------

const DATA_DIR = join(ROOT, "src/data/meal-plans");
const DATA_FILES = [
  "diets",
  "cuisines",
  "combos",
  "goals",
  "households",
  "calories",
  "durations",
  "seasonal",
];

function extractSlugs() {
  const slugs = [];
  for (const file of DATA_FILES) {
    const content = readFileSync(join(DATA_DIR, `${file}.ts`), "utf-8");
    const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
    for (const m of matches) {
      slugs.push(m[1]);
    }
  }
  return slugs;
}

// ---------------------------------------------------------------------------
// Read slug translation maps
// ---------------------------------------------------------------------------

function loadSlugMap(locale) {
  try {
    const raw = readFileSync(
      join(DATA_DIR, "translations/slugs", `${locale}.json`),
      "utf-8"
    );
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

// ---------------------------------------------------------------------------
// Build all URLs
// ---------------------------------------------------------------------------

function buildUrls() {
  const englishSlugs = extractSlugs();
  const urls = [];

  // English hub page
  urls.push(`https://${HOST}/meal-plans`);

  // English individual pages
  for (const slug of englishSlugs) {
    urls.push(`https://${HOST}/meal-plans/${slug}`);
  }

  // i18n hub pages + individual pages
  for (const locale of NON_DEFAULT_LOCALES) {
    urls.push(`https://${HOST}/${locale}/meal-plans`);

    const slugMap = loadSlugMap(locale);
    for (const englishSlug of englishSlugs) {
      const localizedSlug = slugMap[englishSlug] || englishSlug;
      urls.push(`https://${HOST}/${locale}/meal-plans/${localizedSlug}`);
    }
  }

  return urls;
}

// ---------------------------------------------------------------------------
// Submit to IndexNow
// ---------------------------------------------------------------------------

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return res;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const dryRun = process.argv.includes("--dry");
const urls = buildUrls();

console.log(`Total URLs: ${urls.length}`);
console.log(
  `  - English: 1 hub + ${urls.length - 1 - NON_DEFAULT_LOCALES.length * 81} pages`
);
console.log(
  `  - i18n: ${NON_DEFAULT_LOCALES.length} locales x (1 hub + 80 pages) = ${NON_DEFAULT_LOCALES.length * 81}`
);

if (dryRun) {
  console.log("\n--- DRY RUN (not submitting) ---\n");
  for (const url of urls) {
    console.log(url);
  }
  process.exit(0);
}

console.log(`\nSubmitting to IndexNow...`);
const res = await submit(urls);
console.log(`Response status: ${res.status} ${res.statusText}`);

if (!res.ok) {
  const text = await res.text();
  console.error(`Error body: ${text}`);
  process.exit(1);
}

console.log("Done. URLs submitted successfully.");
