export type typeType = string;
export type payloadType = string;
export type selectionStartType = number;
export type selectionEndType = number;
export interface positionCursorType {
  selectionStart: selectionStartType;
  selectionEnd: selectionEndType;
}
export type iCreateTreeType = ReturnType<typeof setTimeout>;

interface treePositionStartEndType {
  column: number;
  line: number;
  offset: number;
}

interface treePosition {
  start: treePositionStartEndType;
  end: treePositionStartEndType;
}

export interface treeType {
  type: string;
  position: treePosition;
  children: {
    type: string;
    depth: number;
    position: treePosition;
    children?: { type: string; value?: string; position: treePosition; children?: { type: string; value: string; position: treePosition } }[];
  }[];
}
export type callBackType = (answer: any) => void;
