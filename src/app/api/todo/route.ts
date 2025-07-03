import supabase from "@/utils/supabase";
import { NextRequest } from "next/server";

export async function GET(Request: NextRequest) {
  const params = Request.nextUrl.searchParams;
  const option = params.get("tab");

  let query = supabase
    .from("todos")
    .select("*")
    .order("id", { ascending: false });

  if (option === "未完了") {
    query = query.eq("isDone", false);
  } else if (option === "完了") {
    query = query.eq("isDone", true);
  }

  const { data: todos, error } = await query;

  if (error) Response.json({ error: error.message }, { status: 500 });
  return Response.json(todos);
}
