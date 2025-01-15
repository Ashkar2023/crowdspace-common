import { Request } from "express";

export function getLoggedInUserId(req: Request){
    return req.headers["x-logged-in-user"] as string;
}
