import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SubjektLexer, SubjektParser } from "../antlr";
import { ASTModel, SubjektModel } from "../types";
import { ASTVisitor, SubjektModelVisitor } from '../visitor';

// Parse the SubjektModel from the SubjektModelVisitor
export const parseSubjekt = (namespace: string, content: string): SubjektModel => {

    const visitor = new SubjektModelVisitor();
    let parser = getParser(content);

    let tree = parser.subjekts();
    const model = visitor.visit(tree);

    return model;
}

// Parse the AST from the ASTVisitor
export const parseAST = (content: string): ASTModel => {

    const visitor = new ASTVisitor();
    let parser = getParser(content);

    let tree = parser.subjekts();
    const model = visitor.visit(tree);

    return model;
}

// Create the lexer and parser
const getParser = (content: string) => {
    let inputStream = CharStreams.fromString(content);
    let lexer = new SubjektLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new SubjektParser(tokenStream);
    return parser;
}
