import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, SubjektsContext } from "../../antlr";
import { Prelude, SubjektModel } from "../../types";
import { UseVisitor } from './UseVisitor';
import { ShapesVisitor } from './ShapesVisitor';

export class SubjektModelVisitor
    extends AbstractParseTreeVisitor<SubjektModel>
    implements SubjektVisitor<SubjektModel> {

    namespace: string;
    prelude: Prelude;

    useVisitor: UseVisitor;
    shapesVisitor: ShapesVisitor;

    constructor(namespace: string) {
        super();
        this.namespace = namespace;
        this.prelude = new Prelude();
        this.useVisitor = new UseVisitor(namespace);
        this.shapesVisitor = new ShapesVisitor(namespace);
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
