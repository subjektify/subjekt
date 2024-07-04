import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeBlockContext, SubjektVisitor } from "../../antlr";
import { ShapeID, Shapes, SubjektModelContext } from '../../types';
import { ShapeVisitor } from './ShapeVisitor';

export class ShapesVisitor
    extends AbstractParseTreeVisitor<Shapes>
    implements SubjektVisitor<Shapes> {

        modelContext: SubjektModelContext;
        shapeVisitor: ShapeVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.shapeVisitor = new ShapeVisitor(modelContext);
    }

    protected defaultResult(): Shapes {
        return {};
    }

    public uses(_uses: ShapeID[]): void {
        this.shapeVisitor.uses(_uses);
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
