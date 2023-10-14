import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SubjektsContext, SubjektLexer, SubjektParser } from "../antlr";
import { SubjektModel } from "../types";
import { SubjektModelVisitor } from '../visitor';

export const parseSubjekt = (content: string): SubjektModel => {

    // Create the lexer and parser
    let inputStream = CharStreams.fromString(content);
    let lexer = new SubjektLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new SubjektParser(tokenStream);

    // Parse the model from the context
    let tree = parser.subjekts();
    const model = TreeToModel(tree);

    return model;
}

const TreeToModel = (tree: SubjektsContext): SubjektModel => {
    // Return the SubjektModel from the SubjektModelVisitor
    const visitor = new SubjektModelVisitor();
    return visitor.visit(tree);
}
