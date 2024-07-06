export class ShapeTypeUtil {
  static isShapeType(type: string): boolean {
    return (
      this.isSimpleShapeType(type) ||
      this.isAggregateShapeType(type) ||
      this.isSubjectShapeType(type)
    );
  }

  static isSimpleShapeType(type: string): boolean {
    return [
      "address",
      "blob",
      "boolean",
      "byte",
      "bytes",
      "document",
      "double",
      "float",
      "int",
      "int8",
      "int16",
      "int32",
      "int64",
      "int128",
      "int256",
      "none",
      "string",
      "timestamp",
      "uint",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "uint128",
      "uint256",
    ].includes(type);
  }

  static isAggregateShapeType(type: string): boolean {
    return ["enum", "list", "map", "structure"].includes(type);
  }

  static isSubjectShapeType(type: string): boolean {
    return ["subject", "behavior", "event", "error"].includes(type);
  }
}
