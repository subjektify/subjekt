import { SemanticModel } from "./SemanticModel";

export class Prelude implements SemanticModel {
    prelude: Prelude;

    constructor() {
        this.prelude = this;
    }
}
