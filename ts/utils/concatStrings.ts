export const concatStrings = (errors: string | string[]): string => {
    if (Array.isArray(errors)) {
        return errors.join(", ");
    }
    return errors;
};
