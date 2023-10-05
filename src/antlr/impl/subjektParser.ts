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
	public static readonly AT_SIGN = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly LBRACK = 4;
	public static readonly RBRACK = 5;
	public static readonly LCURLY = 6;
	public static readonly RCURLY = 7;
	public static readonly ASSIGNMENT = 8;
	public static readonly COLON = 9;
	public static readonly COMMA = 10;
	public static readonly HASH_SIGN = 11;
	public static readonly DOLLAR_SIGN = 12;
	public static readonly SEMICOLON = 13;
	public static readonly IdentifierChars = 14;
	public static readonly SINGLE_STRING = 15;
	public static readonly DOUBLE_STRING = 16;
	public static readonly NUMBER = 17;
	public static readonly WS = 18;
	public static readonly COMMENT = 19;
	public static readonly RULE_subjekts = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"subjekts",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'='", "':'", 
		"','", "'#'", "'$'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AT_SIGN", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LCURLY", 
		"RCURLY", "ASSIGNMENT", "COLON", "COMMA", "HASH_SIGN", "DOLLAR_SIGN", 
		"SEMICOLON", "IdentifierChars", "SINGLE_STRING", "DOUBLE_STRING", "NUMBER", 
		"WS", "COMMENT",
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
			this.state = 2;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15\x07\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x02\x02\x05" +
		"\x02\x04\x03\x02\x02\x02\x04\x05\x07\x02\x02\x03\x05\x03\x03\x02\x02\x02" +
		"\x02";
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


