import { TimeUnit } from "@constants/_time.constants.js";

export type TGenerateOtp = () => Promise<string>;
export type TExpirationDate = (amount: number, unit: TimeUnit) => string;
