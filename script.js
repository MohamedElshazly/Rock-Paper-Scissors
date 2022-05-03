//Add event listenr on buttons
const buttons = document.querySelector('.choices');

const computerPlay = () => {
    //function that has computer logic
    const choices = {
        0: 'rock',
        1: 'paper',
        2: 'scissors'
    }; 
    const randomChoice = Math.floor(Math.random()* 3);
    return choices[randomChoice]; 
}


const whoWon = (playerChoice, computerChoice) => {
    //determines what beats what
    if(playerChoice === 'rock'){
        switch(computerChoice) {            
            case 'paper':
                console.log("You Lost, Paper beats Rock!");
                return 1; 
            case 'scissors':
                console.log("You won! Rock smashes Scissors!");
                return 0;
            default:
                console.log("it's a tie!");
                return 2;
        }
    }

    else if(playerChoice === 'paper'){
        switch(computerChoice) {            
            case 'scissors':
                console.log("You Lost, Scissors shreads Paper!");
                return 1;
            case 'rock':
                console.log("You won! Paper consumes Rock!");
                return 0;
            default:
                console.log("it's a tie!");
                return 2;
        }
    }

    else {
        switch(computerChoice) {            
            case 'rock':
                console.log("You Lost, Rock smashes Scissors!");
                return 1;
            case 'paper':
                console.log("You won! Scissors shreads Paper!");
                return 0;
            default:
                console.log("it's a tie!");
                return 2;
        }
    }
    
}

const game = (targetScore) => {
    let computerScore = 0; 
    let playerScore = 0;
    let score = 0;
    
    //listen for player clicks and compare it to pc
    buttons.addEventListener('click', (e) => {
        //check if the element clicked is a button, 
        //check its class and set its value to playerChoice variable. 
        if (e.target.nodeName === 'BUTTON') {
            let playerChoice = e.target.className;
            //get round score 
            score = whoWon(playerChoice, computerPlay());
            if (computerScore === targetScore || playerScore === targetScore) {
                (playerScore > computerScore) ? console.log("Congratulations! You Won!") 
                : console.log("Unlucky.. You Lost!")  
            }
            else {
                if(score === 0) {
                    playerScore += 1;
                    console.log(`player score: ${playerScore}....Computer score: ${computerScore}`);
                }
                else if(score === 1) {
                    computerScore += 1;
                    console.log(`player score: ${playerScore}....Computer score: ${computerScore}`); 
                }
                else {
                    console.log('here')
                }
            } 
            
            // playedFlag = 1;     
        }
    })
    // check who won and update vairables
        
    }
   
       
game(5);
