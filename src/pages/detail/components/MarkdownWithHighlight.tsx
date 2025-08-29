import { HTMLAttributes, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps extends HTMLAttributes<HTMLElement> {
  inline?: boolean;
  node?: unknown; // 필요시 구체화 가능
  className?: string;
  children?: ReactNode; // react-markdown은 배열도 올 수 있어요
}

export const MarkdownWithHighlight = ({ content }: { content: string }) => {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm,remarkBreaks]}
        components={{
          code({ inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            // 1) 인라인 코드면 <code>로만 렌더(하이라이트 X)
            if (inline || !match) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            // 2) 블록 코드면 SyntaxHighlighter 사용
            return (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={oneDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },
          a({ href, children, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                {...props}
              >
                {children}
              </a>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

//const components = {
//   code({ inline, className, children, ...props }: CodeProps) {
//     const match = /language-(\w+)/.exec(className || "");
//     // 1) 인라인 코드면 <code>로만 렌더(하이라이트 X)
//     if (inline || !match) {
//       return (
//         <code className={className} {...props}>
//           {children}
//         </code>
//       );
//     }
//     // 2) 블록 코드면 SyntaxHighlighter 사용
//     return (
//       <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
//         {String(children).replace(/\n$/, "")}
//       </SyntaxHighlighter>
//     );
//   },
//   a({ href, children, ...props }) {
//     return (
//       <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
//         {children}
//       </a>
//     );
//   }
// };

// export const MarkdownWithHighlight = ({ content }: { content: string }) => {
//   return (
//     <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
//       {content}
//     </ReactMarkdown>
//   );
// };
