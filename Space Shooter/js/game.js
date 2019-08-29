import Player from "../js/player.js";
import {createLevel, level1, level2, level3} from "../js/levels.js";



export default class Game {
    constructor (gameWidth,gameHeight){
        this.width= gameWidth;
        this.height = gameHeight;
        this.enemy = [];
        this.menu = true;
        this.gameOver = false;
        this.levels = [level1, level2, level3];
        this.currentLevel = 0;
        this.gamePlay = false;
        document.addEventListener("keydown", e => {
            if(e.keyCode == 32){
                this.menu = false;
                this.gamePlay = true;
            }
        });
    }
    //Start the GAME
    start(){
        this.player = new Player(this);
        this.enemy = createLevel(this, this.levels[this.currentLevel]);
        this.gameObject = [this.player];
    }
    //Update the GAME
    update(timeStamp){
        if(this.enemy.length === 0){
            this.currentLevel ++;
            this.start();
        }

        this.enemy = this.enemy.filter(object =>  !object.hitBullet);
        [...this.enemy, ...this.gameObject].forEach(object => object.update(timeStamp));
    }
    //Draw the GAME
    draw(ctx){ 
       
        [...this.enemy, ...this.gameObject].forEach(object => object.draw(ctx));
//MAIN MENU OF THE GAME
        if(this.menu == true) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.fill();
            
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACE to START", this.width / 2,this.height /2);

        }
//GAME OVER OF THE GAME
        if(this.gameOver == true) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.fill();
            
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.width / 2,this.height /2);

        }
    }

}