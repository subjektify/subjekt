import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { IdlContext, SubjektVisitor } from "../../antlr";
import { AstModel, prelude, SubjektModelContext } from "../../types";
import { MetadataVisitor } from "../core";
import { UsesVisitor } from "../semantic/UsesVisitor";
import { AstShapesVisitor } from "./AstShapesVisitor";

export class AstModelVisitor
  extends AbstractParseTreeVisitor<AstModel>
  implements SubjektVisitor<AstModel>
{
  modelContext: SubjektModelContext;
  metadataVisitor: MetadataVisitor;
  usesVisitor: UsesVisitor;

  constructor(namespace: string) {
    super();
    this.modelContext = {
      namespace,
      prelude,
      uses: [],
    };
    this.metadataVisitor = new MetadataVisitor(this.modelContext);
    this.usesVisitor = new UsesVisitor(this.modelContext);
  }

  protected defaultResult(): AstModel {
    return {};
  }

  visitIdl(ctx: IdlContext): AstModel {
    const metadata = this.metadataVisitor.visit(ctx.metadataBlock());
    const uses = this.usesVisitor.visit(ctx.useBlock());
    this.modelContext.uses = uses;

    const shapesVisitor = new AstShapesVisitor(this.modelContext);
    const shapes = shapesVisitor.visit(ctx.shapeBlock());
    return {
      metadata,
      shapes,
    };
  }
}
