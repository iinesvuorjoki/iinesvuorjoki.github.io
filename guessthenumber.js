
function getRandomInteger(min, max) {
    return Math.floor((Math.random() * max) + min);
}

var randomNumber = getRandomInteger(1, 10);

//console.log(randomNumber)


function compareNumbers(first, second) {
    if (first === second) {
        return true;
    } else {
        return false;
    }
}

function guessTheNumber() {
    var number = document.getElementById("number").value;
    if (number >= 1 && number <= 10) {
        compareNumbers(number, randomNumber);
        if (number === randomNumber) {
            window.alert("Correct!");
            randomNumber = getRandomInteger(1, 10);
        } else {
            window.alert("Incorrect!");
        }
    } else {
        window.alert("the guess has to be a number between 1 and 10");
        
    }
}
window.onload = function () {
    
    document.getElementById("button").addEventListener("click", function () {
        guessTheNumber(number);
    }); 
}