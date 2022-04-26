import Eye from "assets/icon/eye.svg";
import Trash from "assets/icon/trash.svg";
import { toolDisplay } from "./component.markDownEditor.tools.function";
import { ToolsList, Tool } from "./../component.markDownEditor.styled";

export default function ToolForEditorComponent({ listTools }: { listTools: string[] | string[][] }): JSX.Element {
  return (
    <ToolsList>
      {toolDisplay(listTools)}
      <Tool title="Trash" onClick={(): void => console.log("trash")}>
        <Trash />
      </Tool>

      <Tool title="preview" style={{ marginLeft: "auto" }}>
        <Eye />
      </Tool>
    </ToolsList>
  );
}
