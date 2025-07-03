import Header from "./header/Header";
import SubmissionForm from "./submissionForm/SubmissionForm";
import ListItems from "./ListItems/ListItems";
import { ListItemsType } from "@/types/types";
import {
  HeaderCommonType,
  ListItemCommonType,
  SubmissionFormCommonType,
  TagButtonCommonType,
} from "@/types/componentType";

interface DisplayProps<
  K extends string,
  T extends readonly [string, string, string]
> extends ListItemCommonType<K>,
    HeaderCommonType,
    SubmissionFormCommonType<T>,
    TagButtonCommonType<K> {
  listItems: ListItemsType[];
}

const Display = <
  K extends string,
  T extends readonly [string, string, string]
>({
  icon,
  title,
  listItems,
  toggleIsDone,
  deleteListItem,
  color,
  badgeClassMap,
  tagNames,
  addNewItem,
  selectedClassMap,
  unselectedClassMap,
}: DisplayProps<K, T>) => {
  return (
    <>
      <Header color={color} icon={icon} title={title} />
      <ListItems
        listItems={listItems}
        toggleIsDone={toggleIsDone}
        deleteListItem={deleteListItem}
        color={color}
        badgeClassMap={badgeClassMap}
      />
      <SubmissionForm<K, T>
        tagNames={tagNames}
        addNewItem={addNewItem}
        color={color}
        selectedClassMap={selectedClassMap}
        unselectedClassMap={unselectedClassMap}
      />
    </>
  );
};

export default Display;
