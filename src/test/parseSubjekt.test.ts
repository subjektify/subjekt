import { parseSubjekt } from '../build';
import { Prelude, SubjektModel } from '../types';

describe('parseSubjekt', () => {
  it('should parse a valid Subjekt basic string', () => {
    // Setup
    const namespace = 'myNamespace';
    const source =`string MyString`;
    const expected: SubjektModel = {
      prelude: new Prelude(),
      uses: []
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
      prelude: new Prelude(),
      uses: [
        {
          namespace: 'other.namespace',
          identifier: 'OtherShape',
        },
      ]
    };

    // Execute
    const result = parseSubjekt(namespace, source);
    console.log('result', result);

    // Verify
    expect(result).toEqual(expected);
  });
  
});