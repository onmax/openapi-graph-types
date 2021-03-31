import { NodeInterface, SchemaNodeInterface } from '.';

export type EdgeConstructor = new (filePath: string, specificationPath: string) => EdgeInterface;

export interface EdgeInterface {
    parent: NodeInterface | undefined;
    child: NodeInterface | undefined;

    // The reference string used
    rawPath: string;

    // The token name which the reference is being made. For example, User if the reference is #/components/schema/User
    tokenName: string;

    // The path inside the yaml file. For example, #/components/schema/User
    specificationPath: string;

    // The file path where the reference was estasblished
    filePath: string;

    // The file path where the reference was estasblished
    refToFilePath: string;

    // The full path of the reference. Basically is the result of concatenating filePath with the spcificationPath
    path: string;

    // Type of reference
    type: RefType | undefined;
}

export interface Edges {
    ref: EdgesRefDict
}

export interface EdgesRefDict {
    schemaRef: { [key: string]: RefEdgeInterface }
}

export type RefEdgeConstructor = new (filePath: string, ref: string) => RefEdgeInterface;

export interface RefEdgeInterface extends EdgeInterface {
}

// Type of a reference: https://swagger.io/docs/specification/using-ref/
export enum RefType {
    Local = 'local',
    Remote = 'remote',
    URL = 'url'
}
export type RefTo = 'schema'