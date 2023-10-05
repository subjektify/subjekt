grammar subjekt;

/*
 * Parser Rules
 */

subjekts: EOF;

/*
 * Lexer Rules
 */

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
COMMA: ',';
HASH_SIGN: '#';
DOLLAR_SIGN: '$';
SEMICOLON: ';' -> skip;

// Literals
IdentifierChars: [a-zA-Z_]+ [a-zA-Z_0-9]*;
SINGLE_STRING: '\'' ~('\'')+ '\'';
DOUBLE_STRING: '"' ~('"')+ '"';
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
