import { childInTreeType } from "../../types/component.markDownEditor.type";
import { ToolOptions, Options } from "../../style/component.markDownEditor.styled";

export default function HeaderOptionsComponent({ activeTool, callBack }: { activeTool: childInTreeType | undefined; callBack?: (param: any) => void }): JSX.Element {
  return (
    <ToolOptions>
      <Options type={"h1"} active={activeTool?.depth === 1}>
        H1
      </Options>
      <Options type={"h2"} active={activeTool?.depth === 2}>
        H2
      </Options>
      <Options type={"h3"} active={activeTool?.depth === 3}>
        H3
      </Options>
      <Options type={"h4"} active={activeTool?.depth === 4}>
        H4
      </Options>
      <Options type={"h5"} active={activeTool?.depth === 5}>
        H5
      </Options>
      <Options type={"h6"} active={activeTool?.depth === 6}>
        H6
      </Options>
    </ToolOptions>
  );
}
