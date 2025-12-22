import Markdown from "react-markdown";

export type PostMarkdownPreviewProps = {
  markdown: string;
};

export function PostMarkdownPreview({ markdown }: PostMarkdownPreviewProps) {
  const DEFAULT_TEXT = "Nothing to preview";

  return (
    <div className="h-[100px] p-[10px]">
      <Markdown>{markdown || DEFAULT_TEXT}</Markdown>
    </div>
  );
}
