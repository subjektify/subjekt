/**
 * This file represents the JSON Abstract Syntax Tree (AST) model for a Subjekt model.
 */

export interface ASTModel {
    metadata?: object;
    shapes?: Map<string, ASTShape>;
}

// Use Statements
export interface ASTUseStatement {
    shapeId: ASTShapeID;
}

// ShapeID
export interface ASTShapeID {
    namespace: string;
    shapeName: string;
    memberName?: string;
}

// Types
export enum ASTSimpleShapeTypes {
    KECCAK256_ADDRESS = 'keccak256Address',
    ED25519_ADDRESS = 'ed25519Address',
    UINT8 = 'uint8',
    UINT16 = 'uint16',
    UINT32 = 'uint32',
    UINT256 = 'uint256',
    INT = 'int',
    INT8 = 'int8',
    INT16 = 'int16',
    INT32 = 'int32',
    INT256 = 'int256',
    BYTE = 'byte',
    BYTES = 'bytes',
    BYTES32 = 'bytes32',
    BLOB = 'blob',
    BOOLEAN = 'boolean',
    DOCUMENT = 'document',
    STRING = 'string',
    FLOAT = 'float',
    DOUBLE = 'double',
    BIG_INTEGER = 'bigInteger',
    BIG_DECIMAL = 'bigDecimal',
    TIMESTAMP = 'timestamp',
    HASH256 = 'hash256',
    HASH512 = 'hash512',
    UNIT = 'unit'
}

export enum ASTAggregateShapeTypes {
    ENUM = 'enum',
    LIST = 'list',
    MAP = 'map',
    STRUCTURE = 'structure',
    UNION = 'union',
    TRAIT = 'trait'
}

export enum ASTSubjectShapeTypes {
    SUBJECT = 'subject',
    STATE = 'state',
    BEHAVIOR = 'behavior',
    TRIGGER = 'trigger',
    INPUT = 'input',
    OUTPUT = 'output'
}

export type ASTShapeTypes =
    ASTSimpleShapeTypes
    | ASTAggregateShapeTypes
    | ASTSubjectShapeTypes;

// Shapes
export interface ASTShape {
    type: ASTShapeTypes;
    traits?: Map<ASTShapeID, ASTTraitValue>;
}

export interface ASTSimpleShape extends ASTShape {
    type: ASTSimpleShapeTypes;
}

export interface ASTAggregateShape extends ASTShape {
    members: Map<string, ASTMember>;
}

export interface ASTEnumShape extends ASTAggregateShape {
    type: ASTAggregateShapeTypes.ENUM;
    members: Map<string, ASTMember>;
}

export interface ASTListShape extends ASTShape {
    type: ASTAggregateShapeTypes.LIST;
    member: ASTMember;
}

export interface ASTMapShape extends ASTShape {
    type: ASTAggregateShapeTypes.MAP;
    key: ASTMember;
    value: ASTMember;
}

export interface ASTStructureShape extends ASTAggregateShape {
    type: ASTAggregateShapeTypes.STRUCTURE;
}

// Subjects
export interface ASTSubjectShape extends ASTShape {
    type: ASTSubjectShapeTypes.SUBJECT;
    version: string;
    state?: ASTShapeReference[];
    behaviors?: ASTShapeReference[];
    subscriptions?: ASTShapeReference[];
}

export interface ASTStateShape extends ASTAggregateShape {
    type: ASTSubjectShapeTypes.STATE;
}

export interface ASTBehaviorShape extends ASTShape {
    type: ASTSubjectShapeTypes.BEHAVIOR;
    input?: ASTShapeReference[];
    output?: ASTShapeReference[];
    errors?: ASTShapeReference[];
    triggers?: ASTShapeReference[];
}

export interface ASTTriggerShape extends ASTAggregateShape {
    type: ASTSubjectShapeTypes.TRIGGER;
}

// Traits
export interface ASTTraitShape extends ASTAggregateShape {
    type: ASTAggregateShapeTypes.TRAIT;
}

export type ASTTraitValue = string | string[];

// References
export interface ASTShapeReference {
    target: string;
}

export interface ASTMember extends ASTShapeReference {
    traits?: Map<ASTShapeID, ASTTraitValue>;
}
