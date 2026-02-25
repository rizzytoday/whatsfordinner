import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    const { data: profile, error } = await admin
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows found — that's fine, return null
      console.error("Profile fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile: profile ?? null });
  } catch (error) {
    console.error("Profile GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const admin = createAdminClient();

    // Only include columns that exist in the profiles table
    const ALLOWED_FIELDS = [
      "household_size", "has_kids", "kids_ages", "weekly_budget",
      "dietary_restrictions", "allergies", "cuisine_preferences",
      "cooking_skill", "max_cook_time", "meals_per_day",
      "servings_per_meal", "delivery_email", "delivery_day",
      "timezone", "onboarding_completed",
    ];

    const profileData: Record<string, unknown> = {
      user_id: user.id,
      updated_at: new Date().toISOString(),
    };
    for (const key of ALLOWED_FIELDS) {
      if (key in body) {
        profileData[key] = body[key];
      }
    }

    const { data: profile, error } = await admin
      .from("profiles")
      .upsert(profileData, { onConflict: "user_id" })
      .select()
      .single();

    if (error) {
      console.error("Profile upsert error:", error);
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Profile PUT error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
