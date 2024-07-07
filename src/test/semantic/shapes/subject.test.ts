import {
  BehaviorShape,
  ErrorShape,
  EventShape,
  SubjectShape,
  SubjektModel,
} from "../../../types";
import { SubjektParser } from "../../../parse";

describe("Parse Subject Shapes", () => {
  const namespace = "my-namespace";
  const parser = new SubjektParser();

  it("should parse valid subject shape", () => {
    // Setup
    const source = `subject MySubject { 
    state: {
        id: string
    }
    behaviors: [MyBehavior]
    events: [MyEvent]
}`;

    const expectedMember: SubjectShape = {
      type: "subject",
      state: {
        id: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      behaviors: [
        {
          target: { namespace: namespace, identifier: "MyBehavior" },
          traits: {},
        },
      ],
      events: [
        { target: { namespace: namespace, identifier: "MyEvent" }, traits: {} },
      ],
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: BehaviorShape = {
      type: "behavior",
      input: {
        target: {
          namespace: "subjekt",
          identifier: "string",
        },
        traits: {},
      },
      output: {
        target: {
          namespace: "subjekt",
          identifier: "string",
        },
        traits: {},
      },
      errors: [
        { target: { namespace: namespace, identifier: "MyError" }, traits: {} },
      ],
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: EventShape = {
      type: "event",
      members: {
        id: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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

    const expectedMember: ErrorShape = {
      type: "error",
      members: {
        code: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
        message: {
          target: {
            namespace: "subjekt",
            identifier: "string",
          },
          traits: {},
        },
      },
      traits: {},
    };
    const expected: SubjektModel = {
      metadata: {},
      uses: [],
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
