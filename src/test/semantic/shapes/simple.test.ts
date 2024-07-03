import { SubjektModel } from "../../../types";
import { SubjektParser } from "../../../parse";

describe('parseSimpleShapes', () => {

    const namespace = 'myNamespace';
    const parser = new SubjektParser();

    it('should parse valid string shape', () => {
        // Setup
        const source = `string myString`;
        const expected: SubjektModel = {
            metadata: {},
            uses: [],
            shapes: {
                "myNamespace#myString": {
                    type: 'string'
                }
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid number shape', () => {
        // Setup
        const source = `int myNumber`;
        const expected: SubjektModel = {
            metadata: {},
            uses: [],
            shapes: {
                "myNamespace#myNumber": {
                    type: 'int'
                }
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

});
