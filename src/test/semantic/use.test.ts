import { SubjektModel } from "../../types";
import { SubjektParser } from "../../parse";

describe('parseUse', () => {

    const namespace = 'my-namespace';
    const parser = new SubjektParser();

    it('should parse valid use statement', () => {
        // Setup
        const source = `use ${namespace}#myShape`;
        const expected: SubjektModel = {
            metadata: {},
            uses: [{
                namespace,
                identifier: 'myShape'
            }],
            shapes: {}
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid multiple use statements', () => {
        // Setup
        const source = `use ${namespace}#myShape
use ${namespace}#myOtherShape`;
        const expected: SubjektModel = {
            metadata: {},
            uses: [{
                namespace,
                identifier: 'myShape'
            }, {
                namespace,
                identifier: 'myOtherShape'
            }],
            shapes: {}
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });
});
