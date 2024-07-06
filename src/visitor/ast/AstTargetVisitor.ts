import { SubjektModelContext, AstTarget } from "../../types";
import { ShapeTypeUtil } from "../../util";

export class AstTargetVisitor {
  modelContext: SubjektModelContext;

  constructor(modelContext: SubjektModelContext) {
    this.modelContext = modelContext;
  }

  public visit(value: string): AstTarget {
    if (ShapeTypeUtil.isShapeType(value)) {
      return {
        target: {
          namespace: "subjekt",
          identifier: value,
        },
      };
    }
    for (const use of this.modelContext.uses) {
      if (use.identifier === value) {
        return {
          target: use,
        };
      }
    }
    return {
      target: {
        namespace: this.modelContext.namespace,
        identifier: value,
      },
    };
  }
}
