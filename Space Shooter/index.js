import Game from "../Space Shooter/js/game.js";

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
let lastTime = 0;

let game = new Game(GAME_WIDTH,GAME_HEIGHT);

game.start();

function gameLoop(timeStamp) {
    lastTime = timeStamp;
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.draw(ctx);
    game.update(timeStamp);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

