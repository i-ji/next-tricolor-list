"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ListsType, ThemeColorType } from "@/types/types";

export const useThemeColor = () => {
  const searchParams = useSearchParams();
  const colorParams = searchParams.get("color") as ThemeColorType;
  const [colorVariations, setColorVariations] = useState<ThemeColorType>(
    colorParams ?? "default"
  );

  const themeColor = baseColors[colorVariations];

  return { colorVariations, setColorVariations, themeColor };
};

export const baseColors: Record<ThemeColorType, Record<ListsType, string>> = {
  default: {
    shopping: "green-400",
    bring: "blue-400",
    todo: "violet-400",
  },
  worm: {
    shopping: "red-400",
    bring: "orange-400",
    todo: "yellow-400",
  },
  pastel: {
    shopping: "pink-300",
    bring: "purple-300",
    todo: "sky-300",
  },
  sunset: {
    shopping: "fuchsia-500",
    bring: "rose-400",
    todo: "indigo-500",
  },
  natural: {
    shopping: "lime-500",
    bring: "neutral-400",
    todo: "teal-600",
  },
};
