var type;

function checkDidot() {
    uncheckHawks();
    uncheckFournier();
    document.getElementById("type-didot").style.borderColor = "#f39c12";
    document.getElementById("type-value-didot").style.color = "#f39c12";
    document.getElementById("type-name-didot").style.color = "#f39c12";
    type="didot";
    focusAfterTypeSwitch();
}

function checkHawks() {
    uncheckDidot();
    uncheckFournier();
    document.getElementById("type-hawks").style.borderColor = "#f39c12";
    document.getElementById("type-value-hawks").style.color = "#f39c12";
    document.getElementById("type-name-hawks").style.color = "#f39c12";
    type="hawks";
    focusAfterTypeSwitch();
}

function checkFournier() {
    uncheckDidot();
    uncheckHawks();
    document.getElementById("type-fournier").style.borderColor = "#f39c12";
    document.getElementById("type-value-fournier").style.color = "#f39c12";
    document.getElementById("type-name-fournier").style.color = "#f39c12";
    type="fournier";
    focusAfterTypeSwitch();
}

function uncheckDidot() {
    document.getElementById("type-didot").style.borderColor = "#bdc3c7";
    document.getElementById("type-value-didot").style.color = "#bdc3c7";
    document.getElementById("type-name-didot").style.color = "#95a5a6";
}

function uncheckHawks() {
    document.getElementById("type-hawks").style.borderColor = "#bdc3c7";
    document.getElementById("type-value-hawks").style.color = "#bdc3c7";
    document.getElementById("type-name-hawks").style.color = "#95a5a6";
}

function uncheckFournier() {
    document.getElementById("type-fournier").style.borderColor = "#bdc3c7";
    document.getElementById("type-value-fournier").style.color = "#bdc3c7";
    document.getElementById("type-name-fournier").style.color = "#95a5a6";
}