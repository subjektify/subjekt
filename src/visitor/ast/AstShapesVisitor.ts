import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ShapeBlockContext, SubjektVisitor } from "../../antlr";
import { AstShape, AstShapes, SubjektModelContext } from "../../types";
import { AstShapeVisitor } from "./AstShapeVisitor";

export class AstShapesVisitor
  extends AbstractParseTreeVisitor<AstShapes>
  implements SubjektVisitor<AstShapes>
{
  modelContext: SubjektModelContext;
  shapeVisitor: AstShapeVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.shapeVisitor = new AstShapeVisitor(modelContext);
  }

  protected defaultResult(): AstShapes {
    return {};
  }

  public visitShapeBlock(ctx: ShapeBlockContext): AstShapes {
    const shapes: AstShapes = {};
    ctx.shapeStatement().forEach((shapeStatement) => {
      const [id, shape]: [string, AstShape] =
        this.shapeVisitor.visit(shapeStatement);
      shapes[id] = shape;
    });
    return shapes;
  }
}
