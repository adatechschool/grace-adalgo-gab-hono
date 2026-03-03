export const calculator = (x, y, operator) => {
    // 1. Validar los números primero
    if (typeof x !== "number" || isNaN(x)) return "is empty";
    if (typeof y !== "number" || isNaN(y)) return "is empty";

    // 2. Operar según el operador
    if (operator === "+") return x + y;
    if (operator === "-") return x - y;
    if (operator === "*") return x * y;
    if (operator === "/") return x / y;

    // 3. Si llegó hasta aquí, el operador no es válido
    return "no operators";
};