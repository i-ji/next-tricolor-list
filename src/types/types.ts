export type ListsType = "shopping" | "todo" | "bring";
export type TabType = "すべて" | "未完了" | "完了";
export const tabList = ["すべて", "未完了", "完了"] as TabType[];

export type ShoppingTagType = "食品" | "日用品" | "その他";
export type TodoTagType = "優先高" | "優先中" | "優先低";
export type BringTagType = "事前" | "当朝" | "現地";

export type ShoppingTagsType = readonly ["食品", "日用品", "その他"];
export type TodoTagsType = readonly ["優先高", "優先中", "優先低"];
export type BringTagsType = readonly ["事前", "当朝", "現地"];

export interface ListItemsType {
  id: string;
  item: string;
  tag: ShoppingTagType | TodoTagType | BringTagType;
  isDone: boolean;
}

export type ThemeColorType =
  | "default"
  | "worm"
  | "pastel"
  | "sunset"
  | "natural";
