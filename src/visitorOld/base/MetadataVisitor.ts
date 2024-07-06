import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MetadataBlockContext, MetadataStatementContext, SubjektVisitor } from "../../antlr";
import { NodeValue, SubjektModelContext } from '../../types';
import { ValueVisitor } from '.';

export class MetadataVisitor
    extends AbstractParseTreeVisitor<Record<string, NodeValue>>
    implements SubjektVisitor<Record<string, NodeValue>> {

    modelContext: SubjektModelContext;
    valueVisitor: ValueVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.valueVisitor = new ValueVisitor();
    }

    protected defaultResult(): Record<string, NodeValue> {
        return {};
    }

    public visitMetadataBlock(ctx: MetadataBlockContext): Record<string, NodeValue> {
        const metadata: any = {};
        ctx.metadataStatement().forEach((statement: MetadataStatementContext) => {
            const identifier = statement.identifier().text;
            const value = this.valueVisitor.visit(statement.value());
            metadata[identifier] = value; 
        });
        return metadata;
    }
}
