import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, SubjektsContext } from "../../antlr";
import { Prelude, SubjektModel, SubjektModelContext } from "../../types";
import { UseVisitor } from './UseVisitor';
import { ShapesVisitor } from './ShapesVisitor';

export class SubjektModelVisitor
    extends AbstractParseTreeVisitor<SubjektModel>
    implements SubjektVisitor<SubjektModel> {

    modelContext: SubjektModelContext;
    prelude: Prelude;

    useVisitor: UseVisitor;
    shapesVisitor: ShapesVisitor;

    constructor(namespace: string) {
        super();
        this.prelude = new Prelude();
        this.modelContext = {
            namespace,
            prelude: this.prelude
        };
        this.useVisitor = new UseVisitor(this.modelContext);
        this.shapesVisitor = new ShapesVisitor(this.modelContext);
    }

    protected defaultResult(): SubjektModel {
        return {
            prelude: this.prelude
        };
    }

    visitSubjekts(ctx: SubjektsContext): SubjektModel {
        const model: SubjektModel = {
            prelude: this.prelude,
            uses: this.useVisitor.visit(ctx.useBlock()),
            shapes: this.shapesVisitor.visit(ctx.shapeBlock())
        };
        return model;
    }
}
