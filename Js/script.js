const disabledButtons = document.querySelectorAll("#btn");
const startButton = docuemnt.querySelector("#startButton");
const button =document.querySelector("#btn");
const init = document.querySelectorAll("#btn");
const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";
let score;
let playerPoints = 0;
let computerPoints = 0;
let playerMovesCounter = 0;

$(document).ready(function(){
    $('#startButton').on('click', function(){
        function styleStartButton() {
            this.classList.add('startClick');
            disabledButtons.forEach(e => e.removeAttribute('disabled')); 
            
        }
        startButton.addEventListener('click', styleStartButton);
        startButton.addEventListener('transitioned', removeStartClickClass);

        function removeStartClickClass(e) {
            if(e.propertyName !=='transform') return;
            this.classList.remove('startClick');
        }
        ////Controls/////
        function controls() {
            this.classList.add('click');
            playerMovesCounter++;
        }

        button.forEach(e => e. addEventListener('click', controls));
        
        ///Remove the controls/////
        function removeControls(e) {
            if(e.propertyName !== 'transform') return;
            this.classList.remove('startClick');
        }
        button.forEach(e => e.addEventListener('transitioned', removeControls));
        
        ////Getting the score////
        function getScore() {
            disabledButtons.forEach(e => e.setAttribute('disabled', true));
            if(playerPoints > computerPoints) {
                score = "Player won";
            } else if (playerPoints<computerPoints) {
                score = "Computer won";
            }else if (playerPoints === computerPoints) {
                score = "Tie!"
            }
            h1. textContent = score;
            divStartButton.setAttribute('style', 'display: block;');
             return score;
        }
        ////Computer's Decisions when Playing//////
        function computerDescions() {
            let pick = Math.floor(math.random() *3);
            switch(pick) {
                case 0:
                    return Rock;
                case 1:
                    return Paper;
                case 2:
                    return Scissors;
            }
        }
        

    })
})