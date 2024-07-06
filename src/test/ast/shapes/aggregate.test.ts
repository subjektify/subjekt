import {
  AstListShape,
  AstMapShape,
  AstStructureShape,
  AstModel,
  AstEnumShape,
} from "../../../types";
import { AstParser } from "../../../parse";
import { ShapeIDUtil } from "../../../util";

describe("parseAstAggregateShapes", () => {
  const namespace = "my-namespace";
  const parser = new AstParser();

  it("should parse valid enum shape", () => {
    // Setup
    const source = "enum MyEnum { VALUE1, VALUE2 }";

    const expectedMember: AstEnumShape = {
      type: "enum",
      members: {
        VALUE1: {
          value: "VALUE1",
          target: ShapeIDUtil.fromString("subjekt#string"),
        },
        VALUE2: {
          value: "VALUE2",
          target: ShapeIDUtil.fromString("subjekt#string"),
        },
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyEnum`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid list shape", () => {
    // Setup
    const source = "list MyList { member: string }";

    const expectedMember: AstListShape = {
      type: "list",
      member: {
        target: ShapeIDUtil.fromString("subjekt#string"),
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyList`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid map shape", () => {
    // Setup
    const source = "map MyMap { key: string, value: string }";

    const expectedMember: AstMapShape = {
      type: "map",
      key: {
        target: ShapeIDUtil.fromString("subjekt#string"),
      },
      value: {
        target: ShapeIDUtil.fromString("subjekt#string"),
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyMap`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid structure shape", () => {
    // Setup
    const source = "structure MyStructure { myMember: string }";

    const expectedMember: AstStructureShape = {
      type: "structure",
      members: {
        myMember: {
          target: ShapeIDUtil.fromString("subjekt#string"),
        },
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyStructure`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
