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
import { Tool, ToolOptions, Options, BreakLine } from "../component.markDownEditor.styled";

const iconSelect = (name?: string) => {
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

const toolSelect = ({ type, name, id, active }: { type: string; name?: string; id: string; active: boolean }): JSX.Element | undefined => {
  switch (type) {
    case "button":
      return (
        <Tool
          key={id}
          active={active}
          title={name || "brak"}
          onClick={(): void => {
            console.log("MarkDownEditor" + name);
          }}
        >
          {iconSelect(name)}
          {name === "header" && (
            <ToolOptions>
              <Options type={"h1"}>H1</Options>
              <Options type={"h2"}>H2</Options>
              <Options type={"h3"}>H3</Options>
              <Options type={"h4"}>H4</Options>
              <Options type={"h5"}>H5</Options>
              <Options type={"h6"}>H6</Options>
            </ToolOptions>
          )}
        </Tool>
      );
    case "break":
      return <BreakLine key={id} />;
  }
};

const toolsSelect = (list: string[] | string[][], active: string[]): any => {
  let arr: { type: string; name?: string; id: string; active: boolean | { h1: boolean; h2: boolean; h3: boolean; h4: boolean; h5: boolean } }[] = [];

  list.forEach((item: string | string[], index: number) => {
    if (Array.isArray(item)) toolsSelect(item, active).map((child: { type: string; name?: string; id: string; active: boolean }): number => arr.push(child));
    else if (typeof item === "string") {
      arr.push({ type: "button", name: item, id: `${index}${item}Button`, active: active.includes(item as any) });
    }
  });

  return arr;
};

export const toolDisplay = (list: string[] | string[][], active: string[]) => toolsSelect(list, active).map((item: { type: string; name?: string; id: string; active: boolean }): JSX.Element | undefined => toolSelect(item));
