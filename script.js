import {Game} from "./javascripts/logicGame.js"
import {Start} from "./javascripts/start.js"


const pointsDisplay = document.getElementById('points');


const gameStart = new Start();
const game = new Game();



const header = document.body.firstElementChild;
const footer = document.body.lastElementChild;

const message = document.querySelector('.main--result');
const buttons = document.querySelectorAll('.div-buttons button');

const limitRounds = parseInt(document.getElementsByName('rounds')[0].value);
console.log(limitRounds);

let numberGames=0;

for(let i = 0; i < 3; i++){
    buttons[i].onclick = () => {
        if (numberGames < limitRounds-1) {
            const gameResult = game.start(i);
            header.textContent = game.getPlayer_1();
            footer.textContent = game.getBot();
            message.textContent = gameResult;
            numberGames++;
            console.log(numberGames + " - " + game.pointsPlayer_1() + " - " + game.pointsBot() + " - " + game.pointsPlayer_2());
            pointsDisplay.textContent = game.pointsPlayer_1();

        } else {
            gameStart.endGame();
            numberGames = 0;
        }
    };
}



