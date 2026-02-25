import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Temporary test endpoint — delete before launch
export async function POST(req: NextRequest) {
  const { secret } = await req.json();
  if (secret !== "wfd-reset-2026") {
    return NextResponse.json({ error: "nope" }, { status: 403 });
  }

  const db = createAdminClient();

  // Clear all free generation records
  await db.from("free_generations").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  // Clear all profiles (for testing)
  await db.from("profiles").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  return NextResponse.json({ ok: true, message: "Cleared free_generations and profiles" });
}
