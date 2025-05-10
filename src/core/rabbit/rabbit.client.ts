import { Channel, ChannelModel, connect, Connection } from "amqplib";

export class RabbitMQ {
    static #instance: RabbitMQ | null = null;

    #connection: ChannelModel | null = null;
    #ChannelMap = new Map<string, Channel>();

    private constructor() { }

    /* Initialize RabbitMQ connection */
    async init(url: string) {
        this.#connection = await connect(url);
        if (this.#connection.connection) {
            console.log("rabbitmq cluster info: ", this.#connection.connection.serverProperties)
        }
    }

    /* Return singleton instance of RabbitMQ */
    static getInstance() {
        if (RabbitMQ.#instance === null) {
            RabbitMQ.#instance = new RabbitMQ();
        }
        return RabbitMQ.#instance;
    }

    /* Close function for RabbitMQ */
    async closeAll(): Promise<void> {
        if (this.#connection === null) {
            throw new Error("RabbitMQ connection not initialized!")
        }

        this.#ChannelMap.forEach(async (value, key, map) => {
            await value.close();
        })

        this.#connection.close();
    }

    /* Create Publisher/Consumer channels at once */
    async makeChannel(channelName: string): Promise<Channel> {
        if (this.#connection === null) {
            throw new Error("RabbitMQ connection not initialized!")
        }

        if (this.#ChannelMap.has(channelName)) {
            throw new Error("RabbitMQ : Channel with key already exists")
        }

        try {
            const channel = await this.#connection.createChannel();
            this.#ChannelMap.set(channelName, channel);

            return channel;
            
        } catch (error) {
            throw error;
        }

    }

    // async assertExchange(queue: string, routingKey: string, options: Options.AssertQueue) {
    //     if(!this.publisherChannel){
    //         this.makeChannels();
    //     }

    //     publisher

    // }

    // async publishToQueue(exchange:string){

    // }

    // async consumeQueue(queue: string, onMessage: (...args: any[]) => void) {

    // }
}
