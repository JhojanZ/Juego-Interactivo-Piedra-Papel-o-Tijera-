const header = document.body.firstElementChild;
const footer = document.body.lastElementChild;
const result = document.getElementsByClassName("main--result")[0]

const buttons = document.getElementsByClassName("button")

//La seleccion del jugador
var player = -1;
var bot = -1;

var objects = {
    rock : 0,
    paper : 1,
    scissors : 2
}


buttons[0].onclick = function() {
    start();
    player = objects.rock;
    header.textContent = player;
    footer.textContent = bot;
    winner();
}

buttons[1].onclick = function() {
    start();
    player = objects.paper;
    header.textContent = player;
    footer.textContent = bot;
    winner();
}

buttons[2].onclick = function() {
    start();
    player = objects.scissors;
    header.textContent = player;
    footer.textContent = bot;
    winner();
}


function start(){
    bot = Math.floor(Math.random()*3);
}

function winner(){
    if(player == bot){
        result.textContent = "Draw";
    }else if(bot < player || player == objects.rock && bot == objects.scissors){
        result.textContent = "Win";
    }else{
        result.textContent = "Lose"
    }
}