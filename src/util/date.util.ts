import { TExpirationDate } from "@interfaces/utils.interface.js";
import { timeConstants, TimeUnit } from "@constants/_time.constants.js"


export const expirationDate: TExpirationDate = (amount: number, unit: TimeUnit) => {
    return new Date(Date.now() + amount * timeConstants[unit]).toUTCString();
}

export const DateForPath = (): string => {
    const isoDate = new Date().toISOString()

    return isoDate
        .replace(/[-.]/g, "")
        .replace("T", "_")
        .replaceAll(":", "_");
}