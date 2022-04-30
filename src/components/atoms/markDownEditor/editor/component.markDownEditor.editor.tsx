import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import type { typeType, payloadType, positionCursorType, iCreateTreeType, treeType, callBackType } from "./component.markDownEditor.type";

export default class EditorWizard {
  private _typ: typeType;
  private _payload: payloadType;
  private _positionCursor: positionCursorType;
  private _iCreateTree: iCreateTreeType;
  private _tree: treeType;

  constructor(typ: typeType, payload: payloadType, positionCursor: positionCursorType) {
    this._typ = typ;
    this._payload = payload;
    this._tree = { type: "root", children: [], position: { end: { line: 1, column: 1, offset: 0 }, start: { line: 1, column: 1, offset: 0 } } };
    this._positionCursor = positionCursor;
    this._iCreateTree = setTimeout(() => {}, 0);
  }

  get start(): treeType {
    if (this._typ === "md") this._tree = fromMarkdown(this._payload);
    return this._tree;
  }

  get readTree(): treeType {
    return this._tree;
  }

  toolsActive(): void {
    console.log(this._tree);
  }

  update({ typ, payload, positionCursor, callback }: { typ: typeType; payload: payloadType; positionCursor: positionCursorType; callback?: callBackType }): void {
    if (this._typ != typ || this._payload != payload || this._positionCursor != positionCursor) {
      this._typ = typ;
      this._payload = payload;
      this._positionCursor = positionCursor;
      clearTimeout(this._iCreateTree);
      this._iCreateTree = setTimeout(() => {
        if (this._typ === "md") this._tree = fromMarkdown(payload);
        this.toolsActive();
        !!callback && callback(this._tree);
      }, 30);
    }
  }
}
