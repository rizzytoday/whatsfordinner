import { Resend } from "resend";
import type { MealPlanData } from "@/types/meal-plan";
import { formatWeekOf, getAppUrl } from "@/lib/utils";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function buildMealPlanEmail(weekOf: string, plan: MealPlanData): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);

  // Compute stats
  const totalMeals = plan.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalCalories = plan.days.reduce((sum, d) => sum + (d.totalCalories || d.meals.reduce((s, m) => s + (m.calories || 0), 0)), 0);
  const totalCookTime = plan.days.reduce((sum, d) => sum + d.meals.reduce((s, m) => s + (m.cookTime || 0) + (m.prepTime || 0), 0), 0);
  const groceryCount = plan.groceryList.reduce((sum, cat) => sum + cat.items.length, 0);

  const daysSummary = plan.days
    .map((day) => {
      const meals = day.meals
        .map((m) => `<li style="margin:2px 0;color:#57534E;">${m.type}: <strong style="color:#1C1917;">${m.name}</strong> (${m.calories} cal)</li>`)
        .join("");
      return `
        <div style="margin-bottom:16px;">
          <h3 style="margin:0 0 6px;color:#1C1917;font-size:15px;">${day.day}</h3>
          <ul style="margin:0;padding-left:20px;font-size:14px;">${meals}</ul>
        </div>`;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:24px;">
          <h1 style="margin:0;font-size:24px;color:#1C1917;">Your Meal Plan is Ready</h1>
          <p style="margin:8px 0 0;color:#57534E;font-size:15px;">Week of ${weekLabel}</p>
        </div>

        <!-- Stats bar -->
        <div style="background:#FFF7ED;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
            <tr>
              <td style="text-align:center;padding:4px 0;">
                <div style="font-size:20px;font-weight:700;color:#1C1917;">${totalMeals}</div>
                <div style="color:#A8A29E;font-size:11px;">meals</div>
              </td>
              <td style="text-align:center;padding:4px 0;">
                <div style="font-size:20px;font-weight:700;color:#1C1917;">${groceryCount}</div>
                <div style="color:#A8A29E;font-size:11px;">grocery items</div>
              </td>
              <td style="text-align:center;padding:4px 0;">
                <div style="font-size:20px;font-weight:700;color:#1C1917;">${totalCalories.toLocaleString()}</div>
                <div style="color:#A8A29E;font-size:11px;">total cal</div>
              </td>
              <td style="text-align:center;padding:4px 0;">
                <div style="font-size:20px;font-weight:700;color:#F97316;">${totalCookTime} min</div>
                <div style="color:#A8A29E;font-size:11px;">cook time</div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Meals -->
        <div style="background:#FFFFFF;border-radius:16px;padding:24px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <!-- Grocery summary -->
        <div style="margin-top:20px;background:#FFF7ED;border-radius:12px;padding:14px;text-align:center;">
          <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1C1917;">Grocery List</p>
          <p style="margin:0;font-size:13px;color:#57534E;">${groceryCount} items &middot; Est. ${plan.estimatedWeeklyCost}</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/plan/${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:600;font-size:15px;">
            View Full Plan & Recipes
          </a>
          <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Includes recipes, instructions & printable grocery list</p>
        </div>

        <!-- Footer -->
        <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
          <p style="margin:0;font-size:12px;color:#A8A29E;">
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Manage preferences</a>
             &middot;
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Regenerate plan</a>
          </p>
          <p style="margin:8px 0 0;font-size:11px;color:#D6D3D1;">
            What's For Dinner &middot; whatsfordinner.fit
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendMealPlanEmail(
  to: string,
  weekOf: string,
  plan: MealPlanData
): Promise<void> {
  const html = buildMealPlanEmail(weekOf, plan);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: `Your meal plan for the week of ${formatWeekOf(weekOf)}`,
    html,
  });
}
