// Generated from src/grammar/Subjekt.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IdlContext } from "./SubjektParser";
import { MetadataBlockContext } from "./SubjektParser";
import { MetadataStatementContext } from "./SubjektParser";
import { UseBlockContext } from "./SubjektParser";
import { UseStatementContext } from "./SubjektParser";
import { ShapeBlockContext } from "./SubjektParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `SubjektParser`.
 */
export interface SubjektListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SubjektParser.idl`.
	 * @param ctx the parse tree
	 */
	enterIdl?: (ctx: IdlContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.idl`.
	 * @param ctx the parse tree
	 */
	exitIdl?: (ctx: IdlContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.metadataBlock`.
	 * @param ctx the parse tree
	 */
	enterMetadataBlock?: (ctx: MetadataBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.metadataBlock`.
	 * @param ctx the parse tree
	 */
	exitMetadataBlock?: (ctx: MetadataBlockContext) => void;

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
	 * Enter a parse tree produced by `SubjektParser.useBlock`.
	 * @param ctx the parse tree
	 */
	enterUseBlock?: (ctx: UseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.useBlock`.
	 * @param ctx the parse tree
	 */
	exitUseBlock?: (ctx: UseBlockContext) => void;

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
	 * Enter a parse tree produced by `SubjektParser.shapeBlock`.
	 * @param ctx the parse tree
	 */
	enterShapeBlock?: (ctx: ShapeBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeBlock`.
	 * @param ctx the parse tree
	 */
	exitShapeBlock?: (ctx: ShapeBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeStatement`.
	 * @param ctx the parse tree
	 */
	enterShapeStatement?: (ctx: ShapeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeStatement`.
	 * @param ctx the parse tree
	 */
	exitShapeStatement?: (ctx: ShapeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeDefinition`.
	 * @param ctx the parse tree
	 */
	enterShapeDefinition?: (ctx: ShapeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeDefinition`.
	 * @param ctx the parse tree
	 */
	exitShapeDefinition?: (ctx: ShapeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeType`.
	 * @param ctx the parse tree
	 */
	enterShapeType?: (ctx: ShapeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeType`.
	 * @param ctx the parse tree
	 */
	exitShapeType?: (ctx: ShapeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.shapeTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterShapeTypeDefinition?: (ctx: ShapeTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.shapeTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitShapeTypeDefinition?: (ctx: ShapeTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.members`.
	 * @param ctx the parse tree
	 */
	enterMembers?: (ctx: MembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.members`.
	 * @param ctx the parse tree
	 */
	exitMembers?: (ctx: MembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.enumMembers`.
	 * @param ctx the parse tree
	 */
	enterEnumMembers?: (ctx: EnumMembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.enumMembers`.
	 * @param ctx the parse tree
	 */
	exitEnumMembers?: (ctx: EnumMembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.enumMember`.
	 * @param ctx the parse tree
	 */
	enterEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.enumMember`.
	 * @param ctx the parse tree
	 */
	exitEnumMember?: (ctx: EnumMemberContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.listMembers`.
	 * @param ctx the parse tree
	 */
	enterListMembers?: (ctx: ListMembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.listMembers`.
	 * @param ctx the parse tree
	 */
	exitListMembers?: (ctx: ListMembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.mapMembers`.
	 * @param ctx the parse tree
	 */
	enterMapMembers?: (ctx: MapMembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.mapMembers`.
	 * @param ctx the parse tree
	 */
	exitMapMembers?: (ctx: MapMembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	enterKeyValuePair?: (ctx: KeyValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.keyValuePair`.
	 * @param ctx the parse tree
	 */
	exitKeyValuePair?: (ctx: KeyValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.subjectMembers`.
	 * @param ctx the parse tree
	 */
	enterSubjectMembers?: (ctx: SubjectMembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.subjectMembers`.
	 * @param ctx the parse tree
	 */
	exitSubjectMembers?: (ctx: SubjectMembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.stateReference`.
	 * @param ctx the parse tree
	 */
	enterStateReference?: (ctx: StateReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.stateReference`.
	 * @param ctx the parse tree
	 */
	exitStateReference?: (ctx: StateReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.behaviorReference`.
	 * @param ctx the parse tree
	 */
	enterBehaviorReference?: (ctx: BehaviorReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.behaviorReference`.
	 * @param ctx the parse tree
	 */
	exitBehaviorReference?: (ctx: BehaviorReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.subscriptionReference`.
	 * @param ctx the parse tree
	 */
	enterSubscriptionReference?: (ctx: SubscriptionReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.subscriptionReference`.
	 * @param ctx the parse tree
	 */
	exitSubscriptionReference?: (ctx: SubscriptionReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.behaviorMembers`.
	 * @param ctx the parse tree
	 */
	enterBehaviorMembers?: (ctx: BehaviorMembersContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.behaviorMembers`.
	 * @param ctx the parse tree
	 */
	exitBehaviorMembers?: (ctx: BehaviorMembersContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.inputReference`.
	 * @param ctx the parse tree
	 */
	enterInputReference?: (ctx: InputReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.inputReference`.
	 * @param ctx the parse tree
	 */
	exitInputReference?: (ctx: InputReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.outputReference`.
	 * @param ctx the parse tree
	 */
	enterOutputReference?: (ctx: OutputReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.outputReference`.
	 * @param ctx the parse tree
	 */
	exitOutputReference?: (ctx: OutputReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.triggerReference`.
	 * @param ctx the parse tree
	 */
	enterTriggerReference?: (ctx: TriggerReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.triggerReference`.
	 * @param ctx the parse tree
	 */
	exitTriggerReference?: (ctx: TriggerReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

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
	 * Enter a parse tree produced by `SubjektParser.trait`.
	 * @param ctx the parse tree
	 */
	enterTrait?: (ctx: TraitContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.trait`.
	 * @param ctx the parse tree
	 */
	exitTrait?: (ctx: TraitContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.traitBody`.
	 * @param ctx the parse tree
	 */
	enterTraitBody?: (ctx: TraitBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.traitBody`.
	 * @param ctx the parse tree
	 */
	exitTraitBody?: (ctx: TraitBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.traitStructureList`.
	 * @param ctx the parse tree
	 */
	enterTraitStructureList?: (ctx: TraitStructureListContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.traitStructureList`.
	 * @param ctx the parse tree
	 */
	exitTraitStructureList?: (ctx: TraitStructureListContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.traitStructure`.
	 * @param ctx the parse tree
	 */
	enterTraitStructure?: (ctx: TraitStructureContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.traitStructure`.
	 * @param ctx the parse tree
	 */
	exitTraitStructure?: (ctx: TraitStructureContext) => void;

	/**
	 * Enter a parse tree produced by `SubjektParser.traitNode`.
	 * @param ctx the parse tree
	 */
	enterTraitNode?: (ctx: TraitNodeContext) => void;
	/**
	 * Exit a parse tree produced by `SubjektParser.traitNode`.
	 * @param ctx the parse tree
	 */
	exitTraitNode?: (ctx: TraitNodeContext) => void;

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

