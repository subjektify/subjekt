import { Metadata, NodeValue, ShapeID, ShapeType } from "./core";

export interface AstModel {
  metadata?: Metadata;
  shapes?: AstShapes;
}

export type AstShapes = Record<string, AstShape>;

export interface AstShape {
  type: ShapeType;
  traits?: AstAppliedTraits;
}

export interface AstEnumShape extends AstShape {
  members: Record<string, AstEnumMember>;
}

export interface AstEnumMember {
  value: string | number;
  target: ShapeID;
  traits?: AstAppliedTraits;
}

export interface AstListShape extends AstShape {
  member: AstTarget;
}

export interface AstMapShape extends AstShape {
  key: AstTarget;
  value: AstTarget;
}

export interface AstStructureShape extends AstShape {
  members: Record<string, AstTarget>;
}

export interface AstSubjectShape extends AstShape {
  state: Record<string, AstTarget>;
  behaviors: AstTarget[];
  events: AstTarget[];
}

export interface AstBehaviorShape extends AstShape {
  input?: AstTarget;
  output?: AstTarget;
  errors?: AstTarget[];
}

export interface AstEventShape extends AstShape {
  members: Record<string, AstTarget>;
}

export interface AstErrorShape extends AstShape {
  members: Record<string, AstTarget>;
}

export interface AstTarget {
  target: ShapeID;
  traits?: AstAppliedTraits;
}

export type AstAppliedTraits = Record<string, NodeValue>;
