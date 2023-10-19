import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AbsoluteRootShapeIdContext, SubjektVisitor } from "../../antlr";
import { ShapeID } from '../../types';

export class ShapeIDVisitor
    extends AbstractParseTreeVisitor<ShapeID>
    implements SubjektVisitor<ShapeID> {

    constructor() {
        super();
    }

    protected defaultResult(): ShapeID {
        return {
            namespace: '',
            identifier: ''
        };
    }

    public visitAbsoluteRootShapeId(ctx: AbsoluteRootShapeIdContext): ShapeID {
        console.log('visitAbsoluteRootShapeId', ctx);
        return {
            namespace: ctx.namespaceIdentifier().text,
            identifier: ctx.identifier().text
        };
    }

}
