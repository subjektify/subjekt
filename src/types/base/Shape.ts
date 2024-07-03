import { AppliedTraits } from "./Trait";

export type Shapes = Record<string, Shape>;

export interface Shape {
    type: ShapeType
    traits?: AppliedTraits
};

/**
 * Shape Types
 */
export type  ShapeType = 
    SimpleShapeType
    | AggregateShapeType
    | SubjectShapeType;

export type SimpleShapeType =
    'address'
    | 'blob'
    | 'boolean'
    | 'byte'
    | 'bytes'
    | 'document'
    | 'double'
    | 'float'
    | 'int'
    | 'int8'
    | 'int16'
    | 'int32'
    | 'int64'
    | 'int128'
    | 'int256'
    | 'none'
    | 'string'
    | 'timestamp'
    | 'uint'
    | 'uint8'
    | 'uint16'
    | 'uint32'
    | 'uint64'
    | 'uint128'
    | 'uint256';

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
    | 'output'
    | 'composition';

/**
 * ShapeID
 */
export type ShapeID = {
    namespace: NamespaceIdentifier;
    identifier: Identifier;
    member?: Identifier;
};

export type RootShapeID =
    AbsoluteRootShapeID
    | Identifier;

export interface AbsoluteRootShapeID {
    namespace: NamespaceIdentifier;
    identifier: Identifier;
};

export type NamespaceIdentifier = string;
export type Identifier = string;
