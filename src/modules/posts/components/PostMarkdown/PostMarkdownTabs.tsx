import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PostMarkdownEditor } from "./PostMarkdownEditor";
import { PostMarkdownPreview } from "./PostMarkdownPreview";

export type PostMarkdownTabsProps = {
  markdown: string;
  formFieldName: string;
  onChange: (markdown: string) => void;
};

export function PostMarkdownTabs(props: PostMarkdownTabsProps) {
  return (
    <Tabs defaultValue="edit" className="p-2 border-2 rounded-lg">
      <TabsList>
        <TabsTrigger value="edit">Edit</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="edit">
        <PostMarkdownEditor
          markdown={props.markdown}
          formFieldName={props.formFieldName}
          onChange={props.onChange}
        />
      </TabsContent>
      <TabsContent value="preview">
        <PostMarkdownPreview markdown={props.markdown} />
      </TabsContent>
    </Tabs>
  );
}
