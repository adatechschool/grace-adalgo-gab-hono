export const arrayToFrench = (array) => {
    if (array.length === 0) return "";
    if (array.length === 1) return array[0];

    const last = array[array.length - 1];
    const rest = array.slice(0, -1);

    return rest.join(", ") + " et " + last;
};