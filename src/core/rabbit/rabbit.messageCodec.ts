import { consumerEvents } from "@constants/consumer.events.js";

export const encodeEventMessage = (eventName: consumerEvents, body: object): Buffer | never => {

    try {

        const message = {
            event: eventName,
            body: body,
        };

        return Buffer.from(JSON.stringify(message))

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }

        throw error
    }
}

export const decodeEventMessage = (content: Buffer): {
    event: consumerEvents,
    body: any
} => {
    return JSON.parse(content.toString());
}