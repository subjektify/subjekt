import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";
import { ShapeID } from "../../types";

export class UseVisitor
    extends AbstractParseTreeVisitor<ShapeID[]>
    implements SubjektVisitor<ShapeID[]> {

    constructor() {
        super();
    }

    protected defaultResult(): ShapeID[] {
        return [];
    }
}
