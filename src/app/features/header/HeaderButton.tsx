import React from "react";
import { TabType } from "@/types/types";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

interface HeaderButtonProps {
  tab: TabType;
  btnName: TabType;
  onClick: () => void;
  color: string;
}

const HeaderButton = ({ tab, btnName, onClick, color }: HeaderButtonProps) => {
  const selectedClassMap: string = `bg-${color} text-white`;
  const unselectedClassMap: string = `text-${color} border-${color}`;

  const isSelected = btnName === tab;
  return (
    <Button
      variant="outline"
      className={clsx(
        "rounded-full w-[70px] sm:w-[76px] h-8 sm:h-9 text-xs sm:text-sm",
        isSelected ? selectedClassMap : unselectedClassMap
      )}
      onClick={onClick}
    >
      {btnName}
    </Button>
  );
};

export default HeaderButton;
