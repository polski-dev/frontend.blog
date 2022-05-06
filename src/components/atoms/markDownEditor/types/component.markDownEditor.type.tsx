import EditorWizard from "./../editor/component.markDownEditor.editor";

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

export interface positionCursorType {
  selectionStart: selectionStartType;
  selectionEnd: selectionEndType;
}

export interface childrenType {
  type: string;
  children?: childrenType[];
  depth?: number | null;
  position: { start: { line: number; column: number; offset: number }; end: { line: number; column: number; offset: number } };
}
[];

export interface toolsTypes {
  editor: EditorWizard;
  listTools: string[];
}

// interface for params method

export interface editorActiveToolsTypes {
  tree?: any;
  positionCursor?: positionCursorType;
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
  positionCursor: positionCursorType;
}
