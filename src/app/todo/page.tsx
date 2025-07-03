"use client";

import { TodoTagsType, TodoTagType } from "@/types/types";
import { ListTodo } from "lucide-react";
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
  } = useCommonState<TodoTagsType, TodoTagType>("todo");

  return (
    <div className="max-w-[768px] mx-auto">
      <Display<TodoTagType, TodoTagsType>
        color={color}
        icon={ListTodo}
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
