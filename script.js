const header = document.body.firstElementChild;

const buttons = document.getElementsByClassName("button")

//La seleccion del jugador
var player = -1;
var bot = -1;



buttons[0].onclick = function() {
    player = 0;
    header.textContent = player;
}

buttons[1].onclick = function() {
    player = 1;
    header.textContent = player;
}

buttons[2].onclick = function() {
    player = 2;
    header.textContent = player;
}

