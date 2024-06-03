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
	public static readonly IDENTIFIER_CHARS = 29;
	public static readonly SINGLE_STRING = 30;
	public static readonly DOUBLE_STRING = 31;
	public static readonly NUMBER = 32;
	public static readonly WS = 33;
	public static readonly COMMENT = 34;
	public static readonly DOCUMENTATION_COMMENT = 35;
	public static readonly RULE_idl = 0;
	public static readonly RULE_metadataBlock = 1;
	public static readonly RULE_metadataStatement = 2;
	public static readonly RULE_useBlock = 3;
	public static readonly RULE_useStatement = 4;
	public static readonly RULE_shapeBlock = 5;
	public static readonly RULE_shapeStatement = 6;
	public static readonly RULE_shapeDefinition = 7;
	public static readonly RULE_shapeType = 8;
	public static readonly RULE_shapeTypeDefinition = 9;
	public static readonly RULE_members = 10;
	public static readonly RULE_enumMembers = 11;
	public static readonly RULE_enumMember = 12;
	public static readonly RULE_listMembers = 13;
	public static readonly RULE_mapMembers = 14;
	public static readonly RULE_keyValuePair = 15;
	public static readonly RULE_subjectMembers = 16;
	public static readonly RULE_stateReference = 17;
	public static readonly RULE_behaviorReference = 18;
	public static readonly RULE_subscriptionReference = 19;
	public static readonly RULE_behaviorMembers = 20;
	public static readonly RULE_inputReference = 21;
	public static readonly RULE_outputReference = 22;
	public static readonly RULE_triggerReference = 23;
	public static readonly RULE_member = 24;
	public static readonly RULE_shapeId = 25;
	public static readonly RULE_rootShapeId = 26;
	public static readonly RULE_absoluteRootShapeId = 27;
	public static readonly RULE_shapeIdMember = 28;
	public static readonly RULE_trait = 29;
	public static readonly RULE_traitBody = 30;
	public static readonly RULE_traitStructureList = 31;
	public static readonly RULE_traitStructure = 32;
	public static readonly RULE_traitNode = 33;
	public static readonly RULE_value = 34;
	public static readonly RULE_string = 35;
	public static readonly RULE_namespaceIdentifier = 36;
	public static readonly RULE_identifier = 37;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"idl", "metadataBlock", "metadataStatement", "useBlock", "useStatement", 
		"shapeBlock", "shapeStatement", "shapeDefinition", "shapeType", "shapeTypeDefinition", 
		"members", "enumMembers", "enumMember", "listMembers", "mapMembers", "keyValuePair", 
		"subjectMembers", "stateReference", "behaviorReference", "subscriptionReference", 
		"behaviorMembers", "inputReference", "outputReference", "triggerReference", 
		"member", "shapeId", "rootShapeId", "absoluteRootShapeId", "shapeIdMember", 
		"trait", "traitBody", "traitStructureList", "traitStructure", "traitNode", 
		"value", "string", "namespaceIdentifier", "identifier",
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
		"DOLLAR_SIGN", "COMMA", "SEMICOLON", "IDENTIFIER_CHARS", "SINGLE_STRING", 
		"DOUBLE_STRING", "NUMBER", "WS", "COMMENT", "DOCUMENTATION_COMMENT",
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
	public idl(): IdlContext {
		let _localctx: IdlContext = new IdlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SubjektParser.RULE_idl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.metadataBlock();
			this.state = 77;
			this.useBlock();
			this.state = 78;
			this.shapeBlock();
			this.state = 79;
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
	public metadataBlock(): MetadataBlockContext {
		let _localctx: MetadataBlockContext = new MetadataBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SubjektParser.RULE_metadataBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.METADATA) {
				{
				{
				this.state = 81;
				this.metadataStatement();
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
	public metadataStatement(): MetadataStatementContext {
		let _localctx: MetadataStatementContext = new MetadataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SubjektParser.RULE_metadataStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(SubjektParser.METADATA);
			this.state = 88;
			this.identifier();
			this.state = 89;
			this.match(SubjektParser.ASSIGNMENT);
			this.state = 90;
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
	public useBlock(): UseBlockContext {
		let _localctx: UseBlockContext = new UseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SubjektParser.RULE_useBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.USE) {
				{
				{
				this.state = 92;
				this.useStatement();
				}
				}
				this.state = 97;
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
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SubjektParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(SubjektParser.USE);
			this.state = 99;
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
	public shapeBlock(): ShapeBlockContext {
		let _localctx: ShapeBlockContext = new ShapeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SubjektParser.RULE_shapeBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.AGGREGATE_SHAPE_TYPE) | (1 << SubjektParser.SIMPLE_SHAPE_TYPE) | (1 << SubjektParser.SUBJECT_SHAPE_TYPE) | (1 << SubjektParser.AT_SIGN))) !== 0)) {
				{
				{
				this.state = 101;
				this.shapeStatement();
				}
				}
				this.state = 106;
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
	public shapeStatement(): ShapeStatementContext {
		let _localctx: ShapeStatementContext = new ShapeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SubjektParser.RULE_shapeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.AT_SIGN) {
				{
				{
				this.state = 107;
				this.trait();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 113;
			this.shapeDefinition();
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
	public shapeDefinition(): ShapeDefinitionContext {
		let _localctx: ShapeDefinitionContext = new ShapeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SubjektParser.RULE_shapeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.shapeType();
			this.state = 116;
			this.identifier();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.LCURLY) {
				{
				this.state = 117;
				this.shapeTypeDefinition();
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
	public shapeType(): ShapeTypeContext {
		let _localctx: ShapeTypeContext = new ShapeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SubjektParser.RULE_shapeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.AGGREGATE_SHAPE_TYPE) | (1 << SubjektParser.SIMPLE_SHAPE_TYPE) | (1 << SubjektParser.SUBJECT_SHAPE_TYPE))) !== 0))) {
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
	public shapeTypeDefinition(): ShapeTypeDefinitionContext {
		let _localctx: ShapeTypeDefinitionContext = new ShapeTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SubjektParser.RULE_shapeTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(SubjektParser.LCURLY);
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.MEMBER) | (1 << SubjektParser.KEY) | (1 << SubjektParser.VALUE) | (1 << SubjektParser.SUBSCRIPTIONS) | (1 << SubjektParser.STATES) | (1 << SubjektParser.BEHAVIORS) | (1 << SubjektParser.IDENTIFIER_CHARS))) !== 0)) {
				{
				this.state = 123;
				this.members();
				}
			}

			this.state = 126;
			this.match(SubjektParser.RCURLY);
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
	public members(): MembersContext {
		let _localctx: MembersContext = new MembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SubjektParser.RULE_members);
		let _la: number;
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.enumMembers();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.listMembers();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.mapMembers();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 131;
					this.subjectMembers();
					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.SUBSCRIPTIONS) | (1 << SubjektParser.STATES) | (1 << SubjektParser.BEHAVIORS))) !== 0));
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 136;
					this.member();
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SubjektParser.IDENTIFIER_CHARS);
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
	public enumMembers(): EnumMembersContext {
		let _localctx: EnumMembersContext = new EnumMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SubjektParser.RULE_enumMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.enumMember();
			this.state = 148;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 144;
					this.match(SubjektParser.COMMA);
					this.state = 145;
					this.enumMember();
					}
					}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 151;
				this.match(SubjektParser.COMMA);
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
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SubjektParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.identifier();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.ASSIGNMENT) {
				{
				this.state = 155;
				this.match(SubjektParser.ASSIGNMENT);
				this.state = 158;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.SINGLE_STRING:
				case SubjektParser.DOUBLE_STRING:
					{
					this.state = 156;
					this.string();
					}
					break;
				case SubjektParser.NUMBER:
					{
					this.state = 157;
					this.match(SubjektParser.NUMBER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public listMembers(): ListMembersContext {
		let _localctx: ListMembersContext = new ListMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SubjektParser.RULE_listMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(SubjektParser.MEMBER);
			this.state = 163;
			this.match(SubjektParser.COLON);
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 164;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 165;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 168;
				this.match(SubjektParser.COMMA);
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
	public mapMembers(): MapMembersContext {
		let _localctx: MapMembersContext = new MapMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SubjektParser.RULE_mapMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.keyValuePair();
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 172;
					this.match(SubjektParser.COMMA);
					this.state = 173;
					this.keyValuePair();
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 179;
				this.match(SubjektParser.COMMA);
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
	public keyValuePair(): KeyValuePairContext {
		let _localctx: KeyValuePairContext = new KeyValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SubjektParser.RULE_keyValuePair);
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.KEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.match(SubjektParser.KEY);
				this.state = 183;
				this.match(SubjektParser.COLON);
				this.state = 186;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.AGGREGATE_SHAPE_TYPE:
				case SubjektParser.SIMPLE_SHAPE_TYPE:
				case SubjektParser.SUBJECT_SHAPE_TYPE:
					{
					this.state = 184;
					this.shapeType();
					}
					break;
				case SubjektParser.IDENTIFIER_CHARS:
					{
					this.state = 185;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case SubjektParser.VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.match(SubjektParser.VALUE);
				this.state = 189;
				this.match(SubjektParser.COLON);
				this.state = 192;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.AGGREGATE_SHAPE_TYPE:
				case SubjektParser.SIMPLE_SHAPE_TYPE:
				case SubjektParser.SUBJECT_SHAPE_TYPE:
					{
					this.state = 190;
					this.shapeType();
					}
					break;
				case SubjektParser.IDENTIFIER_CHARS:
					{
					this.state = 191;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public subjectMembers(): SubjectMembersContext {
		let _localctx: SubjectMembersContext = new SubjectMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SubjektParser.RULE_subjectMembers);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.STATES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.stateReference();
				}
				break;
			case SubjektParser.BEHAVIORS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 197;
				this.behaviorReference();
				}
				break;
			case SubjektParser.SUBSCRIPTIONS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 198;
				this.subscriptionReference();
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
	public stateReference(): StateReferenceContext {
		let _localctx: StateReferenceContext = new StateReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SubjektParser.RULE_stateReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(SubjektParser.STATES);
			this.state = 202;
			this.match(SubjektParser.COLON);
			this.state = 203;
			this.match(SubjektParser.LBRACK);
			this.state = 204;
			this.identifier();
			this.state = 209;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 205;
					this.match(SubjektParser.COMMA);
					this.state = 206;
					this.identifier();
					}
					}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 212;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 215;
			this.match(SubjektParser.RBRACK);
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
	public behaviorReference(): BehaviorReferenceContext {
		let _localctx: BehaviorReferenceContext = new BehaviorReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SubjektParser.RULE_behaviorReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(SubjektParser.BEHAVIORS);
			this.state = 218;
			this.match(SubjektParser.COLON);
			this.state = 219;
			this.match(SubjektParser.LBRACK);
			this.state = 220;
			this.identifier();
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					this.match(SubjektParser.COMMA);
					this.state = 222;
					this.identifier();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 228;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 231;
			this.match(SubjektParser.RBRACK);
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
	public subscriptionReference(): SubscriptionReferenceContext {
		let _localctx: SubscriptionReferenceContext = new SubscriptionReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SubjektParser.RULE_subscriptionReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(SubjektParser.SUBSCRIPTIONS);
			this.state = 234;
			this.match(SubjektParser.COLON);
			this.state = 235;
			this.match(SubjektParser.LBRACK);
			this.state = 236;
			this.identifier();
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 237;
					this.match(SubjektParser.COMMA);
					this.state = 238;
					this.identifier();
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 244;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 247;
			this.match(SubjektParser.RBRACK);
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
	public behaviorMembers(): BehaviorMembersContext {
		let _localctx: BehaviorMembersContext = new BehaviorMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SubjektParser.RULE_behaviorMembers);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.TRIGGERS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this.triggerReference();
				}
				break;
			case SubjektParser.INPUTS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 250;
				this.inputReference();
				}
				break;
			case SubjektParser.OUTPUTS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 251;
				this.outputReference();
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
	public inputReference(): InputReferenceContext {
		let _localctx: InputReferenceContext = new InputReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SubjektParser.RULE_inputReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(SubjektParser.INPUTS);
			this.state = 255;
			this.match(SubjektParser.COLON);
			this.state = 256;
			this.match(SubjektParser.LBRACK);
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 257;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 258;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 261;
					this.match(SubjektParser.COMMA);
					this.state = 264;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SubjektParser.AGGREGATE_SHAPE_TYPE:
					case SubjektParser.SIMPLE_SHAPE_TYPE:
					case SubjektParser.SUBJECT_SHAPE_TYPE:
						{
						this.state = 262;
						this.shapeType();
						}
						break;
					case SubjektParser.IDENTIFIER_CHARS:
						{
						this.state = 263;
						this.identifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 271;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 274;
			this.match(SubjektParser.RBRACK);
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
	public outputReference(): OutputReferenceContext {
		let _localctx: OutputReferenceContext = new OutputReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SubjektParser.RULE_outputReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(SubjektParser.OUTPUTS);
			this.state = 277;
			this.match(SubjektParser.COLON);
			this.state = 278;
			this.match(SubjektParser.LBRACK);
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 279;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 280;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 290;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 283;
					this.match(SubjektParser.COMMA);
					this.state = 286;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SubjektParser.AGGREGATE_SHAPE_TYPE:
					case SubjektParser.SIMPLE_SHAPE_TYPE:
					case SubjektParser.SUBJECT_SHAPE_TYPE:
						{
						this.state = 284;
						this.shapeType();
						}
						break;
					case SubjektParser.IDENTIFIER_CHARS:
						{
						this.state = 285;
						this.identifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 293;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 296;
			this.match(SubjektParser.RBRACK);
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
	public triggerReference(): TriggerReferenceContext {
		let _localctx: TriggerReferenceContext = new TriggerReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SubjektParser.RULE_triggerReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(SubjektParser.TRIGGERS);
			this.state = 299;
			this.match(SubjektParser.COLON);
			this.state = 300;
			this.match(SubjektParser.LBRACK);
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 301;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 302;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 305;
					this.match(SubjektParser.COMMA);
					this.state = 308;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SubjektParser.AGGREGATE_SHAPE_TYPE:
					case SubjektParser.SIMPLE_SHAPE_TYPE:
					case SubjektParser.SUBJECT_SHAPE_TYPE:
						{
						this.state = 306;
						this.shapeType();
						}
						break;
					case SubjektParser.IDENTIFIER_CHARS:
						{
						this.state = 307;
						this.identifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 315;
				this.match(SubjektParser.COMMA);
				}
			}

			this.state = 318;
			this.match(SubjektParser.RBRACK);
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
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SubjektParser.RULE_member);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.identifier();
			this.state = 321;
			this.match(SubjektParser.COLON);
			this.state = 324;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 322;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 323;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.ASSIGNMENT) {
				{
				this.state = 326;
				this.match(SubjektParser.ASSIGNMENT);
				this.state = 327;
				this.value();
				}
			}

			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.COMMA) {
				{
				this.state = 330;
				this.match(SubjektParser.COMMA);
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
	public shapeId(): ShapeIdContext {
		let _localctx: ShapeIdContext = new ShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SubjektParser.RULE_shapeId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.rootShapeId();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.DOLLAR_SIGN) {
				{
				this.state = 334;
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
		this.enterRule(_localctx, 52, SubjektParser.RULE_rootShapeId);
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.absoluteRootShapeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
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
		this.enterRule(_localctx, 54, SubjektParser.RULE_absoluteRootShapeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.namespaceIdentifier();
			this.state = 342;
			this.match(SubjektParser.HASH_SIGN);
			this.state = 343;
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
		this.enterRule(_localctx, 56, SubjektParser.RULE_shapeIdMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(SubjektParser.DOLLAR_SIGN);
			this.state = 346;
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
	public trait(): TraitContext {
		let _localctx: TraitContext = new TraitContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SubjektParser.RULE_trait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(SubjektParser.AT_SIGN);
			this.state = 349;
			this.identifier();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.LPAREN) {
				{
				this.state = 350;
				this.traitBody();
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
	public traitBody(): TraitBodyContext {
		let _localctx: TraitBodyContext = new TraitBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SubjektParser.RULE_traitBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(SubjektParser.LPAREN);
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 354;
				this.traitStructureList();
				}
				break;
			case SubjektParser.LBRACK:
			case SubjektParser.LCURLY:
			case SubjektParser.SINGLE_STRING:
			case SubjektParser.DOUBLE_STRING:
			case SubjektParser.NUMBER:
				{
				this.state = 355;
				this.traitNode();
				}
				break;
			case SubjektParser.RPAREN:
				break;
			default:
				break;
			}
			this.state = 358;
			this.match(SubjektParser.RPAREN);
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
	public traitStructureList(): TraitStructureListContext {
		let _localctx: TraitStructureListContext = new TraitStructureListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SubjektParser.RULE_traitStructureList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.traitStructure();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.COMMA) {
				{
				{
				this.state = 361;
				this.match(SubjektParser.COMMA);
				this.state = 362;
				this.traitStructure();
				}
				}
				this.state = 367;
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
	public traitStructure(): TraitStructureContext {
		let _localctx: TraitStructureContext = new TraitStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SubjektParser.RULE_traitStructure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.identifier();
			this.state = 369;
			this.match(SubjektParser.ASSIGNMENT);
			this.state = 370;
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
	public traitNode(): TraitNodeContext {
		let _localctx: TraitNodeContext = new TraitNodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SubjektParser.RULE_traitNode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SubjektParser.RULE_value);
		let _la: number;
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.SINGLE_STRING:
			case SubjektParser.DOUBLE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.string();
				}
				break;
			case SubjektParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				this.match(SubjektParser.NUMBER);
				}
				break;
			case SubjektParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 376;
				this.match(SubjektParser.LBRACK);
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (SubjektParser.LBRACK - 19)) | (1 << (SubjektParser.LCURLY - 19)) | (1 << (SubjektParser.SINGLE_STRING - 19)) | (1 << (SubjektParser.DOUBLE_STRING - 19)) | (1 << (SubjektParser.NUMBER - 19)))) !== 0)) {
					{
					{
					this.state = 377;
					this.value();
					}
					}
					this.state = 382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 383;
				this.match(SubjektParser.RBRACK);
				}
				break;
			case SubjektParser.LCURLY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 384;
				this.match(SubjektParser.LCURLY);
				this.state = 385;
				this.identifier();
				this.state = 386;
				this.match(SubjektParser.ASSIGNMENT);
				this.state = 387;
				this.value();
				this.state = 388;
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
		this.enterRule(_localctx, 70, SubjektParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
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
		this.enterRule(_localctx, 72, SubjektParser.RULE_namespaceIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.identifier();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.T__0) {
				{
				{
				this.state = 395;
				this.match(SubjektParser.T__0);
				this.state = 396;
				this.identifier();
				}
				}
				this.state = 401;
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
		this.enterRule(_localctx, 74, SubjektParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(SubjektParser.IDENTIFIER_CHARS);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\u0197\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x07\x03U\n\x03\f\x03\x0E\x03X\v\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x07\x05`\n\x05\f\x05\x0E\x05c\v\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x07\x07i\n\x07\f\x07\x0E\x07l\v\x07\x03\b\x07" +
		"\bo\n\b\f\b\x0E\br\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\ty\n\t\x03\n" +
		"\x03\n\x03\v\x03\v\x05\v\x7F\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x06" +
		"\f\x87\n\f\r\f\x0E\f\x88\x03\f\x06\f\x8C\n\f\r\f\x0E\f\x8D\x05\f\x90\n" +
		"\f\x03\r\x03\r\x03\r\x07\r\x95\n\r\f\r\x0E\r\x98\v\r\x03\r\x05\r\x9B\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xA1\n\x0E\x05\x0E\xA3\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA9\n\x0F\x03\x0F\x05\x0F\xAC" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xB1\n\x10\f\x10\x0E\x10\xB4\v\x10" +
		"\x03\x10\x05\x10\xB7\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xBD" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC3\n\x11\x05\x11\xC5\n" +
		"\x11\x03\x12\x03\x12\x03\x12\x05\x12\xCA\n\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\xD2\n\x13\f\x13\x0E\x13\xD5\v\x13\x03" +
		"\x13\x05\x13\xD8\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\xE2\n\x14\f\x14\x0E\x14\xE5\v\x14\x03\x14\x05" +
		"\x14\xE8\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15\xF2\n\x15\f\x15\x0E\x15\xF5\v\x15\x03\x15\x05\x15\xF8" +
		"\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\xFF\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0106\n\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u010B\n\x17\x07\x17\u010D\n\x17\f\x17\x0E\x17\u0110\v\x17" +
		"\x03\x17\x05\x17\u0113\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u011C\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0121" +
		"\n\x18\x07\x18\u0123\n\x18\f\x18\x0E\x18\u0126\v\x18\x03\x18\x05\x18\u0129" +
		"\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\u0132\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0137\n\x19\x07\x19\u0139" +
		"\n\x19\f\x19\x0E\x19\u013C\v\x19\x03\x19\x05\x19\u013F\n\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0147\n\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u014B\n\x1A\x03\x1A\x05\x1A\u014E\n\x1A\x03\x1B\x03\x1B\x05\x1B" +
		"\u0152\n\x1B\x03\x1C\x03\x1C\x05\x1C\u0156\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0162" +
		"\n\x1F\x03 \x03 \x03 \x05 \u0167\n \x03 \x03 \x03!\x03!\x03!\x07!\u016E" +
		"\n!\f!\x0E!\u0171\v!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$" +
		"\x03$\x07$\u017D\n$\f$\x0E$\u0180\v$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x05$\u0189\n$\x03%\x03%\x03&\x03&\x03&\x07&\u0190\n&\f&\x0E&\u0193\v" +
		"&\x03\'\x03\'\x03\'\x02\x02\x02(\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02\x02\x04\x03\x02\x0F" +
		"\x11\x03\x02 !\x02\u01AB\x02N\x03\x02\x02\x02\x04V\x03\x02\x02\x02\x06" +
		"Y\x03\x02\x02\x02\ba\x03\x02\x02\x02\nd\x03\x02\x02\x02\fj\x03\x02\x02" +
		"\x02\x0Ep\x03\x02\x02\x02\x10u\x03\x02\x02\x02\x12z\x03\x02\x02\x02\x14" +
		"|\x03\x02\x02\x02\x16\x8F\x03\x02\x02\x02\x18\x91\x03\x02\x02\x02\x1A" +
		"\x9C\x03\x02\x02\x02\x1C\xA4\x03\x02\x02\x02\x1E\xAD\x03\x02\x02\x02 " +
		"\xC4\x03\x02\x02\x02\"\xC9\x03\x02\x02\x02$\xCB\x03\x02\x02\x02&\xDB\x03" +
		"\x02\x02\x02(\xEB\x03\x02\x02\x02*\xFE\x03\x02\x02\x02,\u0100\x03\x02" +
		"\x02\x02.\u0116\x03\x02\x02\x020\u012C\x03\x02\x02\x022\u0142\x03\x02" +
		"\x02\x024\u014F\x03\x02\x02\x026\u0155\x03\x02\x02\x028\u0157\x03\x02" +
		"\x02\x02:\u015B\x03\x02\x02\x02<\u015E\x03\x02\x02\x02>\u0163\x03\x02" +
		"\x02\x02@\u016A\x03\x02\x02\x02B\u0172\x03\x02\x02\x02D\u0176\x03\x02" +
		"\x02\x02F\u0188\x03\x02\x02\x02H\u018A\x03\x02\x02\x02J\u018C\x03\x02" +
		"\x02\x02L\u0194\x03\x02\x02\x02NO\x05\x04\x03\x02OP\x05\b\x05\x02PQ\x05" +
		"\f\x07\x02QR\x07\x02\x02\x03R\x03\x03\x02\x02\x02SU\x05\x06\x04\x02TS" +
		"\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"W\x05\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\x04\x02\x02Z[\x05L\'\x02" +
		"[\\\x07\x19\x02\x02\\]\x05F$\x02]\x07\x03\x02\x02\x02^`\x05\n\x06\x02" +
		"_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02" +
		"b\t\x03\x02\x02\x02ca\x03\x02\x02\x02de\x07\x05\x02\x02ef\x058\x1D\x02" +
		"f\v\x03\x02\x02\x02gi\x05\x0E\b\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\r\x03\x02\x02\x02lj\x03\x02\x02" +
		"\x02mo\x05<\x1F\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02st\x05\x10\t" +
		"\x02t\x0F\x03\x02\x02\x02uv\x05\x12\n\x02vx\x05L\'\x02wy\x05\x14\v\x02" +
		"xw\x03\x02\x02\x02xy\x03\x02\x02\x02y\x11\x03\x02\x02\x02z{\t\x02\x02" +
		"\x02{\x13\x03\x02\x02\x02|~\x07\x17\x02\x02}\x7F\x05\x16\f\x02~}\x03\x02" +
		"\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x07\x18" +
		"\x02\x02\x81\x15\x03\x02\x02\x02\x82\x90\x05\x18\r\x02\x83\x90\x05\x1C" +
		"\x0F\x02\x84\x90\x05\x1E\x10\x02\x85\x87\x05\"\x12\x02\x86\x85\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02" +
		"\x02\x02\x89\x90\x03\x02\x02\x02\x8A\x8C\x052\x1A\x02\x8B\x8A\x03\x02" +
		"\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x82\x03\x02\x02\x02\x8F\x83\x03\x02" +
		"\x02\x02\x8F\x84\x03\x02\x02\x02\x8F\x86\x03\x02\x02\x02\x8F\x8B\x03\x02" +
		"\x02\x02\x90\x17\x03\x02\x02\x02\x91\x96\x05\x1A\x0E\x02\x92\x93\x07\x1D" +
		"\x02\x02\x93\x95\x05\x1A\x0E\x02\x94\x92\x03\x02\x02\x02\x95\x98\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x9A\x03\x02" +
		"\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9B\x07\x1D\x02\x02\x9A\x99\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x19\x03\x02\x02\x02\x9C\xA2\x05L" +
		"\'\x02\x9D\xA0\x07\x19\x02\x02\x9E\xA1\x05H%\x02\x9F\xA1\x07\"\x02\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02" +
		"\xA2\x9D\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x1B\x03\x02\x02\x02" +
		"\xA4\xA5\x07\x06\x02\x02\xA5\xA8\x07\x1A\x02\x02\xA6\xA9\x05\x12\n\x02" +
		"\xA7\xA9\x05L\'\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9" +
		"\xAB\x03\x02\x02\x02\xAA\xAC\x07\x1D\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\x1D\x03\x02\x02\x02\xAD\xB2\x05 \x11\x02\xAE" +
		"\xAF\x07\x1D\x02\x02\xAF\xB1\x05 \x11\x02\xB0\xAE\x03\x02\x02\x02\xB1" +
		"\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
		"\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7\x07\x1D\x02\x02\xB6" +
		"\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x1F\x03\x02\x02\x02\xB8" +
		"\xB9\x07\x07\x02\x02\xB9\xBC\x07\x1A\x02\x02\xBA\xBD\x05\x12\n\x02\xBB" +
		"\xBD\x05L\'\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC5" +
		"\x03\x02\x02\x02\xBE\xBF\x07\b\x02\x02\xBF\xC2\x07\x1A\x02\x02\xC0\xC3" +
		"\x05\x12\n\x02\xC1\xC3\x05L\'\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03" +
		"\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xB8\x03\x02\x02\x02\xC4\xBE\x03" +
		"\x02\x02\x02\xC5!\x03\x02\x02\x02\xC6\xCA\x05$\x13\x02\xC7\xCA\x05&\x14" +
		"\x02\xC8\xCA\x05(\x15\x02\xC9\xC6\x03\x02\x02\x02\xC9\xC7\x03\x02\x02" +
		"\x02\xC9\xC8\x03\x02\x02\x02\xCA#\x03\x02\x02\x02\xCB\xCC\x07\n\x02\x02" +
		"\xCC\xCD\x07\x1A\x02\x02\xCD\xCE\x07\x15\x02\x02\xCE\xD3\x05L\'\x02\xCF" +
		"\xD0\x07\x1D\x02\x02\xD0\xD2\x05L\'\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD8\x07\x1D\x02\x02\xD7\xD6" +
		"\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA" +
		"\x07\x16\x02\x02\xDA%\x03\x02\x02\x02\xDB\xDC\x07\v\x02\x02\xDC\xDD\x07" +
		"\x1A\x02\x02\xDD\xDE\x07\x15\x02\x02\xDE\xE3\x05L\'\x02\xDF\xE0\x07\x1D" +
		"\x02\x02\xE0\xE2\x05L\'\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02\x02" +
		"\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE7\x03\x02\x02" +
		"\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE8\x07\x1D\x02\x02\xE7\xE6\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07\x16\x02" +
		"\x02\xEA\'\x03\x02\x02\x02\xEB\xEC\x07\t\x02\x02\xEC\xED\x07\x1A\x02\x02" +
		"\xED\xEE\x07\x15\x02\x02\xEE\xF3\x05L\'\x02\xEF\xF0\x07\x1D\x02\x02\xF0" +
		"\xF2\x05L\'\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF6\xF8\x07\x1D\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x07\x16\x02\x02\xFA)" +
		"\x03\x02\x02\x02\xFB\xFF\x050\x19\x02\xFC\xFF\x05,\x17\x02\xFD\xFF\x05" +
		".\x18\x02\xFE\xFB\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03" +
		"\x02\x02\x02\xFF+\x03\x02\x02\x02\u0100\u0101\x07\r\x02\x02\u0101\u0102" +
		"\x07\x1A\x02\x02\u0102\u0105\x07\x15\x02\x02\u0103\u0106\x05\x12\n\x02" +
		"\u0104\u0106\x05L\'\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02" +
		"\x02\x02\u0106\u010E\x03\x02\x02\x02\u0107\u010A\x07\x1D\x02\x02\u0108" +
		"\u010B\x05\x12\n\x02\u0109\u010B\x05L\'\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010A\u0109\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u0107\x03" +
		"\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02" +
		"\x02\x02\u0111\u0113\x07\x1D\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x07\x16" +
		"\x02\x02\u0115-\x03\x02\x02\x02\u0116\u0117\x07\x0E\x02\x02\u0117\u0118" +
		"\x07\x1A\x02\x02\u0118\u011B\x07\x15\x02\x02\u0119\u011C\x05\x12\n\x02" +
		"\u011A\u011C\x05L\'\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02" +
		"\x02\x02\u011C\u0124\x03\x02\x02\x02\u011D\u0120\x07\x1D\x02\x02\u011E" +
		"\u0121\x05\x12\n\x02\u011F\u0121\x05L\'\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0120\u011F\x03\x02\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011D\x03" +
		"\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02" +
		"\x02\x02\u0127\u0129\x07\x1D\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07\x16" +
		"\x02\x02\u012B/\x03\x02\x02\x02\u012C\u012D\x07\f\x02\x02\u012D\u012E" +
		"\x07\x1A\x02\x02\u012E\u0131\x07\x15\x02\x02\u012F\u0132\x05\x12\n\x02" +
		"\u0130\u0132\x05L\'\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0130\x03\x02" +
		"\x02\x02\u0132\u013A\x03\x02\x02\x02\u0133\u0136\x07\x1D\x02\x02\u0134" +
		"\u0137\x05\x12\n\x02\u0135\u0137\x05L\'\x02\u0136\u0134\x03\x02\x02\x02" +
		"\u0136\u0135\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0133\x03" +
		"\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013D\u013F\x07\x1D\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07\x16" +
		"\x02\x02\u01411\x03\x02\x02\x02\u0142\u0143\x05L\'\x02\u0143\u0146\x07" +
		"\x1A\x02\x02\u0144\u0147\x05\x12\n\x02\u0145\u0147\x05L\'\x02\u0146\u0144" +
		"\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02" +
		"\u0148\u0149\x07\x19\x02\x02\u0149\u014B\x05F$\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C" +
		"\u014E\x07\x1D\x02\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02" +
		"\x02\x02\u014E3\x03\x02\x02\x02\u014F\u0151\x056\x1C\x02\u0150\u0152\x05" +
		":\x1E\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152" +
		"5\x03\x02\x02\x02\u0153\u0156\x058\x1D\x02\u0154\u0156\x05L\'\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0155\u0154\x03\x02\x02\x02\u01567\x03\x02\x02" +
		"\x02\u0157\u0158\x05J&\x02\u0158\u0159\x07\x1B\x02\x02\u0159\u015A\x05" +
		"L\'\x02\u015A9\x03\x02\x02\x02\u015B\u015C\x07\x1C\x02\x02\u015C\u015D" +
		"\x05L\'\x02\u015D;\x03\x02\x02\x02\u015E\u015F\x07\x12\x02\x02\u015F\u0161" +
		"\x05L\'\x02\u0160\u0162\x05> \x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162=\x03\x02\x02\x02\u0163\u0166\x07\x13\x02\x02\u0164" +
		"\u0167\x05@!\x02\u0165\u0167\x05D#\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
		"\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\u0169\x07\x14\x02\x02\u0169?\x03\x02\x02\x02\u016A\u016F" +
		"\x05B\"\x02\u016B\u016C\x07\x1D\x02\x02\u016C\u016E\x05B\"\x02\u016D\u016B" +
		"\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170A\x03\x02\x02\x02\u0171\u016F\x03\x02" +
		"\x02\x02\u0172\u0173\x05L\'\x02\u0173\u0174\x07\x19\x02\x02\u0174\u0175" +
		"\x05F$\x02\u0175C\x03\x02\x02\x02\u0176\u0177\x05F$\x02\u0177E\x03\x02" +
		"\x02\x02\u0178\u0189\x05H%\x02\u0179\u0189\x07\"\x02\x02\u017A\u017E\x07" +
		"\x15\x02\x02\u017B\u017D\x05F$\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180" +
		"\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
		"\u017F\u0181\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0189\x07" +
		"\x16\x02\x02\u0182\u0183\x07\x17\x02\x02\u0183\u0184\x05L\'\x02\u0184" +
		"\u0185\x07\x19\x02\x02\u0185\u0186\x05F$\x02\u0186\u0187\x07\x18\x02\x02" +
		"\u0187\u0189\x03\x02\x02\x02\u0188\u0178\x03\x02\x02\x02\u0188\u0179\x03" +
		"\x02\x02\x02\u0188\u017A\x03\x02\x02\x02\u0188\u0182\x03\x02\x02\x02\u0189" +
		"G\x03\x02\x02\x02\u018A\u018B\t\x03\x02\x02\u018BI\x03\x02\x02\x02\u018C" +
		"\u0191\x05L\'\x02\u018D\u018E\x07\x03\x02\x02\u018E\u0190\x05L\'\x02\u018F" +
		"\u018D\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02" +
		"\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192K\x03\x02\x02\x02\u0193\u0191" +
		"\x03\x02\x02\x02\u0194\u0195\x07\x1F\x02\x02\u0195M\x03\x02\x02\x025V" +
		"ajpx~\x88\x8D\x8F\x96\x9A\xA0\xA2\xA8\xAB\xB2\xB6\xBC\xC2\xC4\xC9\xD3" +
		"\xD7\xE3\xE7\xF3\xF7\xFE\u0105\u010A\u010E\u0112\u011B\u0120\u0124\u0128" +
		"\u0131\u0136\u013A\u013E\u0146\u014A\u014D\u0151\u0155\u0161\u0166\u016F" +
		"\u017E\u0188\u0191";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SubjektParser.__ATN) {
			SubjektParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SubjektParser._serializedATN));
		}

		return SubjektParser.__ATN;
	}

}

export class IdlContext extends ParserRuleContext {
	public metadataBlock(): MetadataBlockContext {
		return this.getRuleContext(0, MetadataBlockContext);
	}
	public useBlock(): UseBlockContext {
		return this.getRuleContext(0, UseBlockContext);
	}
	public shapeBlock(): ShapeBlockContext {
		return this.getRuleContext(0, ShapeBlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(SubjektParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_idl; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterIdl) {
			listener.enterIdl(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitIdl) {
			listener.exitIdl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitIdl) {
			return visitor.visitIdl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataBlockContext extends ParserRuleContext {
	public metadataStatement(): MetadataStatementContext[];
	public metadataStatement(i: number): MetadataStatementContext;
	public metadataStatement(i?: number): MetadataStatementContext | MetadataStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MetadataStatementContext);
		} else {
			return this.getRuleContext(i, MetadataStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_metadataBlock; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterMetadataBlock) {
			listener.enterMetadataBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitMetadataBlock) {
			listener.exitMetadataBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitMetadataBlock) {
			return visitor.visitMetadataBlock(this);
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


export class UseBlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SubjektParser.RULE_useBlock; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterUseBlock) {
			listener.enterUseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitUseBlock) {
			listener.exitUseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitUseBlock) {
			return visitor.visitUseBlock(this);
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


export class ShapeBlockContext extends ParserRuleContext {
	public shapeStatement(): ShapeStatementContext[];
	public shapeStatement(i: number): ShapeStatementContext;
	public shapeStatement(i?: number): ShapeStatementContext | ShapeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShapeStatementContext);
		} else {
			return this.getRuleContext(i, ShapeStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeBlock; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeBlock) {
			listener.enterShapeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeBlock) {
			listener.exitShapeBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeBlock) {
			return visitor.visitShapeBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeStatementContext extends ParserRuleContext {
	public shapeDefinition(): ShapeDefinitionContext {
		return this.getRuleContext(0, ShapeDefinitionContext);
	}
	public trait(): TraitContext[];
	public trait(i: number): TraitContext;
	public trait(i?: number): TraitContext | TraitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TraitContext);
		} else {
			return this.getRuleContext(i, TraitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeStatement; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeStatement) {
			listener.enterShapeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeStatement) {
			listener.exitShapeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeStatement) {
			return visitor.visitShapeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeDefinitionContext extends ParserRuleContext {
	public shapeType(): ShapeTypeContext {
		return this.getRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public shapeTypeDefinition(): ShapeTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeDefinition; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeDefinition) {
			listener.enterShapeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeDefinition) {
			listener.exitShapeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeDefinition) {
			return visitor.visitShapeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeTypeContext extends ParserRuleContext {
	public AGGREGATE_SHAPE_TYPE(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.AGGREGATE_SHAPE_TYPE, 0); }
	public SIMPLE_SHAPE_TYPE(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.SIMPLE_SHAPE_TYPE, 0); }
	public SUBJECT_SHAPE_TYPE(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.SUBJECT_SHAPE_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeType; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeType) {
			listener.enterShapeType(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeType) {
			listener.exitShapeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeType) {
			return visitor.visitShapeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShapeTypeDefinitionContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(SubjektParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SubjektParser.RCURLY, 0); }
	public members(): MembersContext | undefined {
		return this.tryGetRuleContext(0, MembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_shapeTypeDefinition; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterShapeTypeDefinition) {
			listener.enterShapeTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitShapeTypeDefinition) {
			listener.exitShapeTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitShapeTypeDefinition) {
			return visitor.visitShapeTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MembersContext extends ParserRuleContext {
	public enumMembers(): EnumMembersContext | undefined {
		return this.tryGetRuleContext(0, EnumMembersContext);
	}
	public listMembers(): ListMembersContext | undefined {
		return this.tryGetRuleContext(0, ListMembersContext);
	}
	public mapMembers(): MapMembersContext | undefined {
		return this.tryGetRuleContext(0, MapMembersContext);
	}
	public subjectMembers(): SubjectMembersContext[];
	public subjectMembers(i: number): SubjectMembersContext;
	public subjectMembers(i?: number): SubjectMembersContext | SubjectMembersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubjectMembersContext);
		} else {
			return this.getRuleContext(i, SubjectMembersContext);
		}
	}
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_members; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterMembers) {
			listener.enterMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitMembers) {
			listener.exitMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitMembers) {
			return visitor.visitMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMembersContext extends ParserRuleContext {
	public enumMember(): EnumMemberContext[];
	public enumMember(i: number): EnumMemberContext;
	public enumMember(i?: number): EnumMemberContext | EnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberContext);
		} else {
			return this.getRuleContext(i, EnumMemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_enumMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterEnumMembers) {
			listener.enterEnumMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitEnumMembers) {
			listener.exitEnumMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitEnumMembers) {
			return visitor.visitEnumMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.ASSIGNMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_enumMember; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitEnumMember) {
			listener.exitEnumMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitEnumMember) {
			return visitor.visitEnumMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListMembersContext extends ParserRuleContext {
	public MEMBER(): TerminalNode { return this.getToken(SubjektParser.MEMBER, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_listMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterListMembers) {
			listener.enterListMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitListMembers) {
			listener.exitListMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitListMembers) {
			return visitor.visitListMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapMembersContext extends ParserRuleContext {
	public keyValuePair(): KeyValuePairContext[];
	public keyValuePair(i: number): KeyValuePairContext;
	public keyValuePair(i?: number): KeyValuePairContext | KeyValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValuePairContext);
		} else {
			return this.getRuleContext(i, KeyValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_mapMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterMapMembers) {
			listener.enterMapMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitMapMembers) {
			listener.exitMapMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitMapMembers) {
			return visitor.visitMapMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyValuePairContext extends ParserRuleContext {
	public KEY(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.KEY, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_keyValuePair; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterKeyValuePair) {
			listener.enterKeyValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitKeyValuePair) {
			listener.exitKeyValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitKeyValuePair) {
			return visitor.visitKeyValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubjectMembersContext extends ParserRuleContext {
	public stateReference(): StateReferenceContext | undefined {
		return this.tryGetRuleContext(0, StateReferenceContext);
	}
	public behaviorReference(): BehaviorReferenceContext | undefined {
		return this.tryGetRuleContext(0, BehaviorReferenceContext);
	}
	public subscriptionReference(): SubscriptionReferenceContext | undefined {
		return this.tryGetRuleContext(0, SubscriptionReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_subjectMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterSubjectMembers) {
			listener.enterSubjectMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitSubjectMembers) {
			listener.exitSubjectMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitSubjectMembers) {
			return visitor.visitSubjectMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateReferenceContext extends ParserRuleContext {
	public STATES(): TerminalNode { return this.getToken(SubjektParser.STATES, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_stateReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterStateReference) {
			listener.enterStateReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitStateReference) {
			listener.exitStateReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitStateReference) {
			return visitor.visitStateReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BehaviorReferenceContext extends ParserRuleContext {
	public BEHAVIORS(): TerminalNode { return this.getToken(SubjektParser.BEHAVIORS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_behaviorReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterBehaviorReference) {
			listener.enterBehaviorReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitBehaviorReference) {
			listener.exitBehaviorReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitBehaviorReference) {
			return visitor.visitBehaviorReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptionReferenceContext extends ParserRuleContext {
	public SUBSCRIPTIONS(): TerminalNode { return this.getToken(SubjektParser.SUBSCRIPTIONS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_subscriptionReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterSubscriptionReference) {
			listener.enterSubscriptionReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitSubscriptionReference) {
			listener.exitSubscriptionReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitSubscriptionReference) {
			return visitor.visitSubscriptionReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BehaviorMembersContext extends ParserRuleContext {
	public triggerReference(): TriggerReferenceContext | undefined {
		return this.tryGetRuleContext(0, TriggerReferenceContext);
	}
	public inputReference(): InputReferenceContext | undefined {
		return this.tryGetRuleContext(0, InputReferenceContext);
	}
	public outputReference(): OutputReferenceContext | undefined {
		return this.tryGetRuleContext(0, OutputReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_behaviorMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterBehaviorMembers) {
			listener.enterBehaviorMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitBehaviorMembers) {
			listener.exitBehaviorMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitBehaviorMembers) {
			return visitor.visitBehaviorMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputReferenceContext extends ParserRuleContext {
	public INPUTS(): TerminalNode { return this.getToken(SubjektParser.INPUTS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public shapeType(): ShapeTypeContext[];
	public shapeType(i: number): ShapeTypeContext;
	public shapeType(i?: number): ShapeTypeContext | ShapeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShapeTypeContext);
		} else {
			return this.getRuleContext(i, ShapeTypeContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_inputReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterInputReference) {
			listener.enterInputReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitInputReference) {
			listener.exitInputReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitInputReference) {
			return visitor.visitInputReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputReferenceContext extends ParserRuleContext {
	public OUTPUTS(): TerminalNode { return this.getToken(SubjektParser.OUTPUTS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public shapeType(): ShapeTypeContext[];
	public shapeType(i: number): ShapeTypeContext;
	public shapeType(i?: number): ShapeTypeContext | ShapeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShapeTypeContext);
		} else {
			return this.getRuleContext(i, ShapeTypeContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_outputReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterOutputReference) {
			listener.enterOutputReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitOutputReference) {
			listener.exitOutputReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitOutputReference) {
			return visitor.visitOutputReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerReferenceContext extends ParserRuleContext {
	public TRIGGERS(): TerminalNode { return this.getToken(SubjektParser.TRIGGERS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public shapeType(): ShapeTypeContext[];
	public shapeType(i: number): ShapeTypeContext;
	public shapeType(i?: number): ShapeTypeContext | ShapeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShapeTypeContext);
		} else {
			return this.getRuleContext(i, ShapeTypeContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_triggerReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTriggerReference) {
			listener.enterTriggerReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTriggerReference) {
			listener.exitTriggerReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTriggerReference) {
			return visitor.visitTriggerReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.ASSIGNMENT, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_member; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
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


export class TraitContext extends ParserRuleContext {
	public AT_SIGN(): TerminalNode { return this.getToken(SubjektParser.AT_SIGN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public traitBody(): TraitBodyContext | undefined {
		return this.tryGetRuleContext(0, TraitBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_trait; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTrait) {
			listener.enterTrait(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTrait) {
			listener.exitTrait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTrait) {
			return visitor.visitTrait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitBodyContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SubjektParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SubjektParser.RPAREN, 0); }
	public traitStructureList(): TraitStructureListContext | undefined {
		return this.tryGetRuleContext(0, TraitStructureListContext);
	}
	public traitNode(): TraitNodeContext | undefined {
		return this.tryGetRuleContext(0, TraitNodeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_traitBody; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTraitBody) {
			listener.enterTraitBody(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTraitBody) {
			listener.exitTraitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTraitBody) {
			return visitor.visitTraitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitStructureListContext extends ParserRuleContext {
	public traitStructure(): TraitStructureContext[];
	public traitStructure(i: number): TraitStructureContext;
	public traitStructure(i?: number): TraitStructureContext | TraitStructureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TraitStructureContext);
		} else {
			return this.getRuleContext(i, TraitStructureContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SubjektParser.COMMA);
		} else {
			return this.getToken(SubjektParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_traitStructureList; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTraitStructureList) {
			listener.enterTraitStructureList(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTraitStructureList) {
			listener.exitTraitStructureList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTraitStructureList) {
			return visitor.visitTraitStructureList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitStructureContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return SubjektParser.RULE_traitStructure; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTraitStructure) {
			listener.enterTraitStructure(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTraitStructure) {
			listener.exitTraitStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTraitStructure) {
			return visitor.visitTraitStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraitNodeContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_traitNode; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterTraitNode) {
			listener.enterTraitNode(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitTraitNode) {
			listener.exitTraitNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitTraitNode) {
			return visitor.visitTraitNode(this);
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
	public IDENTIFIER_CHARS(): TerminalNode { return this.getToken(SubjektParser.IDENTIFIER_CHARS, 0); }
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


