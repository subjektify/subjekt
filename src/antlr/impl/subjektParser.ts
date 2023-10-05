// Generated from src/grammar/subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { subjektListener } from "./subjektListener";
import { subjektVisitor } from "./subjektVisitor";


export class subjektParser extends Parser {
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
	public static readonly RULE_shapeId = 2;
	public static readonly RULE_rootShapeId = 3;
	public static readonly RULE_absoluteRootShapeId = 4;
	public static readonly RULE_shapeIdMember = 5;
	public static readonly RULE_value = 6;
	public static readonly RULE_string = 7;
	public static readonly RULE_namespaceIdentifier = 8;
	public static readonly RULE_identifier = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"subjekts", "metadataStatement", "shapeId", "rootShapeId", "absoluteRootShapeId", 
		"shapeIdMember", "value", "string", "namespaceIdentifier", "identifier",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(subjektParser._LITERAL_NAMES, subjektParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return subjektParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "subjekt.g4"; }

	// @Override
	public get ruleNames(): string[] { return subjektParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return subjektParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(subjektParser._ATN, this);
	}
	// @RuleVersion(0)
	public subjekts(): SubjektsContext {
		let _localctx: SubjektsContext = new SubjektsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, subjektParser.RULE_subjekts);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(subjektParser.EOF);
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
		this.enterRule(_localctx, 2, subjektParser.RULE_metadataStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(subjektParser.METADATA);
			this.state = 23;
			this.identifier();
			this.state = 24;
			this.match(subjektParser.ASSIGNMENT);
			this.state = 25;
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
	public shapeId(): ShapeIdContext {
		let _localctx: ShapeIdContext = new ShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, subjektParser.RULE_shapeId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.rootShapeId();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === subjektParser.DOLLAR_SIGN) {
				{
				this.state = 28;
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
		this.enterRule(_localctx, 6, subjektParser.RULE_rootShapeId);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.absoluteRootShapeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
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
		this.enterRule(_localctx, 8, subjektParser.RULE_absoluteRootShapeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.namespaceIdentifier();
			this.state = 36;
			this.match(subjektParser.HASH_SIGN);
			this.state = 37;
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
		this.enterRule(_localctx, 10, subjektParser.RULE_shapeIdMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(subjektParser.DOLLAR_SIGN);
			this.state = 40;
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
		this.enterRule(_localctx, 12, subjektParser.RULE_value);
		let _la: number;
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case subjektParser.SINGLE_STRING:
			case subjektParser.DOUBLE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.string();
				}
				break;
			case subjektParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.match(subjektParser.NUMBER);
				}
				break;
			case subjektParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.match(subjektParser.LBRACK);
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (subjektParser.LBRACK - 19)) | (1 << (subjektParser.LCURLY - 19)) | (1 << (subjektParser.SINGLE_STRING - 19)) | (1 << (subjektParser.DOUBLE_STRING - 19)) | (1 << (subjektParser.NUMBER - 19)))) !== 0)) {
					{
					{
					this.state = 45;
					this.value();
					}
					}
					this.state = 50;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 51;
				this.match(subjektParser.RBRACK);
				}
				break;
			case subjektParser.LCURLY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 52;
				this.match(subjektParser.LCURLY);
				this.state = 53;
				this.identifier();
				this.state = 54;
				this.match(subjektParser.ASSIGNMENT);
				this.state = 55;
				this.value();
				this.state = 56;
				this.match(subjektParser.RCURLY);
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
		this.enterRule(_localctx, 14, subjektParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			_la = this._input.LA(1);
			if (!(_la === subjektParser.SINGLE_STRING || _la === subjektParser.DOUBLE_STRING)) {
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
		this.enterRule(_localctx, 16, subjektParser.RULE_namespaceIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.identifier();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === subjektParser.T__0) {
				{
				{
				this.state = 63;
				this.match(subjektParser.T__0);
				this.state = 64;
				this.identifier();
				}
				}
				this.state = 69;
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
		this.enterRule(_localctx, 18, subjektParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(subjektParser.IdentifierChars);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$K\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04 \n\x04\x03\x05\x03\x05" +
		"\x05\x05$\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x07\b1\n\b\f\b\x0E\b4\v\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b=\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x07\nD\n" +
		"\n\f\n\x0E\nG\v\n\x03\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x03\x03\x02" +
		" !\x02G\x02\x16\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06\x1D\x03\x02" +
		"\x02\x02\b#\x03\x02\x02\x02\n%\x03\x02\x02\x02\f)\x03\x02\x02\x02\x0E" +
		"<\x03\x02\x02\x02\x10>\x03\x02\x02\x02\x12@\x03\x02\x02\x02\x14H\x03\x02" +
		"\x02\x02\x16\x17\x07\x02\x02\x03\x17\x03\x03\x02\x02\x02\x18\x19\x07\x04" +
		"\x02\x02\x19\x1A\x05\x14\v\x02\x1A\x1B\x07\x19\x02\x02\x1B\x1C\x05\x0E" +
		"\b\x02\x1C\x05\x03\x02\x02\x02\x1D\x1F\x05\b\x05\x02\x1E \x05\f\x07\x02" +
		"\x1F\x1E\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x07\x03\x02\x02\x02!$\x05" +
		"\n\x06\x02\"$\x05\x14\v\x02#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\t\x03" +
		"\x02\x02\x02%&\x05\x12\n\x02&\'\x07\x1B\x02\x02\'(\x05\x14\v\x02(\v\x03" +
		"\x02\x02\x02)*\x07\x1C\x02\x02*+\x05\x14\v\x02+\r\x03\x02\x02\x02,=\x05" +
		"\x10\t\x02-=\x07\"\x02\x02.2\x07\x15\x02\x02/1\x05\x0E\b\x020/\x03\x02" +
		"\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x0235\x03\x02" +
		"\x02\x0242\x03\x02\x02\x025=\x07\x16\x02\x0267\x07\x17\x02\x0278\x05\x14" +
		"\v\x0289\x07\x19\x02\x029:\x05\x0E\b\x02:;\x07\x18\x02\x02;=\x03\x02\x02" +
		"\x02<,\x03\x02\x02\x02<-\x03\x02\x02\x02<.\x03\x02\x02\x02<6\x03\x02\x02" +
		"\x02=\x0F\x03\x02\x02\x02>?\t\x02\x02\x02?\x11\x03\x02\x02\x02@E\x05\x14" +
		"\v\x02AB\x07\x03\x02\x02BD\x05\x14\v\x02CA\x03\x02\x02\x02DG\x03\x02\x02" +
		"\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02F\x13\x03\x02\x02\x02GE\x03\x02" +
		"\x02\x02HI\x07\x1F\x02\x02I\x15\x03\x02\x02\x02\x07\x1F#2<E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!subjektParser.__ATN) {
			subjektParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(subjektParser._serializedATN));
		}

		return subjektParser.__ATN;
	}

}

export class SubjektsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(subjektParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_subjekts; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterSubjekts) {
			listener.enterSubjekts(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitSubjekts) {
			listener.exitSubjekts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitSubjekts) {
			return visitor.visitSubjekts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataStatementContext extends ParserRuleContext {
	public METADATA(): TerminalNode { return this.getToken(subjektParser.METADATA, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(subjektParser.ASSIGNMENT, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_metadataStatement; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterMetadataStatement) {
			listener.enterMetadataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitMetadataStatement) {
			listener.exitMetadataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitMetadataStatement) {
			return visitor.visitMetadataStatement(this);
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
	public get ruleIndex(): number { return subjektParser.RULE_shapeId; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterShapeId) {
			listener.enterShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitShapeId) {
			listener.exitShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
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
	public get ruleIndex(): number { return subjektParser.RULE_rootShapeId; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterRootShapeId) {
			listener.enterRootShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitRootShapeId) {
			listener.exitRootShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
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
	public HASH_SIGN(): TerminalNode { return this.getToken(subjektParser.HASH_SIGN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_absoluteRootShapeId; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterAbsoluteRootShapeId) {
			listener.enterAbsoluteRootShapeId(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitAbsoluteRootShapeId) {
			listener.exitAbsoluteRootShapeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitAbsoluteRootShapeId) {
			return visitor.visitAbsoluteRootShapeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeIdMemberContext extends ParserRuleContext {
	public DOLLAR_SIGN(): TerminalNode { return this.getToken(subjektParser.DOLLAR_SIGN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_shapeIdMember; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterShapeIdMember) {
			listener.enterShapeIdMember(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitShapeIdMember) {
			listener.exitShapeIdMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
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
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(subjektParser.NUMBER, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(subjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(subjektParser.RBRACK, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(subjektParser.LCURLY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(subjektParser.ASSIGNMENT, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(subjektParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_value; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public SINGLE_STRING(): TerminalNode | undefined { return this.tryGetToken(subjektParser.SINGLE_STRING, 0); }
	public DOUBLE_STRING(): TerminalNode | undefined { return this.tryGetToken(subjektParser.DOUBLE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_string; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
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
	public get ruleIndex(): number { return subjektParser.RULE_namespaceIdentifier; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterNamespaceIdentifier) {
			listener.enterNamespaceIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitNamespaceIdentifier) {
			listener.exitNamespaceIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitNamespaceIdentifier) {
			return visitor.visitNamespaceIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IdentifierChars(): TerminalNode { return this.getToken(subjektParser.IdentifierChars, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return subjektParser.RULE_identifier; }
	// @Override
	public enterRule(listener: subjektListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: subjektListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: subjektVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


