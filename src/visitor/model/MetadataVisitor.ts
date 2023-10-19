import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MetadataBlockContext, SubjektVisitor } from "../../antlr";
import { Shape } from '../../types';

export class MetadataVisitor
    extends AbstractParseTreeVisitor<object>
    implements SubjektVisitor<object> {

    constructor() {
        super();
    }

    protected defaultResult(): object {
        return {};
    }

    public visitMetadata(ctx: MetadataBlockContext): object {
        return {
        };
    }
}
