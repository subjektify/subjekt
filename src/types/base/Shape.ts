import { type } from "os";
import { AppliedTraits } from "./Trait";

export interface Shapes {
    [key: string]: Shape
}

export interface Shape {
    type: ShapeType
    traits?: AppliedTraits
}

export interface ShapeID {
    namespace: string;
    shapeName: string;
    memberName?: string;
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
    | 'union'
    | 'trait';

export type SubjectShapeType =
    'subject'
    | 'state'
    | 'behavior'
    | 'event'
    | 'input'
    | 'output';
