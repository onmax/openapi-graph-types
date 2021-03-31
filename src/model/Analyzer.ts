import { OpenAPIGraphInterface, OpenAPIGraphsInterface, SchemaNodeInterface } from ".";

export declare type AnalyzerConstructor = new (graphs: OpenAPIGraphsInterface) => AnalyzerInterface;
export interface AnalyzerInterface {
    graphs: { [key: string]: OpenAPIGraphInterface };
    getUnusedSchemas(): { [path: string]: SchemaNodeInterface[] }
    getDeprecatedSchemasBeingUsed(): { [path: string]: SchemaNodeInterface[] }
}