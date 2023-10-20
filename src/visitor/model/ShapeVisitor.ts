import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeDefinitionContext, ShapeStatementContext, SubjektVisitor } from "../../antlr";
import { Shape, ShapeType, SubjektModelContext } from '../../types';
import { ShapeIDVisitor } from './ShapeIDVisitor';
import { ShapeIDUtil } from '../../util';

export class ShapeVisitor
    extends AbstractParseTreeVisitor<Record<string, Shape>>
    implements SubjektVisitor<Record<string, Shape>> {

        modelContext: SubjektModelContext;
        shapeIdVisitor: ShapeIDVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.shapeIdVisitor = new ShapeIDVisitor(modelContext);
    }

    protected defaultResult(): Record<string, Shape> {
        return {
        };
    }

    public visitShapeStatement(ctx: ShapeStatementContext): Record<string, Shape> {
        const result: Record<string, Shape> = this.visit(ctx.shapeDefinition());
        return result;
    }
    
    public visitShapeDefinition(ctx: ShapeDefinitionContext): Record<string, Shape> {
        const shapeId = this.shapeIdVisitor.visit(ctx.identifier());
        const shape: Shape = {
            type: ctx.shapeType().text as ShapeType,
        };
        const result: Record<string, Shape> = {
            [ShapeIDUtil.toStr(shapeId)]: shape
        };

        return result;
    }
}
