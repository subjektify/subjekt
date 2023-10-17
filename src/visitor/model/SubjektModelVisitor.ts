import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MetadataStatementContext, SubjektVisitor, SubjektsContext } from "../../antlr";
import { Prelude, SubjektModel } from "../../types";

export class SubjektModelVisitor
    extends AbstractParseTreeVisitor<SubjektModel>
    implements SubjektVisitor<SubjektModel> {

    prelude: Prelude;

    constructor() {
        super();
        this.prelude = new Prelude();
    }

    protected defaultResult(): SubjektModel {
        return {
            prelude: this.prelude
        };
    }

    visitSubjekt(ctx: SubjektsContext): SubjektModel {
        const model: SubjektModel = {
            prelude: this.prelude,
            metadata: ctx.metadataStatement().map(this.visitMetadata)
        };
        return model;
    }

    visitMetadata(ctx: MetadataStatementContext): object {
        const identifier = ctx.identifier()?.text;
        const value = ctx.value()?.text; //TODO: Move to value visitor
        return { [identifier]: value };
    }
}
