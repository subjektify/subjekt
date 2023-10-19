import { ShapeID } from "../types";

export class ShapeIDUtil {
    public static toStr(shapeID: ShapeID): string {
        return `${shapeID.namespace}#${shapeID.identifier}${shapeID.member ? `$${shapeID.member}` : ''}`;
    }
}
