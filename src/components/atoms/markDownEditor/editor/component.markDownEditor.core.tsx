import { toMarkdown } from "mdast-util-to-markdown";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFootnote } from "micromark-extension-gfm-footnote";
import createChild from "./element/component.markDownEditor.createChild";
import { gfmTaskListItem } from "micromark-extension-gfm-task-list-item";
import { gfmStrikethrough } from "micromark-extension-gfm-strikethrough";
import { gfmFootnoteFromMarkdown, gfmFootnoteToMarkdown } from "mdast-util-gfm-footnote";
import { gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown } from "mdast-util-gfm-task-list-item";
import { gfmStrikethroughFromMarkdown, gfmStrikethroughToMarkdown } from "mdast-util-gfm-strikethrough";
import type { typeType, positionSelectType, iCreateTreeType, treeType, childInTreeType, editorUpdateTreeType, callBackToolsPropsTypes } from "./types/component.markDownEditor.type";

/**
 * EditorWizard.
 *
 * @class EditorWizard
 * @extends {createChild}
 */

export default class EditorWizard extends createChild {
  private _typ: typeType;
  private _tree: treeType;
  private _content: string;
  private _treeOld: treeType;
  private _iCreate: iCreateTreeType;
  private _positionSelect: positionSelectType;

  constructor({ typ, content, positionSelect }: { typ: typeType; content: string; positionSelect: positionSelectType }) {
    super();
    this._typ = typ;
    this._content = content;
    this._positionSelect = positionSelect;
    this._iCreate = setTimeout(() => {}, 0);
    this._tree = { type: "root", children: [], position: { end: { line: 1, column: 1, offset: 0 }, start: { line: 1, column: 1, offset: 0 } } };
    this._treeOld = { type: "root", children: [], position: { end: { line: 1, column: 1, offset: 0 }, start: { line: 1, column: 1, offset: 0 } } };
  }

  start(): void {
    if (this._typ === "md") {
      const md: treeType = fromMarkdown(this._content, {
        extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
        mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
      });
      this._tree = md;
      this._treeOld = md;
    }
  }

  get readTree(): treeType {
    return this._tree;
  }

  activeTools({ tree, positionSelect }: { tree?: any; positionSelect?: positionSelectType }): childInTreeType[] {
    let arr: childInTreeType[] = [];
    if (!!positionSelect) this._positionSelect = positionSelect;
    if (tree?.children != null) for (let i: number = 0; i < tree.children?.length; i++) arr.push(...this.activeTools({ tree: tree?.children[i] }));
    else if (!tree) for (let i: number = 0; i < this._tree.children?.length; i++) arr.push(...this.activeTools({ tree: this._tree?.children[i] }));
    if (!!tree && (tree?.position?.start.offset || 0) <= this._positionSelect.selectionStart && (tree?.position?.end.offset || 0) >= this._positionSelect.selectionEnd && tree.type != "text" && tree.type != "paragraph") arr.push(tree);

    return arr;
  }

  removeTool({ child }: { child: childInTreeType }): string {
    const changeStatus = (children: any[]) => {
      let arr: any[] = [];

      children.forEach((item): void => {
        if (item?.position?.start.offset <= child.position.start.offset && item?.position?.end.offset >= child.position.end.offset) {
          if (child.type === item.type && item?.position?.start.offset === child.position.start.offset && item?.position?.end.offset === child.position.end.offset) {
            if (child.type === "heading" || child.type === "code" || child.type === "blockquote" || child.type === "list") arr.push({ ...item, type: "paragraph" });
            else arr = [...arr, ...item.children];
          } else arr = [...arr, { ...item, children: changeStatus(item.children) }];
        } else arr.push(item);
      });

      return arr;
    };

    this._treeOld = this._tree;
    this._tree.children = changeStatus(this._tree.children);
    this._content = toMarkdown(this._tree);

    return this._content;
  }

  addTool({ type, power, position, options }: callBackToolsPropsTypes): string {
    console.log(type, position, options);
    const changeStatus = (children: any[]) => {
      let arr: any[] = [];
      children.forEach((child: childInTreeType, index: number): void => {
        if (child.position.start.offset <= (position?.selectionStart || 0) && child.position.end.offset >= (position?.selectionEnd || 0)) {
          if (type === "heading" || type === "code" || type === "blockquote" || type === "list") arr.push({ ...child, type, ...options });
          if (child.children != null) changeStatus(child.children);
          else arr.push(child);
        } else arr.push(child);

        if (children.length === index + 1 && child.position.end.offset < (position?.selectionStart || 0)) {
          switch (type) {
            case "heading":
              arr.push(
                this.createHeading({
                  depth: options?.depth || 1,
                  position: {
                    start: { line: child.position.start.line + 1, column: 1, offset: 2 + child.position.end.offset },
                    end: { line: child.position.end.line + 1, column: 1, offset: 2 + child.position.end.offset + (options?.depth || 1) + (options?.value?.length || 0) },
                  },
                  value: options?.value,
                })
              );
              break;
          }

          // arr.push({ type, ...options, child: [] });
        }
      });
      return arr;
    };

    this._tree.children = changeStatus(this._tree.children);
    this._content = toMarkdown(this._tree);
    return this._content;
  }

  // when i change content in DOM
  updateTree({ typ, content }: editorUpdateTreeType): void {
    if (this._content != content) {
      this._typ = typ;
      this._content = content;
      clearTimeout(this._iCreate);
      this._iCreate = setTimeout(() => {
        this._treeOld = this._tree;
        if (this._typ === "md") {
          const md: treeType = fromMarkdown(this._content, {
            extensions: [gfmFootnote(), gfmTaskListItem, gfmStrikethrough()],
            mdastExtensions: [gfmFootnoteFromMarkdown(), gfmTaskListItemFromMarkdown, gfmStrikethroughFromMarkdown],
          });
          console.log(this._tree);
          this._tree = md;
        }
      }, 200);
    }
  }

  deleteWholeTree(): string {
    this._tree.children = [];
    this._content = toMarkdown(this._tree);
    return this._content;
  }

  updatePositionSelect({ positionSelect }: { positionSelect: positionSelectType }): void {
    this._positionSelect != positionSelect && (this._positionSelect = positionSelect);
  }
}
