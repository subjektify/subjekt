// Generated from src/grammar/Subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubjektsContext } from "./SubjektParser";
import { MetadataStatementContext } from "./SubjektParser";
import { UseStatementContext } from "./SubjektParser";
import { ShapeStatementContext } from "./SubjektParser";
import { ShapeDefinitionContext } from "./SubjektParser";
import { ShapeTypeContext } from "./SubjektParser";
import { ShapeTypeDefinitionContext } from "./SubjektParser";
import { MembersContext } from "./SubjektParser";
import { EnumMembersContext } from "./SubjektParser";
import { EnumMemberContext } from "./SubjektParser";
import { ListMembersContext } from "./SubjektParser";
import { MapMembersContext } from "./SubjektParser";
import { KeyValuePairContext } from "./SubjektParser";
import { SubjectMembersContext } from "./SubjektParser";
import { StateReferenceContext } from "./SubjektParser";
import { BehaviorReferenceContext } from "./SubjektParser";
import { SubscriptionReferenceContext } from "./SubjektParser";
import { BehaviorMembersContext } from "./SubjektParser";
import { InputReferenceContext } from "./SubjektParser";
import { OutputReferenceContext } from "./SubjektParser";
import { TriggerReferenceContext } from "./SubjektParser";
import { MemberContext } from "./SubjektParser";
import { ShapeIdContext } from "./SubjektParser";
import { RootShapeIdContext } from "./SubjektParser";
import { AbsoluteRootShapeIdContext } from "./SubjektParser";
import { ShapeIdMemberContext } from "./SubjektParser";
import { TraitContext } from "./SubjektParser";
import { TraitBodyContext } from "./SubjektParser";
import { TraitStructureListContext } from "./SubjektParser";
import { TraitStructureContext } from "./SubjektParser";
import { TraitNodeContext } from "./SubjektParser";
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
	 * Visit a parse tree produced by `SubjektParser.shapeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeStatement?: (ctx: ShapeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.shapeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeDefinition?: (ctx: ShapeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.shapeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeType?: (ctx: ShapeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.shapeTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShapeTypeDefinition?: (ctx: ShapeTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.members`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembers?: (ctx: MembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.enumMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMembers?: (ctx: EnumMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.enumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMember?: (ctx: EnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.listMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListMembers?: (ctx: ListMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.mapMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapMembers?: (ctx: MapMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.keyValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValuePair?: (ctx: KeyValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.subjectMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubjectMembers?: (ctx: SubjectMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.stateReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateReference?: (ctx: StateReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.behaviorReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviorReference?: (ctx: BehaviorReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.subscriptionReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptionReference?: (ctx: SubscriptionReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.behaviorMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviorMembers?: (ctx: BehaviorMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.inputReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputReference?: (ctx: InputReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.outputReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputReference?: (ctx: OutputReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.triggerReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerReference?: (ctx: TriggerReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

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
	 * Visit a parse tree produced by `SubjektParser.trait`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrait?: (ctx: TraitContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.traitBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitBody?: (ctx: TraitBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.traitStructureList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitStructureList?: (ctx: TraitStructureListContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.traitStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitStructure?: (ctx: TraitStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `SubjektParser.traitNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraitNode?: (ctx: TraitNodeContext) => Result;

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

