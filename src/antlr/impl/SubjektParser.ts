// Generated from src/grammar/Subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SubjektListener } from "./SubjektListener";
import { SubjektVisitor } from "./SubjektVisitor";


export class SubjektParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly METADATA = 2;
	public static readonly USE = 3;
	public static readonly MEMBER = 4;
	public static readonly KEY = 5;
	public static readonly VALUE = 6;
	public static readonly SUBSCRIPTIONS = 7;
	public static readonly STATES = 8;
	public static readonly BEHAVIORS = 9;
	public static readonly TRIGGERS = 10;
	public static readonly INPUTS = 11;
	public static readonly OUTPUTS = 12;
	public static readonly AGGREGATE_SHAPE_TYPE = 13;
	public static readonly SIMPLE_SHAPE_TYPE = 14;
	public static readonly SUBJECT_SHAPE_TYPE = 15;
	public static readonly AT_SIGN = 16;
	public static readonly LPAREN = 17;
	public static readonly RPAREN = 18;
	public static readonly LBRACK = 19;
	public static readonly RBRACK = 20;
	public static readonly LCURLY = 21;
	public static readonly RCURLY = 22;
	public static readonly ASSIGNMENT = 23;
	public static readonly COLON = 24;
	public static readonly HASH_SIGN = 25;
	public static readonly DOLLAR_SIGN = 26;
	public static readonly COMMA = 27;
	public static readonly SEMICOLON = 28;
	public static readonly IdentifierChars = 29;
	public static readonly SINGLE_STRING = 30;
	public static readonly DOUBLE_STRING = 31;
	public static readonly NUMBER = 32;
	public static readonly WS = 33;
	public static readonly COMMENT = 34;
	public static readonly RULE_subjekts = 0;
	public static readonly RULE_metadataStatement = 1;
	public static readonly RULE_useStatement = 2;
	public static readonly RULE_shapeId = 3;
	public static readonly RULE_rootShapeId = 4;
	public static readonly RULE_absoluteRootShapeId = 5;
	public static readonly RULE_shapeIdMember = 6;
	public static readonly RULE_value = 7;
	public static readonly RULE_string = 8;
	public static readonly RULE_namespaceIdentifier = 9;
	public static readonly RULE_identifier = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"subjekts", "metadataStatement", "useStatement", "shapeId", "rootShapeId", 
		"absoluteRootShapeId", "shapeIdMember", "value", "string", "namespaceIdentifier", 
		"identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'metadata'", "'use'", "'member'", "'key'", "'value'", 
		"'subscriptions'", "'states'", "'behaviors'", "'triggers'", "'inputs'", 
		"'outputs'", undefined, undefined, undefined, "'@'", "'('", "')'", "'['", 
		"']'", "'{'", "'}'", "'='", "':'", "'#'", "'$'", "','", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "METADATA", "USE", "MEMBER", "KEY", "VALUE", "SUBSCRIPTIONS", 
		"STATES", "BEHAVIORS", "TRIGGERS", "INPUTS", "OUTPUTS", "AGGREGATE_SHAPE_TYPE", 
		"SIMPLE_SHAPE_TYPE", "SUBJECT_SHAPE_TYPE", "AT_SIGN", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "LCURLY", "RCURLY", "ASSIGNMENT", "COLON", "HASH_SIGN", 
		"DOLLAR_SIGN", "COMMA", "SEMICOLON", "IdentifierChars", "SINGLE_STRING", 
		"DOUBLE_STRING", "NUMBER", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SubjektParser._LITERAL_NAMES, SubjektParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SubjektParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Subjekt.g4"; }

	// @Override
	public get ruleNames(): string[] { return SubjektParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SubjektParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SubjektParser._ATN, this);
	}
	// @RuleVersion(0)
	public subjekts(): SubjektsContext {
		let _localctx: SubjektsContext = new SubjektsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SubjektParser.RULE_subjekts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.METADATA) {
				{
				{
				this.state = 22;
				this.metadataStatement();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.USE) {
				{
				{
				this.state = 28;
				this.useStatement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this.match(SubjektParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataStatement(): MetadataStatementContext {
		let _localctx: MetadataStatementContext = new MetadataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SubjektParser.RULE_metadataStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(SubjektParser.METADATA);
			this.state = 37;
			this.identifier();
			this.state = 38;
			this.match(SubjektParser.ASSIGNMENT);
			this.state = 39;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SubjektParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(SubjektParser.USE);
			this.state = 42;
			this.absoluteRootShapeId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shapeId(): ShapeIdContext {
		let _localctx: ShapeIdContext = new ShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SubjektParser.RULE_shapeId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.rootShapeId();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.DOLLAR_SIGN) {
				{
				this.state = 45;
				this.shapeIdMember();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootShapeId(): RootShapeIdContext {
		let _localctx: RootShapeIdContext = new RootShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SubjektParser.RULE_rootShapeId);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.absoluteRootShapeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public absoluteRootShapeId(): AbsoluteRootShapeIdContext {
		let _localctx: AbsoluteRootShapeIdContext = new AbsoluteRootShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SubjektParser.RULE_absoluteRootShapeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.namespaceIdentifier();
			this.state = 53;
			this.match(SubjektParser.HASH_SIGN);
			this.state = 54;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shapeIdMember(): ShapeIdMemberContext {
		let _localctx: ShapeIdMemberContext = new ShapeIdMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SubjektParser.RULE_shapeIdMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(SubjektParser.DOLLAR_SIGN);
			this.state = 57;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SubjektParser.RULE_value);
		let _la: number;
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.SINGLE_STRING:
			case SubjektParser.DOUBLE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.string();
				}
				break;
			case SubjektParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.match(SubjektParser.NUMBER);
				}
				break;
			case SubjektParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.match(SubjektParser.LBRACK);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (SubjektParser.LBRACK - 19)) | (1 << (SubjektParser.LCURLY - 19)) | (1 << (SubjektParser.SINGLE_STRING - 19)) | (1 << (SubjektParser.DOUBLE_STRING - 19)) | (1 << (SubjektParser.NUMBER - 19)))) !== 0)) {
					{
					{
					this.state = 62;
					this.value();
					}
					}
					this.state = 67;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 68;
				this.match(SubjektParser.RBRACK);
				}
				break;
			case SubjektParser.LCURLY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 69;
				this.match(SubjektParser.LCURLY);
				this.state = 70;
				this.identifier();
				this.state = 71;
				this.match(SubjektParser.ASSIGNMENT);
				this.state = 72;
				this.value();
				this.state = 73;
				this.match(SubjektParser.RCURLY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SubjektParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_la = this._input.LA(1);
			if (!(_la === SubjektParser.SINGLE_STRING || _la === SubjektParser.DOUBLE_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceIdentifier(): NamespaceIdentifierContext {
		let _localctx: NamespaceIdentifierContext = new NamespaceIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SubjektParser.RULE_namespaceIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.identifier();
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.T__0) {
				{
				{
				this.state = 80;
				this.match(SubjektParser.T__0);
				this.state = 81;
				this.identifier();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SubjektParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(SubjektParser.IdentifierChars);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\\\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02" +
		"#\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x05\x051\n\x05\x03\x06\x03\x06\x05\x06" +
		"5\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x07\tB\n\t\f\t\x0E\tE\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\tN\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\vU\n\v\f\v\x0E\v" +
		"X\v\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03\x02 !\x02" +
		"Y\x02\x1B\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b" +
		".\x03\x02\x02\x02\n4\x03\x02\x02\x02\f6\x03\x02\x02\x02\x0E:\x03\x02\x02" +
		"\x02\x10M\x03\x02\x02\x02\x12O\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16" +
		"Y\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A" +
		"\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"!\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E \x05\x06\x04\x02\x1F\x1E" +
		"\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02" +
		"\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07\x02\x02\x03%\x03\x03\x02" +
		"\x02\x02&\'\x07\x04\x02\x02\'(\x05\x16\f\x02()\x07\x19\x02\x02)*\x05\x10" +
		"\t\x02*\x05\x03\x02\x02\x02+,\x07\x05\x02\x02,-\x05\f\x07\x02-\x07\x03" +
		"\x02\x02\x02.0\x05\n\x06\x02/1\x05\x0E\b\x020/\x03\x02\x02\x0201\x03\x02" +
		"\x02\x021\t\x03\x02\x02\x0225\x05\f\x07\x0235\x05\x16\f\x0242\x03\x02" +
		"\x02\x0243\x03\x02\x02\x025\v\x03\x02\x02\x0267\x05\x14\v\x0278\x07\x1B" +
		"\x02\x0289\x05\x16\f\x029\r\x03\x02\x02\x02:;\x07\x1C\x02\x02;<\x05\x16" +
		"\f\x02<\x0F\x03\x02\x02\x02=N\x05\x12\n\x02>N\x07\"\x02\x02?C\x07\x15" +
		"\x02\x02@B\x05\x10\t\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02" +
		"\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02FN\x07\x16" +
		"\x02\x02GH\x07\x17\x02\x02HI\x05\x16\f\x02IJ\x07\x19\x02\x02JK\x05\x10" +
		"\t\x02KL\x07\x18\x02\x02LN\x03\x02\x02\x02M=\x03\x02\x02\x02M>\x03\x02" +
		"\x02\x02M?\x03\x02\x02\x02MG\x03\x02\x02\x02N\x11\x03\x02\x02\x02OP\t" +
		"\x02\x02\x02P\x13\x03\x02\x02\x02QV\x05\x16\f\x02RS\x07\x03\x02\x02SU" +
		"\x05\x16\f\x02TR\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02V" +
		"W\x03\x02\x02\x02W\x15\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\x1F\x02" +
		"\x02Z\x17\x03\x02\x02\x02\t\x1B!04CMV";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SubjektParser.__ATN) {
			SubjektParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SubjektParser._serializedATN));
		}

		return SubjektParser.__ATN;
	}

}

export class SubjektsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SubjektParser.EOF, 0); }
	public metadataStatement(): MetadataStatementContext[];
	public metadataStatement(i: number): MetadataStatementContext;
	public metadataStatement(i?: number): MetadataStatementContext | MetadataStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataStatementContext);
		} else {
			return this.getRuleContext(i, MetadataStatementContext);
		}
	}
	public useStatement(): UseStatementContext[];
	public useStatement(i: number): UseStatementContext;
	public useStatement(i?: number): UseStatementContext | UseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseStatementContext);
		} else {
			return this.getRuleContext(i, UseStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_subjekts; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterSubjekts) {
			listener.enterSubjekts(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitSubjekts) {
			listener.exitSubjekts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitSubjekts) {
			return visitor.visitSubjekts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataStatementContext extends ParserRuleContext {
	public METADATA(): TerminalNode { return this.getToken(SubjektParser.METADATA, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(SubjektParser.ASSIGNMENT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_metadataStatement; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterMetadataStatement) {
			listener.enterMetadataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitMetadataStatement) {
			listener.exitMetadataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitMetadataStatement) {
			return visitor.visitMetadataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public USE(): TerminalNode { return this.getToken(SubjektParser.USE, 0); }
	public absoluteRootShapeId(): AbsoluteRootShapeIdContext {
		return this.getRuleContext(0, AbsoluteRootShapeIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeIdContext extends ParserRuleContext {
	public rootShapeId(): RootShapeIdContext {
		return this.getRuleContext(0, RootShapeIdContext);
	}
	public shapeIdMember(): ShapeIdMemberContext | undefined {
		return this.tryGetRuleContext(0, ShapeIdMemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeId; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeId) {
			listener.enterShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeId) {
			listener.exitShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeId) {
			return visitor.visitShapeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootShapeIdContext extends ParserRuleContext {
	public absoluteRootShapeId(): AbsoluteRootShapeIdContext | undefined {
		return this.tryGetRuleContext(0, AbsoluteRootShapeIdContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_rootShapeId; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterRootShapeId) {
			listener.enterRootShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitRootShapeId) {
			listener.exitRootShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitRootShapeId) {
			return visitor.visitRootShapeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbsoluteRootShapeIdContext extends ParserRuleContext {
	public namespaceIdentifier(): NamespaceIdentifierContext {
		return this.getRuleContext(0, NamespaceIdentifierContext);
	}
	public HASH_SIGN(): TerminalNode { return this.getToken(SubjektParser.HASH_SIGN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_absoluteRootShapeId; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterAbsoluteRootShapeId) {
			listener.enterAbsoluteRootShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitAbsoluteRootShapeId) {
			listener.exitAbsoluteRootShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitAbsoluteRootShapeId) {
			return visitor.visitAbsoluteRootShapeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeIdMemberContext extends ParserRuleContext {
	public DOLLAR_SIGN(): TerminalNode { return this.getToken(SubjektParser.DOLLAR_SIGN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeIdMember; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeIdMember) {
			listener.enterShapeIdMember(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeIdMember) {
			listener.exitShapeIdMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeIdMember) {
			return visitor.visitShapeIdMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.NUMBER, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.RBRACK, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.LCURLY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.ASSIGNMENT, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_value; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public SINGLE_STRING(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.SINGLE_STRING, 0); }
	public DOUBLE_STRING(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.DOUBLE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_string; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_namespaceIdentifier; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterNamespaceIdentifier) {
			listener.enterNamespaceIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitNamespaceIdentifier) {
			listener.exitNamespaceIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitNamespaceIdentifier) {
			return visitor.visitNamespaceIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IdentifierChars(): TerminalNode { return this.getToken(SubjektParser.IdentifierChars, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


