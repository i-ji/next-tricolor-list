import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: ParamsType) {
  const { id } = await params;
  const { data: todo, error } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id);

  if (error) NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(todo);
}

export async function PATCH(request: NextRequest, { params }: ParamsType) {
  const { id } = await params;
  const { isDone } = await request.json();

  const { data: todo, error } = await supabase
    .from("todos")
    .update({ isDone: isDone })
    .eq("id", id)
    .select();

  if (error) NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(todo);
}

export async function DELETE(request: NextRequest, { params }: ParamsType) {
  const { id } = await params;

  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ status: 200 });
}
