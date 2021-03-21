import { Edges, EdgesRefDict, Nodes } from ".";

export type OpenAPIGraphConstructor = new (path: string) => OpenAPIGraphInterface;

export interface OpenAPIGraphInterface {
    path: string;
    nodes: Nodes;
    edges: Edges;
    setSchemaNodes(schemaNodes: Nodes['schemas']): void,
    getSchemaNodes(): Nodes['schemas']
    setRefEdges(refEdges: EdgesRefDict): void
    getSchemaRefEdges(): EdgesRefDict['schemaRef']
}
