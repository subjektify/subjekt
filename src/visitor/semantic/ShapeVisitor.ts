import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  ShapeStatementContext,
  SubjektVisitor,
  TraitContext,
} from "../../antlr";
import { AppliedTraits, Shape, SubjektModelContext } from "../../types";
import { ShapeIdVisitor } from "../core";
import { TraitVisitor } from "./TraitVisitor";
import { ShapeDefinitionVisitor } from "./ShapeDefinitionVisitor";

export class ShapeVisitor
  extends AbstractParseTreeVisitor<[string, Shape]>
  implements SubjektVisitor<[string, Shape]>
{
  modelContext: SubjektModelContext;
  traitVisitor: TraitVisitor;
  shapeDefinitionVisitor: ShapeDefinitionVisitor;
  shapeIdVisitor: ShapeIdVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.traitVisitor = new TraitVisitor(modelContext);
    this.shapeDefinitionVisitor = new ShapeDefinitionVisitor(modelContext);
    this.shapeIdVisitor = new ShapeIdVisitor(modelContext);
  }

  protected defaultResult(): [string, Shape] {
    return [
      "",
      {
        type: "none",
      },
    ];
  }

  public visitShapeStatement(ctx: ShapeStatementContext): [string, Shape] {
    const traits = this._visitTraits(ctx.trait());
    const [id, shape]: [string, Shape] = this.shapeDefinitionVisitor.visit(
      ctx.shapeDefinition(),
    );
    shape.traits = traits;
    return [id, shape];
  }

  private _visitTraits(ctx: TraitContext[]): AppliedTraits {
    const traits: AppliedTraits = {};
    ctx.forEach((trait) => {
      const appliedTraits = this.traitVisitor.visit(trait);
      Object.assign(traits, appliedTraits);
    });
    return traits;
  }
}
