import Enemy from "../js/enemy.js";

//make the LEVELS of the GAME and the POSITION of the ENEMY
export function createLevel (game, level){

	var enemys = [];

	level.forEach((row, rowIndex) => {

		row.forEach((enemy, enemyIndex) => {


			if(enemy == 1) {

				var position = {
					x : 100 + 30 * enemyIndex,
					y : 20 + 30 * rowIndex
				};

				enemys.push(new Enemy(game,position));
			
			}

		});
	});

	return enemys;

}
export const level1 = [
	[0],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
	[0],
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[0],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]

];

export const level2 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0]

] ;

export const level3 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0]

] ;