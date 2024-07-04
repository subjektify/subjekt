import { NodeValue, ShapeID, Shapes } from "../base";

export type SubjektModel = {
    metadata?: Metadata;
    uses?: ShapeID[];
    shapes?: Shapes;
}

export type Metadata = Record<string, NodeValue>;

export interface SubjektModelContext {
    namespace: string;
}
