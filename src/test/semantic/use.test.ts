import { SubjektModel } from "../../types";
import { SubjektParser } from "../../parse";

describe("parseUse", () => {
  const namespace = "my-namespace";
  const parser = new SubjektParser();

  it("should parse valid use statement", () => {
    // Setup
    const source = `use ${namespace}#OtherShape`;
    const expected: SubjektModel = {
      metadata: {},
      uses: [
        {
          namespace,
          identifier: "OtherShape",
        },
      ],
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid multiple use statements", () => {
    // Setup
    const source = `use ${namespace}#OtherShape
use ${namespace}#MyOtherShape`;
    const expected: SubjektModel = {
      metadata: {},
      uses: [
        {
          namespace,
          identifier: "OtherShape",
        },
        {
          namespace,
          identifier: "MyOtherShape",
        },
      ],
      shapes: {},
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
