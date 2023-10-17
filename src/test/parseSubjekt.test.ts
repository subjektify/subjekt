import { parseSubjekt } from '../build';
import { Prelude, SubjektModel } from '../types';

describe('parseSubjekt', () => {
  it('should parse a valid Subjekt basic string', () => {
    // Setup
    const namespace = 'myNamespace';
    const source =`string MyString`;
    const expected: SubjektModel = {
      prelude: new Prelude(),
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
string MyString
`;
    const expected: SubjektModel = {
      prelude: new Prelude(),
    };

    // Execute
    const result = parseSubjekt(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
  
});