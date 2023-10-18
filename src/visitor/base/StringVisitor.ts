import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";

export class StringVisitor
    extends AbstractParseTreeVisitor<string>
    implements SubjektVisitor<string> {

    constructor() {
        super();
    }

    protected defaultResult(): string {
        return "";
    }
}
