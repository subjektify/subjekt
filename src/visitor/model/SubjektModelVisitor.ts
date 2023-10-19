import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MetadataStatementContext, SubjektVisitor, SubjektsContext } from "../../antlr";
import { Prelude, SubjektModel } from "../../types";
import { UseVisitor } from './UseVisitor';

export class SubjektModelVisitor
    extends AbstractParseTreeVisitor<SubjektModel>
    implements SubjektVisitor<SubjektModel> {

    prelude: Prelude;

    useVisitor: UseVisitor

    constructor() {
        super();
        this.prelude = new Prelude();
        this.useVisitor = new UseVisitor();
    }

    protected defaultResult(): SubjektModel {
        return {
            prelude: this.prelude
        };
    }

    visitSubjekts(ctx: SubjektsContext): SubjektModel {
        const model: SubjektModel = {
            prelude: this.prelude,
            uses: this.useVisitor.visit(ctx.useBlock())
        };
        return model;
    }

    visitMetadata(ctx: MetadataStatementContext): object {
        const identifier = ctx.identifier()?.text;
        const value = ctx.value()?.text; //TODO: Move to value visitor
        return { [identifier]: value };
    }
}
