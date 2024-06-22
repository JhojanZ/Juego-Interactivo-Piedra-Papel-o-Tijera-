import {Game} from "./javascripts/logicGame.js"
import {Start} from "./javascripts/start.js"


const pointsDisplay = document.getElementById('points');


const gameStart = new Start();
const game = new Game();

const retry = document.querySelector('.retry');


const header = document.body.firstElementChild;
const footer = document.body.lastElementChild;

const message = document.querySelector('.main--result');
const buttons = document.querySelectorAll('.div-buttons button');
let imgBot = document.querySelector('.button-start--bot');

let limitRounds = parseInt(document.getElementsByName('rounds')[0].value);
console.log(limitRounds);

const winPlayer = document.querySelector('.win-player');
const winBot = document.querySelector('.win-bot');

const img={
    0: "./Img/mano.png",
    1: "./Img/papel-de-mano.png",
    2: "./Img/tijeras.png"
}

const choice = {
    0 : "rock",
    1 : "paper",
    2 : "scissors"
    }

const win = {
    '-1' : "Yoy win",
    0 : "Tie",
    1 : "You lose"
}

let numberGames=0;

for(let i = 0; i < 3; i++){
    buttons[i].onclick = () => {
        if (numberGames < limitRounds-1) {
            limitRounds = parseInt(document.getElementsByName('rounds')[0].value);
            const gameResult = game.start(i);
            header.textContent = choice[game.getBot()];
            footer.textContent = choice[game.getPlayer_1()];
            imgBot.src = img[choice[game.getBot()]];
            message.textContent = win[gameResult];
            if(gameResult == 1){
                winPlayer.style.display = 'inline-block';
                winBot.style.display = 'none'
            }else if(gameResult == -1){
                winBot.style.display = 'inline-block';
                winPlayer.style.display = 'none'
            }
            numberGames++;
            console.log(gameResult);
            pointsDisplay.textContent = game.pointsPlayer_1();

        } else {
            gameStart.endGame();
            numberGames = 0;
        }
    };
}
