import { positionType, childInTreeType } from "../types/component.markDownEditor.type";

/**
 * Abstract Class CreateChild.
 *
 * @class Animal
 */

export default class createChild {
  constructor() {}

  createText({ position, value }: { position: positionType; value: string }): childInTreeType {
    let text: childInTreeType = { type: "text", value, position };
    return text;
  }

  createHeading({ depth, position, children, value }: { depth: number; position: positionType; children?: childInTreeType[]; value?: string }): childInTreeType {
    let child: childInTreeType = { type: "heading", position, children: [], depth };
    if (!!value) child.children?.push(this.createText({ value, position: { start: { line: position.start.line, column: position.start.column + depth, offset: position.start.offset - depth }, end: { line: position.end.line, column: position.end.column, offset: position.end.offset } } }));
    else if (!!children?.length) child.children = children;
    return child;
  }
}
