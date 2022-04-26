import ReactMarkdown from "react-markdown";

import React, { useState, useRef, useEffect } from "react";
import Tools from "./tools/component.markDownEditor.tools.index";
import { MarkDownEditorTypes } from "./component.markDownEditor.type";
import { Editor, ContentArea, TextArea, Preview } from "./component.markDownEditor.styled";

export default function MarkDownEditorComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: MarkDownEditorTypes): JSX.Element {
  const [txt, setTxt] = useState("## Dodaj opis...");
  const [nextLine, setNextLine] = useState({ selectionStart: 0, next: false });
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const [selectValue, setSelectValue] = useState({ selectionStart: 0, selectionEnd: 0 });

  const contentEditable = React.useRef(null);

  useEffect(() => setValue(txt), [txt, setValue]);

  const changeTxt = (e: React.ChangeEvent<any>): void => setSelectValue({ selectionStart: e?.target?.selectionStart || 0, selectionEnd: e?.target?.selectionEnd || 0 });

  useEffect(() => {
    const area: HTMLTextAreaElement | null = areaContent?.current;
    area && area.addEventListener("keydown", (e: any): void | false => e?.keyCode === 13 && setNextLine({ selectionStart: e?.target?.selectionStart, next: true }));

    return (): void => {
      area && area.removeEventListener("keydown", (e: any): void | false => e?.keyCode === 13 && setNextLine({ selectionStart: e?.target?.selectionStart, next: true }));
    };
  }, []);

  useEffect(() => {
    if (nextLine.next) {
      const arr = txt.split("");
      console.log(arr, "arr");
      arr.splice(nextLine.selectionStart, 0, `\n`);
      console.log(arr, "splice");
      console.log(arr.join(""), "toString");
      setTxt(arr.join(""));
      console.log(arr.join(""));
      setNextLine({ selectionStart: 0, next: false });
    }
  }, [txt, nextLine]);
  console.log(txt);

  console.log("pawel".slice(0, 2));
  return (
    <>
      <Editor htmlFor={id}>
        <Tools
          listTools={[
            ["header", "bold", "italic", "underline", "strikethrough"],
            ["quote", "list", "listNumber"],
            ["code", "imageUpload"],
          ]}
        />
        <ContentArea contentEditable={true} id={id} ref={areaContent} onInput={(e: any): void => setTxt(e.currentTarget.textContent)} onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeTxt(e)} suppressContentEditableWarning={true}>
          <>{txt}</>
        </ContentArea>

        <Preview>oko</Preview>
      </Editor>
      <ReactMarkdown>{txt}</ReactMarkdown>
      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
