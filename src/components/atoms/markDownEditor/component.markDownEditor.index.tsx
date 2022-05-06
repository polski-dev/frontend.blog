import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Tools from "./plugins/tools/component.markDownEditor.tools.index";
import React, { useMemo, useState, useRef, useEffect } from "react";
import EditorWizard from "./editor/component.markDownEditor.editor";
import { EditorBox, ContentArea, TextArea, Preview } from "./style/component.markDownEditor.styled";
import { childInTreeType } from "./types/component.markDownEditor.type";

export default function MarkDownEditorComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: any): JSX.Element {
  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const initialStateActiveTools: childInTreeType[] = [];
  const [activeTools, setActiveTools] = useState(initialStateActiveTools);
  const [selectValue, setSelectValue] = useState({ selectionStart: 0, selectionEnd: 0 });
  const [content, setContent] = useState("## Ddwwad \n\n Paweł jest soko mi**stem** jsa");
  const Editor: EditorWizard = useMemo((): EditorWizard => new EditorWizard({ typ: "md", payload: { content, callBackUpdateContent: setContent }, positionCursor: selectValue }), [content, selectValue]);

  useEffect(() => Editor.start(), [Editor]);
  useEffect(() => setValue(content), [content, setValue]);
  useEffect(() => setActiveTools(Editor.activeTools({ positionCursor: selectValue })), [selectValue, Editor]);
  useEffect(() => Editor.updateTree({ typ: "md", content, positionCursor: selectValue }), [content, selectValue, Editor]);

  return (
    <>
      <EditorBox htmlFor={id}>
        <Tools
          listTools={["heading", "strong", "emphasis", "delete", "blockquote", "list", "link", "code", "imageUpload"]}
          activeTools={activeTools}
          callBack={({ type, name }) => {
            console.log(name);
          }}
        />
        <ContentArea id={id} ref={areaContent} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setContent(e.target.value)} onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSelectValue({ selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd })}>
          {content}
        </ContentArea>

        <Preview>oko</Preview>
      </EditorBox>
      <Preview>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Preview>

      <TextArea id={id} name={name} defaultValue={defaultValue} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
