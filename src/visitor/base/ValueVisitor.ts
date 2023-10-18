import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";
import { NodeValue } from "../../types";

export class ValueVisitor
    extends AbstractParseTreeVisitor<NodeValue>
    implements SubjektVisitor<NodeValue> {

    constructor() {
        super();
    }

    protected defaultResult(): NodeValue {
        return "";
    }
}
