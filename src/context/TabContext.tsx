"use client";

import { useTabState } from "@/hooks/useTabState";
import { TabType } from "@/types/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

type TabContextType = [TabType, Dispatch<SetStateAction<TabType>>];
const TabContext = createContext<TabContextType | null>(null);

const TabProvider = ({ children }: { children: ReactNode }) => {
  const { tab, setTab } = useTabState();

  return (
    <TabContext.Provider value={[tab, setTab]}>{children}</TabContext.Provider>
  );
};

export default TabProvider;

export const useTab = () => {
  const context = useContext(TabContext);
  return context;
};
