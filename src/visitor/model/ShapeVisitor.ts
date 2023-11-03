import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeDefinitionContext, ShapeStatementContext, SubjektVisitor } from "../../antlr";
import { Shape, ShapeType, Shapes, SubjektModelContext } from '../../types';
import { ShapeIDVisitor } from './ShapeIDVisitor';
import { ShapeIDUtil } from '../../util';

export class ShapeVisitor
    extends AbstractParseTreeVisitor<Shapes>
    implements SubjektVisitor<Shapes> {

        modelContext: SubjektModelContext;
        shapeIdVisitor: ShapeIDVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.shapeIdVisitor = new ShapeIDVisitor(modelContext);
    }

    protected defaultResult(): Shapes {
        return {
        };
    }

    public visitShapeStatement(ctx: ShapeStatementContext): Shapes {
        const result: Shapes = this.visit(ctx.shapeDefinition());
        return result;
    }
    
    public visitShapeDefinition(ctx: ShapeDefinitionContext): Shapes {
        const shapeId = this.shapeIdVisitor.visit(ctx.identifier());
        const shape: Shape = {
            type: ctx.shapeType().text as ShapeType,
        };
        const result: Shapes = {
            [ShapeIDUtil.toStr(shapeId)]: shape
        };

        return result;
    }
}
