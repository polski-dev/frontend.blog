import remarkGfm from "remark-gfm";
import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import { findAndReplace } from "hast-util-find-and-replace";
import { gfmTaskListItem } from "micromark-extension-gfm-task-list-item";
import { gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown } from "mdast-util-gfm-task-list-item";
import type { typeType, payloadType, positionCursorType, iCreateTreeType, treeType, callBackType } from "./component.markDownEditor.type";
import { gfmFootnote } from "micromark-extension-gfm-footnote";
import { gfmFootnoteFromMarkdown, gfmFootnoteToMarkdown } from "mdast-util-gfm-footnote";
import { gfmStrikethrough } from "micromark-extension-gfm-strikethrough";
import { gfmStrikethroughFromMarkdown, gfmStrikethroughToMarkdown } from "mdast-util-gfm-strikethrough";

export default class EditorWizard {
  private _typ: typeType;
  private _tree: treeType;
  private _payload: payloadType;
  private _iCreateTree: iCreateTreeType;
  private _positionCursor: positionCursorType;

  constructor(typ: typeType, payload: payloadType, positionCursor: positionCursorType) {
    this._typ = typ;
    this._payload = payload;
    this._positionCursor = positionCursor;
    this._iCreateTree = setTimeout(() => {}, 0);
    this._tree = { type: "root", children: [], position: { end: { line: 1, column: 1, offset: 0 }, start: { line: 1, column: 1, offset: 0 } } };
  }

  get start(): treeType {
    if (this._typ === "md")
      this._tree = fromMarkdown(this._payload, {
        extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
        mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
      });
    return this._tree;
  }

  get readTree(): treeType {
    return this._tree;
  }

  activeTools({ tree, positionCursor }: { tree?: any; positionCursor?: positionCursorType }): string[] {
    let arr: string[] = [];
    if (!!positionCursor) this._positionCursor = positionCursor;
    if (tree?.children != null) for (let i: number = 0; i < tree.children?.length; i++) arr.push(...this.activeTools({ tree: tree?.children[i] }));
    else if (!tree) for (let i: number = 0; i < this._tree.children?.length; i++) arr.push(...this.activeTools({ tree: this._tree?.children[i] }));
    if (!!tree && (tree?.position?.start.offset || 0) <= this._positionCursor.selectionStart && (tree?.position?.end.offset || 0) >= this._positionCursor.selectionEnd && tree.type != "text" && tree.type != "paragraph") arr.push(tree?.type);
    return arr;
  }

  updateTree({ typ, payload, positionCursor, callback }: { typ: string; payload: payloadType; positionCursor: positionCursorType; callback?: callBackType }): void {
    if (this._payload != payload || this._positionCursor != positionCursor) {
      this._typ = typ;
      this._payload = payload;
      this._positionCursor = positionCursor;
      clearTimeout(this._iCreateTree);
      this._iCreateTree = setTimeout(() => {
        if (this._typ === "md")
          this._tree = fromMarkdown(this._payload, {
            extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
            mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
          });
        !!callback && callback(this._tree);
      }, 300);
    }
  }
}
