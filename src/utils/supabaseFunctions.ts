import { ListItemsType, TabType } from "@/types/types";

export const createItemAPI = <T extends ListItemsType>(endpoint: string) => {
  return {
    async getAPIItems(tab: TabType): Promise<T[]> {
      const res = await fetch(`${endpoint}?tab=${tab}`);
      return res.json();
    },
    async toggleAPIItem(id: string, bool: boolean): Promise<void> {
      await fetch(`${endpoint}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isDone: bool }),
      });
    },
    async deleteAPIItem(id: string): Promise<void> {
      await fetch(`${endpoint}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    },
  };
};
