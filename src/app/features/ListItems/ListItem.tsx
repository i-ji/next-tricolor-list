import React from "react";
import { ListItemsType } from "@/types/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Circle, CircleCheck, Trash2 } from "lucide-react";
import clsx from "clsx";
import { ListItemCommonType } from "@/types/componentType";

interface ListItemProps<K extends string> extends ListItemCommonType<K> {
  listItem: ListItemsType;
}

const ListItem = <K extends string>({
  listItem,
  color,
  badgeClassMap,
  toggleIsDone,
  deleteListItem,
}: ListItemProps<K>) => {
  return (
    <Card
      className={`mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 cursor-pointer hover:bg-gray-50 ${
        listItem.isDone ? "bg-gray-50" : ""
      }  border-${color}`}
      onClick={() => toggleIsDone(listItem.id, listItem.isDone)}
    >
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2 font-light">
          {listItem.isDone ? (
            <CircleCheck className={`text-${color}`} />
          ) : (
            <Circle className="text-gray-400" />
          )}

          <div>
            <h1 className={` ${listItem.isDone ? " line-through" : ""}`}>
              {listItem.item}
            </h1>
            <Badge
              className={clsx(
                "rounded-full mt-1",
                badgeClassMap[listItem.tag as K]
              )}
            >
              {listItem.tag}
            </Badge>
          </div>

          <Trash2
            className="ml-auto"
            onClick={() => deleteListItem(listItem.id)}
          />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ListItem;
