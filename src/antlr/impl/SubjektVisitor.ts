// Generated from src/grammar/Subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubjektsContext } from "./SubjektParser";
import { MetadataStatementContext } from "./SubjektParser";
import { UseStatementContext } from "./SubjektParser";
import { ShapeIdContext } from "./SubjektParser";
import { RootShapeIdContext } from "./SubjektParser";
import { AbsoluteRootShapeIdContext } from "./SubjektParser";
import { ShapeIdMemberContext } from "./SubjektParser";
import { ValueContext } from "./SubjektParser";
import { StringContext } from "./SubjektParser";
import { NamespaceIdentifierContext } from "./SubjektParser";
import { IdentifierContext } from "./SubjektParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SubjektParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SubjektVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SubjektParser.subjekts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubjekts?: (ctx: SubjektsContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataStatement?: (ctx: MetadataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.shapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeId?: (ctx: ShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootShapeId?: (ctx: RootShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeIdMember?: (ctx: ShapeIdMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

