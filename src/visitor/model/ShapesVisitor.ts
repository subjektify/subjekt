import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeBlockContext, SubjektVisitor } from "../../antlr";
import { Shapes } from '../../types';
import { ShapeVisitor } from './ShapeVisitor';

export class ShapesVisitor
    extends AbstractParseTreeVisitor<Shapes>
    implements SubjektVisitor<Shapes> {

        namespace: string;
        shapeVisitor: ShapeVisitor;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
        this.shapeVisitor = new ShapeVisitor(namespace);
    }

    protected defaultResult(): Shapes {
        return {};
    }

    public visitShapeBlock(ctx: ShapeBlockContext): Shapes {
        const shapes = {};
        ctx.shapeStatement().forEach((shapeStatement) => {
            const shape = this.shapeVisitor.visit(shapeStatement);
            Object.assign(shapes, shape);
        });
        return shapes;
    }
}
