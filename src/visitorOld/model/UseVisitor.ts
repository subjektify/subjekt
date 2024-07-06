import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, UseBlockContext, UseStatementContext } from "../../antlr";
import { ShapeID, SubjektModelContext } from "../../types";
import { ShapeIDVisitor } from './ShapeIDVisitor';

export class UseVisitor
    extends AbstractParseTreeVisitor<ShapeID[]>
    implements SubjektVisitor<ShapeID[]> {

    modelContext: SubjektModelContext;
    private useStatementVisitor: UseStatementVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.useStatementVisitor = new UseStatementVisitor(modelContext);
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

    modelContext: SubjektModelContext;
    private shapeIdVisitor: ShapeIDVisitor;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.shapeIdVisitor = new ShapeIDVisitor(modelContext);
    }

    protected defaultResult(): ShapeID {
        return {
            namespace: this.modelContext.namespace,
            identifier: ''
        };
    }

    public visitUseStatement(ctx: UseStatementContext): ShapeID {
        return this.shapeIdVisitor.visit(ctx.absoluteRootShapeId());
    }
}
