let enemy = document.getElementById("img_enemy");
let enemyExplode = document.getElementById("img_enemyExplode");


import EnemyBullet from "../js/enemyBullet.js";
//MAKE THE ENEMY
export default class Enemy {

	constructor (game, position) {
		this.width = 50;
		this.height = 30;
		this.speed = 2;
		this.position = position;
		this.speed = 2;
		this.game = game;
		this.hitBullet = false;
		this.hitPlayer = false;
		this.shoot = [];
		
	}
//DRAW THE ENEMY
	draw (ctx){
		ctx.drawImage(enemy,this.position.x, this.position.y, this.width, this.height);
		this.bulletCollision(ctx);
		if(this.game.gamePlay == true){
			for(var i = 0; i < this.shoot.length; i++){
				this.shoot[i].draw(ctx);
			}
			this.shootBullet();
		}
	}
//ENEMY SHOOT BULLETS
	shootBullet(){
		
		this.enemyBullet = new EnemyBullet(this);
		//console.log(this.game.player.position.x+" == " + this.position.x);
		if(this.game.player.position.x== this.position.x){
		this.shoot.push(this.enemyBullet);
		}
	}
//BOUNCE THE ENEMY IF OUT OF THE GAME
	worldCollision(){
		if(this.position.x + this.width >= this.game.width){
			this.speed = -this.speed;
		}else if(this.position.x <= 0){
			this.speed = 2;
		}
    }

    bulletCollision (ctx){
		//REMOVE THE ENEMY IF HIT BY THE PLAYER BULLET
        for (let i = 0; i < this.game.player.shoot.length ; i++){
			
			this.bulletLeft = this.game.player.shoot[i].position.x ;
			this.bulletRight = this.game.player.shoot[i].position.x + this.game.player.shoot[i].size;
			this.bulletTop = this.game.player.shoot[i].position.y;
			this.bulletBottom = this.game.player.shoot[i].position.y + this.game.player.shoot[i].size;
 
            if(this.bulletTop <= this.position.y + this.height&&
               this.bulletLeft >= this.position.x 
                && this.bulletRight <= this.position.x + this.width &&
                this.bulletBottom >= this.position.y ){
					ctx.drawImage(enemyExplode, this.position.x, this.position.y, this.width, this.height);
					this.hitBullet = true;
					this.game.player.shoot.shift(i);
            } 
		}

		//IF THE ENEMY BULLET HIT THE PLAYER SUBTRACT THE PLAYER LIFE BY 1
        for (let i = 0; i < this.shoot.length ; i++){
			
			this.enemyBulletLeft = this.shoot[i].x ;
			this.enemyBulletRight = this.shoot[i].x + this.shoot[i].width;
			this.enemyBulletTop = this.shoot[i].y;
			this.enemyBulletBottom = this.shoot[i].y + this.shoot[i].height;
 
            if(this.enemyBulletTop >= this.game.player.position.y &&
				this.enemyBulletLeft >= this.game.player.position.x 
				 && this.enemyBulletRight <= this.game.player.position.x + this.game.player.width &&
				 this.enemyBulletBottom <= this.game.player.position.y + this.game.player.height && this.game.player.life != 0){
					this.shoot.shift(i);
					this.game.player.life -= 1;
            } 
        }
	}
	
	//THE COLLISION THE PLAYER AND ENEMY
	playerCollision() {
		this.playerLeft = this.game.player.position.x ;
		this.playerRight = this.game.player.position.x + this.game.player.width;
		this.playerTop = this.game.player.position.y;
		this.playerBottom = this.game.player.position.y + this.game.player.height;

		if(this.playerTop <= this.position.y + this.height&&
			this.playerLeft >= this.position.x 
			 && this.playerRight <= this.position.x + this.width &&
			 this.playerBottom >= this.position.y ){
				this.game.player.life -= 1;
		 } 
	
	}
    
//UPDATE THE ENEMY
	update (timeStamp){
		this.time = timeStamp;   
		this.playerCollision();      
		this.worldCollision();
		this.position.x += this.speed;

		for(var i = 0; i < this.shoot.length; i++){
			this.shoot[i].update();
		}
	}

}

    
