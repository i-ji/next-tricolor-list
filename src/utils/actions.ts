"use server";

import { PostgrestError } from "@supabase/supabase-js";
import supabase from "./supabase";

export const addShoppingItem = async <T extends string>(
  newItem: string,
  tag: T
): Promise<PostgrestError | undefined> => {
  const { error } = await supabase
    .from("shopping")
    .insert([{ item: newItem, tag }])
    .select();

  if (error) return error;
};

export const addTodoItem = async <T extends string>(
  newItem: string,
  tag: T
): Promise<PostgrestError | undefined> => {
  const { error } = await supabase
    .from("todos")
    .insert([{ item: newItem, tag: tag }])
    .select();

  if (error) return error;
};

export const addBringItem = async <T extends string>(
  newItem: string,
  tag: T
): Promise<PostgrestError | undefined> => {
  const { error } = await supabase
    .from("bring")
    .insert([{ item: newItem, tag: tag }])
    .select();

  if (error) return error;
};
