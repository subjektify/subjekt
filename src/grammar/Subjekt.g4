grammar Subjekt;

/*
 * Parser Rules
 */

subjekts: metadataStatement* useStatement* EOF;

// MetadataBlock
metadataStatement: METADATA identifier ASSIGNMENT value;

// `use` statement imports shapes from other namespaces.
useStatement: USE absoluteRootShapeId;

// ShapeBlock


// ShapeID
shapeId: rootShapeId shapeIdMember?;
rootShapeId: absoluteRootShapeId | identifier;
absoluteRootShapeId: namespaceIdentifier HASH_SIGN identifier;
shapeIdMember: DOLLAR_SIGN identifier;

// Values
value:
	string
	| NUMBER
	| LBRACK value* RBRACK
	| LCURLY identifier ASSIGNMENT value RCURLY;

string: SINGLE_STRING | DOUBLE_STRING;

namespaceIdentifier: identifier ('.' identifier)*;
identifier: IdentifierChars;

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
	| 'contract'
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
IdentifierChars: [a-zA-Z_]+ [a-zA-Z_0-9]*;
SINGLE_STRING: '\'' ~('\'')+ '\'';
DOUBLE_STRING: '"' ~('"')+ '"';
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
