var Enemy1 = {
	enemies: null,
	health: 3,
	damage: 1,
	speed: 20,
	gravity: 450,
	
	create: function (x, y) {
		if(this.enemies == null) {
			this.enemies = game.add.group();
			this.enemies.enableBody = true;
		}
		var enemy = this.enemies.create(x, y, 'enemy1');
		enemy.body.gravity.y = this.gravity;
		enemy.maxHealth = this.health;
		enemy.health = this.health;
		enemy.animations.add('move', [0,1], 4);
		enemy.animations.play('move', null, true);
	},
	
	update: function (stage) {
		game.physics.arcade.collide(this.enemies, Stage.walls);
		this.enemies.forEachAlive(this.enemyUpdate, this, stage);
	},
	
	enemyUpdate: function (enemy, stage) {
		//find the tile directly in front of the enemy
		var tilePos = Math.floor((enemy.scale.x == 1 ? enemy.x - 1 : enemy.x +16)/16) + Math.floor(enemy.y/16)*stage.width;
		if(stage.stage[tilePos + stage.width] == 0)
		{
			enemy.anchor.x = enemy.scale.x == 1 ? 1 : 0;
			enemy.scale.x = -enemy.scale.x;
		}
		enemy.body.velocity.x = -enemy.scale.x * this.speed;
	}
};
	