"use client";

import { useThemeColor } from "@/themes/listThemes";
import { ListsType, ThemeColorType } from "@/types/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  Suspense,
  useContext,
} from "react";

type ColorContextType = [
  ThemeColorType,
  Dispatch<SetStateAction<ThemeColorType>>,
  Record<ListsType, string>
];
const ColorContext = createContext<ColorContextType | null>(null);
const ColorProvider = ({ children }: { children: ReactNode }) => {
  const { colorVariations, setColorVariations, themeColor } = useThemeColor();

  return (
    <Suspense fallback={null}>
      <ColorContext.Provider
        value={[colorVariations, setColorVariations, themeColor]}
      >
        {children}
      </ColorContext.Provider>
    </Suspense>
  );
};

export default ColorProvider;

export const useColor = () => {
  const context = useContext(ColorContext);
  return context;
};
