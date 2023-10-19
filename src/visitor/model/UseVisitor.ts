import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, UseBlockContext, UseStatementContext } from "../../antlr";
import { ShapeID } from "../../types";
import { ShapeIDVisitor } from './ShapeIDVisitor';

export class UseVisitor
    extends AbstractParseTreeVisitor<ShapeID[]>
    implements SubjektVisitor<ShapeID[]> {

    namespace: string;
    private useStatementVisitor: UseStatementVisitor;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
        this.useStatementVisitor = new UseStatementVisitor(namespace);
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

    namespace: string;
    private shapeIdVisitor: ShapeIDVisitor;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
        this.shapeIdVisitor = new ShapeIDVisitor(namespace);
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
