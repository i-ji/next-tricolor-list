"use client";

import Display from "./features/Display";
import { ShoppingTagsType, ShoppingTagType } from "@/types/types";
import { ShoppingCart } from "lucide-react";
import { useCommonState } from "@/hooks/common/useCommonState";

export default function Home() {
  const {
    color,
    title,
    tagNames,
    selectedClassMap,
    unselectedClassMap,
    items,
    toggleIsDone,
    deleteListItem,
    addListItem,
  } = useCommonState<ShoppingTagsType, ShoppingTagType>("shopping");

  return (
    <div className="max-w-[768px] mx-auto">
      <Display<ShoppingTagType, ShoppingTagsType>
        color={color}
        icon={ShoppingCart}
        title={title}
        listItems={items}
        badgeClassMap={selectedClassMap}
        toggleIsDone={toggleIsDone}
        deleteListItem={deleteListItem}
        tagNames={tagNames}
        addNewItem={addListItem}
        selectedClassMap={selectedClassMap}
        unselectedClassMap={unselectedClassMap}
      />
    </div>
  );
}
