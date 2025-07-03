import { ListItemsType, ListsType } from "@/types/types";
import { createItemAPI } from "@/utils/supabaseFunctions";
import { useState } from "react";
import { useCommonFunctionsState } from "./useCommonFunctionsState";
import { addShoppingItem, addTodoItem, addBringItem } from "@/utils/actions";
import { PostgrestError } from "@supabase/supabase-js";
import { commonClassMap } from "@/themes/classMap";
import { useColor } from "@/context/ColorContext";

type StateType<U> = Record<ListsType, U>;

export const useCommonState = <
  T extends readonly [string, string, string],
  K extends string
>(
  name: ListsType
) => {
  const [, , themeColor] = useColor()!;

  const colors: StateType<string> = {
    shopping: themeColor.shopping,
    todo: themeColor.todo,
    bring: themeColor.bring,
  };

  const titles: StateType<string> = {
    shopping: "買い物リスト",
    todo: "TODOリスト",
    bring: "持ち物リスト",
  };

  const tagNames: StateType<T> = {
    shopping: ["食品", "日用品", "その他"] as unknown as T,
    todo: ["優先高", "優先中", "優先低"] as unknown as T,
    bring: ["事前", "当朝", "現地"] as unknown as T,
  };

  const selectedClassMap: StateType<Record<K, string>> = {
    shopping: commonClassMap(colors).shoppingClassMap()
      .selectedClassMap as Record<K, string>,
    todo: commonClassMap(colors).todoClassMap().selectedClassMap as Record<
      K,
      string
    >,
    bring: commonClassMap(colors).bringClassMap().selectedClassMap as Record<
      K,
      string
    >,
  };

  const unselectedClassMap: StateType<Record<K, string>> = {
    shopping: commonClassMap(colors).shoppingClassMap()
      .unselectedClassMap as Record<K, string>,
    todo: commonClassMap(colors).todoClassMap().unselectedClassMap as Record<
      K,
      string
    >,
    bring: commonClassMap(colors).bringClassMap().unselectedClassMap as Record<
      K,
      string
    >,
  };

  const states: StateType<
    [ListItemsType[], React.Dispatch<React.SetStateAction<ListItemsType[]>>]
  > = {
    shopping: useState<ListItemsType[]>([]),
    todo: useState<ListItemsType[]>([]),
    bring: useState<ListItemsType[]>([]),
  };

  const ENDPOINTS: StateType<string> = {
    shopping: "/api",
    todo: "/api/todo",
    bring: "/api/bring",
  };

  const { getAPIItems, toggleAPIItem, deleteAPIItem } = createItemAPI(
    ENDPOINTS[name]
  );

  const addAPIItem: StateType<
    <T extends string>(
      newItem: string,
      tag: T
    ) => Promise<PostgrestError | undefined>
  > = {
    shopping: addShoppingItem,
    todo: addTodoItem,
    bring: addBringItem,
  };

  const routes: StateType<string> = {
    shopping: "/",
    todo: "/todo",
    bring: "/bring",
  };

  const { toggleIsDone, deleteListItem, addListItem } = useCommonFunctionsState(
    {
      setCommonItems: states[name][1],
      getAPIItems,
      route: routes[name],
      toggleAPIItem,
      deleteAPIItem,
      addAPIItem: addAPIItem[name],
    }
  );

  return {
    color: colors[name],
    title: titles[name],
    tagNames: tagNames[name],
    selectedClassMap: selectedClassMap[name],
    unselectedClassMap: unselectedClassMap[name],
    items: states[name][0],
    toggleIsDone,
    deleteListItem,
    addListItem,
  };
};
