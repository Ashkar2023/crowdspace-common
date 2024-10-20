import { z } from "zod";

export const linkSchema = z.string().url({
    message: "Invalid URL"
})

export const emailSchema = z.string()
    .toLowerCase()
    .email("Invalid email format")
    .max(253, "Email length shouldn't exceed 253 characters")
    .trim();

export const displaynameSchema = z.string()
    .min(3, "Display name must be at least 3 characters")
    .max(50, "Display name can't be longer than 50 characters")
    .trim();

export const usernameSchema = z.string()
    .toLowerCase()
    .min(2, "Username must be at least 2 characters")
    .regex(/^(?![.])(?!.*[.]{2})(?!.*[.]$)(?!^[.])[a-z0-9._]*[a-z0-9_]$/,
        "can contain [a-z, _, .dot] and shouldn't end/start with .dot"
    )
    .trim();

export const passwordSchema = z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/,
        "must include A-Z, a-z, 0-9 and !@#$%^&*"
    )
    .trim();

export const credentialTypeSchema = z.enum(["username", "email"]);