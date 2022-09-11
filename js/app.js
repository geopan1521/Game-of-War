// Declare deck variables
let deck1 = []
let deck2 = []
let cardToRemove

// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')

const messageEl = document.getElementById('message')
console.log(messageEl)

const reset = document.getElementById('reset-button')

// Event listeners
document.getElementById('btn').addEventListener('click', handleClick)

reset.addEventListener("click", shuffleReset)

// Functions

init()


// Initialize deck 1 with array of 52 cards 
function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    messageEl.textContent = 'Game of War'
    
}

// Function to handle a button click:
function handleClick() {
  if (deck1.length > 0) {
    // Randomly select number from total cards remaining
    let randIdx = Math.floor(Math.random() * deck1.length)
    // Assign card with the random index to a variable
    let cardPicked = deck1.splice(randIdx, 1)[0]
    // Add card picked to deck 2
    deck2.push(cardPicked)
    // Pass card picked to render function to display
    render(cardPicked)
  }
}


// Function to render deck state
function render(cardPicked) {
  console.log(cardPicked)
  // Remove outline class when first card is picked
  if (deck2.length === 1) {
    deck2El.classList.remove('outline')
  }
  // Removes previous picked card from deck 2 class list
  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove)
  }

  cardToRemove = cardPicked
  // Add current card picked to deck 2 element
  deck2El.classList.add(cardPicked)
  // Adjust shadow when deck gets above/below halfway full
  if (deck2.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.remove('shadow')
  }
  // Remove card back color and add outline when last card is picked
  if (deck1.length === 0) {
    deck1El.classList.add('outline')
    deck1El.classList.remove('back-blue')
  }
  
}
	
    function shuffleReset(){
        deck1.sort((a, b)=>{
                if (Math.random()> 0.5){    
                    return -1 
                } else {
                    return 1   
                }
            })
            console.log(deck1)
                
            
    }
        
//     for (let i = 0; i < 52; i++) {
//         let tempCard = deck1[i];
//         let randomIndex = Math.floor(Math.random() * 52);
//         deck1[i] = deck1[randomIndex];
//         deck1[randomIndex] = tempCard;
//     }
// }
//     let testDeck = createDeck();
//     shuffleDeck(testDeck);
//     console.log(testDeck);
    
    
    
    
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
// 8. dealCards function
// 9. shuffle deck function.create Reset functionality
// 10. eight is the highest number mode
// 11. alternative keyboard function
// 12. hand will also be collection of cards 
// 13. write a If statement for tie then go to war
// 14. create computer opponent