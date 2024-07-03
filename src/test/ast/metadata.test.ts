import { ASTModel } from "../../types";
import { ASTParser } from "../../parse";

describe('parseMetadata', () => {

    const namespace = 'myNamespace';
    const parser = new ASTParser();
    
    it('should parse valid string metadata', () => {
        // Setup
        const source = `metadata myMetadata = "myValue"`;
        const expected: ASTModel = {
            metadata: {
                myMetadata: 'myValue'
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid numeric metadata', () => {
        // Setup
        const source = `metadata myMetadata = 123`;
        const expected: ASTModel = {
            metadata: {
                myMetadata: 123
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse valid list metadata', () => {
        // Setup
        const source = `metadata myMetadata = [1, 2, 3]`;
        const expected: ASTModel = {
            metadata: {
                myMetadata: [1, 2, 3]
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });

    it('should parse a valid object metadata', () => {
        // Setup
        const source = `metadata myMetadata = { id: "value" }`;
        const expected: ASTModel = {
            metadata: {
                myMetadata: {
                    id: 'value'
                }
            }
        };

        // Execute
        const result = parser.parse(namespace, source);

        // Verify
        expect(result).toEqual(expected);
    });
});
