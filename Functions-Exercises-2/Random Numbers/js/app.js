// Needs a button on the html page, then get the div element
let randomDiv = document.getElementById("randomDiv");

//function here
function startRandomizing() {
    let randomNumber = randomGenerator();
    randomDiv.innerHTML = randomNumber;
}

//multiply 1 * 10, like in class
function randomGenerator() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}
