//first is for all of the cards on the screen, the next are for holding what cards are flipped/how many
const cards = document.querySelectorAll('.card');
let cardsFlipped = [];
let cardNumber = 0;
var cardTotal = 16;

//event listener for cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    changeColor(card);
  });
});

//changes colors of cards cliced, then updates variables for count, checks if player flipped two cards
function changeColor(card) {
  card.style.backgroundColor = card.getAttribute("data-color");
  cardNumber++;
  cardsFlipped.push(card);
  console.log(cardsFlipped.length);
  if (cardNumber === 2) { 
    const card1 = cardsFlipped[0];
    const card2 = cardsFlipped[1];
    
    //checks if the cards match, then will remove them after 1 second if matches
    //the "else" will reset cards also after 1 second
    //then it reloads the page/resets the cards
    if (card1.getAttribute("data-color") === card2.getAttribute("data-color")) {
      cardTotal = cardTotal - 2;
      console.log(cardTotal);
      setTimeout(remove, 1000);
      function remove() {
        card1.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
      }
    } else {
      setTimeout(reset, 1000);
      function reset() {
        card1.style.backgroundColor = "black";
        card2.style.backgroundColor = "black";
      }
    } if (cardTotal == 0){
        location.reload(true)
        console.log("it worked")
    }
    cardsFlipped= [];
    cardNumber = 0;
}
}    