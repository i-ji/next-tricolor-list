import { ListItemCommonType } from "@/types/componentType";
import ListItem from "./ListItem";
import { ListItemsType } from "@/types/types";

interface ListItemsProps<K extends string> extends ListItemCommonType<K> {
  listItems: ListItemsType[];
}

const ListItems = <K extends string>({
  listItems,
  color,
  badgeClassMap,
  toggleIsDone,
  deleteListItem,
}: ListItemsProps<K>) => {
  return (
    <ul className="pt-[142px] sm:pt-[165px] px-2 sm:px-8 md:px-0 pb-[133px] sm:pb-[153px]">
      {listItems.map((listItem) => {
        return (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            color={color}
            badgeClassMap={badgeClassMap}
            toggleIsDone={toggleIsDone}
            deleteListItem={deleteListItem}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
