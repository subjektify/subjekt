import { NodeValue, ShapeID, Shapes } from "../base";

export type SubjektModel = {
    metadata?: Record<string, NodeValue>;
    uses?: ShapeID[];
    shapes?: Shapes;
}

export interface SubjektModelContext {
    namespace: string;
}
