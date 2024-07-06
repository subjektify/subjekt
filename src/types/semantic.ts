import { NodeValue, ShapeID, ShapeType } from "./core";

/**
 * SubjektModel is the semantic model used by Subjekt.
 */
export type SubjektModel = {
    metadata?: Metadata;
    uses?: ShapeID[];
    shapes?: Shapes;
}

export type Metadata = Record<string, NodeValue>;

/**
 * Shapes are the building blocks of the Subjekt model.
 */
export type Shapes = Record<string, Shape>;

export interface Shape {
    type: ShapeType
    traits?: AppliedTraits
};

export interface EnumShape extends Shape {
    members: Record<string, EnumMember>;
};

export interface EnumMember {
    value: string | number;
    target: ShapeID;
    traits?: AppliedTraits;
};

export interface ListShape extends Shape {
    member: Target
};

export interface MapShape extends Shape {
    key: Target;
    value: Target;
};

export interface StructureShape extends Shape {
    members: Record<string, Target>;
};

export interface SubjectShape extends Shape {
    state: Record<string, Target>;
    behaviors: Target[];
    events: Target[];
};

export interface BehaviorShape extends Shape {
    input: Target;
    output: Target;
    errors: Target[];
};

export interface EventShape extends Shape {
    members: Record<string, Target>;
};

export interface ErrorShape extends Shape {
    members: Record<string, Target>;
};

export interface Target {
    target: ShapeID;
    traits?: AppliedTraits;
};

export type AppliedTraits = Record<string, NodeValue>;
