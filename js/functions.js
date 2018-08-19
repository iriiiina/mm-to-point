var mm, pt, convertionType = "mm", isExpanded = true;

var orange = "#F39C12",
    blue = "#3498DB",
    red = "#FF7675",
    gray = "#BDC3C7";

function convert() {
    var mmInput = document.getElementById("mm-value").value;
    var ptInput = document.getElementById("pt-value").value;

    if (validateInput(mmInput, ptInput, convertionType)) {
        setPtAndMm(mmInput, ptInput);
        printResults();
    }
}

function setPtAndMm(mmInput, ptInput) {
    switch (convertionType) {
        case "mm":
            pt = convertMmToPoint(mmInput, standard);
            mm = mmInput;
            break;
        case "pt":
            mm = convertPointToMm(ptInput, standard);
            pt = ptInput;
            break;
        default:
            setError("Something went wrong, please refresh the page");
    }

    return;
}

function highlightConvertionType(elementId) {
    switch (elementId) {
        case "mm-value":
            document.getElementById("mm-value").style.borderColor = orange;
            document.getElementById("pt-value").style.borderColor = blue;
            convertionType = "mm";
            break;
        case "pt-value":
            document.getElementById("pt-value").style.borderColor = orange;
            document.getElementById("mm-value").style.borderColor = blue;
            convertionType = "pt";
            break;
    }
}

function getPointValue(standard) {
    switch (standard) {
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

function convertMmToPoint(mmValue, standard) {
    return mmValue / getPointValue(standard);
}

function convertPointToMm(pointValue, standard) {
    return getPointValue(standard) > 0 ? pointValue * getPointValue(standard) : 0;
}

function convertPointToCicero(value) {
    return value / 12;
}

function convertPointToQuad(value) {
    return value / 48;
}

function round(value, precision) {
    return Number(value).toFixed(precision);
}

function validateInput(mmInput, ptInput, convertionType) {
    if (convertionType === "mm") {
        if (isPositive(mmInput) && isNumber(mmInput)) {
            clearError();
            return true;
        } else {
            setError("Millimeters can be only positive integer or float number");
            return false;
        }
    } else if (convertionType === "pt") {
        if (isPositive(ptInput) && isNumber(ptInput)) {
            clearError();
            return true;
        } else {
            setError("Points can be only positive integer or float number");
            return false;
        }
    } else {
        setError("Something went wrong, please refresh the page");
        return false;
    }
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

function resetFields() {
    clearAllFields();
    clearError();
    checkDidot();
}

function clearFieldOnError() {
    document.getElementById("cicero-value").value = "";
    document.getElementById("quad-value").value = "";

    if (convertionType === "mm") {
        document.getElementById("pt-value").value = "";
    } else if (convertionType === "pt") {
        document.getElementById("mm-value").value = "";
    } else {
        setError("Something went wrong, please refresh the page");
    }
}

function setError(error) {
    clearFieldOnError();
    document.getElementById("error").innerText = error;
    document.getElementById("error").style.display = "block";
    setRedTitle();
}

function setRedTitle() {
    if (convertionType === "mm") {
        document.getElementById("mm-title").style.color = red;
        document.getElementById("pt-title").style.color = blue;
    } else if (convertionType === "pt") {
        document.getElementById("pt-title").style.color = red;
        document.getElementById("mm-title").style.color = blue;
    } else {
        document.getElementById("pt-title").style.color = blue;
        document.getElementById("mm-title").style.color = blue;
    }
}

function clearError() {
    document.getElementById("error").innerText = "";
    document.getElementById("error").style.display = "none";
    document. getElementById("mm-title").style.color = blue;
    document. getElementById("pt-title").style.color = blue;
}

function focusOnMm() {
    document.getElementById("mm-value").focus();
}

function focusOnPt() {
    document.getElementById("pt-value").focus();
}

function focusAfterTypeSwitch() {
    if (convertionType === "mm") {
        focusOnMm();
    } else if (convertionType === "pt") {
        focusOnPt();
    }
}

function printResults() {
    if (mm != "" && mm != null && mm != "0" && pt != "" && pt != null && pt != "0") {
        document.getElementById("mm-value").value = round(mm, 2);
        document.getElementById("pt-value").value = round(pt, 2);
        document.getElementById("cicero-value").value = round(convertPointToCicero(pt), 2);
        document.getElementById("quad-value").value = round(convertPointToQuad(pt), 2);
    }
}

function expandTips() {
    if (isExpanded === true) {
        isExpanded = false;
        document.getElementById("tips-hidden").style.display = "none";
        document.getElementById("tips-close").style.display = "inline";
        document.getElementById("tips-open").style.display = "none";
    } else {
        isExpanded = true;
        document.getElementById("tips-hidden").style.display = "block";
        document.getElementById("tips-close").style.display = "none";
        document.getElementById("tips-open").style.display = "inline";
    }
}

var standard;

function checkDidot() {
    uncheckHawks();
    uncheckFournier();
    document.getElementById("standard-didot").style.borderColor = orange;
    document.getElementById("standard-value-didot").style.color = orange;
    document.getElementById("standard-name-didot").style.color = orange;
    standard="didot";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function checkHawks() {
    uncheckDidot();
    uncheckFournier();
    document.getElementById("standard-hawks").style.borderColor = orange;
    document.getElementById("standard-value-hawks").style.color = orange;
    document.getElementById("standard-name-hawks").style.color = orange;
    standard="hawks";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function checkFournier() {
    uncheckDidot();
    uncheckHawks();
    document.getElementById("standard-fournier").style.borderColor = orange;
    document.getElementById("standard-value-fournier").style.color = orange;
    document.getElementById("standard-name-fournier").style.color = orange;
    standard="fournier";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function uncheckDidot() {
    document.getElementById("standard-didot").style.borderColor = gray;
    document.getElementById("standard-value-didot").style.color = gray;
    document.getElementById("standard-name-didot").style.color = gray;
}

function uncheckHawks() {
    document.getElementById("standard-hawks").style.borderColor = gray;
    document.getElementById("standard-value-hawks").style.color = gray;
    document.getElementById("standard-name-hawks").style.color = gray;
}

function uncheckFournier() {
    document.getElementById("standard-fournier").style.borderColor = gray;
    document.getElementById("standard-value-fournier").style.color = gray;
    document.getElementById("standard-name-fournier").style.color = gray;
}

function emptyFieldsOnSwitch() {
    document.getElementById("cicero-value").value = "";
    document.getElementById("quad-value").value = "";

    if (convertionType === "mm") {
        document.getElementById("pt-value").value = "";
    }

    if (convertionType === "pt") {
        document.getElementById("mm-value").value = "";
    }

}