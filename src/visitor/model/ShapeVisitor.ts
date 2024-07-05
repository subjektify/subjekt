import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ShapeDefinitionContext, ShapeStatementContext, ShapeTypeDefinitionContext, SubjektVisitor } from "../../antlr";
import { AggregateShape, BehaviorShape, EnumMember, EnumShape, ErrorShape, EventShape, ListShape, MapShape, Shape, ShapeID, ShapeType, Shapes, StructureShape, SubjectShape, SubjektModelContext, Target } from '../../types';
import { ShapeIDVisitor } from './ShapeIDVisitor';
import { ShapeIDUtil, ShapeTypeUtil } from '../../util';

export class ShapeVisitor
    extends AbstractParseTreeVisitor<Shapes>
    implements SubjektVisitor<Shapes> {

        modelContext: SubjektModelContext;
        shapeIdVisitor: ShapeIDVisitor;
        _uses: ShapeID[];

    constructor(modelContext: SubjektModelContext) {
        super();
        this.modelContext = modelContext;
        this.shapeIdVisitor = new ShapeIDVisitor(modelContext);
        this._uses = [];
    }

    protected defaultResult(): Shapes {
        return {
        };
    }

    public uses(_uses: ShapeID[]): void {
        this._uses = _uses;
    }

    public visitShapeStatement(ctx: ShapeStatementContext): Shapes {
        const result: Shapes = this.visit(ctx.shapeDefinition());
        return result;
    }
    
    public visitShapeDefinition(ctx: ShapeDefinitionContext): Shapes {
        const shapeId = this.shapeIdVisitor.visit(ctx.identifier());
        const shapeType = ctx.shapeType().text;
        let shape: Shape | AggregateShape;
        if (ShapeTypeUtil.isSimpleShapeType(shapeType)) {
            shape = this._visitSimpleShapeDefinition(ctx);
        } else if (ShapeTypeUtil.isAggregateShapeType(shapeType)) {
            shape = this._visitAggregateShapeDefinition(ctx);
        } else if (ShapeTypeUtil.isSubjectShapeType(shapeType)) {
            shape = this._visitSubjectShapeDefinition(ctx);
        } else {
            throw new Error(`Unsupported shape type: ${shapeType}`);
        }
        const result: Shapes = {
            [ShapeIDUtil.toString(shapeId)]: shape
        };

        return result;
    }

    private _visitSimpleShapeDefinition(ctx: ShapeDefinitionContext): Shape {
        const shape: Shape = {
            type: ctx.shapeType().text as ShapeType,
        };

        return shape;
    }

    private _visitAggregateShapeDefinition(ctx: ShapeDefinitionContext): AggregateShape {

        const shapeType = ctx.shapeType().text;

        switch (shapeType) {
            case 'enum':
                return this._visitEnumShapeDefinition(ctx.shapeTypeDefinition());
            case 'list':
                return this._visitListShapeDefinition(ctx.shapeTypeDefinition());
            case 'map':
                return this._visitMapShapeDefinition(ctx);
            case 'structure':
                return this._visitStructureShapeDefinition(ctx);
            default:
                throw new Error(`Unsupported aggregate shape type: ${shapeType}`);
        }
    }

    private _visitEnumShapeDefinition(ctx?: ShapeTypeDefinitionContext): AggregateShape {
        const intTarget = {
            namespace: 'subjekt',
            identifier: 'int'
        }
        const stringTarget = {
            namespace: 'subjekt',
            identifier: 'string'
        }
        const enumMembers = ctx?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.enumMembers()?.enumMember();
        if (!enumMembers) {
            throw new Error('Enum shape must have members');
        }
        let members: Record<string, EnumMember> = {};
        enumMembers.forEach((enumMember) => {
            const memberName = enumMember.identifier()?.text;
            const memberValue = enumMember.INTEGER()?.text || enumMember.string()?.text || memberName;
            const target = isNaN(+Number(memberValue)) ? stringTarget : intTarget;
            if (!memberName) {
                throw new Error('Enum shape member must have a name');
            }
            members[memberName] = {
                value: isNaN(+Number(memberValue)) ? memberValue : Number(memberValue),
                target
            };
        });
        const shape: EnumShape = {
            type: 'enum',
            members
        };

        return shape;
    }

    private _visitListShapeDefinition(ctx?: ShapeTypeDefinitionContext): AggregateShape {
        const listMember = ctx?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.listMember();
        if (!listMember) {
            throw new Error('List shape must have a member');
        }
        const member = listMember.shapeType()?.text || listMember.identifier()?.text;
        if (!member) {
            throw new Error('List shape member must be a shape type or identifier');
        }
        const shape: ListShape = {
            type: 'list',
            member: this._visitTarget(member)
        };

        return shape;
    }

    private _visitMapShapeDefinition(ctx?: ShapeDefinitionContext): AggregateShape {
        const mapMember = ctx?.shapeTypeDefinition()?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.mapMembers();
        if (!mapMember) {
            throw new Error('Map shape must have a key and value');
        }
        const keyValuePairs = mapMember.keyValuePair();
        if (!keyValuePairs) {
            throw new Error('Map shape must have a key and value');
        }
        let _key: string | undefined;
        let _value: string | undefined;
        keyValuePairs.forEach((keyValuePair) => {
            if (keyValuePair.KEY()) {
                _key = keyValuePair.shapeType()?.text || keyValuePair.identifier()?.text;
            } else if (keyValuePair.VALUE()) {
                _value = keyValuePair.shapeType()?.text || keyValuePair.identifier()?.text;
            }
        });
        if (!_key || !_value) {
            throw new Error('Map shape must have a key and value');
        }
        const shape: MapShape = {
            type: 'map',
            key: this._visitTarget(_key),
            value: this._visitTarget(_value)
        };
        return shape;
    }

    private _visitStructureShapeDefinition(ctx: ShapeDefinitionContext): AggregateShape {
        const idlMembers = ctx.shapeTypeDefinition()?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.member();
        let members: Record<string, Target> = {};
        idlMembers?.forEach((member) => {
            const memberName = member.identifier()[0]?.text;
            const memberType = member.shapeType()?.text || member.identifier()[1]?.text;
            if (!memberName || !memberType) {
                throw new Error('Structure shape member must have a name and type');
            }
            members[memberName] = this._visitTarget(memberType);
        });
        const shape: StructureShape = {
            type: 'structure',
            members
        };

        return shape;
    }

    private _visitSubjectShapeDefinition(ctx: ShapeDefinitionContext): Shape {
        const shapeType = ctx.shapeType().text;
        switch (shapeType) {
            case 'subject':
                return this._visitSubjectShape(ctx);
            case 'behavior':
                return this._visitBehaviorShape(ctx);
            case 'event':
                return this._visitEventShape(ctx);
            case 'error':
                return this._visitErrorShape(ctx);
            default:
                throw new Error(`Unsupported subject shape type: ${shapeType}`);
        }
    }

    private _visitSubjectShape(ctx?: ShapeDefinitionContext): Shape {
        let state: Record<string, Target> = {};
        let behaviors: Target[] = [];
        let events: Target[] = [];
        const subjectShapeMembers = ctx?.shapeTypeDefinition()?.subjectShapeTypeDefinition()?.subjectShapeMembers();
        subjectShapeMembers?.forEach((member) => {
            const subjectMember = member.subjectMembers();
            if (subjectMember) {
                const stateReference = subjectMember.stateReference();
                const behaviorReference = subjectMember.behaviorReference();
                const eventReference = subjectMember.eventReference();
                if (stateReference) {
                    const stateMembers = stateReference.member();
                    stateMembers?.forEach((stateMember) => {
                        const memberName = stateMember.identifier()[0]?.text;
                        const memberType = stateMember.shapeType()?.text || stateMember.identifier()[1]?.text;
                        if (!memberName || !memberType) {
                            throw new Error('Subject shape state member must have a name and type');
                        }
                        state[memberName] = this._visitTarget(memberType);
                    });
                } else if (behaviorReference) {
                    const identifiers = behaviorReference.identifier();
                    identifiers?.forEach((identifier) => {
                        const behaviorId = this.shapeIdVisitor.visit(identifier);
                        behaviors.push({
                            target: behaviorId
                        });
                    });
                } else if (eventReference) {
                    const identifiers = eventReference.identifier();
                    identifiers?.forEach((identifier) => {
                        const eventId = this.shapeIdVisitor.visit(identifier);
                        events.push({
                            target: eventId
                        });
                    });
                }
            }
        });
        const shape: SubjectShape = {
            type: 'subject',
            state,
            behaviors,
            events
        };

        return shape;
    }

    private _visitBehaviorShape(ctx?: ShapeDefinitionContext): BehaviorShape {
        const subjectMembers = ctx?.shapeTypeDefinition()?.subjectShapeTypeDefinition()?.subjectShapeMembers();
        let input: Target = { target: { namespace: 'subjekt', identifier: 'none' } };
        let output: Target = { target: { namespace: 'subjekt', identifier: 'none' } };
        let errors: Target[] = [];
        subjectMembers?.forEach((member) => {
            const inputReference = member.behaviorMembers()?.inputReference();
            const outputReference = member.behaviorMembers()?.outputReference();
            const errorReference = member.behaviorMembers()?.errorReference();
            if (inputReference) {
                const inputIdentifier = inputReference.shapeType()?.text || inputReference.identifier()?.text;
                if (!inputIdentifier) {
                    throw new Error('Behavior shape input must have a type');
                }
                input = this._visitTarget(inputIdentifier);
            } else if (outputReference) {
                const outputIdentifier = outputReference.shapeType()?.text || outputReference.identifier()?.text;
                if (!outputIdentifier) {
                    throw new Error('Behavior shape output must have a type');
                }
                output = this._visitTarget(outputIdentifier);
            } else if (errorReference) {
                const errorIdentifiers = errorReference.identifier();
                errorIdentifiers?.forEach((identifier) => {
                    const errorId = this.shapeIdVisitor.visit(identifier);
                    errors.push({
                        target: errorId
                    });
                });
            }
            
        });
        const shape: BehaviorShape = {
            type: 'behavior',
            input,
            output,
            errors
        };

        return shape;
    }

    private _visitEventShape(ctx: ShapeDefinitionContext): Shape {
        const subjectMembers = ctx?.shapeTypeDefinition()?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.member();
        let members: Record<string, Target> = {};
        subjectMembers?.forEach((member) => {
            const memberName = member?.identifier()[0]?.text;
            const memberType = member?.shapeType()?.text || member?.identifier()[1]?.text;
            if (!memberName || !memberType) {
                throw new Error('Event shape member must have a name and type');
            }
            members[memberName] = this._visitTarget(memberType);
        });
        const shape: EventShape = {
            type: 'event',
            members
        };

        return shape;
    }

    private _visitErrorShape(ctx: ShapeDefinitionContext): Shape {
        const subjectMembers = ctx?.shapeTypeDefinition()?.aggregateShapeTypeDefinition()?.aggregateShapeMembers()?.member();
        let members: Record<string, Target> = {};
        subjectMembers?.forEach((member) => {
            const memberName = member?.identifier()[0]?.text;
            const memberType = member?.shapeType()?.text || member?.identifier()[1]?.text;
            if (!memberName || !memberType) {
                throw new Error('Event shape member must have a name and type');
            }
            members[memberName] = this._visitTarget(memberType);
        });
        const shape: ErrorShape = {
            type: 'error',
            members
        };

        return shape;
    }

    private _visitTarget(value: string): Target {
        if (ShapeTypeUtil.isShapeType(value)) {
            return {
                target: {
                    namespace: 'subjekt',
                    identifier: value
                }
            };
        }
        this._uses.forEach((use) => {
            if (use.identifier === value) {
                return {
                    target: {
                        namespace: use.namespace,
                        identifier: value
                    }
                };
            }
        });
        return {
            target: {
                namespace: this.modelContext.namespace,
                identifier: value
            }
        };
    }
}
