"use client";

import {
  headingsPlugin,
  listsPlugin,
  MDXEditor,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { useEffect, useState } from "react";

import styles from "./postContentField.module.css";

export function PostContentField() {
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
        markdown="Hello World"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
        ]}
        onChange={(markdown) => console.log(markdown)}
      />
    </div>
  );
}
