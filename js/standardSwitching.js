var standard;

function checkDidot() {
    uncheckHawks();
    uncheckFournier();
    document.getElementById("standard-didot").style.borderColor = "#f39c12";
    document.getElementById("standard-value-didot").style.color = "#f39c12";
    document.getElementById("standard-name-didot").style.color = "#f39c12";
    standard="didot";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function checkHawks() {
    uncheckDidot();
    uncheckFournier();
    document.getElementById("standard-hawks").style.borderColor = "#f39c12";
    document.getElementById("standard-value-hawks").style.color = "#f39c12";
    document.getElementById("standard-name-hawks").style.color = "#f39c12";
    standard="hawks";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function checkFournier() {
    uncheckDidot();
    uncheckHawks();
    document.getElementById("standard-fournier").style.borderColor = "#f39c12";
    document.getElementById("standard-value-fournier").style.color = "#f39c12";
    document.getElementById("standard-name-fournier").style.color = "#f39c12";
    standard="fournier";
    emptyFieldsOnSwitch();
    focusAfterTypeSwitch();
}

function uncheckDidot() {
    document.getElementById("standard-didot").style.borderColor = "#bdc3c7";
    document.getElementById("standard-value-didot").style.color = "#bdc3c7";
    document.getElementById("standard-name-didot").style.color = "#95a5a6";
}

function uncheckHawks() {
    document.getElementById("standard-hawks").style.borderColor = "#bdc3c7";
    document.getElementById("standard-value-hawks").style.color = "#bdc3c7";
    document.getElementById("standard-name-hawks").style.color = "#95a5a6";
}

function uncheckFournier() {
    document.getElementById("standard-fournier").style.borderColor = "#bdc3c7";
    document.getElementById("standard-value-fournier").style.color = "#bdc3c7";
    document.getElementById("standard-name-fournier").style.color = "#95a5a6";
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