/**
 * Metadata describes additional information about the Subjekt model.
 */
export type Metadata = Record<string, NodeValue>;

/**
 * NodeValue is a type that represents the possible values of a node in a JSON object.
 */
export type NodeValue = String | Number | Boolean | NodeObject | NodeArray;

export interface NodeObject {
  [key: string]: NodeValue;
}

export interface NodeArray extends Array<NodeValue> {}

/**
 * ShapeID
 */
export type ShapeID = {
  namespace: NamespaceIdentifier;
  identifier: Identifier;
  member?: Identifier;
};

export type RootShapeID = AbsoluteRootShapeID | Identifier;

export interface AbsoluteRootShapeID {
  namespace: NamespaceIdentifier;
  identifier: Identifier;
}

export type NamespaceIdentifier = string;
export type Identifier = string;

/**
 * Shape types supported by the Subjekt model.
 */
export type ShapeType = SimpleShapeType | AggregateShapeType | SubjectShapeType;

export type SimpleShapeType =
  | "address"
  | "blob"
  | "boolean"
  | "byte"
  | "bytes"
  | "document"
  | "double"
  | "float"
  | "int"
  | "int8"
  | "int16"
  | "int32"
  | "int64"
  | "int128"
  | "int256"
  | "none"
  | "string"
  | "timestamp"
  | "uint"
  | "uint8"
  | "uint16"
  | "uint32"
  | "uint64"
  | "uint128"
  | "uint256";

export type AggregateShapeType =
  | "enum"
  | "list"
  | "map"
  | "structure"
  | "union";

export type SubjectShapeType = "subject" | "behavior" | "event" | "error";
