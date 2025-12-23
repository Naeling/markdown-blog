"use client";

import { useEffect, useState } from "react";

import { Textarea } from "@/components";

import styles from "./postMarkdownEditor.module.css";

export type PostMarkdownEditorProps = {
  markdown: string;
  formFieldName: string;
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
      <Textarea
        placeholder="Type your message here."
        value={props.markdown}
        name={props.formFieldName}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
