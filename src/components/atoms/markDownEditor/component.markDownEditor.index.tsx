import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import React, { useMemo, useState, useRef, useEffect } from "react";
import Tools from "./tools/component.markDownEditor.tools.index";
import { MarkDownEditorTypes } from "./component.markDownEditor.type";
import EditorWizard from "./editor/component.markDownEditor.editor";
import { EditorBox, ContentArea, TextArea, Preview } from "./component.markDownEditor.styled";

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
  const stateTxt = `## Ddwwad \n\n Paweł jest soko mi**st *rz * em** jsa `;
  const stateSelectValue: any = { selectionStart: 0, selectionEnd: 0 };
  const [txt, setTxt] = useState(stateTxt);
  const activeToolsInitState: string[] = [];
  const [activeTools, setActiveTools] = useState(activeToolsInitState);
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const [selectValue, setSelectValue] = useState(stateSelectValue);

  const Editor: EditorWizard = useMemo((): EditorWizard => new EditorWizard("md", stateTxt, { selectionStart: 0, selectionEnd: 0 }), [stateTxt]);

  useEffect(() => setValue(txt), [txt, setValue]);

  useEffect(() => setActiveTools(Editor.activeTools({ positionCursor: selectValue })), [selectValue, Editor]);

  console.log(activeTools);
  // console.log(fromMarkdown(txt));
  // console.log(toMarkdown(fromMarkdown(txt)));
  // console.log(selectValue);

  Editor.start;
  useEffect(() => {
    // if (selectValue.selectionStart != selectValue.selectionEnd) {
    //   const arr = txt.split("\n\n");
    //   // console.log(arr);
    //   // arr.splice(selectValue.selectionStart, 0, "###");
    //   // console.log(arr, "arr");
    //   // console.log(arr.join(""));
    //   setTxt(arr.join(""));
    // }

    Editor.updateTree({ typ: "md", payload: txt, positionCursor: { selectionStart: 1, selectionEnd: 1 }, callback: (tree) => console.log(tree) });
  }, [txt, Editor]);
  // const bold = /\*{2}(.*?)\*{2}/gm;
  // const italic = /\*(?![*\s])(?:[^*]*[^*\s])?\*/gm;
  // const underline = /\_{2}(.*?)\_{2}/gm;
  // const strikethrough = /\~{2}(.*?)\~{2}/gm;

  // let arr: { text: string; selectionStart: number; selectionEnd: number }[] = [];
  // txt.split("\n\n").forEach((item: string, i) => arr.push({ text: item, selectionStart: arr[i - 1]?.selectionEnd + 2 || 0, selectionEnd: item.length + (arr[i - 1]?.selectionEnd + 2 || 0) }));

  // const active =
  //   arr[
  //     arr.findIndex((object) => {
  //       return object.selectionEnd >= selectValue.selectionEnd;
  //     })
  //   ];

  // let activeToolsLive: string[] = [];

  // if (/^\#{1,6}\s/gm.test(active.text)) activeToolsLive.push("header");

  //   function lookAtPosition({ text, startPositionText, positionCursor, regex }: { text: string; startPositionText: number; positionCursor: number; regex: RegExp }) {
  //     return Array.from(text.matchAll(regex))
  //       .map((result) => {
  //         return {
  //           number: result[1],
  //           start: (result.index || 0) + startPositionText,
  //           end: (result?.index || 0) + (result[0]?.length || 0) + startPositionText,
  //         };
  //       })
  //       .find(({ start, end }) => start <= positionCursor && end >= positionCursor);
  //   }

  //   // if (lookAtPosition({ text: active.text, startPositionText: active.selectionStart, positionCursor: selectValue.selectionStart, regex: bold })) activeToolsLive.push("bold");
  //   // if (lookAtPosition({ text: active.text, startPositionText: active.selectionStart, positionCursor: selectValue.selectionStart, regex: italic })) activeToolsLive.push("italic");
  //   // if (lookAtPosition({ text: active.text, startPositionText: active.selectionStart, positionCursor: selectValue.selectionStart, regex: underline })) activeToolsLive.push("underline");
  //   // if (lookAtPosition({ text: active.text, startPositionText: active.selectionStart, positionCursor: selectValue.selectionStart, regex: strikethrough })) activeToolsLive.push("strikethrough");

  //   setActiveTools(activeToolsLive);
  // }, [txt, selectValue]);

  return (
    <>
      <EditorBox htmlFor={id}>
        <Tools
          activeTools={activeTools}
          listTools={[
            ["heading", "strong", "emphasis", "delete"],
            ["blockquote", "list"],
            ["code", "imageUpload"],
          ]}
        />
        <ContentArea id={id} ref={areaContent} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTxt(e.target.value)} onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSelectValue({ selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd })}>
          {txt}
        </ContentArea>

        <Preview>oko</Preview>
      </EditorBox>
      <Preview>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{txt}</ReactMarkdown>
      </Preview>

      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
