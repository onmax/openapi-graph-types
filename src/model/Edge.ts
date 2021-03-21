import { NodeInterface } from '.';

export type EdgeConstructor = new () => EdgeInterface;

export interface EdgeInterface {
    parent: NodeInterface | undefined;
    child: NodeInterface | undefined;
}