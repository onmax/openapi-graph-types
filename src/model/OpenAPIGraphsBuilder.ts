import { Edges, EdgesRefDict, Nodes, OpenAPIContent, OpenAPIGraphInterface } from ".";

export type OpenAPIGraphsBuilderConstructor = new (apis: OpenAPIContent[]) => OpenAPIGraphsBuilderInterface;

export interface OpenAPIGraphsBuilderInterface {
    graphs: { [key: string]: OpenAPIGraphInterface };
}
