import remarkGfm from "remark-gfm";
import { remove } from "unist-util-remove";
import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import { findAndReplace } from "hast-util-find-and-replace";

import { gfmTaskListItem } from "micromark-extension-gfm-task-list-item";
import { gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown } from "mdast-util-gfm-task-list-item";
import type { typeType, contentType, payloadType, positionCursorType, iCreateTreeType, treeType, callBackType, childrenType, editorSwitchToolTypes, editorUpdateTreeType } from "../types/component.markDownEditor.type";
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

  constructor({ typ, payload, positionCursor }: { typ: typeType; payload: payloadType; positionCursor: positionCursorType }) {
    this._typ = typ;
    this._payload = payload;
    this._positionCursor = positionCursor;
    this._iCreateTree = setTimeout(() => {}, 0);
    this._tree = { type: "root", children: [], position: { end: { line: 1, column: 1, offset: 0 }, start: { line: 1, column: 1, offset: 0 } } };
  }

  start(): void {
    if (this._typ === "md")
      this._tree = fromMarkdown(this._payload.content, {
        extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
        mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
      });

    setTimeout(() => this.switchTool({ type: "emphasis", power: false, position: { end: { offset: 45 }, start: { offset: 36 } } }), 500);
  }

  get readTree(): treeType {
    return this._tree;
  }

  activeTools({ tool, tree }: { tool: string; tree?: childrenType }): boolean | void {
    console.log(tree, "tree");
    if (tree?.children != null) tree.children.forEach((tree: any) => this.activeTools({ tool, tree }));
    else if (!tree) this._tree.children.forEach((tree: any) => this.activeTools({ tool, tree }));
    else if (!!tree && (tree?.position?.start.offset || 0) <= this._positionCursor.selectionStart && (tree?.position?.end.offset || 0) >= this._positionCursor.selectionEnd && tree.type != tool) true;
    else false;
  }

  // when i switch tools on keyboard or in menu Editor
  switchTool({ type, value, power, position }: editorSwitchToolTypes): treeType {
    const changeStatus = (children: any[]) => {
      let arr: any[] = [];

      children.forEach((child): void => {
        if (child?.position?.start.offset <= position.start.offset && child?.position?.end.offset >= position.end.offset) {
          if (!power && type === child.type && child?.position?.start.offset === position.start.offset && child?.position?.end.offset === position.end.offset) arr = [...arr, ...child.children];
          else arr = [...arr, { ...child, children: changeStatus(child.children) }];
        } else arr.push(child);
      });

      return arr;
    };

    this._tree.children = changeStatus(this._tree.children);
    this._payload.callBackUpdateContent(toMarkdown(this._tree));

    return this._tree;
  }

  // when i change content in DOM
  updateTree({ typ, content, positionCursor }: editorUpdateTreeType): void {
    if (this._payload.content != content || this._positionCursor != positionCursor) {
      this._typ = typ;
      this._payload.content = content;
      this._positionCursor = positionCursor;
      clearTimeout(this._iCreateTree);
      this._iCreateTree = setTimeout(() => {
        if (this._typ === "md")
          this._tree = fromMarkdown(this._payload.content, {
            extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
            mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
          });
      }, 300);
    }
  }
}
