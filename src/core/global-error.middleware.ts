import { NextFunction, Request, Response } from "express";
import { AppError, EnvNotFoundError } from "./extended.errors.js";


export function globalErrorHadler(err: Error, req: Request, res: Response, next: NextFunction): void {

    console.log("err.message: ",err.message,"-------------------");
    console.log("err.name: ",err.name,"-------------------");
    
    if (err instanceof AppError) {
        console.log("err.name: ", err.error, "-------------------");
        res.status(err.statusCode).json({
            success: false,
            message: err.message || "Unknown Internal Server Error",
            body: err.body || null,
            error: err.error
        })
    } else if(err instanceof EnvNotFoundError){
        console.log("application gonna crash due to invalid Env's")
        throw err
    } else {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export type TGlobalErrorHandler = typeof globalErrorHadler;