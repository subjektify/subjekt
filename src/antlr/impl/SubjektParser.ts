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
  public static readonly RULE_shapeMembers = 10;
  public static readonly RULE_enumMembers = 11;
  public static readonly RULE_enumMember = 12;
  public static readonly RULE_listMember = 13;
  public static readonly RULE_mapMembers = 14;
  public static readonly RULE_keyValuePair = 15;
  public static readonly RULE_subjectMembers = 16;
  public static readonly RULE_behaviorMembers = 17;
  public static readonly RULE_stateReference = 18;
  public static readonly RULE_behaviorReference = 19;
  public static readonly RULE_eventReference = 20;
  public static readonly RULE_inputReference = 21;
  public static readonly RULE_outputReference = 22;
  public static readonly RULE_errorReference = 23;
  public static readonly RULE_member = 24;
  public static readonly RULE_shapeId = 25;
  public static readonly RULE_rootShapeId = 26;
  public static readonly RULE_absoluteRootShapeId = 27;
  public static readonly RULE_shapeIdMember = 28;
  public static readonly RULE_trait = 29;
  public static readonly RULE_traitBody = 30;
  public static readonly RULE_value = 31;
  public static readonly RULE_listValue = 32;
  public static readonly RULE_objectValue = 33;
  public static readonly RULE_kvp = 34;
  public static readonly RULE_string = 35;
  public static readonly RULE_number = 36;
  public static readonly RULE_namespaceIdentifier = 37;
  public static readonly RULE_identifier = 38;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "idl",
    "metadataBlock",
    "metadataStatement",
    "useBlock",
    "useStatement",
    "shapeBlock",
    "shapeStatement",
    "shapeDefinition",
    "shapeType",
    "shapeTypeDefinition",
    "shapeMembers",
    "enumMembers",
    "enumMember",
    "listMember",
    "mapMembers",
    "keyValuePair",
    "subjectMembers",
    "behaviorMembers",
    "stateReference",
    "behaviorReference",
    "eventReference",
    "inputReference",
    "outputReference",
    "errorReference",
    "member",
    "shapeId",
    "rootShapeId",
    "absoluteRootShapeId",
    "shapeIdMember",
    "trait",
    "traitBody",
    "value",
    "listValue",
    "objectValue",
    "kvp",
    "string",
    "number",
    "namespaceIdentifier",
    "identifier",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'metadata'",
    "'use'",
    "'member'",
    "'key'",
    "'value'",
    "'state'",
    "'behaviors'",
    "'events'",
    "'errors'",
    "'input'",
    "'output'",
    undefined,
    undefined,
    undefined,
    "'@'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'='",
    "':'",
    "'#'",
    "'$'",
    "'.'",
    "','",
    "';'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "METADATA",
    "USE",
    "MEMBER",
    "KEY",
    "VALUE",
    "STATE",
    "BEHAVIORS",
    "EVENTS",
    "ERRORS",
    "INPUT",
    "OUTPUT",
    "AGGREGATE_SHAPE_TYPE",
    "SIMPLE_SHAPE_TYPE",
    "SUBJECT_SHAPE_TYPE",
    "AT_SIGN",
    "LPAREN",
    "RPAREN",
    "LBRACK",
    "RBRACK",
    "LCURLY",
    "RCURLY",
    "ASSIGNMENT",
    "COLON",
    "HASH_SIGN",
    "DOLLAR_SIGN",
    "DOT",
    "COMMA",
    "SEMICOLON",
    "INTEGER",
    "FLOAT",
    "IDENTIFIER_CHARS",
    "NAMESPACE_IDENTIFIER_CHARS",
    "SINGLE_STRING",
    "DOUBLE_STRING",
    "WS",
    "COMMENT",
    "DOCUMENTATION_COMMENT",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    SubjektParser._LITERAL_NAMES,
    SubjektParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return SubjektParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "Subjekt.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return SubjektParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return SubjektParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
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
        this.state = 78;
        this.metadataBlock();
        this.state = 79;
        this.useBlock();
        this.state = 80;
        this.shapeBlock();
        this.state = 81;
        this.match(SubjektParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public metadataBlock(): MetadataBlockContext {
    let _localctx: MetadataBlockContext = new MetadataBlockContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, SubjektParser.RULE_metadataBlock);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.METADATA) {
          {
            {
              this.state = 83;
              this.metadataStatement();
            }
          }
          this.state = 88;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public metadataStatement(): MetadataStatementContext {
    let _localctx: MetadataStatementContext = new MetadataStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, SubjektParser.RULE_metadataStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 89;
        this.match(SubjektParser.METADATA);
        this.state = 90;
        this.identifier();
        this.state = 91;
        this.match(SubjektParser.ASSIGNMENT);
        this.state = 92;
        this.value();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.USE) {
          {
            {
              this.state = 94;
              this.useStatement();
            }
          }
          this.state = 99;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public useStatement(): UseStatementContext {
    let _localctx: UseStatementContext = new UseStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 8, SubjektParser.RULE_useStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 100;
        this.match(SubjektParser.USE);
        this.state = 101;
        this.absoluteRootShapeId();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeBlock(): ShapeBlockContext {
    let _localctx: ShapeBlockContext = new ShapeBlockContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, SubjektParser.RULE_shapeBlock);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SubjektParser.AGGREGATE_SHAPE_TYPE) |
              (1 << SubjektParser.SIMPLE_SHAPE_TYPE) |
              (1 << SubjektParser.SUBJECT_SHAPE_TYPE) |
              (1 << SubjektParser.AT_SIGN))) !==
            0
        ) {
          {
            {
              this.state = 103;
              this.shapeStatement();
            }
          }
          this.state = 108;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeStatement(): ShapeStatementContext {
    let _localctx: ShapeStatementContext = new ShapeStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 12, SubjektParser.RULE_shapeStatement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.AT_SIGN) {
          {
            {
              this.state = 109;
              this.trait();
            }
          }
          this.state = 114;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 115;
        this.shapeDefinition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeDefinition(): ShapeDefinitionContext {
    let _localctx: ShapeDefinitionContext = new ShapeDefinitionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 14, SubjektParser.RULE_shapeDefinition);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 117;
        this.shapeType();
        this.state = 118;
        this.identifier();
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SubjektParser.LCURLY) {
          {
            this.state = 119;
            this.shapeTypeDefinition();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeType(): ShapeTypeContext {
    let _localctx: ShapeTypeContext = new ShapeTypeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, SubjektParser.RULE_shapeType);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 122;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SubjektParser.AGGREGATE_SHAPE_TYPE) |
                (1 << SubjektParser.SIMPLE_SHAPE_TYPE) |
                (1 << SubjektParser.SUBJECT_SHAPE_TYPE))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeTypeDefinition(): ShapeTypeDefinitionContext {
    let _localctx: ShapeTypeDefinitionContext = new ShapeTypeDefinitionContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, SubjektParser.RULE_shapeTypeDefinition);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 124;
        this.match(SubjektParser.LCURLY);
        this.state = 125;
        this.shapeMembers();
        this.state = 126;
        this.match(SubjektParser.RCURLY);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeMembers(): ShapeMembersContext {
    let _localctx: ShapeMembersContext = new ShapeMembersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, SubjektParser.RULE_shapeMembers);
    let _la: number;
    try {
      this.state = 149;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
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
            this.listMember();
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
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SubjektParser.STATE) |
                  (1 << SubjektParser.BEHAVIORS) |
                  (1 << SubjektParser.EVENTS))) !==
                0
            ) {
              {
                {
                  this.state = 131;
                  this.subjectMembers();
                }
              }
              this.state = 136;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SubjektParser.ERRORS) |
                  (1 << SubjektParser.INPUT) |
                  (1 << SubjektParser.OUTPUT))) !==
                0
            ) {
              {
                {
                  this.state = 137;
                  this.behaviorMembers();
                }
              }
              this.state = 142;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SubjektParser.IDENTIFIER_CHARS) {
              {
                {
                  this.state = 143;
                  this.member();
                }
              }
              this.state = 148;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public enumMembers(): EnumMembersContext {
    let _localctx: EnumMembersContext = new EnumMembersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, SubjektParser.RULE_enumMembers);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 151;
        this.enumMember();
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          _la === SubjektParser.COMMA ||
          _la === SubjektParser.IDENTIFIER_CHARS
        ) {
          {
            {
              this.state = 153;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === SubjektParser.COMMA) {
                {
                  this.state = 152;
                  this.match(SubjektParser.COMMA);
                }
              }

              this.state = 155;
              this.enumMember();
            }
          }
          this.state = 160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public enumMember(): EnumMemberContext {
    let _localctx: EnumMemberContext = new EnumMemberContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, SubjektParser.RULE_enumMember);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 161;
        this.identifier();
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SubjektParser.ASSIGNMENT) {
          {
            this.state = 162;
            this.match(SubjektParser.ASSIGNMENT);
            this.state = 165;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case SubjektParser.SINGLE_STRING:
              case SubjektParser.DOUBLE_STRING:
                {
                  this.state = 163;
                  this.string();
                }
                break;
              case SubjektParser.INTEGER:
                {
                  this.state = 164;
                  this.match(SubjektParser.INTEGER);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public listMember(): ListMemberContext {
    let _localctx: ListMemberContext = new ListMemberContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 26, SubjektParser.RULE_listMember);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 169;
        this.match(SubjektParser.MEMBER);
        this.state = 170;
        this.match(SubjektParser.COLON);
        this.state = 173;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SubjektParser.AGGREGATE_SHAPE_TYPE:
          case SubjektParser.SIMPLE_SHAPE_TYPE:
          case SubjektParser.SUBJECT_SHAPE_TYPE:
            {
              this.state = 171;
              this.shapeType();
            }
            break;
          case SubjektParser.IDENTIFIER_CHARS:
            {
              this.state = 172;
              this.identifier();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public mapMembers(): MapMembersContext {
    let _localctx: MapMembersContext = new MapMembersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 28, SubjektParser.RULE_mapMembers);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.KEY || _la === SubjektParser.VALUE) {
          {
            {
              this.state = 175;
              this.keyValuePair();
            }
          }
          this.state = 180;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public keyValuePair(): KeyValuePairContext {
    let _localctx: KeyValuePairContext = new KeyValuePairContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 30, SubjektParser.RULE_keyValuePair);
    try {
      this.state = 193;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SubjektParser.KEY:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 181;
            this.match(SubjektParser.KEY);
            this.state = 182;
            this.match(SubjektParser.COLON);
            this.state = 185;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case SubjektParser.AGGREGATE_SHAPE_TYPE:
              case SubjektParser.SIMPLE_SHAPE_TYPE:
              case SubjektParser.SUBJECT_SHAPE_TYPE:
                {
                  this.state = 183;
                  this.shapeType();
                }
                break;
              case SubjektParser.IDENTIFIER_CHARS:
                {
                  this.state = 184;
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
            this.state = 187;
            this.match(SubjektParser.VALUE);
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
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public subjectMembers(): SubjectMembersContext {
    let _localctx: SubjectMembersContext = new SubjectMembersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, SubjektParser.RULE_subjectMembers);
    try {
      this.state = 198;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SubjektParser.STATE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 195;
            this.stateReference();
          }
          break;
        case SubjektParser.BEHAVIORS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 196;
            this.behaviorReference();
          }
          break;
        case SubjektParser.EVENTS:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 197;
            this.eventReference();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public behaviorMembers(): BehaviorMembersContext {
    let _localctx: BehaviorMembersContext = new BehaviorMembersContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 34, SubjektParser.RULE_behaviorMembers);
    try {
      this.state = 203;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SubjektParser.INPUT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 200;
            this.inputReference();
          }
          break;
        case SubjektParser.OUTPUT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 201;
            this.outputReference();
          }
          break;
        case SubjektParser.ERRORS:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 202;
            this.errorReference();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public stateReference(): StateReferenceContext {
    let _localctx: StateReferenceContext = new StateReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 36, SubjektParser.RULE_stateReference);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 205;
        this.match(SubjektParser.STATE);
        this.state = 206;
        this.match(SubjektParser.COLON);
        this.state = 207;
        this.match(SubjektParser.LCURLY);
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 208;
              this.member();
            }
          }
          this.state = 211;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SubjektParser.IDENTIFIER_CHARS);
        this.state = 213;
        this.match(SubjektParser.RCURLY);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public behaviorReference(): BehaviorReferenceContext {
    let _localctx: BehaviorReferenceContext = new BehaviorReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 38, SubjektParser.RULE_behaviorReference);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 215;
        this.match(SubjektParser.BEHAVIORS);
        this.state = 216;
        this.match(SubjektParser.COLON);
        this.state = 217;
        this.match(SubjektParser.LBRACK);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.IDENTIFIER_CHARS) {
          {
            {
              this.state = 218;
              this.identifier();
            }
          }
          this.state = 223;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 224;
        this.match(SubjektParser.RBRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public eventReference(): EventReferenceContext {
    let _localctx: EventReferenceContext = new EventReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, SubjektParser.RULE_eventReference);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 226;
        this.match(SubjektParser.EVENTS);
        this.state = 227;
        this.match(SubjektParser.COLON);
        this.state = 228;
        this.match(SubjektParser.LBRACK);
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.IDENTIFIER_CHARS) {
          {
            {
              this.state = 229;
              this.identifier();
            }
          }
          this.state = 234;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 235;
        this.match(SubjektParser.RBRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public inputReference(): InputReferenceContext {
    let _localctx: InputReferenceContext = new InputReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 42, SubjektParser.RULE_inputReference);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 237;
        this.match(SubjektParser.INPUT);
        this.state = 238;
        this.match(SubjektParser.COLON);
        this.state = 241;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SubjektParser.AGGREGATE_SHAPE_TYPE:
          case SubjektParser.SIMPLE_SHAPE_TYPE:
          case SubjektParser.SUBJECT_SHAPE_TYPE:
            {
              this.state = 239;
              this.shapeType();
            }
            break;
          case SubjektParser.IDENTIFIER_CHARS:
            {
              this.state = 240;
              this.identifier();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public outputReference(): OutputReferenceContext {
    let _localctx: OutputReferenceContext = new OutputReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 44, SubjektParser.RULE_outputReference);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 243;
        this.match(SubjektParser.OUTPUT);
        this.state = 244;
        this.match(SubjektParser.COLON);
        this.state = 247;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SubjektParser.AGGREGATE_SHAPE_TYPE:
          case SubjektParser.SIMPLE_SHAPE_TYPE:
          case SubjektParser.SUBJECT_SHAPE_TYPE:
            {
              this.state = 245;
              this.shapeType();
            }
            break;
          case SubjektParser.IDENTIFIER_CHARS:
            {
              this.state = 246;
              this.identifier();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public errorReference(): ErrorReferenceContext {
    let _localctx: ErrorReferenceContext = new ErrorReferenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 46, SubjektParser.RULE_errorReference);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 249;
        this.match(SubjektParser.ERRORS);
        this.state = 250;
        this.match(SubjektParser.COLON);
        this.state = 251;
        this.match(SubjektParser.LBRACK);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.IDENTIFIER_CHARS) {
          {
            {
              this.state = 252;
              this.identifier();
            }
          }
          this.state = 257;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 258;
        this.match(SubjektParser.RBRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public member(): MemberContext {
    let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, SubjektParser.RULE_member);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 260;
        this.identifier();
        this.state = 261;
        this.match(SubjektParser.COLON);
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
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 266;
        this.rootShapeId();
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SubjektParser.DOLLAR_SIGN) {
          {
            this.state = 267;
            this.shapeIdMember();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public rootShapeId(): RootShapeIdContext {
    let _localctx: RootShapeIdContext = new RootShapeIdContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 52, SubjektParser.RULE_rootShapeId);
    try {
      this.state = 272;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SubjektParser.NAMESPACE_IDENTIFIER_CHARS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 270;
            this.absoluteRootShapeId();
          }
          break;
        case SubjektParser.IDENTIFIER_CHARS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 271;
            this.identifier();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public absoluteRootShapeId(): AbsoluteRootShapeIdContext {
    let _localctx: AbsoluteRootShapeIdContext = new AbsoluteRootShapeIdContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 54, SubjektParser.RULE_absoluteRootShapeId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 274;
        this.namespaceIdentifier();
        this.state = 275;
        this.match(SubjektParser.HASH_SIGN);
        this.state = 276;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public shapeIdMember(): ShapeIdMemberContext {
    let _localctx: ShapeIdMemberContext = new ShapeIdMemberContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 56, SubjektParser.RULE_shapeIdMember);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 278;
        this.match(SubjektParser.DOLLAR_SIGN);
        this.state = 279;
        this.identifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 281;
        this.match(SubjektParser.AT_SIGN);
        this.state = 282;
        this.identifier();
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SubjektParser.LPAREN) {
          {
            this.state = 283;
            this.traitBody();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public traitBody(): TraitBodyContext {
    let _localctx: TraitBodyContext = new TraitBodyContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 60, SubjektParser.RULE_traitBody);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 286;
        this.match(SubjektParser.LPAREN);
        this.state = 295;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
          case 1:
            {
              this.state = 287;
              this.value();
            }
            break;

          case 2:
            // tslint:disable-next-line:no-empty
            {
            }
            break;

          case 3:
            {
              this.state = 292;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === SubjektParser.IDENTIFIER_CHARS) {
                {
                  {
                    this.state = 289;
                    this.kvp();
                  }
                }
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
            }
            break;
        }
        this.state = 297;
        this.match(SubjektParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public value(): ValueContext {
    let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, SubjektParser.RULE_value);
    try {
      this.state = 303;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SubjektParser.SINGLE_STRING:
        case SubjektParser.DOUBLE_STRING:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 299;
            this.string();
          }
          break;
        case SubjektParser.INTEGER:
        case SubjektParser.FLOAT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 300;
            this.number();
          }
          break;
        case SubjektParser.LBRACK:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 301;
            this.listValue();
          }
          break;
        case SubjektParser.LCURLY:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 302;
            this.objectValue();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public listValue(): ListValueContext {
    let _localctx: ListValueContext = new ListValueContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 64, SubjektParser.RULE_listValue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 305;
        this.match(SubjektParser.LBRACK);
        this.state = 309;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la - 18) & ~0x1f) === 0 &&
          ((1 << (_la - 18)) &
            ((1 << (SubjektParser.LBRACK - 18)) |
              (1 << (SubjektParser.LCURLY - 18)) |
              (1 << (SubjektParser.INTEGER - 18)) |
              (1 << (SubjektParser.FLOAT - 18)) |
              (1 << (SubjektParser.SINGLE_STRING - 18)) |
              (1 << (SubjektParser.DOUBLE_STRING - 18)))) !==
            0
        ) {
          {
            {
              this.state = 306;
              this.value();
            }
          }
          this.state = 311;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 312;
        this.match(SubjektParser.RBRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public objectValue(): ObjectValueContext {
    let _localctx: ObjectValueContext = new ObjectValueContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 66, SubjektParser.RULE_objectValue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 314;
        this.match(SubjektParser.LCURLY);
        this.state = 318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SubjektParser.IDENTIFIER_CHARS) {
          {
            {
              this.state = 315;
              this.kvp();
            }
          }
          this.state = 320;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 321;
        this.match(SubjektParser.RCURLY);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public kvp(): KvpContext {
    let _localctx: KvpContext = new KvpContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, SubjektParser.RULE_kvp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 323;
        this.identifier();
        this.state = 324;
        this.match(SubjektParser.COLON);
        this.state = 325;
        this.value();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 327;
        _la = this._input.LA(1);
        if (
          !(
            _la === SubjektParser.SINGLE_STRING ||
            _la === SubjektParser.DOUBLE_STRING
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public number(): NumberContext {
    let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, SubjektParser.RULE_number);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 329;
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
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public namespaceIdentifier(): NamespaceIdentifierContext {
    let _localctx: NamespaceIdentifierContext = new NamespaceIdentifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 74, SubjektParser.RULE_namespaceIdentifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 331;
        this.match(SubjektParser.NAMESPACE_IDENTIFIER_CHARS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let _localctx: IdentifierContext = new IdentifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 76, SubjektParser.RULE_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 333;
        this.match(SubjektParser.IDENTIFIER_CHARS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03'\u0152\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x03\x07\x03W\n\x03\f\x03\x0E\x03Z\v\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05b\n\x05\f\x05\x0E\x05e\v\x05" +
    "\x03\x06\x03\x06\x03\x06\x03\x07\x07\x07k\n\x07\f\x07\x0E\x07n\v\x07\x03" +
    "\b\x07\bq\n\b\f\b\x0E\bt\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t{\n\t" +
    "\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\x87" +
    "\n\f\f\f\x0E\f\x8A\v\f\x03\f\x07\f\x8D\n\f\f\f\x0E\f\x90\v\f\x03\f\x07" +
    "\f\x93\n\f\f\f\x0E\f\x96\v\f\x05\f\x98\n\f\x03\r\x03\r\x05\r\x9C\n\r\x03" +
    "\r\x07\r\x9F\n\r\f\r\x0E\r\xA2\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
    "\x0E\xA8\n\x0E\x05\x0E\xAA\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
    "\xB0\n\x0F\x03\x10\x07\x10\xB3\n\x10\f\x10\x0E\x10\xB6\v\x10\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x05\x11\xBC\n\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x05\x11\xC2\n\x11\x05\x11\xC4\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\xC9" +
    "\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\xCE\n\x13\x03\x14\x03\x14\x03\x14" +
    "\x03\x14\x06\x14\xD4\n\x14\r\x14\x0E\x14\xD5\x03\x14\x03\x14\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x07\x15\xDE\n\x15\f\x15\x0E\x15\xE1\v\x15\x03\x15" +
    "\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xE9\n\x16\f\x16\x0E\x16" +
    "\xEC\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xF4" +
    "\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xFA\n\x18\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x07\x19\u0100\n\x19\f\x19\x0E\x19\u0103\v\x19\x03\x19" +
    "\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u010B\n\x1A\x03\x1B\x03" +
    "\x1B\x05\x1B\u010F\n\x1B\x03\x1C\x03\x1C\x05\x1C\u0113\n\x1C\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05" +
    "\x1F\u011F\n\x1F\x03 \x03 \x03 \x03 \x07 \u0125\n \f \x0E \u0128\v \x05" +
    ' \u012A\n \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u0132\n!\x03"\x03"\x07' +
    '"\u0136\n"\f"\x0E"\u0139\v"\x03"\x03"\x03#\x03#\x07#\u013F\n#\f' +
    "#\x0E#\u0142\v#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
    "'\x03'\x03(\x03(\x03(\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
    "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
    '\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02' +
    "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x05\x03" +
    "\x02\x0E\x10\x03\x02#$\x03\x02\x1F \x02\u0157\x02P\x03\x02\x02\x02\x04" +
    "X\x03\x02\x02\x02\x06[\x03\x02\x02\x02\bc\x03\x02\x02\x02\nf\x03\x02\x02" +
    "\x02\fl\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10w\x03\x02\x02\x02\x12" +
    "|\x03\x02\x02\x02\x14~\x03\x02\x02\x02\x16\x97\x03\x02\x02\x02\x18\x99" +
    "\x03\x02\x02\x02\x1A\xA3\x03\x02\x02\x02\x1C\xAB\x03\x02\x02\x02\x1E\xB4" +
    '\x03\x02\x02\x02 \xC3\x03\x02\x02\x02"\xC8\x03\x02\x02\x02$\xCD\x03\x02' +
    "\x02\x02&\xCF\x03\x02\x02\x02(\xD9\x03\x02\x02\x02*\xE4\x03\x02\x02\x02" +
    ",\xEF\x03\x02\x02\x02.\xF5\x03\x02\x02\x020\xFB\x03\x02\x02\x022\u0106" +
    "\x03\x02\x02\x024\u010C\x03\x02\x02\x026\u0112\x03\x02\x02\x028\u0114" +
    "\x03\x02\x02\x02:\u0118\x03\x02\x02\x02<\u011B\x03\x02\x02\x02>\u0120" +
    "\x03\x02\x02\x02@\u0131\x03\x02\x02\x02B\u0133\x03\x02\x02\x02D\u013C" +
    "\x03\x02\x02\x02F\u0145\x03\x02\x02\x02H\u0149\x03\x02\x02\x02J\u014B" +
    "\x03\x02\x02\x02L\u014D\x03\x02\x02\x02N\u014F\x03\x02\x02\x02PQ\x05\x04" +
    "\x03\x02QR\x05\b\x05\x02RS\x05\f\x07\x02ST\x07\x02\x02\x03T\x03\x03\x02" +
    "\x02\x02UW\x05\x06\x04\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02" +
    "\x02\x02XY\x03\x02\x02\x02Y\x05\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\x07" +
    "\x03\x02\x02\\]\x05N(\x02]^\x07\x18\x02\x02^_\x05@!\x02_\x07\x03\x02\x02" +
    "\x02`b\x05\n\x06\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02" +
    "\x02cd\x03\x02\x02\x02d\t\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\x04" +
    "\x02\x02gh\x058\x1D\x02h\v\x03\x02\x02\x02ik\x05\x0E\b\x02ji\x03\x02\x02" +
    "\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\r\x03\x02" +
    "\x02\x02nl\x03\x02\x02\x02oq\x05<\x1F\x02po\x03\x02\x02\x02qt\x03\x02" +
    "\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02" +
    "\x02\x02uv\x05\x10\t\x02v\x0F\x03\x02\x02\x02wx\x05\x12\n\x02xz\x05N(" +
    "\x02y{\x05\x14\v\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x11\x03\x02" +
    "\x02\x02|}\t\x02\x02\x02}\x13\x03\x02\x02\x02~\x7F\x07\x16\x02\x02\x7F" +
    "\x80\x05\x16\f\x02\x80\x81\x07\x17\x02\x02\x81\x15\x03\x02\x02\x02\x82" +
    "\x98\x05\x18\r\x02\x83\x98\x05\x1C\x0F\x02\x84\x98\x05\x1E\x10\x02\x85" +
    '\x87\x05"\x12\x02\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88' +
    "\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x98\x03\x02\x02\x02\x8A" +
    "\x88\x03\x02\x02\x02\x8B\x8D\x05$\x13\x02\x8C\x8B\x03\x02\x02\x02\x8D" +
    "\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F" +
    "\x98\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x93\x052\x1A\x02\x92" +
    "\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94" +
    "\x95\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97" +
    "\x82\x03\x02\x02\x02\x97\x83\x03\x02\x02\x02\x97\x84\x03\x02\x02\x02\x97" +
    "\x88\x03\x02\x02\x02\x97\x8E\x03\x02\x02\x02\x97\x94\x03\x02\x02\x02\x98" +
    "\x17\x03\x02\x02\x02\x99\xA0\x05\x1A\x0E\x02\x9A\x9C\x07\x1D\x02\x02\x9B" +
    "\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
    "\x9F\x05\x1A\x0E\x02\x9E\x9B\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
    "\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x19\x03\x02\x02\x02\xA2" +
    "\xA0\x03\x02\x02\x02\xA3\xA9\x05N(\x02\xA4\xA7\x07\x18\x02\x02\xA5\xA8" +
    "\x05H%\x02\xA6\xA8\x07\x1F\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03" +
    "\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA4\x03\x02\x02\x02\xA9\xAA\x03" +
    "\x02\x02\x02\xAA\x1B\x03\x02\x02\x02\xAB\xAC\x07\x05\x02\x02\xAC\xAF\x07" +
    "\x19\x02\x02\xAD\xB0\x05\x12\n\x02\xAE\xB0\x05N(\x02\xAF\xAD\x03\x02\x02" +
    "\x02\xAF\xAE\x03\x02\x02\x02\xB0\x1D\x03\x02\x02\x02\xB1\xB3\x05 \x11" +
    "\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
    "\x02\xB4\xB5\x03\x02\x02\x02\xB5\x1F\x03\x02\x02\x02\xB6\xB4\x03\x02\x02" +
    "\x02\xB7\xB8\x07\x06\x02\x02\xB8\xBB\x07\x19\x02\x02\xB9\xBC\x05\x12\n" +
    "\x02\xBA\xBC\x05N(\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBA\x03\x02\x02\x02" +
    "\xBC\xC4\x03\x02\x02\x02\xBD\xBE\x07\x07\x02\x02\xBE\xC1\x07\x19\x02\x02" +
    "\xBF\xC2\x05\x12\n\x02\xC0\xC2\x05N(\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0" +
    "\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xB7\x03\x02\x02\x02\xC3\xBD" +
    "\x03\x02\x02\x02\xC4!\x03\x02\x02\x02\xC5\xC9\x05&\x14\x02\xC6\xC9\x05" +
    "(\x15\x02\xC7\xC9\x05*\x16\x02\xC8\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02" +
    "\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9#\x03\x02\x02\x02\xCA\xCE\x05,\x17" +
    "\x02\xCB\xCE\x05.\x18\x02\xCC\xCE\x050\x19\x02\xCD\xCA\x03\x02\x02\x02" +
    "\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE%\x03\x02\x02\x02" +
    "\xCF\xD0\x07\b\x02\x02\xD0\xD1\x07\x19\x02\x02\xD1\xD3\x07\x16\x02\x02" +
    "\xD2\xD4\x052\x1A\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
    "\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
    "\xD7\xD8\x07\x17\x02\x02\xD8'\x03\x02\x02\x02\xD9\xDA\x07\t\x02\x02\xDA" +
    "\xDB\x07\x19\x02\x02\xDB\xDF\x07\x14\x02\x02\xDC\xDE\x05N(\x02\xDD\xDC" +
    "\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0" +
    "\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3" +
    "\x07\x15\x02\x02\xE3)\x03\x02\x02\x02\xE4\xE5\x07\n\x02\x02\xE5\xE6\x07" +
    "\x19\x02\x02\xE6\xEA\x07\x14\x02\x02\xE7\xE9\x05N(\x02\xE8\xE7\x03\x02" +
    "\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02" +
    "\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\x15" +
    "\x02\x02\xEE+\x03\x02\x02\x02\xEF\xF0\x07\f\x02\x02\xF0\xF3\x07\x19\x02" +
    "\x02\xF1\xF4\x05\x12\n\x02\xF2\xF4\x05N(\x02\xF3\xF1\x03\x02\x02\x02\xF3" +
    "\xF2\x03\x02\x02\x02\xF4-\x03\x02\x02\x02\xF5\xF6\x07\r\x02\x02\xF6\xF9" +
    "\x07\x19\x02\x02\xF7\xFA\x05\x12\n\x02\xF8\xFA\x05N(\x02\xF9\xF7\x03\x02" +
    "\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA/\x03\x02\x02\x02\xFB\xFC\x07\v\x02" +
    "\x02\xFC\xFD\x07\x19\x02\x02\xFD\u0101\x07\x14\x02\x02\xFE\u0100\x05N" +
    "(\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03" +
    "\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
    "\u0101\x03\x02\x02\x02\u0104\u0105\x07\x15\x02\x02\u01051\x03\x02\x02" +
    "\x02\u0106\u0107\x05N(\x02\u0107\u010A\x07\x19\x02\x02\u0108\u010B\x05" +
    "\x12\n\x02\u0109\u010B\x05N(\x02\u010A\u0108\x03\x02\x02\x02\u010A\u0109" +
    "\x03\x02\x02\x02\u010B3\x03\x02\x02\x02\u010C\u010E\x056\x1C\x02\u010D" +
    "\u010F\x05:\x1E\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02" +
    "\x02\u010F5\x03\x02\x02\x02\u0110\u0113\x058\x1D\x02\u0111\u0113\x05N" +
    "(\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u01137\x03" +
    "\x02\x02\x02\u0114\u0115\x05L'\x02\u0115\u0116\x07\x1A\x02\x02\u0116" +
    "\u0117\x05N(\x02\u01179\x03\x02\x02\x02\u0118\u0119\x07\x1B\x02\x02\u0119" +
    "\u011A\x05N(\x02\u011A;\x03\x02\x02\x02\u011B\u011C\x07\x11\x02\x02\u011C" +
    "\u011E\x05N(\x02\u011D\u011F\x05> \x02\u011E\u011D\x03\x02\x02\x02\u011E" +
    "\u011F\x03\x02\x02\x02\u011F=\x03\x02\x02\x02\u0120\u0129\x07\x12\x02" +
    "\x02\u0121\u012A\x05@!\x02\u0122\u012A\x03\x02\x02\x02\u0123\u0125\x05" +
    "F$\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124" +
    "\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02" +
    "\u0128\u0126\x03\x02\x02\x02\u0129\u0121\x03\x02\x02\x02\u0129\u0122\x03" +
    "\x02\x02\x02\u0129\u0126\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
    "\u012B\x03\x02\x02\x02\u012B\u012C\x07\x13\x02\x02\u012C?\x03\x02\x02" +
    '\x02\u012D\u0132\x05H%\x02\u012E\u0132\x05J&\x02\u012F\u0132\x05B"\x02' +
    "\u0130\u0132\x05D#\x02\u0131\u012D\x03\x02\x02\x02\u0131\u012E\x03\x02" +
    "\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
    "A\x03\x02\x02\x02\u0133\u0137\x07\x14\x02\x02\u0134\u0136\x05@!\x02\u0135" +
    "\u0134\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02" +
    "\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139" +
    "\u0137\x03\x02\x02\x02\u013A\u013B\x07\x15\x02\x02\u013BC\x03\x02\x02" +
    "\x02\u013C\u0140\x07\x16\x02\x02\u013D\u013F\x05F$\x02\u013E\u013D\x03" +
    "\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
    "\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02" +
    "\x02\x02\u0143\u0144\x07\x17\x02\x02\u0144E\x03\x02\x02\x02\u0145\u0146" +
    "\x05N(\x02\u0146\u0147\x07\x19\x02\x02\u0147\u0148\x05@!\x02\u0148G\x03" +
    "\x02\x02\x02\u0149\u014A\t\x03\x02\x02\u014AI\x03\x02\x02\x02\u014B\u014C" +
    '\t\x04\x02\x02\u014CK\x03\x02\x02\x02\u014D\u014E\x07"\x02\x02\u014E' +
    "M\x03\x02\x02\x02\u014F\u0150\x07!\x02\x02\u0150O\x03\x02\x02\x02%Xcl" +
    "rz\x88\x8E\x94\x97\x9B\xA0\xA7\xA9\xAF\xB4\xBB\xC1\xC3\xC8\xCD\xD5\xDF" +
    "\xEA\xF3\xF9\u0101\u010A\u010E\u0112\u011E\u0126\u0129\u0131\u0137\u0140";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!SubjektParser.__ATN) {
      SubjektParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(SubjektParser._serializedATN),
      );
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
  public EOF(): TerminalNode {
    return this.getToken(SubjektParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_idl;
  }
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
  public metadataStatement(
    i?: number,
  ): MetadataStatementContext | MetadataStatementContext[] {
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_metadataBlock;
  }
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
  public METADATA(): TerminalNode {
    return this.getToken(SubjektParser.METADATA, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public ASSIGNMENT(): TerminalNode {
    return this.getToken(SubjektParser.ASSIGNMENT, 0);
  }
  public value(): ValueContext {
    return this.getRuleContext(0, ValueContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_metadataStatement;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_useBlock;
  }
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
  public USE(): TerminalNode {
    return this.getToken(SubjektParser.USE, 0);
  }
  public absoluteRootShapeId(): AbsoluteRootShapeIdContext {
    return this.getRuleContext(0, AbsoluteRootShapeIdContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_useStatement;
  }
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
  public shapeStatement(
    i?: number,
  ): ShapeStatementContext | ShapeStatementContext[] {
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeBlock;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeStatement;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeDefinition;
  }
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
  public AGGREGATE_SHAPE_TYPE(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.AGGREGATE_SHAPE_TYPE, 0);
  }
  public SIMPLE_SHAPE_TYPE(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.SIMPLE_SHAPE_TYPE, 0);
  }
  public SUBJECT_SHAPE_TYPE(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.SUBJECT_SHAPE_TYPE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeType;
  }
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
  public LCURLY(): TerminalNode {
    return this.getToken(SubjektParser.LCURLY, 0);
  }
  public shapeMembers(): ShapeMembersContext {
    return this.getRuleContext(0, ShapeMembersContext);
  }
  public RCURLY(): TerminalNode {
    return this.getToken(SubjektParser.RCURLY, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeTypeDefinition;
  }
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

export class ShapeMembersContext extends ParserRuleContext {
  public enumMembers(): EnumMembersContext | undefined {
    return this.tryGetRuleContext(0, EnumMembersContext);
  }
  public listMember(): ListMemberContext | undefined {
    return this.tryGetRuleContext(0, ListMemberContext);
  }
  public mapMembers(): MapMembersContext | undefined {
    return this.tryGetRuleContext(0, MapMembersContext);
  }
  public subjectMembers(): SubjectMembersContext[];
  public subjectMembers(i: number): SubjectMembersContext;
  public subjectMembers(
    i?: number,
  ): SubjectMembersContext | SubjectMembersContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubjectMembersContext);
    } else {
      return this.getRuleContext(i, SubjectMembersContext);
    }
  }
  public behaviorMembers(): BehaviorMembersContext[];
  public behaviorMembers(i: number): BehaviorMembersContext;
  public behaviorMembers(
    i?: number,
  ): BehaviorMembersContext | BehaviorMembersContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BehaviorMembersContext);
    } else {
      return this.getRuleContext(i, BehaviorMembersContext);
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeMembers;
  }
  // @Override
  public enterRule(listener: SubjektListener): void {
    if (listener.enterShapeMembers) {
      listener.enterShapeMembers(this);
    }
  }
  // @Override
  public exitRule(listener: SubjektListener): void {
    if (listener.exitShapeMembers) {
      listener.exitShapeMembers(this);
    }
  }
  // @Override
  public accept<Result>(visitor: SubjektVisitor<Result>): Result {
    if (visitor.visitShapeMembers) {
      return visitor.visitShapeMembers(this);
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_enumMembers;
  }
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
  public ASSIGNMENT(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.ASSIGNMENT, 0);
  }
  public string(): StringContext | undefined {
    return this.tryGetRuleContext(0, StringContext);
  }
  public INTEGER(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.INTEGER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_enumMember;
  }
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
  public MEMBER(): TerminalNode {
    return this.getToken(SubjektParser.MEMBER, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_listMember;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_mapMembers;
  }
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
  public KEY(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.KEY, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public shapeType(): ShapeTypeContext | undefined {
    return this.tryGetRuleContext(0, ShapeTypeContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public VALUE(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.VALUE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_keyValuePair;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_subjectMembers;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_behaviorMembers;
  }
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
  public STATE(): TerminalNode {
    return this.getToken(SubjektParser.STATE, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public LCURLY(): TerminalNode {
    return this.getToken(SubjektParser.LCURLY, 0);
  }
  public RCURLY(): TerminalNode {
    return this.getToken(SubjektParser.RCURLY, 0);
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_stateReference;
  }
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
  public BEHAVIORS(): TerminalNode {
    return this.getToken(SubjektParser.BEHAVIORS, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public LBRACK(): TerminalNode {
    return this.getToken(SubjektParser.LBRACK, 0);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(SubjektParser.RBRACK, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_behaviorReference;
  }
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
  public EVENTS(): TerminalNode {
    return this.getToken(SubjektParser.EVENTS, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public LBRACK(): TerminalNode {
    return this.getToken(SubjektParser.LBRACK, 0);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(SubjektParser.RBRACK, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_eventReference;
  }
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
  public INPUT(): TerminalNode {
    return this.getToken(SubjektParser.INPUT, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_inputReference;
  }
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
  public OUTPUT(): TerminalNode {
    return this.getToken(SubjektParser.OUTPUT, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_outputReference;
  }
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
  public ERRORS(): TerminalNode {
    return this.getToken(SubjektParser.ERRORS, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public LBRACK(): TerminalNode {
    return this.getToken(SubjektParser.LBRACK, 0);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(SubjektParser.RBRACK, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_errorReference;
  }
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
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public shapeType(): ShapeTypeContext | undefined {
    return this.tryGetRuleContext(0, ShapeTypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_member;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeId;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_rootShapeId;
  }
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
  public HASH_SIGN(): TerminalNode {
    return this.getToken(SubjektParser.HASH_SIGN, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_absoluteRootShapeId;
  }
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
  public DOLLAR_SIGN(): TerminalNode {
    return this.getToken(SubjektParser.DOLLAR_SIGN, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_shapeIdMember;
  }
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
  public AT_SIGN(): TerminalNode {
    return this.getToken(SubjektParser.AT_SIGN, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_trait;
  }
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
  public LPAREN(): TerminalNode {
    return this.getToken(SubjektParser.LPAREN, 0);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(SubjektParser.RPAREN, 0);
  }
  public value(): ValueContext | undefined {
    return this.tryGetRuleContext(0, ValueContext);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_traitBody;
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_value;
  }
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
  public LBRACK(): TerminalNode {
    return this.getToken(SubjektParser.LBRACK, 0);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(SubjektParser.RBRACK, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_listValue;
  }
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
  public LCURLY(): TerminalNode {
    return this.getToken(SubjektParser.LCURLY, 0);
  }
  public RCURLY(): TerminalNode {
    return this.getToken(SubjektParser.RCURLY, 0);
  }
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
  public get ruleIndex(): number {
    return SubjektParser.RULE_objectValue;
  }
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
  public COLON(): TerminalNode {
    return this.getToken(SubjektParser.COLON, 0);
  }
  public value(): ValueContext {
    return this.getRuleContext(0, ValueContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_kvp;
  }
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
  public SINGLE_STRING(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.SINGLE_STRING, 0);
  }
  public DOUBLE_STRING(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.DOUBLE_STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_string;
  }
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
  public INTEGER(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.INTEGER, 0);
  }
  public FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(SubjektParser.FLOAT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_number;
  }
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
  public NAMESPACE_IDENTIFIER_CHARS(): TerminalNode {
    return this.getToken(SubjektParser.NAMESPACE_IDENTIFIER_CHARS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_namespaceIdentifier;
  }
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
  public IDENTIFIER_CHARS(): TerminalNode {
    return this.getToken(SubjektParser.IDENTIFIER_CHARS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return SubjektParser.RULE_identifier;
  }
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
