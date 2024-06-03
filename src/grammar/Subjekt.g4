grammar Subjekt;

/*
 * Parser Rules
 */

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
shapeTypeDefinition: LCURLY members? RCURLY;

// Shape members
members:
	enumMembers
	| listMembers
	| mapMembers
	| subjectMembers+
	| member+;

enumMembers: enumMember (COMMA enumMember)* COMMA?;
enumMember: identifier (ASSIGNMENT (string | NUMBER))?;
listMembers: MEMBER COLON (shapeType | identifier) COMMA?;
mapMembers: keyValuePair (COMMA keyValuePair)* COMMA?;
keyValuePair:
	KEY COLON (shapeType | identifier)
	| VALUE COLON (shapeType | identifier);

subjectMembers:
	stateReference
	| behaviorReference
	| subscriptionReference;
stateReference:
	STATES COLON LBRACK identifier (COMMA identifier)* COMMA? RBRACK;
behaviorReference:
	BEHAVIORS COLON LBRACK identifier (COMMA identifier)* COMMA? RBRACK;
subscriptionReference:
	SUBSCRIPTIONS COLON LBRACK identifier (COMMA identifier)* COMMA? RBRACK;

behaviorMembers:
	triggerReference
	| inputReference
	| outputReference;
inputReference:
	INPUTS COLON LBRACK (shapeType | identifier) (
		COMMA (shapeType | identifier)
	)* COMMA? RBRACK;
outputReference:
	OUTPUTS COLON LBRACK (shapeType | identifier) (
		COMMA (shapeType | identifier)
	)* COMMA? RBRACK;
triggerReference:
	TRIGGERS COLON LBRACK (shapeType | identifier) (
		COMMA (shapeType | identifier)
	)* COMMA? RBRACK;
member:
	identifier COLON (shapeType | identifier) (ASSIGNMENT value)? COMMA?;

// ShapeID
shapeId: rootShapeId shapeIdMember?;
rootShapeId: absoluteRootShapeId | identifier;
absoluteRootShapeId: namespaceIdentifier HASH_SIGN identifier;
shapeIdMember: DOLLAR_SIGN identifier;

// Traits
trait: AT_SIGN identifier traitBody?;
traitBody: LPAREN (traitStructureList | traitNode)? RPAREN;
traitStructureList: traitStructure (COMMA traitStructure)*;
traitStructure: identifier ASSIGNMENT value;
traitNode: value;

// Values
value:
	string
	| NUMBER
	| LBRACK value* RBRACK
	| LCURLY identifier ASSIGNMENT value RCURLY;

string: SINGLE_STRING | DOUBLE_STRING;

namespaceIdentifier: identifier ('.' identifier)*;
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
SUBSCRIPTIONS: 'subscriptions';
STATES: 'states';
BEHAVIORS: 'behaviors';
TRIGGERS: 'triggers';
INPUTS: 'inputs';
OUTPUTS: 'outputs';
AGGREGATE_SHAPE_TYPE:
	'enum'
	| 'list'
	| 'map'
	| 'structure'
	| 'trait';
SIMPLE_SHAPE_TYPE:
	'address'
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
	| 'byte'
	| 'bytes'
	| 'blob'
	| 'boolean'
	| 'document'
	| 'string'
	| 'float'
	| 'double'
	| 'bigInteger'
	| 'bigDecimal'
	| 'timestamp'
	| 'hash256'
	| 'hash512'
	| 'none';

SUBJECT_SHAPE_TYPE:
	'subject'
	| 'state'
	| 'behavior'
	| 'composition'
	| 'trigger'
	| 'subscription'
	| 'input'
	| 'output';

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
COMMA: ',' -> skip;
SEMICOLON: ';' -> skip;

// Literals
IDENTIFIER_CHARS: [a-zA-Z_]+ [a-zA-Z_0-9]*;
SINGLE_STRING: '\'' ~('\'')+ '\'';
DOUBLE_STRING: '"' ~('"')+ '"';
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
DOCUMENTATION_COMMENT: '///' ~[\r\n]* -> skip;
