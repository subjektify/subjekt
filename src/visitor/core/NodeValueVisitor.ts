import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  ListValueContext,
  ObjectValueContext,
  SubjektVisitor,
  ValueContext,
} from "../../antlr";
import { NodeArray, NodeObject, NodeValue } from "../../types";

export class NodeValueVisitor
  extends AbstractParseTreeVisitor<NodeValue>
  implements SubjektVisitor<NodeValue>
{
  constructor() {
    super();
  }

  protected defaultResult(): NodeValue {
    return "";
  }

  public visitValue(ctx: ValueContext): NodeValue {
    if (ctx.string()) {
      return ctx.string()!.text.replace(/['"]/g, "") || ""; // Handle string values
    } else if (ctx.number()) {
      return parseFloat(ctx.number()!.text); // Handle numeric values
    } else if (ctx.listValue()) {
      return this._visitListValue(ctx.listValue()); // Handle list values
    } else if (ctx.objectValue()) {
      return this._visitObjectValue(ctx.objectValue()); // Handle object values
    }
    return this.defaultResult(); // Handle unexpected cases
  }

  private _visitListValue(ctx?: ListValueContext): NodeArray {
    return ctx?.value().map((valueCtx) => this.visitValue(valueCtx)) || [];
  }

  private _visitObjectValue(ctx?: ObjectValueContext): NodeObject {
    const obj: Record<string, NodeValue> = {};
    const kvps = ctx?.kvp() || [];

    for (const kvp of kvps) {
      const key = kvp.identifier().text;
      const value = this.visitValue(kvp.value());
      obj[key] = value;
    }

    return obj;
  }
}
