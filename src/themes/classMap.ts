import { BringTagType, ShoppingTagType, TodoTagType } from "@/types/types";
import clsx from "clsx";

type ClassMapType<T extends ShoppingTagType | TodoTagType | BringTagType> =
  Record<"selectedClassMap" | "unselectedClassMap", Record<T, string>>;

export const commonClassMap = ({
  shopping,
  todo,
  bring,
}: Record<string, string>) => {
  const shoppingClassMap = (): ClassMapType<ShoppingTagType> => {
    return {
      selectedClassMap: {
        食品: `bg-${shopping} text-white border-${shopping}`,
        日用品: `bg-${bring} text-white border-${bring}`,
        その他: `bg-${todo} text-white border-${todo}`,
      },
      unselectedClassMap: {
        食品: `text-${shopping} border-${shopping}`,
        日用品: `text-${bring} border-${bring}`,
        その他: `text-${todo} border-${todo}`,
      },
    };
  };

  const todoClassMap = (): ClassMapType<TodoTagType> => {
    return {
      selectedClassMap: {
        優先高: `bg-${todo} text-white border-${todo}`,
        優先中: `bg-${shopping} text-white border-${shopping}`,
        優先低: `bg-${bring} text-white border-${bring}`,
      },
      unselectedClassMap: {
        優先高: `text-${todo} border-${todo}`,
        優先中: `text-${shopping} border-${shopping}`,
        優先低: `text-${bring} border-${bring}`,
      },
    };
  };

  const bringClassMap = (): ClassMapType<BringTagType> => {
    return {
      selectedClassMap: {
        事前: `bg-${bring} text-white border-${bring}`,
        当朝: `bg-${todo} text-white border-${todo}`,
        現地: `bg-${shopping} text-white border-${shopping}`,
      },
      unselectedClassMap: {
        事前: `text-${bring} border-${bring}`,
        当朝: `text-${todo}  border-${todo}`,
        現地: `text-${shopping} border-${shopping}`,
      },
    };
  };

  return {
    shoppingClassMap,
    todoClassMap,
    bringClassMap,
  };
};

export const listClassMap = (
  name: string,
  isSelected: boolean,
  color: string
) =>
  clsx(
    name === "買い物リスト" && `text-${color}`,
    name === "TODOリスト" && `text-${color}`,
    name === "持ち物リスト" && `text-${color}`,
    isSelected ? "ml-0" : "ml-3"
  );
