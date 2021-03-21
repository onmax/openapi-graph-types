import { EdgeInterface, RefType } from ".";

export type RefEdgeConstructor = new (absolutePath: string, ref: string) => RefEdgeInterface;

export interface RefEdgeInterface extends EdgeInterface {
    ref: string
    absolutePath: string
    tokenName: string
    type: RefType
    getType(ref: string): RefType | undefined;
    getTokenName(ref: string): string;
    resolveAbsolutePath(absolutePath: string, ref: string): string;
    getFullPath(): string;
}