/**
 * Removes properties with `undefined` values from an object.
 *
 * @param obj - The object to be cleaned.
 * @returns A new object with all properties that have `undefined` values removed.
 */
export const cleanObject = (obj: Record<string, any>) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => v !== undefined || v !== null)
    );
}