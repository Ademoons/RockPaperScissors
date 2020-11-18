const keys = document.querySelectorAll('div.keys button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const moves = ["Rock", "Paper", "Scissors"];
const roundEnd = document.querySelector('#roundEnd');
const resetBtn = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;
//let playerSelection;
//const computerSelection;

  function computerPlay() {
    let computerSelection = moves[Math.floor(Math.random() * moves.length)];
    return computerSelection;
  }

  startGame();

  function playRound (playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection === "Scissors") {
            playerPoints.textContent = ++playerScore;
          roundEnd.textContent =  "You win! Rock beats Scissors.";
        } else if(computerSelection === "Paper"){
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "You lose! Paper beats rock.";
        } else {
            playerPoints.textContent = ++playerScore;
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "A tie. Try again.";
        }
    } else if (playerSelection === 'paper') {
      if (computerSelection === "Scissors") {
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "You lose! Scissors beats Paper.";
        } else if (computerSelection === "Rock") {
            playerPoints.textContent = ++playerScore;
            roundEnd.textContent = "You win! Paper beats Rock.";
        } else {
            playerPoints.textContent = ++playerScore;
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "A tie. Try again.";
        }
    } else if(playerSelection === "scissors") {
      if (computerSelection === "Rock") {
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "You lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            playerPoints.textContent = ++playerScore;
            roundEnd.textContent = "You win! Scissors beats Paper.";
        } else {
            playerPoints.textContent = ++playerScore;
            computerPoints.textContent = ++computerScore;
            roundEnd.textContent = "A tie. Try again.";
        }
    }
   checkWinner();
  }
  resetGame();
  
  function startGame() {
    keys.forEach(button => {
      button.addEventListener('click', getPlayerChoice);
    });
  }
  
  function getPlayerChoice(e) {
    let playerSelection = (e.target.id)
    playRound(playerSelection, computerPlay());
  }

function checkWinner() {
  if (computerScore == 5 && playerScore == 5) {
    roundEnd.textContent = "A tie. Try again.";
    roundEnd.style.color ='blue';
     keys.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  } else if (computerScore == 5) {
    roundEnd.textContent = "The machine wins.";
    roundEnd.style.color ='red';
      keys.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  } else if (playerScore == 5) {
    roundEnd.textContent =  "The human wins.";
    roundEnd.style.color ='green';
     keys.forEach(button => {
     button.removeEventListener('click', getPlayerChoice);
   });
  }
}

function resetGame() {
  resetBtn.addEventListener('click',() => 
    location.reload());
}