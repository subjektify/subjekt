// Generated from src/grammar/subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubjektsContext } from "./subjektParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `subjektParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface subjektVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `subjektParser.subjekts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubjekts?: (ctx: SubjektsContext) => Result;
}

