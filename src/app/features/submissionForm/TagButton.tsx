import React from "react";
import { Button } from "../../../components/ui/button";
import clsx from "clsx";
import {} from "@/types/types";
import { TagButtonCommonType } from "@/types/componentType";

interface TagButtonProps<K extends string> extends TagButtonCommonType<K> {
  tagName: string;
  selectedTag: string;
  onClick: () => void;
}

const TagButton = <K extends string>({
  tagName,
  selectedTag,
  onClick,
  selectedClassMap,
  unselectedClassMap,
}: TagButtonProps<K>) => {
  const isSelected = tagName === selectedTag;

  return (
    <Button
      type="button"
      variant="outline"
      className={clsx(
        "rounded-full w-[70px] sm:w-[76px] h-8 sm:h-9 text-xs sm:text-sm cursor-pointer",
        isSelected
          ? selectedClassMap[tagName as K]
          : unselectedClassMap[tagName as K]
      )}
      onClick={onClick}
      name="tagName"
      value={tagName}
    >
      {tagName}
    </Button>
  );
};

export default TagButton;
