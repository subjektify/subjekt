import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SubjektVisitor, TraitContext } from "../../antlr";
import { AstAppliedTraits, SubjektModelContext } from "../../types";

export class AstTraitVisitor
  extends AbstractParseTreeVisitor<AstAppliedTraits>
  implements SubjektVisitor<AstAppliedTraits>
{
  modelContext: SubjektModelContext;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
  }

  protected defaultResult(): AstAppliedTraits {
    return {};
  }

  public visitTrait(ctx: TraitContext): AstAppliedTraits {
    return {};
  }
}
