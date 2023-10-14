import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SubjektLexer, SubjektParser } from "../antlr";
import { SubjektModel } from "../types";
import { SubjektModelVisitor } from '../visitor';

export const parseSubjekt = (content: string): SubjektModel => {

    // Create the lexer and parser
    let inputStream = CharStreams.fromString(content);
    let lexer = new SubjektLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new SubjektParser(tokenStream);

    // Parse the SubjektModel from the SubjektModelVisitor
    const visitor = new SubjektModelVisitor();
    let tree = parser.subjekts();
    const model = visitor.visit(tree);

    return model;
}
