import { OpenAPIV3 } from "openapi-types";
import { RefEdgeInterface } from ".";

export interface Nodes {
    schemas: { [key: string]: SchemaNodeInterface }
}

export type NodeConstructor = new (name: string) => NodeInterface;
export interface NodeInterface {
    name: string
}

export declare type SchemaNodeConstructor = new (name: string, content: OpenAPIV3.SchemaObject, isInline: boolean) => SchemaNodeInterface;
export interface SchemaNodeInterface extends NodeInterface {
    content: NonArraySchemaNodeContent | ArraySchemaNodeContent;
    referencedBy: { [key: string]: RefEdgeInterface };
    isInline: boolean;
}

export interface NonArraySchemaNodeContent {
    type?: 'boolean' | 'object' | 'number' | 'string' | 'integer';
    title?: string;
    description?: string;
    format?: string;
    default?: any;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    additionalProperties?: boolean | RefEdgeInterface;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: any[];
    nullable?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    example?: any;
    deprecated?: boolean;
    properties?: {
        [name: string]: RefEdgeInterface;
    };
    // NOT IMPLEMENTED YET
    // allOf?: (ReferenceObject | SchemaObject)[];
    // oneOf?: (ReferenceObject | SchemaObject)[];
    // anyOf?: (ReferenceObject | SchemaObject)[];
    // not?: ReferenceObject | SchemaObject;
    // discriminator?: DiscriminatorObject;
    // xml?: XMLObject;
    // externalDocs?: ExternalDocumentationObject;
}
export interface ArraySchemaNodeContent {
    type: 'array';
    items: RefEdgeInterface
}


