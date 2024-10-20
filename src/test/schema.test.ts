import { ZodType, z, ZodError } from "zod";

console.log("ahbsfahsbfahs")

// Define ValidationError
export class ValidationError extends Error {
    constructor(message: string = "Validation failed") {
        super(message);
        this.name = "ValidationError";
    }
}

// Interface for schema validator
export interface ISchemaValidator {
    validate<T>(input: T, schema: ZodType<T>): boolean | never;
}

// Schema Validator implementation
export class SchemaValidator implements ISchemaValidator {
    validate<T>(input: T, schema: ZodType<T>): boolean | never {
        try {
            schema.parse(input);
            return true; // Success case
        } catch (error) {
            if (error instanceof ZodError) {
                // Use format() method to get structured error messages
                const { _errors: [message] } = error.format();
                console.log("error is ",message); // Output formatted error
            } else {
                console.log('An unknown error occurred during validation');
            }
            throw new ValidationError();
        }
    }

   
}

// Example schemas for username and password
const usernameSchema = z.string()
    .min(2, { message: "Username must be at least 2 characters" })
    .regex(/^(?![.])(?!.*[.]{2})(?!.*[.]$)(?!^[.])[a-z0-9._]*[a-z0-9_]$/, 
        "Username can only contain lowercase letters, numbers, underscores, and dots, and can't start or end with a dot.")
    .max(30, { message: "Username must not exceed 30 characters" })
    .trim();

const passwordSchema = z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, 
        "Password must include A-Z, a-z, 0-9, and special characters")
    .trim();

const validator = new SchemaValidator();

// Testing the validator with an invalid username
try {
    validator.validate("l", usernameSchema); // Invalid username
} catch (error) {
    console.error("Validation failed.", error);
}
