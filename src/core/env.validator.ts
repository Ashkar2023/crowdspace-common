import { EnvNotFoundError } from "./extended.errors.js";

export const validateEnv = (envObj: { [key: string]: string }, serviceName:string) => {
    for (let key in envObj) {
        if (envObj[key] === undefined) {
            throw new EnvNotFoundError(key, serviceName);
        }
    }

    console.log("ENV's set correctly");
}