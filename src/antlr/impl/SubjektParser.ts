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
	public static readonly METADATA = 1;
	public static readonly USE = 2;
	public static readonly MEMBER = 3;
	public static readonly KEY = 4;
	public static readonly VALUE = 5;
	public static readonly STATE = 6;
	public static readonly BEHAVIORS = 7;
	public static readonly EVENTS = 8;
	public static readonly ERRORS = 9;
	public static readonly INPUT = 10;
	public static readonly OUTPUT = 11;
	public static readonly AGGREGATE_SHAPE_TYPE = 12;
	public static readonly SIMPLE_SHAPE_TYPE = 13;
	public static readonly SUBJECT_SHAPE_TYPE = 14;
	public static readonly AT_SIGN = 15;
	public static readonly LPAREN = 16;
	public static readonly RPAREN = 17;
	public static readonly LBRACK = 18;
	public static readonly RBRACK = 19;
	public static readonly LCURLY = 20;
	public static readonly RCURLY = 21;
	public static readonly ASSIGNMENT = 22;
	public static readonly COLON = 23;
	public static readonly HASH_SIGN = 24;
	public static readonly DOLLAR_SIGN = 25;
	public static readonly DOT = 26;
	public static readonly COMMA = 27;
	public static readonly SEMICOLON = 28;
	public static readonly INTEGER = 29;
	public static readonly FLOAT = 30;
	public static readonly IDENTIFIER_CHARS = 31;
	public static readonly NAMESPACE_IDENTIFIER_CHARS = 32;
	public static readonly SINGLE_STRING = 33;
	public static readonly DOUBLE_STRING = 34;
	public static readonly WS = 35;
	public static readonly COMMENT = 36;
	public static readonly DOCUMENTATION_COMMENT = 37;
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
	public static readonly RULE_aggregateShapeTypeDefinition = 10;
	public static readonly RULE_subjectShapeTypeDefinition = 11;
	public static readonly RULE_aggregateShapeMembers = 12;
	public static readonly RULE_subjectShapeMembers = 13;
	public static readonly RULE_enumMembers = 14;
	public static readonly RULE_enumMember = 15;
	public static readonly RULE_listMember = 16;
	public static readonly RULE_mapMembers = 17;
	public static readonly RULE_keyValuePair = 18;
	public static readonly RULE_subjectMembers = 19;
	public static readonly RULE_behaviorMembers = 20;
	public static readonly RULE_stateReference = 21;
	public static readonly RULE_behaviorReference = 22;
	public static readonly RULE_eventReference = 23;
	public static readonly RULE_inputReference = 24;
	public static readonly RULE_outputReference = 25;
	public static readonly RULE_errorReference = 26;
	public static readonly RULE_member = 27;
	public static readonly RULE_shapeId = 28;
	public static readonly RULE_rootShapeId = 29;
	public static readonly RULE_absoluteRootShapeId = 30;
	public static readonly RULE_shapeIdMember = 31;
	public static readonly RULE_trait = 32;
	public static readonly RULE_traitBody = 33;
	public static readonly RULE_traitStructureList = 34;
	public static readonly RULE_traitStructure = 35;
	public static readonly RULE_traitNode = 36;
	public static readonly RULE_value = 37;
	public static readonly RULE_listValue = 38;
	public static readonly RULE_objectValue = 39;
	public static readonly RULE_kvp = 40;
	public static readonly RULE_string = 41;
	public static readonly RULE_number = 42;
	public static readonly RULE_namespaceIdentifier = 43;
	public static readonly RULE_identifier = 44;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"idl", "metadataBlock", "metadataStatement", "useBlock", "useStatement", 
		"shapeBlock", "shapeStatement", "shapeDefinition", "shapeType", "shapeTypeDefinition", 
		"aggregateShapeTypeDefinition", "subjectShapeTypeDefinition", "aggregateShapeMembers", 
		"subjectShapeMembers", "enumMembers", "enumMember", "listMember", "mapMembers", 
		"keyValuePair", "subjectMembers", "behaviorMembers", "stateReference", 
		"behaviorReference", "eventReference", "inputReference", "outputReference", 
		"errorReference", "member", "shapeId", "rootShapeId", "absoluteRootShapeId", 
		"shapeIdMember", "trait", "traitBody", "traitStructureList", "traitStructure", 
		"traitNode", "value", "listValue", "objectValue", "kvp", "string", "number", 
		"namespaceIdentifier", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'metadata'", "'use'", "'member'", "'key'", "'value'", "'state'", 
		"'behaviors'", "'events'", "'errors'", "'input'", "'output'", undefined, 
		undefined, undefined, "'@'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
		"'='", "':'", "'#'", "'$'", "'.'", "','", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "METADATA", "USE", "MEMBER", "KEY", "VALUE", "STATE", "BEHAVIORS", 
		"EVENTS", "ERRORS", "INPUT", "OUTPUT", "AGGREGATE_SHAPE_TYPE", "SIMPLE_SHAPE_TYPE", 
		"SUBJECT_SHAPE_TYPE", "AT_SIGN", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"LCURLY", "RCURLY", "ASSIGNMENT", "COLON", "HASH_SIGN", "DOLLAR_SIGN", 
		"DOT", "COMMA", "SEMICOLON", "INTEGER", "FLOAT", "IDENTIFIER_CHARS", "NAMESPACE_IDENTIFIER_CHARS", 
		"SINGLE_STRING", "DOUBLE_STRING", "WS", "COMMENT", "DOCUMENTATION_COMMENT",
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
			this.state = 90;
			this.metadataBlock();
			this.state = 91;
			this.useBlock();
			this.state = 92;
			this.shapeBlock();
			this.state = 93;
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
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.METADATA) {
				{
				{
				this.state = 95;
				this.metadataStatement();
				}
				}
				this.state = 100;
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
			this.state = 101;
			this.match(SubjektParser.METADATA);
			this.state = 102;
			this.identifier();
			this.state = 103;
			this.match(SubjektParser.ASSIGNMENT);
			this.state = 104;
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
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.USE) {
				{
				{
				this.state = 106;
				this.useStatement();
				}
				}
				this.state = 111;
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
			this.state = 112;
			this.match(SubjektParser.USE);
			this.state = 113;
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
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.AGGREGATE_SHAPE_TYPE) | (1 << SubjektParser.SIMPLE_SHAPE_TYPE) | (1 << SubjektParser.SUBJECT_SHAPE_TYPE) | (1 << SubjektParser.AT_SIGN))) !== 0)) {
				{
				{
				this.state = 115;
				this.shapeStatement();
				}
				}
				this.state = 120;
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
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.AT_SIGN) {
				{
				{
				this.state = 121;
				this.trait();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 127;
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
			this.state = 129;
			this.shapeType();
			this.state = 130;
			this.identifier();
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.LCURLY) {
				{
				this.state = 131;
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
			this.state = 134;
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
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.aggregateShapeTypeDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.subjectShapeTypeDefinition();
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
	public aggregateShapeTypeDefinition(): AggregateShapeTypeDefinitionContext {
		let _localctx: AggregateShapeTypeDefinitionContext = new AggregateShapeTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SubjektParser.RULE_aggregateShapeTypeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(SubjektParser.LCURLY);
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.aggregateShapeMembers();
				}
				break;
			}
			this.state = 144;
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
	public subjectShapeTypeDefinition(): SubjectShapeTypeDefinitionContext {
		let _localctx: SubjectShapeTypeDefinitionContext = new SubjectShapeTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SubjektParser.RULE_subjectShapeTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(SubjektParser.LCURLY);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 147;
				this.subjectShapeMembers();
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SubjektParser.STATE) | (1 << SubjektParser.BEHAVIORS) | (1 << SubjektParser.EVENTS) | (1 << SubjektParser.ERRORS) | (1 << SubjektParser.INPUT) | (1 << SubjektParser.OUTPUT))) !== 0));
			this.state = 152;
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
	public aggregateShapeMembers(): AggregateShapeMembersContext {
		let _localctx: AggregateShapeMembersContext = new AggregateShapeMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SubjektParser.RULE_aggregateShapeMembers);
		let _la: number;
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.enumMembers();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.listMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.mapMembers();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SubjektParser.IDENTIFIER_CHARS) {
					{
					{
					this.state = 157;
					this.member();
					}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public subjectShapeMembers(): SubjectShapeMembersContext {
		let _localctx: SubjectShapeMembersContext = new SubjectShapeMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SubjektParser.RULE_subjectShapeMembers);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.STATE:
			case SubjektParser.BEHAVIORS:
			case SubjektParser.EVENTS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.subjectMembers();
				}
				break;
			case SubjektParser.ERRORS:
			case SubjektParser.INPUT:
			case SubjektParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.behaviorMembers();
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
	public enumMembers(): EnumMembersContext {
		let _localctx: EnumMembersContext = new EnumMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SubjektParser.RULE_enumMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.enumMember();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.COMMA || _la === SubjektParser.IDENTIFIER_CHARS) {
				{
				{
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SubjektParser.COMMA) {
					{
					this.state = 170;
					this.match(SubjektParser.COMMA);
					}
				}

				this.state = 173;
				this.enumMember();
				}
				}
				this.state = 178;
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
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SubjektParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.identifier();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.ASSIGNMENT) {
				{
				this.state = 180;
				this.match(SubjektParser.ASSIGNMENT);
				this.state = 183;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.SINGLE_STRING:
				case SubjektParser.DOUBLE_STRING:
					{
					this.state = 181;
					this.string();
					}
					break;
				case SubjektParser.INTEGER:
					{
					this.state = 182;
					this.match(SubjektParser.INTEGER);
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
	public listMember(): ListMemberContext {
		let _localctx: ListMemberContext = new ListMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SubjektParser.RULE_listMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(SubjektParser.MEMBER);
			this.state = 188;
			this.match(SubjektParser.COLON);
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 189;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 190;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 34, SubjektParser.RULE_mapMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.KEY || _la === SubjektParser.VALUE) {
				{
				{
				this.state = 193;
				this.keyValuePair();
				}
				}
				this.state = 198;
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
	public keyValuePair(): KeyValuePairContext {
		let _localctx: KeyValuePairContext = new KeyValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SubjektParser.RULE_keyValuePair);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.KEY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.match(SubjektParser.KEY);
				this.state = 200;
				this.match(SubjektParser.COLON);
				this.state = 203;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.AGGREGATE_SHAPE_TYPE:
				case SubjektParser.SIMPLE_SHAPE_TYPE:
				case SubjektParser.SUBJECT_SHAPE_TYPE:
					{
					this.state = 201;
					this.shapeType();
					}
					break;
				case SubjektParser.IDENTIFIER_CHARS:
					{
					this.state = 202;
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
				this.state = 205;
				this.match(SubjektParser.VALUE);
				this.state = 206;
				this.match(SubjektParser.COLON);
				this.state = 209;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SubjektParser.AGGREGATE_SHAPE_TYPE:
				case SubjektParser.SIMPLE_SHAPE_TYPE:
				case SubjektParser.SUBJECT_SHAPE_TYPE:
					{
					this.state = 207;
					this.shapeType();
					}
					break;
				case SubjektParser.IDENTIFIER_CHARS:
					{
					this.state = 208;
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
		this.enterRule(_localctx, 38, SubjektParser.RULE_subjectMembers);
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.STATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.stateReference();
				}
				break;
			case SubjektParser.BEHAVIORS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.behaviorReference();
				}
				break;
			case SubjektParser.EVENTS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
				this.eventReference();
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
	public behaviorMembers(): BehaviorMembersContext {
		let _localctx: BehaviorMembersContext = new BehaviorMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SubjektParser.RULE_behaviorMembers);
		try {
			this.state = 221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.INPUT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.inputReference();
				}
				break;
			case SubjektParser.OUTPUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.outputReference();
				}
				break;
			case SubjektParser.ERRORS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 220;
				this.errorReference();
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
		this.enterRule(_localctx, 42, SubjektParser.RULE_stateReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(SubjektParser.STATE);
			this.state = 224;
			this.match(SubjektParser.COLON);
			this.state = 225;
			this.match(SubjektParser.LCURLY);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 226;
				this.member();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SubjektParser.IDENTIFIER_CHARS);
			this.state = 231;
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
	public behaviorReference(): BehaviorReferenceContext {
		let _localctx: BehaviorReferenceContext = new BehaviorReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SubjektParser.RULE_behaviorReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(SubjektParser.BEHAVIORS);
			this.state = 234;
			this.match(SubjektParser.COLON);
			this.state = 235;
			this.match(SubjektParser.LBRACK);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.IDENTIFIER_CHARS) {
				{
				{
				this.state = 236;
				this.identifier();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 242;
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
	public eventReference(): EventReferenceContext {
		let _localctx: EventReferenceContext = new EventReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SubjektParser.RULE_eventReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(SubjektParser.EVENTS);
			this.state = 245;
			this.match(SubjektParser.COLON);
			this.state = 246;
			this.match(SubjektParser.LBRACK);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.IDENTIFIER_CHARS) {
				{
				{
				this.state = 247;
				this.identifier();
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 253;
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
	public inputReference(): InputReferenceContext {
		let _localctx: InputReferenceContext = new InputReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SubjektParser.RULE_inputReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(SubjektParser.INPUT);
			this.state = 256;
			this.match(SubjektParser.COLON);
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
		this.enterRule(_localctx, 50, SubjektParser.RULE_outputReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(SubjektParser.OUTPUT);
			this.state = 262;
			this.match(SubjektParser.COLON);
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 263;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 264;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public errorReference(): ErrorReferenceContext {
		let _localctx: ErrorReferenceContext = new ErrorReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SubjektParser.RULE_errorReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(SubjektParser.ERRORS);
			this.state = 268;
			this.match(SubjektParser.COLON);
			this.state = 269;
			this.match(SubjektParser.LBRACK);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.IDENTIFIER_CHARS) {
				{
				{
				this.state = 270;
				this.identifier();
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
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
		this.enterRule(_localctx, 54, SubjektParser.RULE_member);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.identifier();
			this.state = 279;
			this.match(SubjektParser.COLON);
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.AGGREGATE_SHAPE_TYPE:
			case SubjektParser.SIMPLE_SHAPE_TYPE:
			case SubjektParser.SUBJECT_SHAPE_TYPE:
				{
				this.state = 280;
				this.shapeType();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 281;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 56, SubjektParser.RULE_shapeId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.rootShapeId();
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.DOLLAR_SIGN) {
				{
				this.state = 285;
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
		this.enterRule(_localctx, 58, SubjektParser.RULE_rootShapeId);
		try {
			this.state = 290;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.NAMESPACE_IDENTIFIER_CHARS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.absoluteRootShapeId();
				}
				break;
			case SubjektParser.IDENTIFIER_CHARS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.identifier();
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
	public absoluteRootShapeId(): AbsoluteRootShapeIdContext {
		let _localctx: AbsoluteRootShapeIdContext = new AbsoluteRootShapeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SubjektParser.RULE_absoluteRootShapeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.namespaceIdentifier();
			this.state = 293;
			this.match(SubjektParser.HASH_SIGN);
			this.state = 294;
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
		this.enterRule(_localctx, 62, SubjektParser.RULE_shapeIdMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(SubjektParser.DOLLAR_SIGN);
			this.state = 297;
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
		this.enterRule(_localctx, 64, SubjektParser.RULE_trait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(SubjektParser.AT_SIGN);
			this.state = 300;
			this.identifier();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SubjektParser.LPAREN) {
				{
				this.state = 301;
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
		this.enterRule(_localctx, 66, SubjektParser.RULE_traitBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(SubjektParser.LPAREN);
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.IDENTIFIER_CHARS:
				{
				this.state = 305;
				this.traitStructureList();
				}
				break;
			case SubjektParser.LBRACK:
			case SubjektParser.LCURLY:
			case SubjektParser.INTEGER:
			case SubjektParser.FLOAT:
			case SubjektParser.SINGLE_STRING:
			case SubjektParser.DOUBLE_STRING:
				{
				this.state = 306;
				this.traitNode();
				}
				break;
			case SubjektParser.RPAREN:
				break;
			default:
				break;
			}
			this.state = 309;
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
		this.enterRule(_localctx, 68, SubjektParser.RULE_traitStructureList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 311;
				this.traitStructure();
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SubjektParser.IDENTIFIER_CHARS);
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
		this.enterRule(_localctx, 70, SubjektParser.RULE_traitStructure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.identifier();
			this.state = 317;
			this.match(SubjektParser.ASSIGNMENT);
			this.state = 318;
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
		this.enterRule(_localctx, 72, SubjektParser.RULE_traitNode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
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
		this.enterRule(_localctx, 74, SubjektParser.RULE_value);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SubjektParser.SINGLE_STRING:
			case SubjektParser.DOUBLE_STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 322;
				this.string();
				}
				break;
			case SubjektParser.INTEGER:
			case SubjektParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.number();
				}
				break;
			case SubjektParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 324;
				this.listValue();
				}
				break;
			case SubjektParser.LCURLY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 325;
				this.objectValue();
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
	public listValue(): ListValueContext {
		let _localctx: ListValueContext = new ListValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SubjektParser.RULE_listValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(SubjektParser.LBRACK);
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (SubjektParser.LBRACK - 18)) | (1 << (SubjektParser.LCURLY - 18)) | (1 << (SubjektParser.INTEGER - 18)) | (1 << (SubjektParser.FLOAT - 18)) | (1 << (SubjektParser.SINGLE_STRING - 18)) | (1 << (SubjektParser.DOUBLE_STRING - 18)))) !== 0)) {
				{
				{
				this.state = 329;
				this.value();
				}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 335;
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
	public objectValue(): ObjectValueContext {
		let _localctx: ObjectValueContext = new ObjectValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SubjektParser.RULE_objectValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(SubjektParser.LCURLY);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SubjektParser.IDENTIFIER_CHARS) {
				{
				{
				this.state = 338;
				this.kvp();
				}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 344;
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
	public kvp(): KvpContext {
		let _localctx: KvpContext = new KvpContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SubjektParser.RULE_kvp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.identifier();
			this.state = 347;
			this.match(SubjektParser.COLON);
			this.state = 348;
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SubjektParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SubjektParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(_la === SubjektParser.INTEGER || _la === SubjektParser.FLOAT)) {
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
		this.enterRule(_localctx, 86, SubjektParser.RULE_namespaceIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(SubjektParser.NAMESPACE_IDENTIFIER_CHARS);
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
		this.enterRule(_localctx, 88, SubjektParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\u0169\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x07\x03c\n\x03\f\x03\x0E\x03f\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x07\x05n\n\x05\f\x05\x0E\x05q\v\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x07\x07w\n\x07\f\x07\x0E\x07z\v\x07\x03\b\x07\b}\n\b\f\b\x0E" +
		"\b\x80\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\x87\n\t\x03\n\x03\n\x03" +
		"\v\x03\v\x05\v\x8D\n\v\x03\f\x03\f\x05\f\x91\n\f\x03\f\x03\f\x03\r\x03" +
		"\r\x06\r\x97\n\r\r\r\x0E\r\x98\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\xA1\n\x0E\f\x0E\x0E\x0E\xA4\v\x0E\x05\x0E\xA6\n\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\xAA\n\x0F\x03\x10\x03\x10\x05\x10\xAE\n\x10\x03\x10\x07" +
		"\x10\xB1\n\x10\f\x10\x0E\x10\xB4\v\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\xBA\n\x11\x05\x11\xBC\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\xC2\n\x12\x03\x13\x07\x13\xC5\n\x13\f\x13\x0E\x13\xC8\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\xCE\n\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\xD4\n\x14\x05\x14\xD6\n\x14\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\xDB\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\xE0\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x06\x17\xE6\n\x17\r\x17\x0E\x17\xE7\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\xF0\n\x18\f\x18\x0E\x18\xF3\v\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\xFB\n\x19\f\x19\x0E" +
		"\x19\xFE\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u0106\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u010C\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0112\n\x1C\f\x1C\x0E\x1C\u0115\v\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u011D\n\x1D\x03" +
		"\x1E\x03\x1E\x05\x1E\u0121\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0125\n\x1F\x03" +
		" \x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u0131\n\"\x03" +
		"#\x03#\x03#\x05#\u0136\n#\x03#\x03#\x03$\x06$\u013B\n$\r$\x0E$\u013C\x03" +
		"%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05\'\u0149\n\'\x03" +
		"(\x03(\x07(\u014D\n(\f(\x0E(\u0150\v(\x03(\x03(\x03)\x03)\x07)\u0156\n" +
		")\f)\x0E)\u0159\v)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03,\x03,\x03" +
		"-\x03-\x03.\x03.\x03.\x02\x02\x02/\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\x02\x05\x03\x02\x0E\x10\x03\x02#$\x03\x02\x1F \x02" +
		"\u0167\x02\\\x03\x02\x02\x02\x04d\x03\x02\x02\x02\x06g\x03\x02\x02\x02" +
		"\bo\x03\x02\x02\x02\nr\x03\x02\x02\x02\fx\x03\x02\x02\x02\x0E~\x03\x02" +
		"\x02\x02\x10\x83\x03\x02\x02\x02\x12\x88\x03\x02\x02\x02\x14\x8C\x03\x02" +
		"\x02\x02\x16\x8E\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\xA5\x03\x02" +
		"\x02\x02\x1C\xA9\x03\x02\x02\x02\x1E\xAB\x03\x02\x02\x02 \xB5\x03\x02" +
		"\x02\x02\"\xBD\x03\x02\x02\x02$\xC6\x03\x02\x02\x02&\xD5\x03\x02\x02\x02" +
		"(\xDA\x03\x02\x02\x02*\xDF\x03\x02\x02\x02,\xE1\x03\x02\x02\x02.\xEB\x03" +
		"\x02\x02\x020\xF6\x03\x02\x02\x022\u0101\x03\x02\x02\x024\u0107\x03\x02" +
		"\x02\x026\u010D\x03\x02\x02\x028\u0118\x03\x02\x02\x02:\u011E\x03\x02" +
		"\x02\x02<\u0124\x03\x02\x02\x02>\u0126\x03\x02\x02\x02@\u012A\x03\x02" +
		"\x02\x02B\u012D\x03\x02\x02\x02D\u0132\x03\x02\x02\x02F\u013A\x03\x02" +
		"\x02\x02H\u013E\x03\x02\x02\x02J\u0142\x03\x02\x02\x02L\u0148\x03\x02" +
		"\x02\x02N\u014A\x03\x02\x02\x02P\u0153\x03\x02\x02\x02R\u015C\x03\x02" +
		"\x02\x02T\u0160\x03\x02\x02\x02V\u0162\x03\x02\x02\x02X\u0164\x03\x02" +
		"\x02\x02Z\u0166\x03\x02\x02\x02\\]\x05\x04\x03\x02]^\x05\b\x05\x02^_\x05" +
		"\f\x07\x02_`\x07\x02\x02\x03`\x03\x03\x02\x02\x02ac\x05\x06\x04\x02ba" +
		"\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02" +
		"e\x05\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x03\x02\x02hi\x05Z.\x02" +
		"ij\x07\x18\x02\x02jk\x05L\'\x02k\x07\x03\x02\x02\x02ln\x05\n\x06\x02m" +
		"l\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"p\t\x03\x02\x02\x02qo\x03\x02\x02\x02rs\x07\x04\x02\x02st\x05> \x02t\v" +
		"\x03\x02\x02\x02uw\x05\x0E\b\x02vu\x03\x02\x02\x02wz\x03\x02\x02\x02x" +
		"v\x03\x02\x02\x02xy\x03\x02\x02\x02y\r\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"{}\x05B\"\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81" +
		"\x82\x05\x10\t\x02\x82\x0F\x03\x02\x02\x02\x83\x84\x05\x12\n\x02\x84\x86" +
		"\x05Z.\x02\x85\x87\x05\x14\v\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x11\x03\x02\x02\x02\x88\x89\t\x02\x02\x02\x89\x13\x03\x02" +
		"\x02\x02\x8A\x8D\x05\x16\f\x02\x8B\x8D\x05\x18\r\x02\x8C\x8A\x03\x02\x02" +
		"\x02\x8C\x8B\x03\x02\x02\x02\x8D\x15\x03\x02\x02\x02\x8E\x90\x07\x16\x02" +
		"\x02\x8F\x91\x05\x1A\x0E\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02" +
		"\x02\x91\x92\x03\x02\x02\x02\x92\x93\x07\x17\x02\x02\x93\x17\x03\x02\x02" +
		"\x02\x94\x96\x07\x16\x02\x02\x95\x97\x05\x1C\x0F\x02\x96\x95\x03\x02\x02" +
		"\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02" +
		"\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x17\x02\x02\x9B\x19\x03\x02\x02" +
		"\x02\x9C\xA6\x05\x1E\x10\x02\x9D\xA6\x05\"\x12\x02\x9E\xA6\x05$\x13\x02" +
		"\x9F\xA1\x058\x1D\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02" +
		"\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02" +
		"\xA4\xA2\x03\x02\x02\x02\xA5\x9C\x03\x02\x02\x02\xA5\x9D\x03\x02\x02\x02" +
		"\xA5\x9E\x03\x02\x02\x02\xA5\xA2\x03\x02\x02\x02\xA6\x1B\x03\x02\x02\x02" +
		"\xA7\xAA\x05(\x15\x02\xA8\xAA\x05*\x16\x02\xA9\xA7\x03\x02\x02\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xAA\x1D\x03\x02\x02\x02\xAB\xB2\x05 \x11\x02\xAC" +
		"\xAE\x07\x1D\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB1\x05 \x11\x02\xB0\xAD\x03\x02\x02\x02\xB1" +
		"\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
		"\x1F\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xBB\x05Z.\x02\xB6\xB9" +
		"\x07\x18\x02\x02\xB7\xBA\x05T+\x02\xB8\xBA\x07\x1F\x02\x02\xB9\xB7\x03" +
		"\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB6\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC!\x03\x02\x02\x02\xBD\xBE\x07" +
		"\x05\x02\x02\xBE\xC1\x07\x19\x02\x02\xBF\xC2\x05\x12\n\x02\xC0\xC2\x05" +
		"Z.\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2#\x03\x02\x02" +
		"\x02\xC3\xC5\x05&\x14\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02" +
		"\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7%\x03\x02\x02" +
		"\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\x06\x02\x02\xCA\xCD\x07\x19\x02" +
		"\x02\xCB\xCE\x05\x12\n\x02\xCC\xCE\x05Z.\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
		"\xCC\x03\x02\x02\x02\xCE\xD6\x03\x02\x02\x02\xCF\xD0\x07\x07\x02\x02\xD0" +
		"\xD3\x07\x19\x02\x02\xD1\xD4\x05\x12\n\x02\xD2\xD4\x05Z.\x02\xD3\xD1\x03" +
		"\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xC9\x03" +
		"\x02\x02\x02\xD5\xCF\x03\x02\x02\x02\xD6\'\x03\x02\x02\x02\xD7\xDB\x05" +
		",\x17\x02\xD8\xDB\x05.\x18\x02\xD9\xDB\x050\x19\x02\xDA\xD7\x03\x02\x02" +
		"\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB)\x03\x02\x02" +
		"\x02\xDC\xE0\x052\x1A\x02\xDD\xE0\x054\x1B\x02\xDE\xE0\x056\x1C\x02\xDF" +
		"\xDC\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0" +
		"+\x03\x02\x02\x02\xE1\xE2\x07\b\x02\x02\xE2\xE3\x07\x19\x02\x02\xE3\xE5" +
		"\x07\x16\x02\x02\xE4\xE6\x058\x1D\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7" +
		"\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9" +
		"\x03\x02\x02\x02\xE9\xEA\x07\x17\x02\x02\xEA-\x03\x02\x02\x02\xEB\xEC" +
		"\x07\t\x02\x02\xEC\xED\x07\x19\x02\x02\xED\xF1\x07\x14\x02\x02\xEE\xF0" +
		"\x05Z.\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03" +
		"\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF1\x03" +
		"\x02\x02\x02\xF4\xF5\x07\x15\x02\x02\xF5/\x03\x02\x02\x02\xF6\xF7\x07" +
		"\n\x02\x02\xF7\xF8\x07\x19\x02\x02\xF8\xFC\x07\x14\x02\x02\xF9\xFB\x05" +
		"Z.\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02" +
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFC\x03\x02" +
		"\x02\x02\xFF\u0100\x07\x15\x02\x02\u01001\x03\x02\x02\x02\u0101\u0102" +
		"\x07\f\x02\x02\u0102\u0105\x07\x19\x02\x02\u0103\u0106\x05\x12\n\x02\u0104" +
		"\u0106\x05Z.\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02" +
		"\u01063\x03\x02\x02\x02\u0107\u0108\x07\r\x02\x02\u0108\u010B\x07\x19" +
		"\x02\x02\u0109\u010C\x05\x12\n\x02\u010A\u010C\x05Z.\x02\u010B\u0109\x03" +
		"\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C5\x03\x02\x02\x02\u010D" +
		"\u010E\x07\v\x02\x02\u010E\u010F\x07\x19\x02\x02\u010F\u0113\x07\x14\x02" +
		"\x02\u0110\u0112\x05Z.\x02\u0111\u0110\x03\x02\x02\x02\u0112\u0115\x03" +
		"\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0116\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u0117\x07\x15" +
		"\x02\x02\u01177\x03\x02\x02\x02\u0118\u0119\x05Z.\x02\u0119\u011C\x07" +
		"\x19\x02\x02\u011A\u011D\x05\x12\n\x02\u011B\u011D\x05Z.\x02\u011C\u011A" +
		"\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D9\x03\x02\x02\x02\u011E" +
		"\u0120\x05<\x1F\x02\u011F\u0121\x05@!\x02\u0120\u011F\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121;\x03\x02\x02\x02\u0122\u0125\x05> " +
		"\x02\u0123\u0125\x05Z.\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0123\x03" +
		"\x02\x02\x02\u0125=\x03\x02\x02\x02\u0126\u0127\x05X-\x02\u0127\u0128" +
		"\x07\x1A\x02\x02\u0128\u0129\x05Z.\x02\u0129?\x03\x02\x02\x02\u012A\u012B" +
		"\x07\x1B\x02\x02\u012B\u012C\x05Z.\x02\u012CA\x03\x02\x02\x02\u012D\u012E" +
		"\x07\x11\x02\x02\u012E\u0130\x05Z.\x02\u012F\u0131\x05D#\x02\u0130\u012F" +
		"\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131C\x03\x02\x02\x02\u0132" +
		"\u0135\x07\x12\x02\x02\u0133\u0136\x05F$\x02\u0134\u0136\x05J&\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x07\x13\x02\x02\u0138" +
		"E\x03\x02\x02\x02\u0139\u013B\x05H%\x02\u013A\u0139\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02" +
		"\x02\x02\u013DG\x03\x02\x02\x02\u013E\u013F\x05Z.\x02\u013F\u0140\x07" +
		"\x18\x02\x02\u0140\u0141\x05L\'\x02\u0141I\x03\x02\x02\x02\u0142\u0143" +
		"\x05L\'\x02\u0143K\x03\x02\x02\x02\u0144\u0149\x05T+\x02\u0145\u0149\x05" +
		"V,\x02\u0146\u0149\x05N(\x02\u0147\u0149\x05P)\x02\u0148\u0144\x03\x02" +
		"\x02\x02\u0148\u0145\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0147\x03\x02\x02\x02\u0149M\x03\x02\x02\x02\u014A\u014E\x07\x14\x02" +
		"\x02\u014B\u014D\x05L\'\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03" +
		"\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x07\x15" +
		"\x02\x02\u0152O\x03\x02\x02\x02\u0153\u0157\x07\x16\x02\x02\u0154\u0156" +
		"\x05R*\x02\u0155\u0154\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02" +
		"\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015B\x07\x17\x02\x02\u015B" +
		"Q\x03\x02\x02\x02\u015C\u015D\x05Z.\x02\u015D\u015E\x07\x19\x02\x02\u015E" +
		"\u015F\x05L\'\x02\u015FS\x03\x02\x02\x02\u0160\u0161\t\x03\x02\x02\u0161" +
		"U\x03\x02\x02\x02\u0162\u0163\t\x04\x02\x02\u0163W\x03\x02\x02\x02\u0164" +
		"\u0165\x07\"\x02\x02\u0165Y\x03\x02\x02\x02\u0166\u0167\x07!\x02\x02\u0167" +
		"[\x03\x02\x02\x02\'dox~\x86\x8C\x90\x98\xA2\xA5\xA9\xAD\xB2\xB9\xBB\xC1" +
		"\xC6\xCD\xD3\xD5\xDA\xDF\xE7\xF1\xFC\u0105\u010B\u0113\u011C\u0120\u0124" +
		"\u0130\u0135\u013C\u0148\u014E\u0157";
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
	public aggregateShapeTypeDefinition(): AggregateShapeTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AggregateShapeTypeDefinitionContext);
	}
	public subjectShapeTypeDefinition(): SubjectShapeTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SubjectShapeTypeDefinitionContext);
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


export class AggregateShapeTypeDefinitionContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(SubjektParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SubjektParser.RCURLY, 0); }
	public aggregateShapeMembers(): AggregateShapeMembersContext | undefined {
		return this.tryGetRuleContext(0, AggregateShapeMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_aggregateShapeTypeDefinition; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterAggregateShapeTypeDefinition) {
			listener.enterAggregateShapeTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitAggregateShapeTypeDefinition) {
			listener.exitAggregateShapeTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitAggregateShapeTypeDefinition) {
			return visitor.visitAggregateShapeTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubjectShapeTypeDefinitionContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(SubjektParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SubjektParser.RCURLY, 0); }
	public subjectShapeMembers(): SubjectShapeMembersContext[];
	public subjectShapeMembers(i: number): SubjectShapeMembersContext;
	public subjectShapeMembers(i?: number): SubjectShapeMembersContext | SubjectShapeMembersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubjectShapeMembersContext);
		} else {
			return this.getRuleContext(i, SubjectShapeMembersContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_subjectShapeTypeDefinition; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterSubjectShapeTypeDefinition) {
			listener.enterSubjectShapeTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitSubjectShapeTypeDefinition) {
			listener.exitSubjectShapeTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitSubjectShapeTypeDefinition) {
			return visitor.visitSubjectShapeTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateShapeMembersContext extends ParserRuleContext {
	public enumMembers(): EnumMembersContext | undefined {
		return this.tryGetRuleContext(0, EnumMembersContext);
	}
	public listMember(): ListMemberContext | undefined {
		return this.tryGetRuleContext(0, ListMemberContext);
	}
	public mapMembers(): MapMembersContext | undefined {
		return this.tryGetRuleContext(0, MapMembersContext);
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
	public get ruleIndex(): number { return SubjektParser.RULE_aggregateShapeMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterAggregateShapeMembers) {
			listener.enterAggregateShapeMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitAggregateShapeMembers) {
			listener.exitAggregateShapeMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitAggregateShapeMembers) {
			return visitor.visitAggregateShapeMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubjectShapeMembersContext extends ParserRuleContext {
	public subjectMembers(): SubjectMembersContext | undefined {
		return this.tryGetRuleContext(0, SubjectMembersContext);
	}
	public behaviorMembers(): BehaviorMembersContext | undefined {
		return this.tryGetRuleContext(0, BehaviorMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_subjectShapeMembers; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterSubjectShapeMembers) {
			listener.enterSubjectShapeMembers(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitSubjectShapeMembers) {
			listener.exitSubjectShapeMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitSubjectShapeMembers) {
			return visitor.visitSubjectShapeMembers(this);
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
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.INTEGER, 0); }
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


export class ListMemberContext extends ParserRuleContext {
	public MEMBER(): TerminalNode { return this.getToken(SubjektParser.MEMBER, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_listMember; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterListMember) {
			listener.enterListMember(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitListMember) {
			listener.exitListMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitListMember) {
			return visitor.visitListMember(this);
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
	public eventReference(): EventReferenceContext | undefined {
		return this.tryGetRuleContext(0, EventReferenceContext);
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


export class BehaviorMembersContext extends ParserRuleContext {
	public inputReference(): InputReferenceContext | undefined {
		return this.tryGetRuleContext(0, InputReferenceContext);
	}
	public outputReference(): OutputReferenceContext | undefined {
		return this.tryGetRuleContext(0, OutputReferenceContext);
	}
	public errorReference(): ErrorReferenceContext | undefined {
		return this.tryGetRuleContext(0, ErrorReferenceContext);
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


export class StateReferenceContext extends ParserRuleContext {
	public STATE(): TerminalNode { return this.getToken(SubjektParser.STATE, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LCURLY(): TerminalNode { return this.getToken(SubjektParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SubjektParser.RCURLY, 0); }
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
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
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


export class EventReferenceContext extends ParserRuleContext {
	public EVENTS(): TerminalNode { return this.getToken(SubjektParser.EVENTS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
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
	public get ruleIndex(): number { return SubjektParser.RULE_eventReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterEventReference) {
			listener.enterEventReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitEventReference) {
			listener.exitEventReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitEventReference) {
			return visitor.visitEventReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputReferenceContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(SubjektParser.INPUT, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public OUTPUT(): TerminalNode { return this.getToken(SubjektParser.OUTPUT, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public shapeType(): ShapeTypeContext | undefined {
		return this.tryGetRuleContext(0, ShapeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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


export class ErrorReferenceContext extends ParserRuleContext {
	public ERRORS(): TerminalNode { return this.getToken(SubjektParser.ERRORS, 0); }
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
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
	public get ruleIndex(): number { return SubjektParser.RULE_errorReference; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterErrorReference) {
			listener.enterErrorReference(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitErrorReference) {
			listener.exitErrorReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitErrorReference) {
			return visitor.visitErrorReference(this);
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
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public listValue(): ListValueContext | undefined {
		return this.tryGetRuleContext(0, ListValueContext);
	}
	public objectValue(): ObjectValueContext | undefined {
		return this.tryGetRuleContext(0, ObjectValueContext);
	}
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


export class ListValueContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(SubjektParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SubjektParser.RBRACK, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_listValue; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterListValue) {
			listener.enterListValue(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitListValue) {
			listener.exitListValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitListValue) {
			return visitor.visitListValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectValueContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(SubjektParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SubjektParser.RCURLY, 0); }
	public kvp(): KvpContext[];
	public kvp(i: number): KvpContext;
	public kvp(i?: number): KvpContext | KvpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KvpContext);
		} else {
			return this.getRuleContext(i, KvpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_objectValue; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterObjectValue) {
			listener.enterObjectValue(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitObjectValue) {
			listener.exitObjectValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitObjectValue) {
			return visitor.visitObjectValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KvpContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(SubjektParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_kvp; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterKvp) {
			listener.enterKvp(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitKvp) {
			listener.exitKvp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitKvp) {
			return visitor.visitKvp(this);
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


export class NumberContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SubjektParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SubjektParser.RULE_number; }
	// @Override
	public enterRule(listener: SubjektListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: SubjektListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SubjektVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceIdentifierContext extends ParserRuleContext {
	public NAMESPACE_IDENTIFIER_CHARS(): TerminalNode { return this.getToken(SubjektParser.NAMESPACE_IDENTIFIER_CHARS, 0); }
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


