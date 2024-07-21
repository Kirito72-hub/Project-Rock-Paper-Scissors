// Create three buttons
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Creating Rock button
const btnRock = document.createElement("button");
btnRock.id = "ROCK";
btnRock.textContent = "ROCK";
btnRock.setAttribute("style", "color: red; width: 200px; height: 50px; border: 2px solid black; font-size: 30px;");
container.appendChild(btnRock);

// Creating Paper button
const btnPaper = document.createElement("button");
btnPaper.id = "PAPER"; // Corrected from "PAPEAR" to "PAPER"
btnPaper.textContent = "PAPER";
btnPaper.setAttribute("style", "color: red; width: 200px; height: 50px; border: 2px solid black; font-size: 30px;");
container.appendChild(btnPaper);

// Creating Scissor button
const btnScissor = document.createElement("button");
btnScissor.id = "SCISSOR";
btnScissor.textContent = "SCISSOR";
btnScissor.setAttribute("style", "color: red; width: 200px; height: 50px; border: 2px solid black; font-size: 30px;");
container.appendChild(btnScissor);

// Add event listeners to buttons
btnRock.addEventListener("click", () => playGame("ROCK"));
btnPaper.addEventListener("click", () => playGame("PAPER"));
btnScissor.addEventListener("click", () => playGame("SCISSOR"));

//Add a div for displaying results and change all of your console.logs into DOM methods.
const container1 = document.createElement("div");
container1.classList.add("container");
document.body.appendChild(container1);
const paragraph = document.createElement("p");
paragraph.classList.add("score");
container1.appendChild(paragraph);
paragraph.textContent = "Welcome to the game !";
paragraph.setAttribute("style", "font-size: 30px; ");
//===================================================================JS DOM ENDS HERE========================================================================//
//Global Variables
let humanScore = 0, computerScore = 0;

//We get human choice using DOM event listener
function playGame(humanChoice) {
    const computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);

    // Check for game end conditions
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore)
            paragraph.innerHTML += "<br><br> Congratulations, you have won!";
        else if (humanScore < computerScore)
            paragraph.innerHTML += "<br><br> You LOST!";
        else
            paragraph.innerHTML += "<br><br> The game ended with ~Tie!~";
        // Optionally, reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        paragraph.innerHTML += "<br> it's a Tie !";
    } else if ((humanChoice === "ROCK" && computerChoice === "SCISSOR") ||
               (humanChoice === "SCISSOR" && computerChoice === "PAPER") ||
               (humanChoice === "PAPER" && computerChoice === "ROCK")) {
        calculateScore("Human");
    } else {
        calculateScore("Computer");
    }
}

function getComputerChoice() {
    const words = ["ROCK", "PAPER", "SCISSOR"]; 
    const randomIndex = Math.floor(Math.random() * words.length);
    const chosenWord = words[randomIndex];
    return chosenWord;
}


function calculateScore(whoesTheWinner) {
    if (whoesTheWinner === "Human")
        humanScore++;
    else
        computerScore++;
    paragraph.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
}
