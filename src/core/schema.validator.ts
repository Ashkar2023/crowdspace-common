import { ISchemaValidator } from "@interfaces/schema-validator.interface.js";
import { ZodType, ZodError } from "zod";
import { ValidationError } from "./extended.errors.js";

export class SchemaValidator implements ISchemaValidator {
    validate<T>(input: T, schema: ZodType<T>): boolean | never {
        try {
            const result = schema.parse(input);
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const { _errors: [message] } = error.format();
                throw new ValidationError(message);
            } else {
                throw new ValidationError('An unknown error occurred at common/validation');
            }
        }
    }
    
    coerceAndValidate<I,T>(input:I, schema: ZodType<T>): boolean | never {
        try {
            const result = schema.parse(input);
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const { _errors: [message] } = error.format();
                throw new ValidationError(message);
            } else {
                throw new ValidationError('An unknown error occurred at common/validation');
            }
        }
    }
}