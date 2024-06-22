export class Start {

    constructor() {
        this.menuStart = document.querySelector('.div-start');
        this.startButtonBot = document.querySelector('.button-start--bot');
        this.startButtonPlayer2 = document.querySelector('.button-start--player2');
        this.gameButtons = document.querySelectorAll('.div-buttons .button');
        this.init(); //Se ejecuta automaticamente al inicializar la clase
    }

    init() {
        this.startButtonBot.addEventListener('click', () => {
            this.menuStart.style.display = 'none';
            this.activateGameButtons();
        });
    }

    endGame() {
        this.gameButtons.forEach(button => {
            this.menuStart.style.display = 'grid';
            button.setAttribute('disabled', true);
        });
    }

    activateGameButtons() {
        this.gameButtons.forEach(button => {
            button.removeAttribute('disabled');
        });
    }

    
}

