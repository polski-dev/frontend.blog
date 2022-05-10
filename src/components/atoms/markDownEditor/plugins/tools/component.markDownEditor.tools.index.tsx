import { iconSelect } from "./component.markDownEditor.tools.switch";
import { ToolsList, Tool, BoxIcon } from "../../style/component.markDownEditor.styled";
import HeaderOptionsComponent from "./component.markDownEditor.tools.headerOptions";
import { ToolForEditorComponentPropsTypes, childInTreeType } from "../../editor/types/component.markDownEditor.type";

export default function ToolForEditorComponent({ listTools, activeTools, callBack }: ToolForEditorComponentPropsTypes): JSX.Element {
  return (
    <ToolsList>
      {listTools.map((toolName: string, index: number): JSX.Element => {
        const tool: childInTreeType | undefined = activeTools.filter((activeTool: childInTreeType): boolean => activeTool.type === toolName)[0];
        let active: boolean = !!tool;

        return (
          <Tool key={index} title={toolName} active={active}>
            <BoxIcon
              onClick={(e: Event) => {
                e.preventDefault();

                callBack({ child: tool, power: active, type: toolName });
              }}
            >
              {iconSelect(toolName)}
            </BoxIcon>

            {toolName === "heading" && <HeaderOptionsComponent tool={tool} callBack={callBack} />}
          </Tool>
        );
      })}
      <Tool
        title="trash"
        onClick={(e: Event): void => {
          e.preventDefault();
          callBack({ power: false, type: "trash" });
        }}
      >
        {iconSelect("trash")}
      </Tool>

      <Tool
        title="preview"
        style={{ marginLeft: "auto" }}
        onClick={(e: Event): void => {
          e.preventDefault();
          callBack({ power: false, type: "view" });
        }}
      >
        {iconSelect("eye")}
      </Tool>
    </ToolsList>
  );
}
