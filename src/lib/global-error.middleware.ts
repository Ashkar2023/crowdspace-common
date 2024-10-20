import { NextFunction, Request, Response } from "express";
import { AppError } from "./error.handler.js";

export function globalErrorHadler(err: AppError, req: Request, res: Response, next: NextFunction) : void {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success:false,
            message:err.message || "Unknown Internal Server Error",
            body: err.body || null,
            error: err.error
        })
    }else{
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}