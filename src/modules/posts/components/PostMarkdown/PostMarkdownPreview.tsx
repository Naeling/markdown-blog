import Markdown from "react-markdown";

export type PostMarkdownPreviewProps = {
  markdown: string;
};

export function PostMarkdownPreview({ markdown }: PostMarkdownPreviewProps) {
  return (
    <div className="h-[100px]">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
