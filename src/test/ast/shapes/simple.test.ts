import { SimpleShapeType, ASTModel } from "../../../types";
import { ASTParser } from "../../../parse";

describe('parseAstSimpleShapes', () => {

    const namespace = 'my-namespace';
    const parser = new ASTParser();

    const simpleShapes: { type: SimpleShapeType, source: string }[] = [
        { type: 'address', source: 'address myAddress' },
        { type: 'blob', source: 'blob myBlob' },
        { type: 'boolean', source: 'boolean myBoolean' },
        { type: 'byte', source: 'byte myByte' },
        { type: 'bytes', source: 'bytes myBytes' },
        { type: 'document', source: 'document myDocument' },
        { type: 'double', source: 'double myDouble' },
        { type: 'float', source: 'float myFloat' },
        { type: 'int', source: 'int myInt' },
        { type: 'int8', source: 'int8 myInt8' },
        { type: 'int16', source: 'int16 myInt16' },
        { type: 'int32', source: 'int32 myInt32' },
        { type: 'int64', source: 'int64 myInt64' },
        { type: 'int128', source: 'int128 myInt128' },
        { type: 'int256', source: 'int256 myInt256' },
        { type: 'none', source: 'none myNone' },
        { type: 'string', source: 'string myString' },
        { type: 'timestamp', source: 'timestamp myTimestamp' },
        { type: 'uint', source: 'uint myUint' },
        { type: 'uint8', source: 'uint8 myUint8' },
        { type: 'uint16', source: 'uint16 myUint16' },
        { type: 'uint32', source: 'uint32 myUint32' },
        { type: 'uint64', source: 'uint64 myUint64' },
        { type: 'uint128', source: 'uint128 myUint128' },
        { type: 'uint256', source: 'uint256 myUint256' }
    ];

    simpleShapes.forEach(({ type, source }) => {
        it(`should parse valid ${type} shape`, () => {
            // Setup
            const expected: ASTModel = {
                metadata: {},
                shapes: {
                    [`${namespace}#${source.split(' ')[1]}`]: {
                        type
                    }
                }
            };

            // Execute
            const result = parser.parse(namespace, source);

            // Verify
            expect(result).toEqual(expected);
        });
    });
});
