import { StructureShape, SubjektModel } from "../../types";
import { SubjektParser } from "../../parse";

describe('parseModel', () => {

    const namespace = 'my-namespace';
    const otherNamespace = 'other-namespace';
    const parser = new SubjektParser();
    
    it('should parse valid model', () => {
        // Setup
        const source = `metadata myMetadata = "myValue"
use ${otherNamespace}#OtherShape

structure MyShape {
    myField: OtherShape
}`;
        const myShape: StructureShape = {
            type: 'structure',
            members: {
                myField: {
                    target: {
                        namespace: otherNamespace,
                        identifier: 'OtherShape'
                    }
                }
            }
        };
        const expected: SubjektModel = {
            metadata: {
                myMetadata: 'myValue'
            },
            uses: [{
                namespace: otherNamespace,
                identifier: 'OtherShape'
            }],
            shapes: {
                [`${namespace}#MyShape`]: myShape
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });
});
