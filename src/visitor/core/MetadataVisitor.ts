import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  MetadataBlockContext,
  MetadataStatementContext,
  SubjektVisitor,
} from "../../antlr";
import { NodeValue, SubjektModelContext } from "../../types";
import { NodeValueVisitor } from ".";

export class MetadataVisitor
  extends AbstractParseTreeVisitor<Record<string, NodeValue>>
  implements SubjektVisitor<Record<string, NodeValue>>
{
  modelContext: SubjektModelContext;
  nodeValueVisitor: NodeValueVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.nodeValueVisitor = new NodeValueVisitor();
  }

  protected defaultResult(): Record<string, NodeValue> {
    return {};
  }

  public visitMetadataBlock(
    ctx: MetadataBlockContext,
  ): Record<string, NodeValue> {
    const metadata: any = {};
    ctx.metadataStatement().forEach((statement: MetadataStatementContext) => {
      const identifier = statement.identifier().text;
      const value = this.nodeValueVisitor.visit(statement.value());
      metadata[identifier] = value;
    });
    return metadata;
  }
}
