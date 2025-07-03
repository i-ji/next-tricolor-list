"use client";

import { TabType } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useTabState = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("tab") as TabType;
  const [tab, setTab] = useState<TabType>(search ?? "すべて");

  return {
    tab,
    setTab,
  };
};
