// type
export type treeType = Root;
export type typeType = string;
export type contentType = string;
export type selectionEndType = number;
export type Root = import("mdast").Root;
export type selectionStartType = number;
export type callBackType = (answer: any) => void;
export type iCreateTreeType = ReturnType<typeof setTimeout>;

// interface for vairabels
export interface payloadType {
  content: contentType;
  callBackUpdateContent: (content: string) => void;
}

export interface positionSelectType {
  selectionStart: selectionStartType;
  selectionEnd: selectionEndType;
}

export interface childInTreeType {
  type: string;
  children?: childInTreeType[];
  depth?: number | null;
  position: { start: { line: number; column: number; offset: number }; end: { line: number; column: number; offset: number } };
}

export interface ToolForEditorComponentPropsTypes {
  listTools: string[];
  activeTools: childInTreeType[];
  callBack: ({ child, power, type }: { child?: childInTreeType; power: boolean; type?: string }) => void;
}

// interface for params method

export interface editorActiveToolsTypes {
  tree?: any;
  positionSelect?: positionSelectType;
}

export interface editorSwitchToolTypes {
  type: string;
  power: boolean;
  value?: string;
  depth?: number | null;
  position: { end: { offset: number }; start: { offset: number } };
}

export interface editorUpdateTreeType {
  typ: string;
  content: contentType;
}
