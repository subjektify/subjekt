import { parseSubjekt } from '../build';
import { SubjektModel } from '../types';

describe('parseSubjekt', () => {
  it('should parse a valid Subjekt basic string', () => {
    // Setup
    const namespace = 'myNamespace';
    const source =`string MyString`;
    const expected: SubjektModel = {
      uses: [],
      shapes: {
        'myNamespace#MyString': {
          type: 'string',
        }
      }
    };

    // Execute
    const result = parseSubjekt(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it('should parse a valid Subjekt complex model', () => {
    // Setup
    const namespace = 'myNamespace';
    const source =
    `
use other.namespace#OtherShape
string MyString
`;
    const expected: SubjektModel = {
      uses: [
        {
          namespace: 'other.namespace',
          identifier: 'OtherShape',
        },
      ],
      shapes: {
        'myNamespace#MyString': {
          type: 'string',
        }
      }
    };

    // Execute
    const result = parseSubjekt(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
  
});
