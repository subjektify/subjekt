import { SubjektModel } from "./SubjektModel";

export class Prelude implements SubjektModel {
    prelude: Prelude;

    constructor() {
        this.prelude = this;
    }
}
