import { AppliedTraits } from "./Trait";

export interface Shapes {
    [key: string]: Shape
}

export interface Shape {
    type: ShapeID
    traits?: AppliedTraits
}

export interface ShapeID {
    namespace: string;
    shapeName: string;
    memberName?: string;
}
