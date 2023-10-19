import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AbsoluteRootShapeIdContext, IdentifierContext, SubjektVisitor } from "../../antlr";
import { ShapeID } from '../../types';

export class ShapeIDVisitor
    extends AbstractParseTreeVisitor<ShapeID>
    implements SubjektVisitor<ShapeID> {

        namespace: string;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
    }

    protected defaultResult(): ShapeID {
        return {
            namespace: this.namespace,
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
            namespace: this.namespace,
            identifier: ctx.text
        };
    }

}
