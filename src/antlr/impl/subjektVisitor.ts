// Generated from src/grammar/subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubjektsContext } from "./subjektParser";
import { MetadataStatementContext } from "./subjektParser";
import { ShapeIdContext } from "./subjektParser";
import { RootShapeIdContext } from "./subjektParser";
import { AbsoluteRootShapeIdContext } from "./subjektParser";
import { ShapeIdMemberContext } from "./subjektParser";
import { ValueContext } from "./subjektParser";
import { StringContext } from "./subjektParser";
import { NamespaceIdentifierContext } from "./subjektParser";
import { IdentifierContext } from "./subjektParser";


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

	/**
	 * Visit a parse tree produced by `subjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataStatement?: (ctx: MetadataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.shapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeId?: (ctx: ShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootShapeId?: (ctx: RootShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeIdMember?: (ctx: ShapeIdMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `subjektParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

