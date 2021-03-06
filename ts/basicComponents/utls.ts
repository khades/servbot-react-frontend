
export const generateErrors = (errors: string | string[]): string => {
    if (Array.isArray(errors)) {
        return errors.join(", ");
    }
    return errors;
};
