import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeDefinitionContext, ShapeStatementContext, SubjektVisitor } from "../../antlr";
import { Shape, ShapeType } from '../../types';
import { ShapeIDVisitor } from './ShapeIDVisitor';
import { ShapeIDUtil } from '../../util';

export class ShapeVisitor
    extends AbstractParseTreeVisitor<Record<string, Shape>>
    implements SubjektVisitor<Record<string, Shape>> {

        namespace: string;
        shapeIdVisitor: ShapeIDVisitor;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
        this.shapeIdVisitor = new ShapeIDVisitor(namespace);
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
