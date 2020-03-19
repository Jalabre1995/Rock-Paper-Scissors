///Cash the Dom//////
let userScore = 0;
var computerScore = 0;
///These are Dom variables Hml elements that store Dom Elements////
const userScore_span =document.getElementById('user-score');
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

//When you click the button the game function will start///
function main() {
rock_div.addEventListener('click', function(){
    game('r')
});

paper_div.addEventListener('click', function(){
    game('p')
});

scissor_div.addEventListener('click', function(){
    game('s')
});
}

//////Gmae function ////
function getComputerChoice(){
    const choices = ['r','p', 's'];
   const randomNumber = Math.floor(Math.random()*3);
   return choices[randomNumber];
}

////Function to convert the results/////
function convertWords(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub(3);
    const smallCompWord = 'comp'.fontsize(3).sub(3);
 result_p.innerHTML = `${convertWords(userChoice)}${smallUserWord} beats  ${convertWords(computerChoice)}${smallCompWord} . You Win!`;
}
function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub(3);
    const smallCompWord = 'comp'.fontsize(3).sub(3);
 result_p.innerHTML = `${convertWords(userChoice)}${smallUserWord} loses  ${convertWords(computerChoice)}${smallCompWord} . You Lost!`;
    console.log("Lose") 
}
function draw(userChoice,computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub(3);
    const smallCompWord = 'comp'.fontsize(3).sub(3);
 result_p.innerHTML = `${convertWords(userChoice)}${smallUserWord} equals  ${convertWords(computerChoice)}${smallCompWord} . Its a draw`;
    
}


function game(userChoice){
    const computerChoice = getComputerChoice();
////use a switch statement here///////
switch(userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
        win(userChoice + computerChoice);
        break;
    case 'rp':
    case 'ps':
    case 'sr':
        lose(userChoice + computerChoice);
        break;
    case 'rr':
    case 'pp':
     case 'ss':
         draw(); 
        break;
}
}




main();