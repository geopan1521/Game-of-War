// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let cardToRemove1, cardToRemove4
let card
let checkHandValue
let cardPicked1, cardPicked4







// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')

const messageEl = document.getElementById('message')
console.log(messageEl)

// const reset = document.getElementById('reset-button')

// Event listeners

document.getElementById('btn').addEventListener('click', handleClick)
// document.getElementById('deal').addEventListener('click', handleClick)

// reset.addEventListener("click", shuffleReset)
// deal.addEventListener("click", dealCards)

// Functions

init()


// Initialize deck 1 with array of 52 cards 
function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    deck4 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    messageEl.textContent = 'Game of War'
    
}


// Function to handle a button click:
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
    render(cardPicked1, cardPicked4)
    }
    checkCardValue()
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
        deck2El.classList.add("shadow");
        deck1El.classList.remove("shadow");
    }
    
    cardToRemove4 = cardPicked4   
    deck3El.classList.add(cardPicked4)

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

// dealerSum = checkHandValue(dealerCards)

function checkCardValue(cards) {
    // let firstCard = deck3El.classList[2]
    let secondCard = cardPicked4.slice(1)
    let firstCard = cardPicked1.slice(1)
    
    if (firstCard === 'A'){
        firstCard = 14
    }
    if (firstCard === 'K'){
        firstCard = 13
    }
    if (firstCard === 'Q'){
        firstCard = 12
    }
    if (firstCard === 'J'){
        firstCard = 11
    }
 
    if (secondCard === 'A'){
        secondCard = 14
    }

    if (secondCard === 'K'){
        secondCard = 13
    }
    if (secondCard === 'Q'){
        secondCard = 12
    }
    if (secondCard === 'J'){
        secondCard = 11
    }
    
    firstCard = parseInt(firstCard)
    secondCard = parseInt(secondCard)
    // console.log(firstCard)
    // console.log(secondCard)
    //            DO NOT TOUCH ABOVE CODE!!!!!!!!!!!!!!!!!!!!!!!!
    //*************************************************************************************** */
    
    let winningCard
    if (firstCard > secondCard) {
        winningCard = firstCard
    } else if(secondCard > firstCard) {
        winningCard = secondCard
    } else {(firstCard === secondCard) 
        
        //each player need to push 3 cards then last one is displayed
        // the card that is displayed is compared and tells who won
        //say who won 
        
    } 
    

    if (firstCard > secondCard) {
        deck1.push(cardPicked1, cardPicked4)
    } else if(secondCard > firstCard){ 
        deck4.push(cardPicked1, cardPicked4) 
    } else { 
        //give the player who won war the 10 cards they played added to their deck
    } 
    
    console.log(cardPicked1)
    console.log(cardPicked4)
    
    // cards.forEach(card =>{
    // let cardString = card.slice(1, 3)
    // })
    
    //if statement that declares if deck3El is greater than deck4El then move to winners hand
    

    let handTotal = 0

    


    
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
    return handTotal
  }
    // } if else {

    // } if
    
    
    
    
//     // this is where you'd need to
//       // remove the beginning character of the string (the letter denoting which suit the card is)
//       // Use the remaining value of the card (A, K, 8, etc...) to return a value
// })
// }



	
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