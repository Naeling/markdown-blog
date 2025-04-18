"use client";

import {
  headingsPlugin,
  listsPlugin,
  MDXEditor,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { useEffect, useState } from "react";

import styles from "./postMarkdownEditor.module.css";

export type PostMarkdownEditorProps = {
  markdown: string;
  onChange: (markdown: string) => void;
};

export function PostMarkdownEditor(props: PostMarkdownEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`${styles["editable-markdown-fixed-height"]} ${styles["mxeditor-container"]}`}
    >
      <MDXEditor
        markdown={props.markdown}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
        onChange={props.onChange}
      />
    </div>
  );
}
