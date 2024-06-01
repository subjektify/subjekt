import { ShapeID, Shapes } from "../base";
import { Prelude } from "./Prelude";

export type SubjektModel = {
    metadata?: object;
    prelude?: Prelude;
    uses?: ShapeID[];
    shapes?: Shapes;
}

export interface SubjektModelContext {
    namespace: string;
    prelude: Prelude;
}
