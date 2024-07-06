import { AstModel } from "../../types";
import { AstParser } from "../../parse";

describe("parseAstMetadata", () => {
  const namespace = "my-namespace";
  const parser = new AstParser();

  it("should parse valid string metadata", () => {
    // Setup
    const source = `metadata myMetadata = "myValue"`;
    const expected: AstModel = {
      metadata: {
        myMetadata: "myValue",
      },
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid numeric metadata", () => {
    // Setup
    const source = `metadata myMetadata = 123`;
    const expected: AstModel = {
      metadata: {
        myMetadata: 123,
      },
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid list metadata", () => {
    // Setup
    const source = `metadata myMetadata = [1, 2, 3]`;
    const expected: AstModel = {
      metadata: {
        myMetadata: [1, 2, 3],
      },
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse a valid object metadata", () => {
    // Setup
    const source = `metadata myMetadata = { id: "value" }`;
    const expected: AstModel = {
      metadata: {
        myMetadata: {
          id: "value",
        },
      },
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
