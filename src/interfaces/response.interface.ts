export type IResponse = {
    statusCode: number,
    headers?: Object,
    message?: string,
    body?: Object
}

export interface IResponseCreator {
    setStatusCode: (statusCode: number) => this;
    setHeaders: (headers: object) => this;
    setMessage: (message: string) => this;
    setData: (body: object) => this;
}