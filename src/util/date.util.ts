import { TExpirationDate } from "@interfaces/utils.interface.js";
import { timeConstants, TimeUnit } from "../constants/time.constants.js"


export const expirationDate: TExpirationDate = (amount: number, unit: TimeUnit) => {
    return new Date(Date.now() + amount * timeConstants[unit]).toUTCString();
}

