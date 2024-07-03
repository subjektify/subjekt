import { BaseParser } from "./base";
import { ASTVisitor } from '../visitor';
import { ASTModel } from "../types";

export class ASTParser extends BaseParser<ASTModel> {
    public parse(namespace: string, content: string): ASTModel {

        const visitor = new ASTVisitor(namespace);
        let tree = this.getIdl(content);
        
        const model = visitor.visit(tree);
    
        return model;
    }
}
