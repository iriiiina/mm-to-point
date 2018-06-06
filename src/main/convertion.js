export function getPointValue(pointType) {
    switch(pointType) {
        case "didot":
            return 0.3759;
            break;
        case "hawks":
            return 0.3514;
            break;
        case "fournier":
            return 0.364;
            break;
        default:
            return 0;
            break;
    }
}

export function convertMmToPoint(mmValue, pointType) {
    return mmValue * getPointValue(pointType);
}

export function convertPointToMm(pointValue, pointType) {
    return getPointValue(pointType) > 0 ? pointValue / getPointValue(pointType) : 0;
}

export function convertPointToCicero(value) {
    return value / 12;
}

export function convertPointToQuad(value) {
    return value / 48;
}

export function round(value, precision) {
    return Number(value.toFixed(precision));
}

export function validateValue(value) {
    return  isPositive(value) &&
            isNumber(value);
}

export function isPositive(value) {
    return value > 0;
}

export function isNumber(value) {
    return typeof value === "number";
}