"use client";

import { BringTagsType, BringTagType } from "@/types/types";
import { Backpack } from "lucide-react";
import Display from "../features/Display";
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
  } = useCommonState<BringTagsType, BringTagType>("bring");

  return (
    <div className="max-w-[768px] mx-auto">
      <Display<BringTagType, BringTagsType>
        color={color}
        icon={Backpack}
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
