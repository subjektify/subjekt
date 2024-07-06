import { BaseParser } from "./base";
import { AstModelVisitor } from "../visitor";
import { AstModel } from "../types";

export class AstParser extends BaseParser<AstModel> {
  public parse(namespace: string, content: string): AstModel {
    const visitor = new AstModelVisitor(namespace);
    let tree = this.getIdl(content);

    const model = visitor.visit(tree);

    return model;
  }
}
