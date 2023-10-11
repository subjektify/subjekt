import { Prelude } from "./Prelude";

export interface SemanticModel {
    metadata?: object;
    prelude: Prelude;
    uses?: ShapeID[];
    shapes?: Shape[];
}

export interface Shape {
    id: ShapeID
    traits?: AppliedTrait[]
}

export interface ShapeID {
    namespace: string;
    shapeName: string;
    memberName?: string;
}

export interface AppliedTrait {
    value: NodeValue
}

export type NodeValue = String
| Number
| Boolean
| NodeObject
| NodeArray;

interface NodeObject {
    [key: string]: NodeValue;
}

interface NodeArray extends Array<NodeValue> { }
