"use client";

import { useTabState } from "@/hooks/useTabState";
import { TabType } from "@/types/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  Suspense,
  useContext,
} from "react";

type TabContextType = [TabType, Dispatch<SetStateAction<TabType>>];
const TabContext = createContext<TabContextType | null>(null);

const TabProvider = ({ children }: { children: ReactNode }) => {
  const { tab, setTab } = useTabState();

  return (
    <Suspense fallback={null}>
      <TabContext.Provider value={[tab, setTab]}>
        {children}
      </TabContext.Provider>
    </Suspense>
  );
};

export default TabProvider;

export const useTab = () => {
  const context = useContext(TabContext);
  return context;
};
