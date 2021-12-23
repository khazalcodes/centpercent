const outOfRangeError = "Values MUST only be between 0-100 inclusively";
const notAnIntegerError = "Values MUST integers (whole numbers)";
const invalidStartError = "The start value MUST be at least 1 LESS than the stop value in order to centify.";

const centifyButton = document.getElementById("centify-btn");
const startValueInput = document.getElementById("start-value-input");
const stopValueinput = document.getElementById("stop-value-input");

centifyButton.addEventListener("click", e => {
    let start = Number(startValueInput.value);
    let stop = Number(stopValueinput.value);

    if (inputsAreValid(start, stop)) {
        centify(start, stop);
    }    
});

function centify(start, stop) {
    for(let i = start; i <= stop; i++) {
        console.log(i);
    }
}

function inputsAreValid(start, stop) {
    var inputsAreValid = false;

    if (!valuesInRange(start, stop)) {
        alert(outOfRangeError);
    } else if (!valuesAreIntegers(start, stop)) {
        alert(notAnIntegerError)
    } else if (!startIsLessThanStop(start, stop)) {
        alert(invalidStartError)
    } else {
        inputsAreValid = true;
    }
    
    return inputsAreValid;
}

function valuesInRange(start, stop) {
    return isInRange(start) && isInRange(stop);
}

function isInRange(value) {
    return value >= 0 && value <= 100;
}

function valuesAreIntegers(start, stop) {
    return Number.isInteger(start) && Number.isInteger(stop)
}


function startIsLessThanStop(start, stop) {
    return start < stop;
}