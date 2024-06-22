import {Game} from "./javascripts/logicGame.js"

// Selecciona el botón usando su clase
const startButton = document.querySelector('.button--start');
// Corrección: Usa querySelector para seleccionar un solo elemento
const message = document.querySelector('.main--result');
const buttons = document.querySelectorAll('.div-buttons button');
// Considera usar selectores más específicos si estos no son correctos
const header = document.body.firstElementChild;
const footer = document.body.lastElementChild;

// Combina la lógica de ocultar el botón y activar los botones de juego en un solo evento click
startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    activateGameButtons();
});

// Selecciona los botones de juego
const gameButtons = document.querySelectorAll('.div-buttons .button');

// Función para activar los botones
function activateGameButtons() {
    gameButtons.forEach(button => {
        button.removeAttribute('disabled');
    });
}

const game = new Game();

// Asegúrate de que los botones existen antes de asignar eventos onclick

    buttons[0].onclick = function() {
        const gameResult = game.start(0);
        console.log(gameResult);
        header.textContent = "0";
        footer.textContent = game.getBot();
        message.textContent = gameResult;
    }

    buttons[1].onclick = function() {
        const gameResult = game.start(1);
        header.textContent = "1";
        footer.textContent = game.getBot();
        message.textContent = gameResult;
    }

    buttons[2].onclick = function() {
        const gameResult = game.start(2);
        header.textContent = "2";
        footer.textContent = game.getBot();
        message.textContent = gameResult;
    }
