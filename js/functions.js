function getPointValue(pointType) {
    switch (pointType) {
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

function convertMmToPoint(mmValue, pointType) {
    return mmValue * getPointValue(pointType);
}

function convertPointToMm(pointValue, pointType) {
    return getPointValue(pointType) > 0 ? pointValue / getPointValue(pointType) : 0;
}

function convertPointToCicero(value) {
    return value / 12;
}

function convertPointToQuad(value) {
    return value / 48;
}

function round(value, precision) {
    return Number(value.toFixed(precision));
}

function validateValue(value) {
    return isPositive(value) &&
        isNumber(value);
}

function isPositive(value) {
    return value > 0;
}

function isNumber(value) {
    return typeof value === "number";
}

function clearAllFields() {
    document.getElementById("mm-value").value = "";
    document.getElementById("pt-value").value = "";
    document.getElementById("cicero-value").value = "";
    document.getElementById("quad-value").value = "";
}