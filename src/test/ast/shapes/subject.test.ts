import {
  AstBehaviorShape,
  AstErrorShape,
  AstEventShape,
  AstSubjectShape,
  AstModel,
} from "../../../types";
import { AstParser } from "../../../parse";

describe("parseAstSubjectShapes", () => {
  const namespace = "my-namespace";
  const parser = new AstParser();

  it("should parse valid subject shape", () => {
    // Setup
    const source = `subject MySubject { 
    state: {
        id: string
    }
    behaviors: [MyBehavior]
    events: [MyEvent]
}`;

    const expectedMember: AstSubjectShape = {
      type: "subject",
      state: {
        id: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
        },
      },
      behaviors: [
        { target: { namespace: namespace, identifier: "MyBehavior" } },
      ],
      events: [{ target: { namespace: namespace, identifier: "MyEvent" } }],
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MySubject`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid behavior shape", () => {
    // Setup
    const source = `behavior MyBehavior {
    input: string
    output: string
    errors: [MyError]
}`;

    const expectedMember: AstBehaviorShape = {
      type: "behavior",
      input: {
        target: {
          namespace: "subjekt",
          identifier: "string",
        },
      },
      output: {
        target: {
          namespace: "subjekt",
          identifier: "string",
        },
      },
      errors: [{ target: { namespace: namespace, identifier: "MyError" } }],
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyBehavior`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid event shape", () => {
    // Setup
    const source = `event MyEvent { id: string }`;

    const expectedMember: AstEventShape = {
      type: "event",
      members: {
        id: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
        },
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyEvent`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });

  it("should parse valid error shape", () => {
    // Setup
    const source = `error MyError {
    code: string
    message: string
}`;

    const expectedMember: AstErrorShape = {
      type: "error",
      members: {
        code: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
        },
        message: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
        },
      },
      traits: {},
    };
    const expected: AstModel = {
      metadata: {},
      shapes: {
        [`${namespace}#MyError`]: expectedMember,
      },
    };

    // Execute
    const result = parser.parse(namespace, source);

    // Verify
    expect(result).toEqual(expected);
  });
});
