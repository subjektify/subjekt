import { AppliedTraits } from "./Trait";

export interface Shapes {
    [key: string]: Shape
}

export interface Shape {
    type: ShapeType
    traits?: AppliedTraits
}

export type  ShapeType = 
    SimpleShapeType
    | AggregateShapeType
    | SubjectShapeType;

export type SimpleShapeType =
    'address'
    | 'blob'
    | 'boolean'
    | 'bytes'
    | 'document'
    | 'double'
    | 'int'
    | 'integer'
    | 'string'
    | 'timestamp'
    | 'uint';

export type AggregateShapeType =
    'enum'
    | 'list'
    | 'map'
    | 'structure'
    | 'union';

export type SubjectShapeType =
    'subject'
    | 'state'
    | 'behavior'
    | 'event'
    | 'input'
    | 'output';

/**
 * ShapeID
 */
export type ShapeID = {
    namespace: NamespaceIdentifier;
    identifier: Identifier;
    member?: Identifier;
}

export type RootShapeID =
    AbsoluteRootShapeID
    | Identifier;

export interface AbsoluteRootShapeID {
    namespace: NamespaceIdentifier;
    identifier: Identifier;
}

export type NamespaceIdentifier = string;
export type Identifier = string;
