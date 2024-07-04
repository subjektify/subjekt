/**
 * This file represents the JSON Abstract Syntax Tree (AST) model for a Subjekt model.
 */

import { NodeValue, Shapes } from "../base";

export interface ASTModel {
    metadata?: Record<string, NodeValue>;
    shapes?: Shapes;
}
