import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  MemberContext,
  ShapeDefinitionContext,
  ShapeMembersContext,
  SubjektVisitor,
} from "../../antlr";
import {
  BehaviorShape,
  EnumMember,
  EnumShape,
  ErrorShape,
  EventShape,
  ListShape,
  MapShape,
  Shape,
  ShapeType,
  StructureShape,
  SubjectShape,
  SubjektModelContext,
  Target,
} from "../../types";
import { ShapeIdVisitor } from "../core";
import { ShapeIDUtil, ShapeTypeUtil } from "../../util";
import { TargetVisitor } from "./TargetVisitor";

export class ShapeDefinitionVisitor
  extends AbstractParseTreeVisitor<[string, Shape]>
  implements SubjektVisitor<[string, Shape]>
{
  modelContext: SubjektModelContext;
  shapeIdVisitor: ShapeIdVisitor;
  targetVisitor: TargetVisitor;

  constructor(modelContext: SubjektModelContext) {
    super();
    this.modelContext = modelContext;
    this.shapeIdVisitor = new ShapeIdVisitor(modelContext);
    this.targetVisitor = new TargetVisitor(modelContext);
  }

  protected defaultResult(): [string, Shape] {
    return [
      "",
      {
        type: "none",
      },
    ];
  }

  public visitShapeDefinition(ctx: ShapeDefinitionContext): [string, Shape] {
    const shapeId = this.shapeIdVisitor.visit(ctx.identifier());
    const shapeIdString = ShapeIDUtil.toString(shapeId);
    const shape = this._visitShapeDefinition(ctx);
    return [shapeIdString, shape];
  }

  private _visitShapeDefinition(ctx: ShapeDefinitionContext): Shape {
    const shapeType = ctx.shapeType().text;
    if (ShapeTypeUtil.isSimpleShapeType(shapeType)) {
      return this._visitSimpleShapeDefinition(ctx);
    } else if (ShapeTypeUtil.isAggregateShapeType(shapeType)) {
      return this._visitAggregateShapeDefinition(ctx);
    } else if (ShapeTypeUtil.isSubjectShapeType(shapeType)) {
      return this._visitSubjectShapeDefinition(ctx);
    } else {
      throw new Error(`Unsupported shape type: ${shapeType}`);
    }
  }

  // Simple shapes
  private _visitSimpleShapeDefinition(ctx: ShapeDefinitionContext): Shape {
    const type = ctx.shapeType().text as ShapeType;
    return {
      type,
    };
  }

  // Aggregate shapes
  private _visitAggregateShapeDefinition(ctx: ShapeDefinitionContext): Shape {
    const shapeType = ctx.shapeType().text;
    const shapeMembers = ctx.shapeTypeDefinition()?.shapeMembers();
    switch (shapeType) {
      case "enum":
        return this._visitEnumShape(shapeMembers);
      case "list":
        return this._visitListShape(shapeMembers);
      case "map":
        return this._visitMapShape(shapeMembers);
      case "structure":
        return this._visitStructureShape(shapeMembers);
      default:
        throw new Error(`Unsupported aggregate shape type: ${shapeType}`);
    }
  }

  private _visitEnumShape(ctx?: ShapeMembersContext): EnumShape {
    const enumMembers = ctx?.enumMembers()?.enumMember();
    let members: Record<string, EnumMember> = {};
    enumMembers?.forEach((member) => {
      const memberName = member.identifier().text;
      const memberValue =
        member.INTEGER()?.text || member.string()?.text || memberName;
      const target = isNaN(+Number(memberValue))
        ? this.targetVisitor.visit("string").target
        : this.targetVisitor.visit("int").target;
      members[memberName] = {
        value: memberValue,
        target,
      };
    });
    return {
      type: "enum",
      members,
    };
  }

  private _visitListShape(ctx?: ShapeMembersContext): ListShape {
    const listMember = ctx?.listMember();
    const memberValue =
      listMember?.shapeType()?.text || listMember?.identifier()?.text;
    if (!memberValue) {
      throw new Error("List member value is required");
    }
    const member = this.targetVisitor.visit(memberValue);
    return {
      type: "list",
      member,
    };
  }

  private _visitMapShape(ctx?: ShapeMembersContext): MapShape {
    const keyValuePairs = ctx?.mapMembers()?.keyValuePair();
    if (!keyValuePairs) {
      throw new Error("Map shape must have a key and value");
    }
    let _key: string | undefined;
    let _value: string | undefined;
    keyValuePairs.forEach((keyValuePair) => {
      if (keyValuePair.KEY()) {
        _key =
          keyValuePair.shapeType()?.text || keyValuePair.identifier()?.text;
      } else if (keyValuePair.VALUE()) {
        _value =
          keyValuePair.shapeType()?.text || keyValuePair.identifier()?.text;
      }
    });
    if (!_key || !_value) {
      throw new Error("Map shape must have a key and value");
    }
    return {
      type: "map",
      key: this.targetVisitor.visit(_key),
      value: this.targetVisitor.visit(_value),
    };
  }

  private _visitStructureShape(ctx?: ShapeMembersContext): StructureShape {
    const members = this._members(ctx?.member());
    return {
      type: "structure",
      members,
    };
  }

  // Subject shapes
  private _visitSubjectShapeDefinition(ctx: ShapeDefinitionContext): Shape {
    const shapeType = ctx.shapeType().text;
    const shapeMembers = ctx.shapeTypeDefinition()?.shapeMembers();
    switch (shapeType) {
      case "subject":
        return this._visitSubjectShape(shapeMembers);
      case "behavior":
        return this._visitBehaviorShape(shapeMembers);
      case "event":
        return this._visitEventShape(shapeMembers);
      case "error":
        return this._visitErrorShape(shapeMembers);
      default:
        throw new Error(`Unsupported subject shape type: ${shapeType}`);
    }
  }

  private _visitSubjectShape(ctx?: ShapeMembersContext): SubjectShape {
    let state: Record<string, Target> = {};
    let behaviors: Target[] = [];
    let events: Target[] = [];
    const subjectMembers = ctx?.subjectMembers();
    subjectMembers?.forEach((subjectMember) => {
      const stateReference = subjectMember.stateReference();
      const behaviorReference = subjectMember.behaviorReference();
      const eventReference = subjectMember.eventReference();
      if (stateReference) {
        state = this._members(stateReference?.member());
      } else if (behaviorReference) {
        const identifiers = behaviorReference?.identifier();
        identifiers?.forEach((identifier) => {
          behaviors.push(this.targetVisitor.visit(identifier.text));
        });
      } else if (eventReference) {
        const identifiers = eventReference?.identifier();
        identifiers?.forEach((identifier) => {
          events.push(this.targetVisitor.visit(identifier.text));
        });
      }
    });
    return {
      type: "subject",
      state,
      behaviors,
      events,
    };
  }

  private _visitBehaviorShape(ctx?: ShapeMembersContext): BehaviorShape {
    let input: Target | undefined;
    let output: Target | undefined;
    let errors: Target[] = [];
    const behaviorMembers = ctx?.behaviorMembers();
    behaviorMembers?.forEach((behaviorMember) => {
      const inputReference = behaviorMember.inputReference();
      const outputReference = behaviorMember.outputReference();
      const errorReference = behaviorMember.errorReference();
      if (inputReference) {
        const inputIdentifier =
          inputReference.shapeType()?.text || inputReference.identifier()?.text;
        if (!inputIdentifier) {
          throw new Error("Behavior input is required");
        }
        input = this.targetVisitor.visit(inputIdentifier);
      } else if (outputReference) {
        const outputIdentifier =
          outputReference.shapeType()?.text ||
          outputReference.identifier()?.text;
        if (!outputIdentifier) {
          throw new Error("Behavior output is required");
        }
        output = this.targetVisitor.visit(outputIdentifier);
      } else if (errorReference) {
        const identifiers = errorReference.identifier();
        identifiers?.forEach((identifier) => {
          errors.push(this.targetVisitor.visit(identifier.text));
        });
      }
    });
    return {
      type: "behavior",
      input,
      output,
      errors,
    };
  }

  private _visitEventShape(ctx?: ShapeMembersContext): EventShape {
    const members = this._members(ctx?.member());
    return {
      type: "event",
      members,
    };
  }

  private _visitErrorShape(ctx?: ShapeMembersContext): ErrorShape {
    const members = this._members(ctx?.member());
    return {
      type: "error",
      members,
    };
  }

  private _members(ctx?: MemberContext[]): Record<string, Target> {
    let members: Record<string, Target> = {};
    ctx?.forEach((member) => {
      const memberName = member.identifier()[0].text;
      const memberValue =
        member.shapeType()?.text || member.identifier()[1]?.text;
      members[memberName] = this.targetVisitor.visit(memberValue);
    });
    return members;
  }
}
