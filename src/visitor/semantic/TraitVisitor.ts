import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SubjektVisitor, TraitBodyContext, TraitContext } from "../../antlr";
import { NodeValue, SubjektModelContext } from "../../types";
import { NodeValueVisitor } from "../core";

export class TraitVisitor
  extends AbstractParseTreeVisitor<[string, NodeValue]>
  implements SubjektVisitor<[string, NodeValue]>
{
  modelContext: SubjektModelContext;
  nodeValueVisitor: NodeValueVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.nodeValueVisitor = new NodeValueVisitor();
  }

  protected defaultResult(): [string, NodeValue] {
    return ["", {}];
  }

  public visitTrait(ctx: TraitContext): [string, NodeValue] {
    const traitName = ctx.identifier().text;
    const nodeValue = this._visitTraitBody(ctx.traitBody());
    return [traitName, nodeValue];
  }

  private _visitTraitBody(ctx?: TraitBodyContext): NodeValue {
    let nodeValue: NodeValue = {};
    const value = ctx?.value();
    const kvp = ctx?.kvp();
    if (value) {
      return this.nodeValueVisitor.visitValue(value);
    }

    if (kvp) {
      kvp.forEach((kvp) => {
        const key = kvp.identifier().text;
        const value = kvp.value();
        nodeValue[key] = this.nodeValueVisitor.visitValue(value);
      });
    }

    return nodeValue;
  }
}
