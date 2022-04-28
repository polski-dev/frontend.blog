import ReactMarkdown from "react-markdown";
import React, { useState, useRef, useEffect } from "react";
import Tools from "./tools/component.markDownEditor.tools.index";
import { MarkDownEditorTypes } from "./component.markDownEditor.type";
import { Editor, ContentArea, TextArea, Preview } from "./component.markDownEditor.styled";

// MODEL
// root: {
//   p: {
//     text: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
//   link: {
//     text: 'string',
//     href: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
//   header: {
//     text: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
//   quote: {
//     text: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
//   code: {
//     text: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
//   image: {
//     src: 'string',
//     alt: 'string',
//     title: 'string',
//     range: { start: 0, stop: 0 },
//     format: ['bold', 'italic', 'underline' ]
//   }
// }

export default function MarkDownEditorComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: MarkDownEditorTypes): JSX.Element {
  const [txt, setTxt] = useState(`##D\n\nPaweł \n spoko`);
  const activeToolsInitState: string[] = [];
  const [activeTools, setActiveTools] = useState(activeToolsInitState);
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const [selectValue, setSelectValue] = useState({ selectionStart: 0, selectionEnd: 0 });

  useEffect(() => setValue(txt), [txt, setValue]);
  console.log(activeTools);
  useEffect(() => {
    // if (selectValue.selectionStart != selectValue.selectionEnd) {
    //   const arr = txt.split("\n\n");
    //   // console.log(arr);
    //   // arr.splice(selectValue.selectionStart, 0, "###");
    //   // console.log(arr, "arr");
    //   // console.log(arr.join(""));
    //   setTxt(arr.join(""));
    // }

    let arr: { text: string; selectionStart: number; selectionEnd: number }[] = [];
    txt.split("\n\n").forEach((item: string, i) => arr.push({ text: item, selectionStart: arr[i - 1]?.selectionEnd + 2 || 0, selectionEnd: item.length + (arr[i - 1]?.selectionEnd + 2 || 0) }));

    let activeToolsLive: string[] = [];

    const active =
      arr[
        arr.findIndex((object) => {
          return object.selectionEnd >= selectValue.selectionEnd;
        })
      ];

    console.log(active);
    console.log(/#{1,6}/gm.test(active.text));

    switch (true) {
      case /#{1,6}/g.test(active.text):
        activeToolsLive.push("header");
      case /(?:\*)([^*<\n]+)(?:\*)/g.test(active.text):
        activeToolsLive.push("bold");
    }

    console.log(activeToolsLive);

    setActiveTools(activeToolsLive);
  }, [txt, selectValue]);

  return (
    <>
      <Editor htmlFor={id}>
        <Tools
          activeTools={activeTools}
          listTools={[
            ["header", "bold", "italic", "underline", "strikethrough"],
            ["quote", "list", "listNumber"],
            ["code", "imageUpload"],
          ]}
        />
        <ContentArea id={id} ref={areaContent} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTxt(e.target.value)} onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSelectValue({ selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd })}>
          {txt}
        </ContentArea>

        <Preview>oko</Preview>
      </Editor>
      <Preview>
        <ReactMarkdown>{txt}</ReactMarkdown>
      </Preview>

      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
