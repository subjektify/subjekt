import { ListShape, MapShape, StructureShape, ASTModel } from "../../../types";
import { ASTParser } from "../../../parse";
import { ShapeIDUtil } from "../../../util";

describe('parseAggregateShapes', () => {

    const namespace = 'my-namespace';
    const parser = new ASTParser();

    it('should parse valid list shape', () => {
        // Setup
        const source = 'list MyList { member: string }';

        const expectedMember: ListShape = {
            type: 'list',
            member: {
                target: ShapeIDUtil.fromString('subjekt#string')
            }
        };
        const expected: ASTModel = {
            metadata: {},
            shapes: {
                [`${namespace}#MyList`]: expectedMember
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid map shape', () => {
        // Setup
        const source = 'map MyMap { key: string, value: string }';

        const expectedMember: MapShape = {
            type: 'map',
            key: {
                target: ShapeIDUtil.fromString('subjekt#string')
            },
            value: {
                target: ShapeIDUtil.fromString('subjekt#string')
            }
        };
        const expected: ASTModel = {
            metadata: {},
            shapes: {
                [`${namespace}#MyMap`]: expectedMember
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid structure shape', () => {
        // Setup
        const source = 'structure MyStructure { myMember: string }';

        const expectedMember: StructureShape = {
            type: 'structure',
            members: {
                myMember: {
                    target: ShapeIDUtil.fromString('subjekt#string')
                }
            }
        };
        const expected: ASTModel = {
            metadata: {},
            shapes: {
                [`${namespace}#MyStructure`]: expectedMember
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });
});
