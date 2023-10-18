import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeBlockContext, SubjektVisitor } from "../../antlr";
import { Shapes } from '../../types';

export class ShapesVisitor
    extends AbstractParseTreeVisitor<Shapes>
    implements SubjektVisitor<Shapes> {

    constructor() {
        super();
    }

    protected defaultResult(): Shapes {
        return { };
    }

    public visitShapeBlock(ctx: ShapeBlockContext): Shapes {
        return {
        };
    }
}
