import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeColorType } from "@/types/types";
import { useColor } from "@/context/ColorContext";
import ColorBall from "@/components/colorBall";
import { baseColors } from "@/themes/listThemes";

const ChangingColor = () => {
  const [, setColorVariations, themeColor] = useColor()!;
  const [open, setOpen] = useState(false);
  const changeThemeColor = (themeColor: ThemeColorType) => {
    setColorVariations(themeColor);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="mt-6 ml-auto">
        <ColorBall
          shoppingColor={themeColor.shopping}
          bringColor={themeColor.bring}
          todoColor={themeColor.todo}
        />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="flex items-center justify-between">
          {Object.entries(baseColors).map(([colorName, colorLists]) => {
            return (
              <li
                key={colorName}
                onClick={() => changeThemeColor(colorName as ThemeColorType)}
              >
                <ColorBall
                  shoppingColor={colorLists.shopping}
                  bringColor={colorLists.bring}
                  todoColor={colorLists.todo}
                />
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ChangingColor;
