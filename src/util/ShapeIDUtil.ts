import { ShapeID } from "../types";

export class ShapeIDUtil {
    public static toString(shapeID: ShapeID): string {
        return `${shapeID.namespace}#${shapeID.identifier}${shapeID.member ? `$${shapeID.member}` : ''}`;
    }
    public static fromString(shapeIDStr: string): ShapeID {
        const [namespace, identifier] = shapeIDStr.split('#');
        const [identifierStr, memberStr] = identifier.split('$');
        return {
            namespace,
            identifier: identifierStr,
            member: memberStr
        };
    }
}
