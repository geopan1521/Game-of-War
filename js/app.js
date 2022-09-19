// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let warDeck2 = []
let warDeck3 = []
let cardToRemove1, cardToRemove4
let card
let checkHandValue
let cardPicked1, cardPicked4


// Cached element references
let deck1El = document.getElementById("deck-1")
let deck2El = document.getElementById("deck-2")
let deck3El = document.getElementById("deck-3")
let deck4El = document.getElementById("deck-4")
let deck2WarEl = document.getElementById("deck-2-war")
let deck3WarEl = document.getElementById("deck-3-war")
const favicon = document.querySelector('#favicon')

const messageEl = document.getElementById("message")
console.log(messageEl)

// const reset = document.getElementById('reset-button')

// Event listeners

document.getElementById("btn").addEventListener("click", handleClick)


// reset.addEventListener("click", shuffleReset)



//functions
init()


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
    ]
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
    ]
    messageEl.textContent = "Game of War"


    document.getElementsByClassName(
    "count-1"
    )[0].innerHTML = `Card count: ${deck1.length}`
    document.getElementsByClassName(
    "count-4"
    )[0].innerHTML = `Card count: ${deck4.length}`
}


function handleClick() {
    if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    cardPicked1 = deck1.splice(randIdx, 1)[0]
    deck2.push(cardPicked1)
    
    }

    if (deck4.length > 0) {
    let randIdx = Math.floor(Math.random() * deck4.length)
    cardPicked4 = deck4.splice(randIdx, 1)[0]
    deck3.push(cardPicked4)
}
    render(cardPicked1, cardPicked4)
    checkCardValue(cardPicked1, cardPicked4)
    favicon()
}

// Function to render deck state
function render(cardPicked1, cardPicked4) {
    if (deck2.length === 1) {
    deck2El.classList.remove("outline")
    }
    if (deck3.length === 1) {
    deck3El.classList.remove("outline")
    }

    if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove1)
    }

    if (deck3.length > 1) {
    deck3El.classList.remove(cardToRemove4)
    }

    cardToRemove1 = cardPicked1
    deck2El.classList.add(cardPicked1)

    if (deck2.length === 26) {
    deck2El.classList.add("shadow")
    deck1El.classList.remove("shadow")
    }

    cardToRemove4 = cardPicked4
    deck3El.classList.add(cardPicked4)

    if (deck3.length === 26) {
    deck3El.classList.add("shadow")
    deck4El.classList.remove("shadow")
}

    if (deck1.length === 0) {
    deck1El.classList.add("outline")
    deck1El.classList.remove("back-blue")
    }
    if (deck4.length === 0) {
    deck4El.classList.add("outline")
    deck4El.classList.remove("back-blue")
    }
}

function checkCardValue(cardPicked1, cardPicked4) {
    let originalFirstCard = cardPicked1
    let originalSecondCard = cardPicked4
    let firstCard = cardPicked1.slice(1)
    let secondCard = cardPicked4.slice(1)
    let firstCardConverted
    let secondCardConverted

    if (firstCard === "A") {
    firstCardConverted = 14
    } else if (firstCard === "K") {
    firstCardConverted = 13
    } else if (firstCard === "Q") {
    firstCardConverted = 12
    } else if (firstCard === "J") {
    firstCardConverted = 11
    } else {
    firstCardConverted = firstCard
    }

    if (secondCard === "A") {
    secondCardConverted = 14
    } else if (secondCard === "K") {
    secondCardConverted = 13
    } else if (secondCard === "Q") {
    secondCardConverted = 12
    } else if (secondCard === "J") {
    secondCardConverted = 11
    } else {
    secondCardConverted = secondCard;
    }

    firstCardConverted = parseInt(firstCardConverted)
    secondCardConverted = parseInt(secondCardConverted)

    let winningCard
    let winningDeck

    if (firstCardConverted === secondCardConverted)
    war(originalFirstCard, originalSecondCard)
    if (firstCardConverted > secondCardConverted) {
    winningCard = firstCard
    winningDeck = deck1
    winningDeck.push(originalFirstCard)
    winningDeck.push(originalSecondCard)
    
    } else if (secondCardConverted > firstCardConverted) {
    winningCard = secondCard
    winningDeck = deck4
    winningDeck.push(originalFirstCard)
    winningDeck.push(originalSecondCard)
    
    }
    document.getElementsByClassName(
    "count-1"
    )[0].innerHTML = `Card count: ${deck1.length}`
    document.getElementsByClassName(
    "count-4"
    )[0].innerHTML = `Card count: ${deck4.length}`

    getWinner()

}

const convertRoyalty = (card) => {
    let selectedCard = card.slice(1)
    let cardConverted

    if (selectedCard === "A") {
    cardConverted = 14
    } else if (selectedCard === "K") {
    cardConverted = 13
    } else if (selectedCard === "Q") {
    cardConverted = 12
    } else if (selectedCard === "J") {
    cardConverted = 11
    } else {
    cardConverted = selectedCard
    }

    return parseInt(cardConverted)
}

function war(originalFirstCard, originalSecondCard) {
    document.getElementById("btn").disabled = true
    alert("WAR!")
    let deckOneWar = deck1.sort(() => 0.5 - Math.random()).splice(0, 4)
    let deckFourWar = deck4.sort(() => 0.5 - Math.random()).splice(0, 4)
    let deckOneLastCard = deckOneWar[deckOneWar.length - 1]
    let deckFourLastCard = deckFourWar[deckFourWar.length - 1]

    deck2WarEl.classList.add(deckOneLastCard)
    deck3WarEl.classList.add(deckFourLastCard)

    const firstCard = convertRoyalty(deckOneLastCard)
    const secondCard = convertRoyalty(deckFourLastCard)
    if (firstCard > secondCard) {
    deckOneWar.forEach((card) => deck1.push(card))
    deckFourWar.forEach((card) => deck1.push(card))
    deck1.push(originalFirstCard)
    deck1.push(originalSecondCard)
    
    } else if (secondCard > firstCard) {
    deckFourWar.forEach((card) => deck4.push(card))
    deckOneWar.forEach((card) => deck4.push(card))
    deck4.push(originalFirstCard)
    deck4.push(originalSecondCard)
    } else {
    alert("You've tied again, you both lose, try again.")
}

    document.getElementsByClassName(
    "count-1"
    )[0].innerHTML = `Card count: ${deck1.length}`
    document.getElementsByClassName(
    "count-4"
    )[0].innerHTML = `Card count: ${deck4.length}`
    document.getElementById("btn").disabled = false
}



function getWinner() {
    if (deck1.length === 0) {
    messageEl.textContent = `Player 2 wins`
    // confetti.start(2000)
    } else if (deck4.length === 0) {
    messageEl.textContent = `Player 1 wins`
    // confetti.start(2000)
    
    }
}


// 1. define the required variables used to track the state of the game
// 2. store cached element references
// 3. upon loading, the game state be initialized and a function should be called to render this game state
// 4. The state of the game should be rendered to the user. write a render function
// 5. defined the required constants. cards should have suit and rank. deck will be collection of cards. shuffle and dealt one at a time
// 6. handle a player clicking a card with a handle click function
// 7. build the "getWinner" function. player runs out of cards
// 8. dealCards function. use push in for loop playerHands
// 9. shuffle deck function.create Reset functionality
// 10. hand will also be collection of cards
// 11. write a If statement for tie then go to war


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
