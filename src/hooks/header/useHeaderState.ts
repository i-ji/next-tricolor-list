import { useColor } from "@/context/ColorContext";
import { Backpack, ListTodo, ShoppingCart } from "lucide-react";

export const useHeaderState = (title: string) => {
  const [, , themeColor] = useColor()!;
  const navLists = [
    {
      name: "買い物リスト",
      icon: ShoppingCart,
      link: "/",
      isSelected: false,
      color: themeColor.shopping,
    },
    {
      name: "TODOリスト",
      icon: ListTodo,
      link: "/todo",
      isSelected: false,
      color: themeColor.todo,
    },
    {
      name: "持ち物リスト",
      icon: Backpack,
      link: "/bring",
      isSelected: false,
      color: themeColor.bring,
    },
  ];

  navLists.forEach((navList) => {
    if (navList.name === title) {
      navList.isSelected = true;
    }
  });

  return navLists;
};
