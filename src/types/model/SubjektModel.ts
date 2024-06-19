import { ShapeID, Shapes } from "../base";

export type SubjektModel = {
    metadata?: object;
    uses?: ShapeID[];
    shapes?: Shapes;
}

export interface SubjektModelContext {
    namespace: string;
}
