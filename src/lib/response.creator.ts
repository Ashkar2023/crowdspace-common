import { IResponseCreator } from "@interfaces/response.interface.js";

export class ResponseCreator implements IResponseCreator{
    private statusCode: number;
    private message?: string | undefined;
    private body?: object | undefined;
    private headers?: object | undefined;

    constructor(){
        this.statusCode = 200;
    }

    setStatusCode(statusCode: number) {
        this.statusCode = statusCode;
        return this;
    }

    setHeaders(headers: object) {
        this.headers = headers;
        return this;
    }

    setMessage(message: string) {
        this.message = message;
        return this;
    }

    setData(body: object) {
        this.body = body;
        return this;
    }

    get(){
        return {
            statusCode: this.statusCode,
            body: this.body,
            headers: this.headers,
            message: this.message,
        }
    }
}