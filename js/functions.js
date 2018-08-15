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

function validateInput(mmInput, ptInput, convertionType) {
    if (convertionType === "mm") {
        if (mmInput === "" || mmInput === null) {
            setError("Please fill millimeters value or move focus to points field");
        } else if (isPositive(mmInput) && isNumber(mmInput)) {
            clearError();
        } else {
            setError("Millimeters can be only positive integer or float number");
        }
    } else if (convertionType === "pt") {
        if (ptInput === "" || ptInput === null) {
            setError("Please fill points value or move focus to millimeters field");
        } else if (isPositive(ptInput) && isNumber(ptInput)) {
            clearError();
        } else {
            setError("Points can be only positive integer or float number");
        }
    } else {
        setError("Something went wrong, please refresh the page");
    }

    return;
}

function isPositive(value) {
    return value > 0;
}

function isNumber(value) {
    return typeof Number(value) === "number";
}

function clearAllFields() {
    document.getElementById("mm-value").value = "";
    document.getElementById("pt-value").value = "";
    document.getElementById("cicero-value").value = "";
    document.getElementById("quad-value").value = "";
}

function setError(error) {
    document.getElementById("error").innerText = error;
    document.getElementById("error").style.display = "block";
}

function clearError() {
    document.getElementById("error").innerText = "";
    document.getElementById("error").style.display = "none";
}

function focusOnMm() {
    document.getElementById("mm-value").focus();
}