// Generated from src/grammar/subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SubjektsContext } from "./subjektParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `subjektParser`.
 */
export interface subjektListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `subjektParser.subjekts`.
	 * @param ctx the parse tree
	 */
	enterSubjekts?: (ctx: SubjektsContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.subjekts`.
	 * @param ctx the parse tree
	 */
	exitSubjekts?: (ctx: SubjektsContext) => void;
}

