import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SubjektVisitor, UseBlockContext } from "../../antlr";
import { ShapeID, SubjektModelContext } from "../../types";
import { UseStatementVisitor } from "./UseStatementVisitor";

export class UsesVisitor
  extends AbstractParseTreeVisitor<ShapeID[]>
  implements SubjektVisitor<ShapeID[]>
{
  modelContext: SubjektModelContext;
  private useStatementVisitor: UseStatementVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.useStatementVisitor = new UseStatementVisitor(modelContext);
  }

  protected defaultResult(): ShapeID[] {
    return [];
  }

  public visitUseBlock(ctx: UseBlockContext): ShapeID[] {
    return ctx
      .useStatement()
      .map(this.useStatementVisitor.visit.bind(this.useStatementVisitor));
  }
}
