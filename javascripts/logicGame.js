class Player {
    constructor(person){
        this.player = {
        name : person,
        choice : {
            rock : 0,
            paper : 1,
            scissors : 2
        }
        }
    }
}

export class Game {
    constructor(){ 
        this.player_1 = new Player("player_1");
        this.player_2 = new Player("player_2");
        this.bot = new Player("bot");
    }

    playerChoise(p1, p2=null){
        if(p2 == null){

        }
    }
    
    getPlayer_1(p){
        return this.player_1.player.choice;
    }
    getPlayer_2(p){
        return this.player_2.player.choice;
    }
    getBot(p){
        return this.bot.player.choice;
    }

    botPlay(){
        this.bot.player.choice = Math.floor(Math.random()*3);
    }

    start(p1, p2=null){
        if(p2 == null){ // Se juega con un bot
            this.botPlay();
            return this.winner(p1, this.bot.player.choice);

        }else{ // Es un juego de dos jugadores
            return this.winner(p1, p2)
        }
    }

    winner(p1, p2){
        if(p1 == p2){
            //DRAW
            return 0;
        }else if(p1 < p2 || p1 == 2 && p2 == 0){
            //WIN
            return 1;
        }else{
            //LOSE
            return -1;
        }
    }

    end_game(n){
        message = {
        '-1' : "LOSE",
        '0' : "DRAW",
        '1' : "WIN"
        }
    }
}
