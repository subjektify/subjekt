import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  ShapeStatementContext,
  SubjektVisitor,
  TraitContext,
} from "../../antlr";
import { AstAppliedTraits, AstShape, SubjektModelContext } from "../../types";
import { ShapeIdVisitor } from "../core";
import { AstTraitVisitor } from "./AstTraitVisitor";
import { AstShapeDefinitionVisitor } from "./AstShapeDefinitionVisitor";

export class AstShapeVisitor
  extends AbstractParseTreeVisitor<[string, AstShape]>
  implements SubjektVisitor<[string, AstShape]>
{
  modelContext: SubjektModelContext;
  traitVisitor: AstTraitVisitor;
  shapeDefinitionVisitor: AstShapeDefinitionVisitor;
  shapeIdVisitor: ShapeIdVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.traitVisitor = new AstTraitVisitor(modelContext);
    this.shapeDefinitionVisitor = new AstShapeDefinitionVisitor(modelContext);
    this.shapeIdVisitor = new ShapeIdVisitor(modelContext);
  }

  protected defaultResult(): [string, AstShape] {
    return [
      "",
      {
        type: "none",
      },
    ];
  }

  public visitShapeStatement(ctx: ShapeStatementContext): [string, AstShape] {
    const traits = this._visitTraits(ctx.trait());
    const [id, shape]: [string, AstShape] = this.shapeDefinitionVisitor.visit(
      ctx.shapeDefinition(),
    );
    shape.traits = traits;
    return [id, shape];
  }

  private _visitTraits(ctx: TraitContext[]): AstAppliedTraits {
    const traits: AstAppliedTraits = {};
    ctx.forEach((trait) => {
      const appliedTraits = this.traitVisitor.visit(trait);
      Object.assign(traits, appliedTraits);
    });
    return traits;
  }
}
