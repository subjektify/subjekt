import { parseSubjekt } from '../build';
import { Prelude, SubjektModel } from '../types';

describe('parseSubjekt', () => {
  it('should parse a valid Subjekt basic string', () => {
    // Setup
    const namespace = 'myNamespace';
    const source =`String MyString`;
    const expected: SubjektModel = {
      prelude: new Prelude(),
      shapes: [
        {
          id: {
            namespace,
            shapeName: 'MyString',
          },
        },
      ],
    };

    // Execute
    const result = parseSubjekt(namespace, source);
    console.log(result);

    // Verify
    expect(result).toEqual(expected);
  });
  /*it('should parse a valid Subjekt source string', () => {
    const source = `
      metadata name = "My Subjekt"

      use other.namespace#myString

      subject MySubject {
        states: [State1, State2]
        behaviors: [Behavior1, Behavior2]
        subscriptions: [Subscription1, Subscription2]
      }
    `;

    const result = parseSubjekt(source);

    expect(result).toEqual({
      metadata: {
        name: 'My Subjekt',
      },
      use: '#myNamespace',
      subjects: [
        {
          name: 'MySubject',
          states: ['State1', 'State2'],
          behaviors: ['Behavior1', 'Behavior2'],
          subscriptions: ['Subscription1', 'Subscription2'],
        },
      ],
    });
  });

  it('should throw an error for an invalid Subjekt source string', () => {
    const source = `
      metadata {
        name = "My Subjekt"
      }

      use #myNamespace

      subject MySubject {
        states: [State1, State2]
        behaviors: [Behavior1, Behavior2]
        subscriptions: [Subscription1, Subscription2]
    `;

    expect(() => parseSubjekt(source)).toThrow();
  });*/
});