class Player {
    constructor(person){
        this.points = 0;
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

    setPlayer_1(p){
        return this.player_1.player.choice = p;
    }
    setPlayer_2(p){
        return this.player_2.player.choice = p;
    }
    setBot(){
        this.bot.player.choice = Math.floor(Math.random()*3);
    }

    pointsPlayer_1(){
        return this.player_1.points;
    }
    pointsPlayer_2(){
        return this.player_2.points;
    }
    pointsBot(){
        return this.bot.points;
    }

    start(p1, p2=null){
        if(p2 == null){ // Se juega con un bot
            this.setPlayer_1(p1);
            this.setBot();
            return this.winner(p1, null, this.bot.player.choice);

        }else{ // Es un juego de dos jugadores
            this.setPlayer_1(p1);
            this.setPlayer_2(p2);
            return this.winner(p1, p2, null)
        }
    }

    winner(p1, p2, bot){
        if(bot == null){
            if(p1 == p2){
                //DRAW
                return 0;
            }else if((p1 < p2) || (p1 == 2 && p2 == 0)){
                //WIN
                this.player_1.points++;
                this.player_2.points++;                
                return 1;
            }else{
                //LOSE
                this.player_1.points--;
                this.player_2.points++;
                return -1;
            }

        }else{
            if(p1 == bot){
                //DRAW
                return 0;
            }else if((p1 < bot) || (p1 == 2 && bot == 0)){
                //WIN
                this.player_1.points++;
                this.bot.player.points--;
                return 1;
            }else{
                //LOSE
                this.player_1.points--;
                this.bot.player.points++;
                return -1;
            }
        }
        
    }

    end_game(n){
        this.player_1.points = 0;
        this.player_2.points = 0;
        this.bot.points = 0;
    }

    points(){

    }
}
