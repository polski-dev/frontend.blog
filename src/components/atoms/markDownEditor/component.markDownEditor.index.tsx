import React, { useState, useRef, useEffect, TextareaHTMLAttributes } from "react";
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
  const [textAreaValue, setTextAreaValue] = useState("kupa");
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const selectTxt = (e: React.ChangeEvent<any>): void => {
    console.log(e?.target?.selectionStart);
    console.log(e?.target?.selectionEnd);
    console.log(e?.target?.value?.substring(e?.target?.selectionStart, e?.target?.selectionEnd));
  };

  useEffect(() => setValue(textAreaValue), [textAreaValue, setValue]);
  console.log(textAreaValue);
  return (
    <>
      <Editor htmlFor={id}>
        <ToolsList>
          {toolDisplay([
            ["bold", "italic", "underline", "strikethrough"],
            ["quote", "list", "listNumber"],
            ["code", "imageUpload"],
          ])}
          <Tool
            title="Trash"
            onClick={(): void => {
              !!textAreaValue.length && setTextAreaValue("");
            }}
          >
            <Trash />
          </Tool>

          <Tool title="preview" style={{ marginLeft: "auto" }}>
            <Eye />
          </Tool>
        </ToolsList>
        <TextArea id={id} ref={areaContent} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTextAreaValue(e.target.value)} onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>) => selectTxt(e)} value={textAreaValue} />

        <Preview>oko</Preview>
      </Editor>
      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
