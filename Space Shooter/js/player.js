import Bullet from "../js/bullet.js";
let player = document.getElementById("img_player");

//MAKE THE PLAYER OF THE GAME
export default class Player {

    constructor (game){

        //sets the player config
        this.game = game;
        this.width = 30;
        this.height = 50;
        this.speedX = 0;
        this.speedY = 0;
        this.position = {
            x: game.width / 2 - this. width /2,
            y: game.height - this.height - 20
        }
        this.shoot = [];
        this.fire = 0;
        this.score = 0;
        this.bullet = 61;
        this.life = 3;
 
        //move the player
        document.addEventListener("keydown", e => {
           //PLAYER SHOOT BULLET
            this.nextFire = this.fire + 300;
                if(e.keyCode  == 32 && this.time   >=  this.nextFire && this.bullet != 0) {
                    this.shoot.push(new Bullet(this));
                    this.fire = this.time ;
                    this.bullet -= 1;
    
                }
                //console.log(e.keyCode);

            switch(e.keyCode){
                case 65 : this.speedX = -2; break;
                case 83 : this.speedY = 2; break;
                case 68 : this.speedX = 2; break;
                case 87 : this.speedY = -2; break;
            } 
               
                
                
        
        });
        document.addEventListener("keyup", e => {
            switch(e.keyCode){
                case 65 : this.speedX = 0; break;
                case 83 : this.speedY = 0; break;
                case 68 : this.speedX = 0; break;
                case 87 : this.speedY = 0; break;
            } 
        });
    }

    //PLAYER COLLISION WITH THE GAME
    worldCollide (){
        if(this.position.x <= 0) {
            this.position.x = 0;
        }else if(this.position.y <= 0) {
            this.position.y = 0;
        }else if(this.position.x + this.width >= this.game.width) {
            this.position.x = this.game.width - this.width;
        }else if(this.position.y + this.height >= this.game.height) {
            this.position.y = this.game.height - this.height;
        }
    }
    //PLAYER DRAW
    draw (ctx){
        ctx.fillStyle = "yellowgreen";
        ctx.font = "23px Arial";
        ctx.fillText("Score : " + this.score, 50, 30);
        ctx.fillText("Bullet : " + this.bullet,55, 60);
        ctx.fillText("Lives : " + this.life,45, 90); 
            
        ctx.drawImage(player,this.position.x, this.position.y, this.width, this.height);

        for(let i = 0; i < this.shoot.length; i++){
            this.shoot[i].draw(ctx);
            
        }
    }
    //PLAYER UPDATE
    update(timeStamp){
        this.time = timeStamp;
        this.position.x += this.speedX;
        this.position.y += this.speedY;
        this.worldCollide();
        for(let i = 0; i < this.shoot.length; i++){
            this.shoot[i].update(timeStamp);
        }

        if(this.life == 0){
            this.game.gameOver = true; 
        }
    }

}