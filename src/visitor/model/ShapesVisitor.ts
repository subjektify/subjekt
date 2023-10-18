import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";
import { Shape } from '../../types';

export class ShapesVisitor
    extends AbstractParseTreeVisitor<Shape>
    implements SubjektVisitor<Shape> {

    constructor() {
        super();
    }

    protected defaultResult(): Shape {
        return {
            type: {
                namespace: "",
                shapeName: "",
            }
        };
    }
}
