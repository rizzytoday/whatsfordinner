import { Resend } from "resend";
import { getAppUrl } from "@/lib/utils";
import { generateEmailUnsubscribeUrl } from "@/lib/unsubscribe";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapEmail(content: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"></head>
<body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:24px;">
      <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
    </div>
    ${content}
  </div>
</body>
</html>`;
}

function buildFooter(email: string): string {
  const unsubUrl = generateEmailUnsubscribeUrl(email);
  return `
    <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
      <p style="margin:0;font-size:11px;color:#D6D3D1;">
        What's For Dinner &middot; whatsfordinner.fit
      </p>
      <p style="margin:6px 0 0;font-size:11px;">
        <a href="${unsubUrl}" style="color:#D6D3D1;text-decoration:underline;">Unsubscribe</a>
      </p>
    </div>`;
}

export function buildNurtureDay3Email(email: string): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        How did your meals turn out?
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        Hey! You planned 3 days of meals earlier this week. How'd it go?
      </p>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        If you loved it, imagine having <strong style="color:#1C1917;">every single week planned</strong> &mdash; with a full grocery list, recipes, and calorie counts. No thinking required.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=monthly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Subscribe &mdash; $7.99/mo
        </a>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: "How did your meals turn out?", html };
}

export function buildNurtureDay7Email(email: string): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        Your next week is unplanned
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        It's been a week since your free plan. Right now, you're back to &ldquo;what's for dinner?&rdquo; tonight.
      </p>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Get a fresh <strong style="color:#1C1917;">7-day plan every Sunday</strong> &mdash; recipes, grocery list, everything. No more deciding.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Subscribe &mdash; $5/mo yearly ($59.99/yr)
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">That's less than a single takeout coffee.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: "Your next week is unplanned", html };
}

export function buildNurtureDay14Email(email: string): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        What 7 days of planned meals looks like
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        Two weeks ago you tried a 3-day plan. Here's what subscribers get every Sunday:
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;">
            <span style="display:inline-block;background:#FFF7ED;color:#C2410C;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;">Mon&ndash;Sun</span>
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;font-size:14px;color:#1C1917;">
            7 days of breakfast, lunch &amp; dinner
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;">
            <span style="display:inline-block;background:#EFF6FF;color:#1D4ED8;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;">Recipes</span>
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;font-size:14px;color:#1C1917;">
            Step-by-step for every meal
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;">
            <span style="display:inline-block;background:#F0FDF4;color:#15803D;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;">List</span>
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #F5F5F4;font-size:14px;color:#1C1917;">
            One grocery list, sorted by aisle
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;">
            <span style="display:inline-block;background:#FAF5FF;color:#7E22CE;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;">Swap</span>
          </td>
          <td style="padding:8px 0;font-size:14px;color:#1C1917;">
            Don't like a meal? Swap it instantly
          </td>
        </tr>
      </table>

      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        All personalized to your diet, budget, and household size. <strong style="color:#1C1917;">Zero thinking required.</strong>
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Get your weekly plan &mdash; $5/mo
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Save 37% with yearly ($59.99/yr)</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: "What 7 days of planned meals looks like", html };
}

// ── Weekly inspiration emails (Day 21+, rotating themes) ──

const WEEKLY_THEMES = [
  {
    subject: "3 meals you can make in under 30 minutes",
    title: "Quick wins for busy nights",
    intro: "Short on time? These crowd favorites come together fast &mdash; no shortcuts on flavor.",
    meals: [
      { name: "Garlic Butter Shrimp with Rice", time: "20 min", tag: "Seafood" },
      { name: "Black Bean Quesadillas", time: "15 min", tag: "Vegetarian" },
      { name: "Lemon Herb Chicken Thighs", time: "25 min", tag: "High Protein" },
    ],
  },
  {
    subject: "3 meals under $3 per serving",
    title: "Eat well, spend less",
    intro: "Proof that budget-friendly doesn't mean boring. These cost less than a coffee per plate.",
    meals: [
      { name: "Chickpea Coconut Curry", time: "25 min", tag: "Vegan" },
      { name: "Egg Fried Rice with Veggies", time: "15 min", tag: "Budget" },
      { name: "Baked Pasta with Spinach", time: "30 min", tag: "Family" },
    ],
  },
  {
    subject: "3 one-pot meals for zero cleanup",
    title: "Cook once, wash once",
    intro: "Everything goes in one pot. Dinner's done and cleanup takes two minutes.",
    meals: [
      { name: "One-Pot Chicken Alfredo", time: "25 min", tag: "Comfort" },
      { name: "Tomato Basil Soup with Grilled Cheese Dippers", time: "20 min", tag: "Classic" },
      { name: "Thai Peanut Noodles", time: "20 min", tag: "Asian" },
    ],
  },
  {
    subject: "3 high-protein meals that actually taste good",
    title: "Protein without the boredom",
    intro: "Skip the plain chicken and broccoli. These pack 30g+ protein and real flavor.",
    meals: [
      { name: "Turkey Taco Bowls", time: "20 min", tag: "30g protein" },
      { name: "Salmon with Roasted Sweet Potato", time: "30 min", tag: "35g protein" },
      { name: "Greek Chicken Grain Bowl", time: "25 min", tag: "32g protein" },
    ],
  },
  {
    subject: "3 meals your kids will actually eat",
    title: "Family-tested, parent-approved",
    intro: "No more cooking two separate dinners. These are simple enough for picky eaters and satisfying for adults.",
    meals: [
      { name: "Homemade Chicken Tenders", time: "25 min", tag: "Kid Fave" },
      { name: "Mini Pizza Bagels with Hidden Veggies", time: "15 min", tag: "Sneaky" },
      { name: "Teriyaki Beef Stir-Fry", time: "20 min", tag: "Sweet" },
    ],
  },
  {
    subject: "3 meals that are better than takeout",
    title: "Skip the delivery app tonight",
    intro: "Save $15&ndash;25 per meal and eat better. These taste like restaurant food made at home.",
    meals: [
      { name: "Crispy Orange Chicken", time: "30 min", tag: "Chinese" },
      { name: "Smash Burgers with Special Sauce", time: "20 min", tag: "American" },
      { name: "Creamy Tuscan Chicken Pasta", time: "25 min", tag: "Italian" },
    ],
  },
  {
    subject: "3 healthy meals that don't taste healthy",
    title: "Clean eating, zero sadness",
    intro: "Nutritious food shouldn't feel like punishment. These are genuinely delicious.",
    meals: [
      { name: "Cauliflower Mac &amp; Cheese", time: "25 min", tag: "Comfort" },
      { name: "Honey Garlic Salmon", time: "20 min", tag: "Omega-3" },
      { name: "Stuffed Bell Peppers", time: "35 min", tag: "Balanced" },
    ],
  },
  {
    subject: "3 meals perfect for meal prep",
    title: "Cook Sunday, eat all week",
    intro: "Make once, portion out, reheat all week. Your future self will thank you.",
    meals: [
      { name: "Chicken Burrito Bowls", time: "30 min", tag: "Prep Fave" },
      { name: "Beef &amp; Broccoli", time: "25 min", tag: "Reheats Well" },
      { name: "Mediterranean Quinoa Salad", time: "20 min", tag: "No Reheat" },
    ],
  },
];

function buildWeeklyInspirationEmail(
  email: string,
  weekIndex: number
): { subject: string; html: string } {
  const appUrl = getAppUrl();
  const theme = WEEKLY_THEMES[weekIndex % WEEKLY_THEMES.length];

  const mealRows = theme.meals
    .map(
      (meal) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #F5F5F4;">
            <p style="margin:0 0 2px;font-size:15px;font-weight:600;color:#1C1917;">${escapeHtml(meal.name)}</p>
            <p style="margin:0;font-size:12px;color:#A8A29E;">${escapeHtml(meal.time)} &middot; ${escapeHtml(meal.tag)}</p>
          </td>
        </tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        ${escapeHtml(theme.title)}
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        ${theme.intro}
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${mealRows}
      </table>

      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Want a full week of meals like these &mdash; with recipes, grocery list, and calorie counts &mdash; personalized to <em>your</em> preferences?
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Get your weekly plan &mdash; $5/mo
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Cancel anytime. Plans start instantly.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: theme.subject, html };
}

// ── Referral reminder email (for subscribers, 2 weeks after first plan) ──

export function buildReferralReminderEmail(
  email: string,
  referralCodes: string[]
): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const codeRows = referralCodes
    .map(
      (code) => `
        <tr>
          <td style="padding:8px 12px;background:#FFF7ED;border-radius:8px;margin-bottom:4px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#C2410C;font-family:monospace;">${escapeHtml(code)}</td>
                <td style="text-align:right;">
                  <a href="${appUrl}/redeem?code=${encodeURIComponent(code)}" style="font-size:12px;color:#F97316;text-decoration:none;font-weight:600;">Share link</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="height:6px;"></td></tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        Give your friends free meal plans
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        You just got your second weekly plan. If it's been saving you time, share the love &mdash; you have <strong style="color:#1C1917;">${referralCodes.length} referral code${referralCodes.length === 1 ? "" : "s"}</strong> to give away.
      </p>
      <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#1C1917;">Your codes:</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${codeRows}
      </table>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Each code gives a friend a <strong style="color:#1C1917;">free year</strong> of weekly meal plans with recipes and a grocery list. Just send them the share link.
      </p>
    </div>
    ${buildFooter(email)}`);

  return { subject: "You have referral codes to share", html };
}

// ── Email type definitions ──

export type NurtureEmailType = "day3" | "day7" | "day14" | `weekly_${number}`;

export async function sendNurtureEmail(
  to: string,
  type: NurtureEmailType
): Promise<void> {
  let subject: string;
  let html: string;

  if (type === "day3") {
    ({ subject, html } = buildNurtureDay3Email(to));
  } else if (type === "day7") {
    ({ subject, html } = buildNurtureDay7Email(to));
  } else if (type === "day14") {
    ({ subject, html } = buildNurtureDay14Email(to));
  } else if (type.startsWith("weekly_")) {
    const weekIndex = parseInt(type.split("_")[1], 10);
    ({ subject, html } = buildWeeklyInspirationEmail(to, weekIndex));
  } else {
    return;
  }

  const unsubUrl = generateEmailUnsubscribeUrl(to);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

export async function sendReferralReminderEmail(
  to: string,
  referralCodes: string[]
): Promise<void> {
  const { subject, html } = buildReferralReminderEmail(to, referralCodes);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
  });
}
