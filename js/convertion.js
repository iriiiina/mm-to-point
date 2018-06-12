var mm, pt, convertionType;

function convert() {
    // TODO try to convert into Number
    var mmInput = Number(document.getElementById("mm-value").value);
    var ptInput = Number(document.getElementById("pt-value").value);

    setConvertionType(mmInput, ptInput);

    validateInput(mmInput, ptInput);
    setPtAndMm(mmInput, ptInput);

    printResults();
}

function setConvertionType(mmValue, ptValue) {
    if (mmValue != "" && document.getElementById("mm-value").style.borderColor === "#f39c12") {
        convertionType = "mm";
        return;
    }
    
    if (ptValue != "" && document.getElementById("pt-value").style.borderColor === "#f39c12") {
        convertionType = "pt";
        return;
    }
}

function validateInput(mmInput, ptInput) {
    if (mmInput != "" && !validateValue(mmInput)) {
        console.log("mmInput error");
    }
    
    if (ptInput != "" && !validateValue(ptInput)) {
        console.log("ptInput error");
    }
}

function setPtAndMm(mmInput, ptInput) {
    switch (convertionType) {
        case "mm":
            pt = convertMmToPoint(mmInput, type);
            mm = mmInput;
            break;
        case "pt":
            mm = convertPointToMm(ptInput, type);
            pt = ptInput;
            break;
        default:
            console.log("error");
    }
}

function highlightConvertionType(elementId) {
    switch (elementId) {
        case "mm-value":
            document.getElementById("mm-value").style.borderColor = "#f39c12";
            document.getElementById("pt-value").style.borderColor = "#3498db";
            break;
        case "pt-value":
            document.getElementById("pt-value").style.borderColor = "#f39c12";
            document.getElementById("mm-value").style.borderColor = "#3498db";
            break;
    }
}

function printResults() {
    document.getElementById("mm-value").value = round(mm, 2);
    document.getElementById("pt-value").value = round(pt, 2);
    document.getElementById("cicero-value").value = round(convertPointToCicero(pt), 2);
    document.getElementById("quad-value").value = round(convertPointToQuad(pt), 2);
}