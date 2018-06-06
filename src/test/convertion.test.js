import * as c from "./../main/convertion";

describe("getPointValue()", () => {
    test.each`
        type            | result
        ${"didot"}      | ${0.3759}
        ${"hawks"}      | ${0.3514}
        ${"fournier"}   | ${0.364}
        ${"unexpected"} | ${0}
        ${0}            | ${0}
    `("returns $result when type is $type", ({type, result}) => {
        expect(c.getPointValue(type)).toBe(result);
    });
});

describe("convertMmToPoint()", () => {
    test.each`
        value   | type              | result
        ${10}   | ${"didot"}        | ${3.759}
        ${500}  | ${"didot"}        | ${187.95}
        ${0}    | ${"didot"}        | ${0}
        ${100}  | ${"hawks"}        | ${35.14}
        ${-10}  | ${"hawks"}        | ${-3.514}
        ${1000} | ${"fournier"}     | ${364}
        ${1}    | ${"unexpcted"}    | ${0}
    `("returns $result when value is $value and type is $type", ({value, type, result}) => {
        expect(c.convertMmToPoint(value, type)).toBeCloseTo(result);
    });
});

describe("convertPointToMm()", () => {
    test.each`
        value       | type              | result
        ${3759}     | ${"didot"}        | ${10000}
        ${375.9}    | ${"didot"}        | ${1000}
        ${3514}     | ${"hawks"}        | ${10000}
        ${364}      | ${"fournier"}     | ${1000}
        ${0}        | ${"fournier"}     | ${0}
        ${364}      | ${"unexpeceted"}  | ${0}
    `("returns $result when value is $value and type is $type", ({value, type, result}) => {
        expect(c.convertPointToMm(value, type)).toBeCloseTo(result);
    });
});

describe("convertPointToCicero()", () => {
    test.each`
        value   | result
        ${12}   | ${1}
        ${24}   | ${2}
        ${18}   | ${1.5}
        ${6}    | ${0.5}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.convertPointToCicero(value)).toBe(result);
    });
});

describe("convertPointToQuad()", () => {
    test.each`
        value   | result
        ${48}   | ${1}
        ${96}   | ${2}
        ${72}   | ${1.5}
        ${24}   | ${0.5}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.convertPointToQuad(value)).toBe(result);
    });
});

describe("round()", () => {
    test.each`
        value       | precision | result
        ${10.123}   | ${2}      | ${10.12}
        ${10.125}   | ${2}      | ${10.13}
        ${10.999}   | ${1}      | ${11.0}
        ${10.999}   | ${0}      | ${11}
        ${0.5821}   | ${3}      | ${0.582}
    `("returns $result when value is $value and precision is $precision", ({value, precision, result}) => {
        expect(c.round(value, precision)).toBe(result);
    });
});

describe("validateValue()", () => {
    test.each`
        value       | result
        ${10}       | ${true}
        ${12.54}    | ${true}
        ${0}        | ${false}
        ${-67}      | ${false}
        ${-48.32}   | ${false}
        ${"string"} | ${false}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.validateValue(value)).toBe(result);
    });
});

describe("isPositive()", () => {
    test.each`
        value       | result
        ${5}        | ${true}
        ${-5}       | ${false}
        ${0}        | ${false}
        ${"string"} | ${false}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.isPositive(value)).toBe(result);
    });
});

describe("isZero()", () => {
    test.each`
        value       | result
        ${0}        | ${true}
        ${1}        |  ${false}
        ${-1}       | ${false}
        ${"string"} | ${false}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.isZero(value)).toBe(result);
    });
});

describe("isNumber()", () => {
    test.each`
        value       | result
        ${1}        | ${true}
        ${1.1}      | ${true}
        ${"string"} | ${false}
        ${true}     | ${false}
    `("returns $result when value is $value", ({value, result}) => {
        expect(c.isNumber(value)).toBe(result);
    });
});