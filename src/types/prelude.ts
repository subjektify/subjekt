import { Shapes, StructureShape } from "./semantic";

export const prelude: Shapes = {
    "subjekt#String": {
        type: "string",
    },
    "subjekt#Blob": {
        type: "blob",
    },
    "subjekt#Integer": {
        type: "int",
    },
    "subjekt#Float": {
        type: "float",
    },
    "subjekt#Boolean": {
        type: "boolean",
    },
    "subjekt#Timestamp": {
        type: "timestamp",
    },
    "subjekt#Document": {
        type: "document",
    },
    "subjekt#Double": {
        type: "double",
    },
    "subjekt#trait": {
        type: "structure",
        members: {
            selector: {
                target: {
                    namespace: "subjekt",
                    identifier: "string",
                }
            },
        }
    } as StructureShape,
};
