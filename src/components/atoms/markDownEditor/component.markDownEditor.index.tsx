import React, { useMemo, useState, useRef, useEffect } from "react";
import EditorWizard from "./editor/component.markDownEditor.core";
import { childInTreeType } from "./types/component.markDownEditor.type";
import Tools from "./plugins/tools/component.markDownEditor.tools.index";
import { EditorBox, ContentArea, TextArea, Preview } from "./style/component.markDownEditor.styled";

export default function MarkDownEditorComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: any): JSX.Element {
  const initialStateActiveTools: childInTreeType[] = [];

  const [view, setView] = useState("md");
  const [activeTools, setActiveTools] = useState(initialStateActiveTools);
  const [content, setContent] = useState("## Ddwwad \n\n Paweł jest soko mi**stem** jsa");
  const [positionSelect, setPositionSelect] = useState({ selectionStart: 0, selectionEnd: 0 });

  const areaContent: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const Editor: EditorWizard = useMemo((): EditorWizard => new EditorWizard({ typ: "md", content, positionSelect }), [content, positionSelect]);

  useMemo(() => Editor.start(), [Editor]);
  useMemo(() => setValue(content), [content, setValue]);

  useEffect(() => Editor.updateTree({ typ: "md", content }), [content, Editor]);
  useEffect(() => {
    Editor.updatePositionSelect({ positionSelect });
    setActiveTools(Editor.activeTools({ positionSelect }));
  }, [positionSelect, Editor]);

  return (
    <>
      <EditorBox htmlFor={id}>
        <Tools
          listTools={["heading", "strong", "emphasis", "delete", "blockquote", "list", "link", "code", "imageUpload"]}
          activeTools={activeTools}
          callBack={({ child, power, type }: { child?: childInTreeType; power: boolean; type?: string }) => {
            if (!!child && !power) setContent(Editor.removeTool({ child }));
            else if (!!child && power) setContent(Editor.changeTool({ child }));
            else if (!child && !power && type === "trash") setContent(Editor.deleteWholeTree());
            else if (!child && !power && type === "view") setView(view === "md" ? "preview" : "md");
          }}
        />

        {view === "md" ? (
          <ContentArea
            id={id}
            value={content}
            ref={areaContent}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setContent(e.target.value)}
            onSelect={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setPositionSelect({ selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd })}
          />
        ) : (
          <Preview>{content}</Preview>
        )}
      </EditorBox>
      <TextArea id={id} name={name} defaultValue={content} error={!!error} {...(register(id, { pattern, required }) as any)} placeholder={placeholder} style={{ display: "none" }} />
    </>
  );
}
