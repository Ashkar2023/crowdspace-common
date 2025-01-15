export const rabbitmqConfig = {
    queues: {
        chat: "chat-queue",
        user: "user-queue",
        content: "content-queue",
        media: "media-queue",
    },
    exchanges: {
        contentDirect: {
            name: "content-exchange",
            type: "direct",
        },
        notificationFanout: {
            name: "notification-exchange",
            type: "fanout",
        },
    },
    routingKeys: {
        chat: {
            notificationFanout: "",
            contentDirect: "content.chat",
        },
        user: {
            notificationFanout: "",
            contentDirect: "content.user",
        },
        content: {
            notificationFanout: "",
            contentDirect: "content.content",
        },
        media: {
            notificationFanout: "",
            contentDirect: "content.media",
        },
    },
} as const;
