import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SubjektVisitor, UseStatementContext } from "../../antlr";
import { ShapeID, SubjektModelContext } from "../../types";
import { ShapeIdVisitor } from "../core";

export class UseStatementVisitor
  extends AbstractParseTreeVisitor<ShapeID>
  implements SubjektVisitor<ShapeID>
{
  modelContext: SubjektModelContext;
  private shapeIdVisitor: ShapeIdVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.shapeIdVisitor = new ShapeIdVisitor(modelContext);
  }

  protected defaultResult(): ShapeID {
    return {
      namespace: this.modelContext.namespace,
      identifier: "",
    };
  }

  public visitUseStatement(ctx: UseStatementContext): ShapeID {
    return this.shapeIdVisitor.visit(ctx.absoluteRootShapeId());
  }
}
