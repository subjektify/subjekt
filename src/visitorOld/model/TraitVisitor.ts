import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SubjektVisitor } from "../../antlr";
import { AppliedTraits, SubjektModelContext } from '../../types';

export class TraitVisitor
    extends AbstractParseTreeVisitor<AppliedTraits>
    implements SubjektVisitor<AppliedTraits> {

        modelContext: SubjektModelContext;

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
    }

    protected defaultResult(): AppliedTraits {
        return {};
    }
}
