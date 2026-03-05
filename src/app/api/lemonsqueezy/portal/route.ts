import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getCustomer } from "@lemonsqueezy/lemonsqueezy.js";
import { ensureLemonSqueezySetup } from "@/lib/lemonsqueezy";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const limited = rateLimit(req, "portal", 10, 60_000);
    if (limited) return limited;

    ensureLemonSqueezySetup();
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    const { data: dbUser, error } = await admin
      .from("users")
      .select("lemon_customer_id")
      .eq("id", user.id)
      .single();

    if (error || !dbUser?.lemon_customer_id) {
      return NextResponse.json(
        { error: "No billing account found" },
        { status: 404 },
      );
    }

    const { data: customer } = await getCustomer(dbUser.lemon_customer_id);

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found" },
        { status: 404 },
      );
    }

    const portalUrl = customer.data.attributes.urls.customer_portal;

    return NextResponse.json({ url: portalUrl });
  } catch (error) {
    console.error("Portal error:", error);
    return NextResponse.json(
      { error: "Failed to get portal URL" },
      { status: 500 },
    );
  }
}
