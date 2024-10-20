import { TGenerateOtp } from "@interfaces/utils.interface.js";
import { randomBytes } from "node:crypto"

/**
 * Generates a 4-digit OTP (One-Time Password) asynchronously.
 *
 * This function uses the `randomBytes` method from the Node.js `crypto` module to generate
 * a 3-byte random value, which is then converted to a hexadecimal string and further processed
 * to create a 4-digit OTP.
 *
 * @returns {Promise<string>} A promise that resolves with the generated 4-digit OTP.
 * @throws {Error} If there is an error during the generation of random bytes.
 *
 * @example
 * generateOTP().then(otp => {
 *   console.log(otp); // Logs the generated OTP
 * }).catch(err => {
 *   console.error(err); // Handle any errors
 * });
 */
export const generateOTP :TGenerateOtp = async () => new Promise((resolve, reject) => {

    randomBytes(3, (err, buffer) => {
        if (err) {
            reject(err);
        } else {
            const otp = parseInt(buffer.toString("hex"), 16)
                .toString().substring(0, 4)

            resolve(otp)
        }
    })
})


