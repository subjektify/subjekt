import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../antlr";
import { Prelude, SubjektModel } from "../types";

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
}
