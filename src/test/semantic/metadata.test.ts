import { SubjektModel } from "../../types";
import { SubjektParser } from "../../parse";

describe("parseMetadata", () => {
  const namespace = "my-namespace";
  const parser = new SubjektParser();

  it("should parse valid string metadata", () => {
    // Setup
    const source = `metadata myMetadata = "myValue"`;
    const expected: SubjektModel = {
      uses: [],
      shapes: {},
      metadata: {
        myMetadata: "myValue",
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid numeric metadata", () => {
    // Setup
    const source = `metadata myMetadata = 123`;
    const expected: SubjektModel = {
      uses: [],
      shapes: {},
      metadata: {
        myMetadata: 123,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid list metadata", () => {
    // Setup
    const source = `metadata myMetadata = [1, 2, 3]`;
    const expected: SubjektModel = {
      uses: [],
      shapes: {},
      metadata: {
        myMetadata: [1, 2, 3],
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid object metadata", () => {
    // Setup
    const source = `metadata myMetadata = { id: "value" }`;
    const expected: SubjektModel = {
      uses: [],
      shapes: {},
      metadata: {
        myMetadata: { id: "value" },
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
