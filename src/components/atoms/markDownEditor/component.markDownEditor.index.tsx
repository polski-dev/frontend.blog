import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Bolt from "assets/icon/bolt.svg";
import Italic from "assets/icon/italic.svg";
import Underline from "assets/icon/underline.svg";
import Strikethrough from "assets/icon/strikethrough.svg";
import Quote from "assets/icon/quote.svg";
import List from "assets/icon/list.svg";
import ListNumber from "assets/icon/listNumber.svg";

import Link from "assets/icon/link.svg";
import Code from "assets/icon/code.svg";
import ImageUpload from "assets/icon/image.svg";

import Trash from "assets/icon/trash.svg";

import Eye from "assets/icon/eye.svg";

import { MarkDownEditorTypes } from "./component.markDownEditor.type";
import { Editor, ToolsList, Tool, BreakLine, TextArea, Preview } from "./component.markDownEditor.styled";

const iconSelect = (name?: string) => {
  switch (name) {
    case "bold":
      return <Bolt />;
    case "italic":
      return <Italic />;
    case "underline":
      return <Underline />;
    case "strikethrough":
      return <Strikethrough />;
    case "quote":
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

const toolSelect = ({ type, name }: { type: string; name?: string }): JSX.Element | undefined => {
  switch (type) {
    case "button":
      return (
        <Tool
          title={name || "brak"}
          onClick={(): void => {
            console.log("MarkDownEditor" + name);
          }}
        >
          {iconSelect(name)}
        </Tool>
      );
    case "break":
      return <BreakLine />;
  }
};

const toolsSelect = (list: string[] | string[][]): any => {
  let arr: { type: string; name?: string }[] = [];

  list.forEach((item: string | string[], index: number) => {
    if (Array.isArray(item)) toolsSelect(item).map((child: { type: string; name?: string }): number => arr.push(child));
    else if (typeof item === "string") {
      arr.push({ type: "button", name: item });
      if (list.length - 1 === index) arr.push({ type: "break" });
    }
  });

  return arr;
};

const toolDisplay = (list: string[] | string[][]) => toolsSelect(list).map((item: { type: string; name?: string }): JSX.Element | undefined => toolSelect(item));

export default function MarkDownEditorComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: MarkDownEditorTypes): JSX.Element {
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);

  useEffect((): void => {
    const area: HTMLTextAreaElement | null = areaContent.current;
    if (!!area) {
      area.addEventListener("select", (e: any) => console.log(e?.target?.value?.substring(e?.target?.selectionStart, e?.target?.selectionEnd)));
    }
  }, [areaContent]);

  return (
    <>
      <Editor htmlFor={id}>
        <ToolsList>
          {toolDisplay([
            ["bold", "italic", "underline", "strikethrough"],
            ["quote", "list", "listNumber"],
            ["code", "imageUpload"],
          ])}
          <Tool title="Trash">
            <Trash />
          </Tool>

          <Tool title="preview" style={{ marginLeft: "auto" }}>
            <Eye />
          </Tool>
        </ToolsList>
        <TextArea id={id} ref={areaContent}></TextArea>
        <Preview>oko</Preview>
      </Editor>
      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...register(id, { pattern, required })} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
