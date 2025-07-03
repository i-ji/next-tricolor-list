import { LucideIcon } from "lucide-react";

export interface HeaderCommonType {
  color: string;
  icon: LucideIcon;
  title: string;
}

export type ClassMap<K extends string> = Record<K, string>;
export interface ListItemCommonType<K extends string> {
  color: string;
  badgeClassMap: ClassMap<K>;
  toggleIsDone: (id: string, bool: boolean) => Promise<void>;
  deleteListItem: (id: string) => Promise<void>;
}
export interface TagButtonCommonType<K extends string> {
  selectedClassMap: ClassMap<K>;
  unselectedClassMap: ClassMap<K>;
}

type TagNames<T extends readonly [string, string, string]> = T;
export interface SubmissionFormCommonType<
  T extends readonly [string, string, string]
> {
  tagNames: TagNames<T>;
  addNewItem: (form: FormData) => void;
}
