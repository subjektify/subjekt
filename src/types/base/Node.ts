export type NodeValue = String
| Number
| Boolean
| NodeObject
| NodeArray;

export interface NodeObject {
    [key: string]: NodeValue;
}

export interface NodeArray extends Array<NodeValue> { }
