export class Start {

    constructor() {
        this.menuStart = document.querySelector('.div-start');
        this.startButton = document.querySelector('.button--start');
        this.gameButtons = document.querySelectorAll('.div-buttons .button');
        this.init(); //Se ejecuta automaticamente al inicializar la clase
    }

    init() {
        this.startButton.addEventListener('click', () => {
            this.startButton.style.display = 'none';
            this.activateGameButtons();
        });
    }

    endGame() {
        this.gameButtons.forEach(button => {
            this.startButton.style.display = 'block';
            button.setAttribute('disabled', true);
        });
    }

    activateGameButtons() {
        this.gameButtons.forEach(button => {
            button.removeAttribute('disabled');
        });
    }

    
}

