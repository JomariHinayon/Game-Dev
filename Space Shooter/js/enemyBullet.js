

//CREATE THE ENEMY BULLET
export default class EnemyBullet {
    
    constructor (enemy){
        this.enemy = enemy;
        this.x = enemy.position.x + this.enemy.width / 2;
        this.y = enemy.position.y + this.enemy.height;
        this.width = 5;
        this.height = 30;
        this.speed = 3;
    }
//DRAW ENEMY BULLET
    draw(ctx) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
//UPDATE ENEMY BULLET
    update(){
        this.y += this.speed;
    }
}