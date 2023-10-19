import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, UseBlockContext, UseStatementContext } from "../../antlr";
import { ShapeID } from "../../types";
import { ShapeIDVisitor } from './ShapeIDVisitor';

export class UseVisitor
    extends AbstractParseTreeVisitor<ShapeID[]>
    implements SubjektVisitor<ShapeID[]> {

        private useStatementVisitor: UseStatementVisitor;

    constructor() {
        super();
        this.useStatementVisitor = new UseStatementVisitor();
    }

    protected defaultResult(): ShapeID[] {
        return [];
    }

    public visitUseBlock(ctx: UseBlockContext): ShapeID[] {
        return ctx.useStatement().map(this.useStatementVisitor.visit.bind(this.useStatementVisitor));
    }
}

export class UseStatementVisitor
    extends AbstractParseTreeVisitor<ShapeID>
    implements SubjektVisitor<ShapeID> {

        private shapeIdVisitor: ShapeIDVisitor;

    constructor() {
        super();
        this.shapeIdVisitor = new ShapeIDVisitor();
    }

    protected defaultResult(): ShapeID {
        return {
            namespace: '',
            identifier: ''
        };
    }

    public visitUseStatement(ctx: UseStatementContext): ShapeID {
        return this.shapeIdVisitor.visit(ctx.absoluteRootShapeId());
    }
}
