import ReactMarkdown from "react-markdown";

export default function MarkdownApp() {
  const markdown = `
# Hello World
This is **React Markdown**

- Easy
- Fast
- Powerful
`;

  return (
    <div className="p-5">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}