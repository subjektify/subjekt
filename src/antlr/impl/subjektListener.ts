// Generated from src/grammar/subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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

	/**
	 * Enter a parse tree produced by `subjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 */
	enterMetadataStatement?: (ctx: MetadataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.metadataStatement`.
	 * @param ctx the parse tree
	 */
	exitMetadataStatement?: (ctx: MetadataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.shapeId`.
	 * @param ctx the parse tree
	 */
	enterShapeId?: (ctx: ShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.shapeId`.
	 * @param ctx the parse tree
	 */
	exitShapeId?: (ctx: ShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 */
	enterRootShapeId?: (ctx: RootShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.rootShapeId`.
	 * @param ctx the parse tree
	 */
	exitRootShapeId?: (ctx: RootShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.absoluteRootShapeId`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteRootShapeId?: (ctx: AbsoluteRootShapeIdContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 */
	enterShapeIdMember?: (ctx: ShapeIdMemberContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.shapeIdMember`.
	 * @param ctx the parse tree
	 */
	exitShapeIdMember?: (ctx: ShapeIdMemberContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 */
	enterNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.namespaceIdentifier`.
	 * @param ctx the parse tree
	 */
	exitNamespaceIdentifier?: (ctx: NamespaceIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `subjektParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `subjektParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

