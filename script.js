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

const playerPlay = () => {
    let choice = prompt("what are you gonna throw? (rock, paper, scissors)").toLowerCase(); 
    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt("Enter a correct choice please (rock, paper, scissors)").toLowerCase();
    }
    return choice;
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
    while(computerScore !== targetScore && playerScore !== targetScore) {
        console.log(`player score: ${playerScore}....Computer score: ${computerScore}`);
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        let score = whoWon(playerChoice, computerChoice);
        if(score === 0) {
            playerScore += 1;
        }
        else if(score === 1) {
            computerScore += 1; 
        }
        else {
            continue;
        }
    }
    console.log(`player score: ${playerScore}....Computer score: ${computerScore}`);
    (playerScore > computerScore) ? console.log("Congratulations! You Won!") : console.log("Unlucky.. You Lost!")
    (
        
    )
 
}
game(5);
