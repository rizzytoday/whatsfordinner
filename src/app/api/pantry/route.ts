import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const PutSchema = z.object({
  items: z.array(
    z.object({
      name: z.string().min(1).max(100),
      category: z.string().min(1).max(50),
    }),
  ).max(100),
});

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("pantry_items")
    .select("id, name, category, created_at")
    .eq("user_id", user.id)
    .order("category");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data ?? [] });
}

export async function PUT(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = PutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  // Replace all pantry items: delete existing, insert new
  const { error: deleteError } = await supabase
    .from("pantry_items")
    .delete()
    .eq("user_id", user.id);

  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 });

  if (parsed.data.items.length > 0) {
    const rows = parsed.data.items.map((item) => ({
      user_id: user.id,
      name: item.name,
      category: item.category,
    }));

    const { error: insertError } = await supabase
      .from("pantry_items")
      .insert(rows);

    if (insertError) return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
