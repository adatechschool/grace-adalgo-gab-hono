/**
 * Takes a input name formatted in snakecase 
 * and return the same name in camelcase.
 */

export const toCamelCase = (str) => {
    const words = str.toLowerCase().split("_");

    const first = words.shift(); // first word stays the same
    let result = first;

    for (const word of words) {
        const capitalized = word[0].toUpperCase() + word.slice(1);
        result += capitalized;
    }

    return result;
};

/**
 * Takes a input name formatted in camelcase
 * and return the same name in snakecase.
 */
export const toSnakeCase = (str) => {
    let result = "";

    for (const char of str) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += "_" + char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
};