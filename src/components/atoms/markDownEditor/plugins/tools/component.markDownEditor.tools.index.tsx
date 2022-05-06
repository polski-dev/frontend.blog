import { iconSelect } from "./component.markDownEditor.tools.switch";
import { ToolsList, Tool, BoxIcon } from "../../style/component.markDownEditor.styled";
import HeaderOptionsComponent from "./component.markDownEditor.tools.headerOptions";
import { ToolForEditorComponentPropsTypes, childInTreeType } from "../../types/component.markDownEditor.type";

export default function ToolForEditorComponent({ listTools, activeTools, callBack }: ToolForEditorComponentPropsTypes): JSX.Element {
  return (
    <ToolsList>
      {listTools.map((toolName: string, index: number): JSX.Element => {
        let active: childInTreeType[] = activeTools.filter((activeTool: childInTreeType): boolean => activeTool.type === toolName);
        return (
          <Tool key={index} title={toolName} active={!!active.length}>
            <BoxIcon
              onClick={(e: Event) => {
                e.preventDefault();
                callBack({ child: active[0], power: false });
              }}
            >
              {iconSelect(toolName)}
            </BoxIcon>
            {toolName === "heading" && <HeaderOptionsComponent activeTool={active[0]} callBack={callBack} />}
          </Tool>
        );
      })}
      <Tool title="Trash" onClick={(): void => console.log("trash")}>
        {iconSelect("trash")}
      </Tool>

      <Tool title="preview" style={{ marginLeft: "auto" }}>
        {iconSelect("eye")}
      </Tool>
    </ToolsList>
  );
}
