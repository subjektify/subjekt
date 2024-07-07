import { StructureShape, SubjektModel } from "../../../types";
import { SubjektParser } from "../../../parse";

describe("Parse Shape Traits", () => {
  const namespace = "my-namespace";
  const parser = new SubjektParser();

  it("should parse valid default shape traits", () => {
    // Setup
    const source = `@required
structure MyShape {
    myField: string
}`;
    const myShape: StructureShape = {
      type: "structure",
      members: {
        myField: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      traits: {
        required: true,
      },
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
      shapes: {
        [`${namespace}#MyShape`]: myShape,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid array shape traits", () => {
    // Setup
    const source = `@foo(["bar"])
structure MyShape {
    myField: string
}`;
    const myShape: StructureShape = {
      type: "structure",
      members: {
        myField: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      traits: {
        foo: ["bar"],
      },
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
      shapes: {
        [`${namespace}#MyShape`]: myShape,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid kvp shape traits", () => {
    // Setup
    const source = `@foo(bar: "baz")
structure MyShape {
    myField: string
}`;
    const myShape: StructureShape = {
      type: "structure",
      members: {
        myField: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      traits: {
        foo: {
          bar: "baz",
        },
      },
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
      shapes: {
        [`${namespace}#MyShape`]: myShape,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
