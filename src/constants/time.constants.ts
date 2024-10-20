export const timeConstants = {
    second: 1000, // 1 second
    minute: 60 * 1000, // 1 minute
    hour: 60 * 60 * 1000, // 1 hour
    day: 24 * 60 * 60 * 1000, // 1 day
    week: 7 * 24 * 60 * 60 * 1000, // 1 week
    month: 30 * 24 * 60 * 60 * 1000, // 1 month (approx)
    year: 365 * 24 * 60 * 60 * 1000 // 1 year (approx)
};

export type TimeUnit = "second" | "minute" | "hour" | "day" | "week" | "month" | "year";