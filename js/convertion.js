var mm, pt, convertionType;

function convert() {
    // TODO try to convert into Number
    var mmInput = document.getElementById("mm-value").value;
    var ptInput = document.getElementById("pt-value").value;

    validateInput(mmInput, ptInput, convertionType);

    //setPtAndMm(mmInput, ptInput);

    //printResults();
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
            convertionType = "mm";
            break;
        case "pt-value":
            document.getElementById("pt-value").style.borderColor = "#f39c12";
            document.getElementById("mm-value").style.borderColor = "#3498db";
            convertionType = "pt";
            break;
    }
}

function printResults() {
    document.getElementById("mm-value").value = round(mm, 2);
    document.getElementById("pt-value").value = round(pt, 2);
    document.getElementById("cicero-value").value = round(convertPointToCicero(pt), 2);
    document.getElementById("quad-value").value = round(convertPointToQuad(pt), 2);
}