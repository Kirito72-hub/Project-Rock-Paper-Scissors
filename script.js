let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    const words = ["ROCK", "PAPER", "SCISSOR"]; 
    const randomIndex = Math.floor(Math.random() * words.length);
    const chosenWord = words[randomIndex];
    return chosenWord;
}

function getHumanChoice(){
    const humanChoice = prompt("Please choose between (Rock),(Paper),(Scissor) ?").trim().toUpperCase();
    if(humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSOR"){
        console.log("Please enter a defined choice !!!");
        getHumanChoice();
    }

    return humanChoice;
}

function calculateScore(whoesTheWinner){
    if(whoesTheWinner === "Human")
        humanScore++;
    else
        computerScore++;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice)
        console.log("its a Tie !");
    else if((humanChoice === "ROCK" && computerChoice === "SCISSOR") ||
            (humanChoice === "SCISSOR" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "ROCK")) {
                console.log("Human wins this round!");
                calculateScore("Human");
    }
    else {
        console.log("Computer wins this round!");
        calculateScore("Computer");
    }
    console.log("Human Score: ",humanScore + "\nComputer Score: ", computerScore);

}

function playGame(){
    let rounNumber=1;
    while(rounNumber<=5){
        console.log(rounNumber);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        rounNumber++;
    }
}

playGame();
if(humanScore>computerScore)
    console.log("Congratulations you have won !");
else if(humanScore<computerScore)
    console.log("You LOST!");
else
console.log("The game ended with ~Tie!~");
