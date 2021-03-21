export type NodeConstructor = new (name: string) => NodeInterface;

export interface NodeInterface {
    name: string
}