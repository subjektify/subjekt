grammar Subjekt;

/*
 * Parser Rules
 */

// Entry point
idl: metadataBlock useBlock shapeBlock EOF;

// MetadataBlock
metadataBlock: metadataStatement*;
metadataStatement: METADATA identifier ASSIGNMENT value;

// `use` statement imports shapes from other namespaces.
useBlock: useStatement*;
useStatement: USE absoluteRootShapeId;

// Shapes
shapeBlock: shapeStatement*;
shapeStatement: trait* shapeDefinition;
shapeDefinition: shapeType identifier shapeTypeDefinition?;

shapeType:
	AGGREGATE_SHAPE_TYPE
	| SIMPLE_SHAPE_TYPE
	| SUBJECT_SHAPE_TYPE;
shapeTypeDefinition:
	aggregateShapeTypeDefinition
	| simpleShapeTypeDefinition
	| subjectShapeTypeDefinition;

// Shape type definitions
simpleShapeTypeDefinition: (ASSIGNMENT value)?;
aggregateShapeTypeDefinition:
	LCURLY aggregateShapeMembers? RCURLY;
subjectShapeTypeDefinition: LCURLY subjectShapeMembers? RCURLY;

// Shape members
aggregateShapeMembers:
	enumMembers
	| listMembers
	| mapMembers
	| member*;
subjectShapeMembers:
	stateReference
	| behaviorReference
	| eventReference
	| member*;

// Aggregate shape members
enumMembers: enumMember (COMMA? enumMember)*;
enumMember: identifier (ASSIGNMENT (string | INTEGER))?;
listMembers: MEMBER COLON (shapeType | identifier);
mapMembers: keyValuePair*;
keyValuePair:
	KEY COLON (shapeType | identifier)
	| VALUE COLON (shapeType | identifier);

// Subject shape members
stateReference:
	STATE COLON LCURLY (
		identifier COLON (shapeType | identifier)
	)* RCURLY;
behaviorReference: BEHAVIORS COLON LBRACK identifier* RBRACK;
eventReference: EVENTS COLON LBRACK identifier* RBRACK;

behaviorMembers:
	inputReference
	| outputReference
	| errorReference;
inputReference: INPUT COLON (shapeType | identifier)+;
outputReference: OUTPUT COLON (shapeType | identifier)+;
errorReference: ERRORS COLON LBRACK identifier* RBRACK;
member:
	identifier COLON (shapeType | identifier) (ASSIGNMENT value)?;

// ShapeID
shapeId: rootShapeId shapeIdMember?;
rootShapeId: absoluteRootShapeId | identifier;
absoluteRootShapeId: namespaceIdentifier HASH_SIGN identifier;
shapeIdMember: DOLLAR_SIGN identifier;

// Traits
trait: AT_SIGN identifier traitBody?;
traitBody: LPAREN (traitStructureList | traitNode)? RPAREN;
traitStructureList: traitStructure+;
traitStructure: identifier ASSIGNMENT value;
traitNode: value;

// Values
value: string | number | listValue | objectValue;

listValue: LBRACK (value)* RBRACK;
objectValue: LCURLY kvp* RCURLY;

kvp: identifier COLON value;
string: SINGLE_STRING | DOUBLE_STRING;
number: INTEGER | FLOAT;

namespaceIdentifier: NAMESPACE_IDENTIFIER_CHARS;
identifier: IDENTIFIER_CHARS;

/*
 * Lexer Rules
 */

// Reserved keywords
METADATA: 'metadata';
USE: 'use';
MEMBER: 'member';
KEY: 'key';
VALUE: 'value';
STATE: 'state';
BEHAVIORS: 'behaviors';
EVENTS: 'events';
ERRORS: 'errors';
INPUT: 'input';
OUTPUT: 'output';
AGGREGATE_SHAPE_TYPE: 'enum' | 'list' | 'map' | 'structure';
SIMPLE_SHAPE_TYPE:
	'address'
	| 'blob'
	| 'boolean'
	| 'byte'
	| 'bytes'
	| 'document'
	| 'double'
	| 'float'
	| 'uint'
	| 'uint8'
	| 'uint16'
	| 'uint32'
	| 'uint64'
	| 'uint128'
	| 'uint256'
	| 'int'
	| 'int8'
	| 'int16'
	| 'int32'
	| 'int64'
	| 'int128'
	| 'int256'
	| 'string'
	| 'timestamp'
	| 'hash256'
	| 'hash512'
	| 'none';

SUBJECT_SHAPE_TYPE: 'subject' | 'behavior' | 'event' | 'error';

// Symbols
AT_SIGN: '@';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LCURLY: '{';
RCURLY: '}';
ASSIGNMENT: '=';
COLON: ':';
HASH_SIGN: '#';
DOLLAR_SIGN: '$';
DOT: '.';
COMMA: ',' -> skip;
SEMICOLON: ';' -> skip;

// Literals
fragment INT: '0' | [1-9][0-9]*;
INTEGER: '-'? INT;
FLOAT: '-'? INT DOT [0-9]*;
IDENTIFIER_CHARS: [a-zA-Z_]+;
NAMESPACE_IDENTIFIER_CHARS: [a-z0-9._-]+;
SINGLE_STRING: '\'' (ESC | SAFECODEPOINT)* '\'';
DOUBLE_STRING: '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
DOCUMENTATION_COMMENT: '///' ~[\r\n]* -> skip;