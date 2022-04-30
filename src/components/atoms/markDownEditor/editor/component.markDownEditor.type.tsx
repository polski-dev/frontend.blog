export type Root = import("mdast").Root;

export type typeType = string;
export type payloadType = string;
export type selectionStartType = number;
export type selectionEndType = number;
export interface positionCursorType {
  selectionStart: selectionStartType;
  selectionEnd: selectionEndType;
}
export type iCreateTreeType = ReturnType<typeof setTimeout>;

export type treeType = Root;
export type callBackType = (answer: any) => void;
