import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const option = params.get("tab");

  let query = supabase
    .from("shopping")
    .select("*")
    .order("id", { ascending: false });

  if (option === "未完了") {
    query = query.eq("isDone", false);
  } else if (option === "完了") {
    query = query.eq("isDone", true);
  }

  const { data: shopping, error } = await query;

  if (error) NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(shopping);
}
