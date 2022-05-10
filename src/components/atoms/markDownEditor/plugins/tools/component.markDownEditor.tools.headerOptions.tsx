import { ToolOptions, Options } from "../../style/component.markDownEditor.styled";
import { childInTreeType, callBackToolsPropsTypes } from "../../editor/types/component.markDownEditor.type";

export default function HeaderOptionsComponent({ tool, callBack }: { tool: childInTreeType | undefined; callBack: ({ child, power, type, options }: callBackToolsPropsTypes) => void }): JSX.Element {
  return (
    <ToolOptions>
      <Options type={"h1"} active={tool?.depth === 1} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 1 } })}>
        H1
      </Options>
      <Options type={"h2"} active={tool?.depth === 2} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 2 } })}>
        H2
      </Options>
      <Options type={"h3"} active={tool?.depth === 3} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 3 } })}>
        H3
      </Options>
      <Options type={"h4"} active={tool?.depth === 4} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 4 } })}>
        H4
      </Options>
      <Options type={"h5"} active={tool?.depth === 5} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 5 } })}>
        H5
      </Options>
      <Options type={"h6"} active={tool?.depth === 6} onClick={(): void => callBack({ type: "heading", power: true, options: { depth: 6 } })}>
        H6
      </Options>
    </ToolOptions>
  );
}
