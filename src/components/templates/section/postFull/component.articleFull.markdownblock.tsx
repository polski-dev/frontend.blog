import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BoxCodeTitle } from "./component.postFull.style";
import { isblEditorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const MarkdownComponents: object = {
  code: (code: any) => {
    const language = code.className.split("language-")[1];

    return (
      <>
        <BoxCodeTitle>KOD:</BoxCodeTitle>
        <SyntaxHighlighter language={!!language ? language : "javascript"} style={isblEditorDark}>
          {code.children[0]}
        </SyntaxHighlighter>
      </>
    );
  },
  p: (paragraph: any) => {
    const { node } = paragraph;

    node.children.map((item: any) => {
      if (item.tagName === "img") {
        const image = node.children[0];
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "");
        return <Image src={image.properties.src} placeholder="blur" blurDataURL="/img/blur.png" width={600} alt={alt} />;
      }
    });

    return <p>{paragraph.children}</p>;
  },
};
