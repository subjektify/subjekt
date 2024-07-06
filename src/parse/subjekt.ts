import { BaseParser } from "./base";
import { SubjektModelVisitor } from "../visitor";
import { SubjektModel } from "../types";

export class SubjektParser extends BaseParser<SubjektModel> {
  public parse(namespace: string, content: string): SubjektModel {
    const visitor = new SubjektModelVisitor(namespace);
    let tree = this.getIdl(content);

    const model = visitor.visit(tree);

    return model;
  }
}
