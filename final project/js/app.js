//first is for all of the cards on the screen, the next are for holding what cards are flipped/how many
const cards = document.querySelectorAll('.card');
let cardsFlipped = [];
let cardNumber = 0;
var cardTotal = 16;

//event listener for cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    colorChange(card);
  });
});

//changes colors of cards cliced, then updates variables for count, checks if player flipped two cards
function colorChange(card) {
  card.style.backgroundColor = card.getAttribute("cardColor");
  cardNumber++;
  cardsFlipped.push(card);
  console.log(cardsFlipped.length);
  if (cardNumber === 2) { 
    const cards1 = cardsFlipped[0];
    const cards2 = cardsFlipped[1];
    
    //checks if the cards match, then will remove them after 1 second if matches
    //the "else" will reset cards also after 1 second
    //then it reloads the page/resets the cards
    if (cards1.getAttribute("cardColor") === cards2.getAttribute("cardColor")) {
        cardTotal = cardTotal - 2;
        cardTotal.log(cardTotal);
      //This will remove the cards after two seconds
      setTimeout(remove, 1000);
      function remove() {
        cards1.style.backgroundColor = "white";
        cards2.style.backgroundColor = "white";
      }
    } else {
      setTimeout(reset, 1000);
      function reset() {
        cards1style.backgroundColor = "black";
        cards2.style.backgroundColor = "black";
      }
    } if (cardTotal == 0){
        location.reload(true)
        console.log("reloaded cards")
    }
    cardsFlipped = [];
    cardNumber = 0;
}
}    