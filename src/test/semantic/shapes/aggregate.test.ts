import {
  EnumShape,
  ListShape,
  MapShape,
  StructureShape,
  SubjektModel,
} from "../../../types";
import { SubjektParser } from "../../../parse";
import { ShapeIDUtil } from "../../../util";

describe("Parse Aggregate Shapes", () => {
  const namespace = "my-namespace";
  const parser = new SubjektParser();

  it("should parse valid enum shape", () => {
    // Setup
    const source = "enum MyEnum { VALUE1, VALUE2 }";

    const expectedMember: EnumShape = {
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
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: ListShape = {
      type: "list",
      member: {
        target: ShapeIDUtil.fromString("subjekt#string"),
        traits: {},
      },
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: MapShape = {
      type: "map",
      key: {
        target: ShapeIDUtil.fromString("subjekt#string"),
      },
      value: {
        target: ShapeIDUtil.fromString("subjekt#string"),
      },
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: StructureShape = {
      type: "structure",
      members: {
        myMember: {
          target: ShapeIDUtil.fromString("subjekt#string"),
          traits: {},
        },
      },
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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
