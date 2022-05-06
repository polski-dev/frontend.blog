import { childInTreeType } from "../../types/component.markDownEditor.type";
import { ToolOptions, Options } from "../../style/component.markDownEditor.styled";

export default function HeaderOptionsComponent({ activeTool, callBack }: { activeTool: childInTreeType | undefined; callBack: ({ child, power }: { child: childInTreeType; power: boolean }) => void }): JSX.Element {
  return (
    <ToolOptions>
      <Options
        type={"h1"}
        active={activeTool?.depth === 1}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 1 }, power: true });
        }}
      >
        H1
      </Options>
      <Options
        type={"h2"}
        active={activeTool?.depth === 2}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 2 }, power: true });
        }}
      >
        H2
      </Options>
      <Options
        type={"h3"}
        active={activeTool?.depth === 3}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 3 }, power: true });
        }}
      >
        H3
      </Options>
      <Options
        type={"h4"}
        active={activeTool?.depth === 4}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 4 }, power: true });
        }}
      >
        H4
      </Options>
      <Options
        type={"h5"}
        active={activeTool?.depth === 5}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 5 }, power: true });
        }}
      >
        H5
      </Options>
      <Options
        type={"h6"}
        active={activeTool?.depth === 6}
        onClick={(): void => {
          if (!!activeTool) callBack({ child: { ...activeTool, depth: 6 }, power: true });
        }}
      >
        H6
      </Options>
    </ToolOptions>
  );
}
