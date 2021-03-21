import { OpenAPIV3 } from "openapi-types";
import { NodeInterface } from "./Node";

export type SchemaNodeConstructor = new (name: string, content: OpenAPIV3.SchemaObject) => SchemaNodeInterface;

export interface SchemaNodeInterface extends NodeInterface {
    content: OpenAPIV3.SchemaObject
}