import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SubjektVisitor, IdlContext } from "../../antlr";
import { prelude, SubjektModel, SubjektModelContext } from "../../types";
import { UsesVisitor } from "./UsesVisitor";
import { MetadataVisitor } from "../core";
import { ShapesVisitor } from "./ShapesVisitor";

export class SubjektModelVisitor
  extends AbstractParseTreeVisitor<SubjektModel>
  implements SubjektVisitor<SubjektModel>
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

  protected defaultResult(): SubjektModel {
    return {};
  }

  visitIdl(ctx: IdlContext): SubjektModel {
    const metadata = this.metadataVisitor.visit(ctx.metadataBlock());
    const uses = this.usesVisitor.visit(ctx.useBlock());
    this.modelContext.uses = uses;

    // We initialize the shapes visitor here because we need the imported shapes
    const shapesVisitor: ShapesVisitor = new ShapesVisitor(this.modelContext);
    const shapes = shapesVisitor.visit(ctx.shapeBlock());

    return {
      metadata,
      uses,
      shapes,
    };
  }
}
