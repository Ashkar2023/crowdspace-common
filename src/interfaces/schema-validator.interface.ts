import { ZodError, ZodSchema } from "zod";

export interface ISchemaValidator {
    validate<T>(input: T, schema: ZodSchema<T>): boolean | ZodError ;
}