import Bolt from "assets/icon/bolt.svg";
import List from "assets/icon/list.svg";
import Link from "assets/icon/link.svg";
import Code from "assets/icon/code.svg";
import Quote from "assets/icon/quote.svg";
import Italic from "assets/icon/italic.svg";
import Header from "assets/icon/header.svg";
import ImageUpload from "assets/icon/image.svg";
import Underline from "assets/icon/underline.svg";
import ListNumber from "assets/icon/listNumber.svg";
import Strikethrough from "assets/icon/strikethrough.svg";
import { Tool, ToolOptions, Options } from "../component.markDownEditor.styled";
import { toolTypes } from "../types/component.markDownEditor.type";

export const iconSelect = (name?: string) => {
  switch (name) {
    case "heading":
      return <Header />;
    case "strong":
      return <Bolt />;
    case "emphasis":
      return <Italic />;
    case "underline":
      return <Underline />;
    case "delete":
      return <Strikethrough />;
    case "blockquote":
      return <Quote />;
    case "list":
      return <List />;
    case "listNumber":
      return <ListNumber />;
    case "link":
      return <Link />;
    case "code":
      return <Code />;
    case "imageUpload":
      return <ImageUpload />;

    default:
      return <>Error</>;
  }
};

const toolSelect = ({ type, name, id, active, depth, editor }: { type: string; name?: string; id: string; active: boolean; depth?: number | null; editor: EditorWizard }): JSX.Element | undefined => {
  switch (type) {
    case "button":
      return (
        <Tool
          key={id}
          active={active}
          title={name || "brak"}
          onClick={(): void => {
            console.log(name);
            editor.switchTool({ type: name || "", power: active, position: { start: { offset: 1 }, end: { offset: 0 } } });
            console.log(editor.readTree);
          }}
        >
          {iconSelect(name)}
          {name === "heading" && (
            <ToolOptions>
              <Options type={"h1"} active={depth === 1 && true}>
                H1
              </Options>
              <Options type={"h2"} active={depth === 2 && true}>
                H2
              </Options>
              <Options type={"h3"} active={depth === 3 && true}>
                H3
              </Options>
              <Options type={"h4"} active={depth === 4 && true}>
                H4
              </Options>
              <Options type={"h5"} active={depth === 5 && true}>
                H5
              </Options>
              <Options type={"h6"} active={depth === 6 && true}>
                H6
              </Options>
            </ToolOptions>
          )}
        </Tool>
      );
  }
};

const toolsSelect = ({ listTools, activeTools, editor }: toolsDisplayTypes): any => {
  let arr: toolTypes[] = [];

  listTools.forEach((tools: string | string[], index: number) => {
    if (Array.isArray(tools)) toolsSelect({ listTools: tools, activeTools, editor }).map((child: toolTypes): number => arr.push(child));
    else if (typeof tools === "string") {
      let active: boolean = false;
      let depth: null | number = null;

      activeTools.forEach((a: { type: string; depth?: number | null }): void => {
        a.type === item && (active = true);
        typeof a?.depth === "number" && (depth = a.depth);
      });

      arr.push({ type: "button", name: item, id: `${index}${item}Button`, active, depth, editor });
    }
  });

  return arr;
};

export const toolsDisplay = ({ listTools, activeTools, editor }: toolsDisplayTypes) => toolsSelect({ listTools, activeTools, editor }).map((item: toolsDisplayTypes): JSX.Element | undefined => toolSelect(item));
