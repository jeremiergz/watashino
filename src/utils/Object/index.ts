/**
 * Omits given keys from provided object.
 *
 * @param obj the object to clean
 * @param propertiesMapping the should-omit-or-not properties mapping
 */
function omit<T extends {}>(obj: T, propertiesMapping: Record<string, boolean>) {
    const cleanedObj = { ...obj };
    Object.keys(obj).forEach(key => {
        const shouldOmit = propertiesMapping[key];
        if (shouldOmit) delete cleanedObj[key];
    });
    return cleanedObj;
}

export { omit };
