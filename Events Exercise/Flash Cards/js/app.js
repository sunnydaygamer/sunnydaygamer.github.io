//Need three buttons and an event handler that changes the inner html, only need the document id and the other half of the event thing here
let cardsDiv = document.getElementById("cards");

function Cards(event) {
    cardsDiv.innerHTML = event.target.dataset.answer;
    }