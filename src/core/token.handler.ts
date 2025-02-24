import { SignJWT, jwtVerify, JWTPayload, decodeJwt } from "jose"

export type TokenType = "ACCESS" | "REFRESH" | "RESET";
export type IssuerAndAudience = {
    issuer: string,
    audience: string
}


export const encodeSecret = (secret: string): Uint8Array =>
    new TextEncoder().encode(secret);

export async function signJWT({ payload, secret, tokenType }: {
    payload: JWTPayload,
    secret: string,
    tokenType: TokenType
})
    : Promise<string> {

    const REFRESH_TOKEN_SPAN = "1 week";
    const ACCESS_TOKEN_SPAN = "5 minutes";
    const RESET_TOKEN_SPAN = "3 minutes"

    let currentSpan: string;

    switch (tokenType) {
        case "REFRESH":
            currentSpan = REFRESH_TOKEN_SPAN;
            break;
        case "ACCESS":
            currentSpan = ACCESS_TOKEN_SPAN;
            break;
        case "RESET":
            currentSpan = REFRESH_TOKEN_SPAN;
            break;
        default:
            throw new Error("Invalid Token Type")
    }

    const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime(currentSpan)
        .sign(encodeSecret(secret))

    return jwt;
}

export async function verifyJWT({ jwt, secret, issuerAndAudience }: {
    jwt: string,
    secret: string,
    issuerAndAudience: IssuerAndAudience,
})
    : Promise<boolean> {
    try {
        const encodedSecret = encodeSecret(secret);
        const { protectedHeader, payload } = await jwtVerify(
            jwt,
            encodedSecret,
            issuerAndAudience
        );
        return true;

    } catch (error) {
        if (error instanceof Error) console.log("error from @common/token handler :\n", error.message);
        throw error
    }

}

export function validateJWT(token: string) {
    throw new Error("Validate token method not implemented!")
}

export function decodeJWT(jwt: string) {
    const decoded = decodeJwt(jwt);

    return decoded;
}