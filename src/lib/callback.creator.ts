import { IResponse } from "@interfaces/response.interface.js";
import { NextFunction, Request, RequestHandler, Response } from "express";

export function createCallback(controller: Function) : RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = (await controller(req)) as IResponse;

            res.status(response.statusCode)
                .header(response.headers)
                .json({
                    success: true,
                    body: response.body,
                    message: response.message
                })

        } catch (error) {
            if(process.env.NODE_ENV==="dev"){
                console.log("error from createCallback :", error); 
            }
            
            next(error);
        }
    }
}