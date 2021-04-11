import { OpenAPIGraphLibConfigInterface, OpenAPIGraphsBuilderInterface } from ".";

export type OpenAPIGraphsConstructor = new (path: string, options: OpenAPIGraphLibConfigInterface) => OpenAPIGraphsInterface;

export interface OpenAPIGraphsInterface {
    builder: OpenAPIGraphsBuilderInterface;
    rootPath: string;
    build(): void,
}
