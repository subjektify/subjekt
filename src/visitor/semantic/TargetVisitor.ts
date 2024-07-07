import { TraitContext } from "../../antlr";
import { AppliedTraits, SubjektModelContext, Target } from "../../types";
import { ShapeTypeUtil } from "../../util";
import { TraitVisitor } from "./TraitVisitor";

export class TargetVisitor {
  modelContext: SubjektModelContext;
  traitVisitor: TraitVisitor;

  constructor(modelContext: SubjektModelContext) {
    this.modelContext = modelContext;
    this.traitVisitor = new TraitVisitor(modelContext);
  }

  public visit(value: string, traitsContext: TraitContext[]): Target {
    const traits = this._visitTraits(traitsContext);
    if (ShapeTypeUtil.isShapeType(value)) {
      return {
        target: {
          namespace: "subjekt",
          identifier: value,
        },
        traits,
      };
    }
    for (const use of this.modelContext.uses) {
      if (use.identifier === value) {
        return {
          target: use,
          traits,
        };
      }
    }
    return {
      target: {
        namespace: this.modelContext.namespace,
        identifier: value,
      },
      traits,
    };
  }

  private _visitTraits(ctx?: TraitContext[]): AppliedTraits {
    const traits: AppliedTraits = {};
    ctx?.forEach((trait) => {
      const [id, value] = this.traitVisitor.visit(trait);
      traits[id] = value;
    });
    return traits;
  }
}
