import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AbsoluteRootShapeIdContext, IdentifierContext, SubjektVisitor } from "../../antlr";
import { ShapeID, SubjektModelContext } from '../../types';

export class ShapeIDVisitor
    extends AbstractParseTreeVisitor<ShapeID>
    implements SubjektVisitor<ShapeID> {

        modelContext: SubjektModelContext;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
    }

    protected defaultResult(): ShapeID {
        return {
            namespace: this.modelContext.namespace,
            identifier: ''
        };
    }

    public visitAbsoluteRootShapeId(ctx: AbsoluteRootShapeIdContext): ShapeID {
        return {
            namespace: ctx.namespaceIdentifier().text,
            identifier: ctx.identifier().text
        };
    }

    public visitIdentifier(ctx: IdentifierContext): ShapeID {
        return {
            namespace: this.modelContext.namespace,
            identifier: ctx.text
        };
    }

}
