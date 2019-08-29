
let playerBullet = document.getElementById("img_playerBullet");

//the BULLET of the PLAYER
export default class Bullet {
    constructor (player){
        this.position = {
            x : player.position.x + 10,
            y : player.position.y - 10
        }
        this.size = 10;
        this.player = player;
        this.canFire = true;
    }
    //DRAW the BULLET of the PLAYER
    draw(ctx) {
        ctx.drawImage(playerBullet, this.position.x, this.position.y, this.size, this.size);
    }    
    //if the PLAYER BULLET is OUT OF THE GAME RETURN IT
    worldCollide (){
        if(this.position.y <= -300){
            for(let i= 0; i < this.player.shoot.length; i++){
                this.player.shoot.shift(i);
            }
        }
    }

    update (timeStamp){
        this.worldCollide();
        this.position.y -= 3 ;
    }
}