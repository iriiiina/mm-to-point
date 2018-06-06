var mm, pt;

function convert() {
    var mmInput = Number(document.getElementById("mm-value").value);
    var ptInput = Number(document.getElementById("pt-value").value);
    var convertionType = getConvertionType(mmInput, ptInput);

    setPtAndMm(convertionType, mmInput, ptInput);

    printResults();
}

function setPtAndMm(convertionType, mmInput, ptInput) {
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

function printResults() {
    document.getElementById("mm-value").value = round(mm, 2);
    document.getElementById("pt-value").value = round(pt, 2);
    document.getElementById("cicero-value").value = round(convertPointToCicero(pt), 2);
    document.getElementById("quad-value").value = round(convertPointToQuad(pt), 2);
}