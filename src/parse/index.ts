import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { subjektLexer, subjektParser } from "../antlr";
import { Prelude, SubjektModel } from "../types";

export const parseSubjekt = (content: string): SubjektModel => {

    // Create the lexer and parser
    let inputStream = CharStreams.fromString(content);
    let lexer = new subjektLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new subjektParser(tokenStream);

    return {
        prelude: new Prelude()
    }
}
