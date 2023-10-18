import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";
import { ASTModel } from "../../types";

export class ASTVisitor
    extends AbstractParseTreeVisitor<ASTModel>
    implements SubjektVisitor<ASTModel> {

    constructor() {
        super();
    }

    protected defaultResult(): ASTModel {
        return { }
    }
}
