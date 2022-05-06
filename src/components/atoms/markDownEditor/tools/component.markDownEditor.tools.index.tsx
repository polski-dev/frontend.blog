import Eye from "assets/icon/eye.svg";
import Trash from "assets/icon/trash.svg";
import { useEffect } from "react";
import { toolsTypes } from "./../types/component.markDownEditor.type";
import { ToolsList, Tool, ToolOptions, Options } from "./../component.markDownEditor.styled";
// import { toolsDisplay } from "./component.markDownEditor.tools.switch";

export default function ToolForEditorComponent({ listTools, editor }: toolsTypes): JSX.Element {
  useEffect(() => {}, [editor]);
  return (
    <ToolsList>
      {listTools.map((tool: string, index: number): JSX.Element | void => {
        //console.log(tool);
        console.log(editor.activeTools({ tool }));
        return (
          <>
            <Tool
              key={index}
              active={editor.activeTools({ tool })}
              title={tool}
              onClick={(): void => {
                // console.log(tool);
                // editor.switchTool({ type: name || "", power: active, position: { start: { offset: 1 }, end: { offset: 0 } } });
                // console.log(editor.readTree);
              }}
            >
              {tool}
            </Tool>
          </>
        );
      })}
      <Tool title="Trash" onClick={(): void => console.log("trash")}>
        <Trash />
      </Tool>

      <Tool title="preview" style={{ marginLeft: "auto" }}>
        <Eye />
      </Tool>
    </ToolsList>
  );
}
