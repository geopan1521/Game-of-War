// Declare deck variables
let deck1 = [];
let deck2 = [];
let deck3 = [];
let deck4 = [];
let warDeck2 = [];
let warDeck3 = [];
let cardToRemove1, cardToRemove4;
let card;
let checkHandValue;
let cardPicked1, cardPicked4;
// let Player1, Player2

// Cached element references
let deck1El = document.getElementById("deck-1");
let deck2El = document.getElementById("deck-2");
let deck3El = document.getElementById("deck-3");
let deck4El = document.getElementById("deck-4");
let deck2WarEl = document.getElementById("deck-2-war");
let deck3WarEl = document.getElementById("deck-3-war");

const messageEl = document.getElementById("message");
console.log(messageEl);

// const reset = document.getElementById('reset-button')

// Event listeners

document.getElementById("btn").addEventListener("click", handleClick);
// document.getElementById('deal').addEventListener('click', handleClick)

// reset.addEventListener("click", shuffleReset)
// deal.addEventListener("click", dealCards)

// Functions

init();

// Initialize deck 1 with array of 52 cards
function init() {
  deck1 = [
    // "dA",
    // "dQ",
    // "dK",
    // "dJ",
    // "d10",
    // "d09",
    // "d08",
    // "d07",
    // "d06",
    // "d05",
    // "d04",
    // "d03",
    // "d02",
    // "hA",
    // "hQ",
    // "hK",
    // "hJ",
    // "h10",
    // "h09",
    // "h08",
    // "h07",
    // "h06",
    // "h05",
    // "h04",
    // "h03",
    // "h02",
    "cA",
    "cQ",
    "cK",
    "cJ",
    "c10",
    "c09",
    "c08",
    "c07",
    "c06",
    "c05",
    "c04",
    "c03",
    "c02",
    "sA",
    "sQ",
    "sK",
    "sJ",
    "s10",
    "s09",
    "s08",
    "s07",
    "s06",
    "s05",
    "s04",
    "s03",
    "s02",
  ];
  deck4 = [
    "dA",
    "dQ",
    "dK",
    "dJ",
    "d10",
    "d09",
    "d08",
    "d07",
    "d06",
    "d05",
    "d04",
    "d03",
    "d02",
    "hA",
    "hQ",
    "hK",
    "hJ",
    "h10",
    "h09",
    "h08",
    "h07",
    "h06",
    "h05",
    "h04",
    "h03",
    "h02",
    // "cA",
    // "cQ",
    // "cK",
    // "cJ",
    // "c10",
    // "c09",
    // "c08",
    // "c07",
    // "c06",
    // "c05",
    // "c04",
    // "c03",
    // "c02",
    // "sA",
    // "sQ",
    // "sK",
    // "sJ",
    // "s10",
    // "s09",
    // "s08",
    // "s07",
    // "s06",
    // "s05",
    // "s04",
    // "s03",
    // "s02",
  ];
  messageEl.textContent = "Game of War";

  document.getElementsByClassName(
    "count-1"
  )[0].innerHTML = `Card count: ${deck1.length}`;
  document.getElementsByClassName(
    "count-4"
  )[0].innerHTML = `Card count: ${deck4.length}`;
}

// Function to handle a button click:
function handleClick() {
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length);
    cardPicked1 = deck1.splice(randIdx, 1)[0];
    deck2.push(cardPicked1);
    // deck1.splice(randIdx, 1)
  }

  if (deck4.length > 0) {
    let randIdx = Math.floor(Math.random() * deck4.length);
    cardPicked4 = deck4.splice(randIdx, 1)[0];
    deck3.push(cardPicked4);
  }
  render(cardPicked1, cardPicked4);
  checkCardValue(cardPicked1, cardPicked4);
}

// Function to render deck state
function render(cardPicked1, cardPicked4) {
  if (deck2.length === 1) {
    deck2El.classList.remove("outline");
  }
  if (deck3.length === 1) {
    deck3El.classList.remove("outline");
  }

  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove1);
  }

  if (deck3.length > 1) {
    deck3El.classList.remove(cardToRemove4);
  }

  cardToRemove1 = cardPicked1;
  deck2El.classList.add(cardPicked1);

  if (deck2.length === 26) {
    deck2El.classList.add("shadow");
    deck1El.classList.remove("shadow");
  }

  cardToRemove4 = cardPicked4;
  deck3El.classList.add(cardPicked4);

  if (deck3.length === 26) {
    deck3El.classList.add("shadow");
    deck4El.classList.remove("shadow");
  }

  if (deck1.length === 0) {
    deck1El.classList.add("outline");
    deck1El.classList.remove("back-blue");
  }
  if (deck4.length === 0) {
    deck4El.classList.add("outline");
    deck4El.classList.remove("back-blue");
  }
}

function checkCardValue(cardPicked1, cardPicked4) {
  let originalFirstCard = cardPicked1;
  let originalSecondCard = cardPicked4;
  let firstCard = cardPicked1.slice(1);
  let secondCard = cardPicked4.slice(1);
  let firstCardConverted;
  let secondCardConverted;

  console.log("CARD VALUE 1", cardPicked1, firstCard);
  console.log("CARD VALUE 2", cardPicked4, secondCard);

  if (firstCard === "A") {
    firstCardConverted = 14;
  } else if (firstCard === "K") {
    firstCardConverted = 13;
  } else if (firstCard === "Q") {
    firstCardConverted = 12;
  } else if (firstCard === "J") {
    firstCardConverted = 11;
  } else {
    firstCardConverted = firstCard;
  }

  if (secondCard === "A") {
    secondCardConverted = 14;
  } else if (secondCard === "K") {
    secondCardConverted = 13;
  } else if (secondCard === "Q") {
    secondCardConverted = 12;
  } else if (secondCard === "J") {
    secondCardConverted = 11;
  } else {
    secondCardConverted = secondCard;
  }

  firstCardConverted = parseInt(firstCardConverted);
  secondCardConverted = parseInt(secondCardConverted);

  // console.log(firstCard)
  // console.log(secondCard)
  //            DO NOT TOUCH ABOVE CODE!!!!!!!!!!!!!!!!!!!!!!!!
  //*************************************************************************************** */
  // deck1 && deck4 forEach comparision? then pop winning cards into winning deck
  let winningCard;
  let winningDeck;

  // let warCards = []
  // forEach  first card and second card
  console.log("CONVERTED VALUES", firstCardConverted, secondCardConverted);
  console.log("NON-CONVERTED VALUES", firstCard, secondCard);
  if (firstCardConverted === secondCardConverted)
    war(originalFirstCard, originalSecondCard);
  if (firstCardConverted > secondCardConverted) {
    winningCard = firstCard;
    winningDeck = deck1;
    winningDeck.push(originalFirstCard);
    winningDeck.push(originalSecondCard);
    console.log("winningDeck", winningDeck);
  } else if (secondCardConverted > firstCardConverted) {
    winningCard = secondCard;
    winningDeck = deck4;
    winningDeck.push(originalFirstCard);
    winningDeck.push(originalSecondCard);
    console.log("winningDeck", winningDeck);
  }
  document.getElementsByClassName(
    "count-1"
  )[0].innerHTML = `Card count: ${deck1.length}`;
  document.getElementsByClassName(
    "count-4"
  )[0].innerHTML = `Card count: ${deck4.length}`;

  getWinner();
  //   if (cardPicked1 === winningCard) {
  //     deck1.splice(1, 0, cardPicked1, cardPicked4);
  //     //everytime first card wins put first card and second card in deck1
  //     console.log(deck1.length);
  //   } else if (cardPicked4 === winningCard) {
  //     deck4.splice(1, 0, cardPicked1, cardPicked4);
  //     console.log(deck4.length);
  //   }
}

const convertRoyalty = (card) => {
  let selectedCard = card.slice(1);
  let cardConverted;

  if (selectedCard === "A") {
    cardConverted = 14;
  } else if (selectedCard === "K") {
    cardConverted = 13;
  } else if (selectedCard === "Q") {
    cardConverted = 12;
  } else if (selectedCard === "J") {
    cardConverted = 11;
  } else {
    cardConverted = selectedCard;
  }

  return parseInt(cardConverted);
};

function war(originalFirstCard, originalSecondCard) {
  // deck1.push(originalFirstCard)
  // deck1.push(originalSecondCard)
  document.getElementById("btn").disabled = true;
  alert("WAR!");
  // shuffle decks and remove 4 cards from each
  let deckOneWar = deck1.sort(() => 0.5 - Math.random()).splice(0, 4);
  let deckFourWar = deck4.sort(() => 0.5 - Math.random()).splice(0, 4);
  console.log("deck1 WAR", deckOneWar);
  console.log("deck4 WAR", deckFourWar);
  let deckOneLastCard = deckOneWar[deckOneWar.length - 1];
  let deckFourLastCard = deckFourWar[deckFourWar.length - 1];
  // if (deckOneLastCard === deckFourLastCard) alert("You've tied again, you both lose, try again.")

  deck2WarEl.classList.add(deckOneLastCard);
  deck3WarEl.classList.add(deckFourLastCard);

  const firstCard = convertRoyalty(deckOneLastCard);
  const secondCard = convertRoyalty(deckFourLastCard);
  console.log("WAR RESULTS", firstCard, secondCard);
  if (firstCard > secondCard) {
    console.log("LEFT WINS");
    deckOneWar.forEach((card) => deck1.push(card));
    console.log("CONCAT", deck1);
    deckFourWar.forEach((card) => deck1.push(card));
    console.log("CONCAT", deck1);
    deck1.push(originalFirstCard);
    deck1.push(originalSecondCard);
    console.log("deck1 AFTER WAR", deck1);
  } else if (secondCard > firstCard) {
    console.log("RIGHT WINS");
    deckFourWar.forEach((card) => deck4.push(card));
    console.log("CONCAT", deck4);
    deckOneWar.forEach((card) => deck4.push(card));
    console.log("CONCAT", deck4);
    deck4.push(originalFirstCard);
    deck4.push(originalSecondCard);
    console.log("deck4 AFTER WAR", deck4);
  } else {
    alert("You've tied again, you both lose, try again.");
  }

  document.getElementsByClassName(
    "count-1"
  )[0].innerHTML = `Card count: ${deck1.length}`;
  document.getElementsByClassName(
    "count-4"
  )[0].innerHTML = `Card count: ${deck4.length}`;
  document.getElementById("btn").disabled = false;
}

//for each winning card i want to push 2 cards into the deck in which the winning card came from

// for (let i = 0; i < 8; i++) {
// let warCards = deck1.pop()
// }
// }

// let warCards = deck1
// if (firstCard === winningCard){
//     deck1.push(firstCard, secondCard)

// } else {
//     (secondCard === winningCard)
//     deck4.push(firstCard, secondCard)

// }

function getWinner() {
  if (deck1.length === 0) {
    messageEl.textContent = `Player 2 wins`;
    // confetti.start(2000);
  } else if (deck4.length === 0) {
    messageEl.textContent = `Player 1 wins`;
    // confetti.start(2000);
    // getWinner();
    // render();
  }
}
//find a way to output the count of each players deck
//add a message to say what player won the hand
//a message for when somebody gets to zero cards

// console.log(deck4)
// console.log('deck1', deck1.length, 'deck2', deck4.length)

// for (let i = 1; i <= 8; i++) {

// }

//if firstcard is winner push all warcards to deck1

// deck1.splice(0, 3)
// deck4.splice(0, 3)
// warCards.classList.add('back')

// console.log(warCards)

//grab 4 cards from each players deck
//grab one card and compare the two
//the winner will have the ten cards put in their deck

//each player need to push 3 cards then last one is displayed
// the card that is displayed is compared and tells who won
//say who won

// if (firstCard > secondCard) {
//     deck1.push(cardPicked1, cardPicked4)
// } else if(secondCard > firstCard){
//     deck4.push(cardPicked1, cardPicked4)
// } else {
//     //give the player who won war the 10 cards they played added to their deck
// }

// console.log(cardPicked1)
// console.log(cardPicked4)

// // cards.forEach(card =>{
// // let cardString = card.slice(1, 3)
// // })

// //if statement that declares if deck3El is greater than deck4El then move to winners hand

// let handTotal = 0

// if it is NOT, it must be a number, so parseInt
// add whatever value is determined to the total
// if(cardString === "A") {
//     handTotal += 11
// } else if (cardString === "K" || cardString === "J" ||cardString === "Q") {
//     handTotal += 10
// } else {
//     handTotal += parseInt(cardString)
// }
// })

// return the total value of the hand
//     return handTotal
//   }
// } if else {

// } if

// // function shuffleReset(){
// //     deck1.sort((a, b)=>{
// //             if (Math.random()> 0.5){
// //                 return -1
// //             } else {
// //                 return 1
// //             }
// //         })
// //         console.log(deck1)

// }

// function dealCards() {
//     array.forEach(deck1, deck2 => {

//     });

// }

// function renderWin(div) {
//     messageEl.className = 'winner'
//     div.className = 'winner'
//     deck1El.appendChild(div)

//     if (deck1.length === 1){
//         messageEl.textContent =
//     }

// }

// take cards and shuffle them
// return shuffle cards 26 each for both players

// }

// 1. define the required variables used to track the state of the game
// 2. store cached element references
// 3. upon loading, the game state be initialized and a function should be called to render this game state
// 4. The state of the game should be rendered to the user. write a render function
// 5. defined the required constants. cards should have suit and rank. deck will be collection of cards. shuffle and dealt one at a time
// 6. handle a player clicking a card with a handle click function
// 7. build the "getWinner" function. player runs out of cards
// 8. dealCards function. use push in for loop playerHands
// 9. shuffle deck function.create Reset functionality
// 10. eight is the highest number mode
// 11. alternative keyboard function
// 12. hand will also be collection of cards
// 13. write a If statement for tie then go to war
// 14. create computer opponent

// original cards
// deck1 = [
//     "dA",
//     "dQ",
//     "dK",
//     "dJ",
//     "d10",
//     "d09",
//     "d08",
//     "d07",
//     "d06",
//     "d05",
//     "d04",
//     "d03",
//     "d02",
//     "hA",
//     "hQ",
//     "hK",
//     "hJ",
//     "h10",
//     "h09",
//     "h08",
//     "h07",
//     "h06",
//     "h05",
//     "h04",
//     "h03",
//     "h02",
//     "cA",
//     "cQ",
//     "cK",
//     "cJ",
//     "c10",
//     "c09",
//     "c08",
//     "c07",
//     "c06",
//     "c05",
//     "c04",
//     "c03",
//     "c02",
//     "sA",
//     "sQ",
//     "sK",
//     "sJ",
//     "s10",
//     "s09",
//     "s08",
//     "s07",
//     "s06",
//     "s05",
//     "s04",
//     "s03",
//     "s02",
//   ];
//   deck4 = [
//     "dA",
//     "dQ",
//     "dK",
//     "dJ",
//     "d10",
//     "d09",
//     "d08",
//     "d07",
//     "d06",
//     "d05",
//     "d04",
//     "d03",
//     "d02",
//     "hA",
//     "hQ",
//     "hK",
//     "hJ",
//     "h10",
//     "h09",
//     "h08",
//     "h07",
//     "h06",
//     "h05",
//     "h04",
//     "h03",
//     "h02",
//     "cA",
//     "cQ",
//     "cK",
//     "cJ",
//     "c10",
//     "c09",
//     "c08",
//     "c07",
//     "c06",
//     "c05",
//     "c04",
//     "c03",
//     "c02",
//     "sA",
//     "sQ",
//     "sK",
//     "sJ",
//     "s10",
//     "s09",
//     "s08",
//     "s07",
//     "s06",
//     "s05",
//     "s04",
//     "s03",
//     "s02",
//   ];
