import { describe, test, expect } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
    test("returns the word itself with one word", () => {
        expect(arrayToFrench(["soleil"])).toBe("soleil");
    });

    test("joins two words with et", () => {
        expect(arrayToFrench(["noir", "blanc"])).toBe("noir et blanc");
    });

    test("joins multiple words with commas and et at the end", () => {
        expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe("un, deux, trois et soleil");
    });

    test("returns empty string for empty array", () => {
        expect(arrayToFrench([])).toBe("");
    });
});