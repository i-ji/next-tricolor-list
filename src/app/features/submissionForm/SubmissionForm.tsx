import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  SubmissionFormCommonType,
  TagButtonCommonType,
} from "@/types/componentType";
import TagButton from "@/app/features/submissionForm/TagButton";

interface SubmissionFormProps<
  K extends string,
  T extends readonly [string, string, string]
> extends SubmissionFormCommonType<T>,
    TagButtonCommonType<K> {
  color: string;
}

const SubmissionForm = <
  K extends string,
  T extends readonly [string, string, string]
>({
  tagNames,
  addNewItem,
  color,
  selectedClassMap,
  unselectedClassMap,
}: SubmissionFormProps<K, T>) => {
  const formSchema = z.object({
    itemname: z.string().min(1, {
      message: "最低1文字は入力してください。",
    }),
    tag: z.enum(tagNames as unknown as [string, string, string]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemname: "",
      tag: tagNames[0],
    },
  });

  const submitHandler = async (formData: FormData) => {
    addNewItem(formData);

    form.setValue("itemname", "");
    form.setValue("tag", tagNames[0]);
  };

  return (
    <div
      className={`fixed bottom-0 w-screen md:w-[768px] px-8 py-6 sm:py-8 border-${color} border-t-1 bg-white`}
    >
      <Form {...form}>
        <form action={submitHandler}>
          <input type="hidden" name="tagName" value={form.watch("tag") ?? ""} />
          <FormField
            control={form.control}
            name="tag"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2 text-xs mb-4">
                    {tagNames.map((tagName, i) => (
                      <TagButton<K>
                        key={i}
                        tagName={tagName}
                        selectedTag={form.watch("tag")}
                        onClick={() =>
                          form.setValue("tag", tagName, {
                            shouldValidate: true,
                          })
                        }
                        selectedClassMap={selectedClassMap}
                        unselectedClassMap={unselectedClassMap}
                      />
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between max-w-full">
            <FormField
              control={form.control}
              name="itemname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="新しいアイテムを追加"
                      {...field}
                      className="w-[calc(100vw-136px)] md:w-[calc(768px-136px)]"
                      name="newItem"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className={`bg-${color} self-start`}>
              <Plus />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SubmissionForm;
