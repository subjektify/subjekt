import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor, IdlContext } from "../../antlr";
import { SubjektModel, SubjektModelContext } from "../../types";
import { MetadataVisitor } from '../base';
import { UseVisitor } from './UseVisitor';
import { ShapesVisitor } from './ShapesVisitor';

export class SubjektModelVisitor
    extends AbstractParseTreeVisitor<SubjektModel>
    implements SubjektVisitor<SubjektModel> {

    modelContext: SubjektModelContext;

    metadataVisitor: MetadataVisitor;
    useVisitor: UseVisitor;
    shapesVisitor: ShapesVisitor;

    constructor(namespace: string) {
        super();
        this.modelContext = {
            namespace
        };
        this.metadataVisitor = new MetadataVisitor(this.modelContext);
        this.useVisitor = new UseVisitor(this.modelContext);
        this.shapesVisitor = new ShapesVisitor(this.modelContext);
    }

    protected defaultResult(): SubjektModel {
        return { };
    }

    visitIdl(ctx: IdlContext): SubjektModel {
        const uses = this.useVisitor.visit(ctx.useBlock());
        this.shapesVisitor.uses(uses);
        const model: SubjektModel = {
            metadata: this.metadataVisitor.visit(ctx.metadataBlock()),
            uses,
            shapes: this.shapesVisitor.visit(ctx.shapeBlock())
        };
        return model;
    }
}
