import { ShapeID } from "./core";
import { Shapes } from "./semantic";

export interface SubjektModelContext {
  namespace: string;
  prelude: Shapes;
  uses: ShapeID[];
}
