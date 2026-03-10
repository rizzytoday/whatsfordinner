import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  const limited = rateLimit(req, "subscription-status", 30, 60_000);
  if (limited) return limited;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ status: "unauthenticated" }, { status: 401 });

  const admin = createAdminClient();
  const { data } = await admin
    .from("users")
    .select("subscription_status")
    .eq("id", user.id)
    .single();

  return NextResponse.json({ status: data?.subscription_status ?? "inactive" });
}
