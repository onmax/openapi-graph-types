import { OpenAPIGraphsBuilderInterface } from ".";

export type OpenAPIGraphsConstructor = new (path: string) => OpenAPIGraphsInterface;

export interface OpenAPIGraphsInterface {
    builder: OpenAPIGraphsBuilderInterface;
    rootPath: string;
    build(): void,
}
