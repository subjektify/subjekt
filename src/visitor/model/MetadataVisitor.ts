import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MetadataBlockContext, SubjektVisitor } from "../../antlr";
import { Shape, SubjektModelContext } from '../../types';

export class MetadataVisitor
    extends AbstractParseTreeVisitor<object>
    implements SubjektVisitor<object> {

    modelContext: SubjektModelContext;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
    }

    protected defaultResult(): object {
        return {};
    }

    public visitMetadata(ctx: MetadataBlockContext): object {
        return {
        };
    }
}
