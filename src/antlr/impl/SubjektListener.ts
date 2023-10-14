// Generated from src/grammar/Subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SubjektParser`.
 */
export interface SubjektListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SubjektParser.subjekts`.
	 * @param ctx the parse tree
	 */
	enterSubjekts?: (ctx: SubjektsContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.subjekts`.
	 * @param ctx the parse tree
	 */
	exitSubjekts?: (ctx: SubjektsContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 */
	enterMetadataStatement?: (ctx: MetadataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 */
	exitMetadataStatement?: (ctx: MetadataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeId`.
	 * @param ctx the parse tree
	 */
	enterShapeId?: (ctx: ShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeId`.
	 * @param ctx the parse tree
	 */
	exitShapeId?: (ctx: ShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 */
	enterRootShapeId?: (ctx: RootShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 */
	exitRootShapeId?: (ctx: RootShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 */
	enterShapeIdMember?: (ctx: ShapeIdMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 */
	exitShapeIdMember?: (ctx: ShapeIdMemberContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 */
	enterNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 */
	exitNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

