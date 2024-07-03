import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IdlContext, SubjektVisitor } from "../../antlr";
import { ASTModel, SubjektModelContext } from "../../types";
import { MetadataVisitor } from '../base';

export class ASTVisitor
    extends AbstractParseTreeVisitor<ASTModel>
    implements SubjektVisitor<ASTModel> {

        modelContext: SubjektModelContext;
        metadataVisitor: MetadataVisitor;

    constructor(namespace: string) {
        super();
        this.modelContext = {
            namespace
        };
        this.metadataVisitor = new MetadataVisitor(this.modelContext);
    }

    protected defaultResult(): ASTModel {
        return { }
    }

    visitIdl(ctx: IdlContext): ASTModel {
        return {
            metadata: this.metadataVisitor.visit(ctx.metadataBlock())
        }
    }
}
