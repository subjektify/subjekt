import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { IdlContext, SubjektLexer, SubjektParser } from "../antlr";

export abstract class BaseParser<T> {

    abstract parse(namespace: string, content: string): T;

    protected getIdl(content: string): IdlContext {
        let parser = this.getParser(content);
        return parser.idl();
    }

    private getParser(content: string): SubjektParser {
        let inputStream = CharStreams.fromString(content);
        let lexer = new SubjektLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new SubjektParser(tokenStream);
        return parser;
    }
}
