import { ListItemsType, TabType } from "@/types/types";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useTab } from "@/context/TabContext";
import { PostgrestError } from "@supabase/supabase-js";
import { useColor } from "@/context/ColorContext";

interface UseCommonFunctionsStateProps<T extends string> {
  setCommonItems: Dispatch<SetStateAction<ListItemsType[]>>;
  getAPIItems: (tab: TabType) => Promise<ListItemsType[]>;
  route: string;
  toggleAPIItem: (id: string, bool: boolean) => Promise<void>;
  deleteAPIItem: (id: string) => Promise<void>;
  addAPIItem: (newItem: string, tag: T) => Promise<PostgrestError | undefined>;
}

export const useCommonFunctionsState = <T extends string>({
  setCommonItems,
  getAPIItems,
  route,
  toggleAPIItem,
  deleteAPIItem,
  addAPIItem,
}: UseCommonFunctionsStateProps<T>) => {
  const [tab] = useTab()!;
  const router = useRouter();
  const [colorVariations] = useColor()!;

  useEffect(() => {
    const getData = async () => {
      const items = await getAPIItems(tab);
      setCommonItems(items);
    };
    getData();

    router.push(`${route}?tab=${tab}&color=${colorVariations}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, router, setCommonItems, route, colorVariations]);

  const toggleIsDone = async (id: string, bool: boolean) => {
    await toggleAPIItem(id, !bool);
    const items = await getAPIItems(tab);
    setCommonItems(items);
  };

  const deleteListItem = async (id: string) => {
    await deleteAPIItem(id);
    const items = await getAPIItems(tab);
    setCommonItems(items);
  };

  const addListItem = async (formData: FormData) => {
    const item = formData.get("newItem") as string;
    const tagBtn = formData.get("tagName") as T;

    if (item === "") return;

    await addAPIItem(item, tagBtn);

    const items = await getAPIItems(tab);
    setCommonItems(items);
  };

  return {
    toggleIsDone,
    deleteListItem,
    addListItem,
  };
};
