"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PostMarkdownEditor } from "./PostMarkdownEditor";
import { PostMarkdownPreview } from "./PostMarkdownPreview";

export function PostMarkdownTabs() {
  const [markdown, setMarkdown] = useState("# Hi, *Pluto*!");

  return (
    <Tabs defaultValue="edit" className="p-4 border-2 rounded-lg">
      <TabsList>
        <TabsTrigger value="edit">Edit</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="edit">
        <PostMarkdownEditor markdown={markdown} onChange={setMarkdown} />
      </TabsContent>
      <TabsContent value="preview">
        <PostMarkdownPreview markdown={markdown} />
      </TabsContent>
    </Tabs>
  );
}
