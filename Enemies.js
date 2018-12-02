var Enemy1 = {
	enemies: null,
	health: 3,
	damage: 1,
	speed: 20,
	gravity: 450,
	
	create: function (x, y) {
		var enemy = this.enemies.create(x, y, 'enemy1');
		enemy.body.gravity.y = this.gravity;
		enemy.maxHealth = this.health;
		enemy.health = this.health;
		enemy.animations.add('move', [0,1], 4);
		enemy.animations.play('move', null, true);
	},
	
	update: function (stage) {
		game.physics.arcade.collide(this.enemies, Stage.walls);
		game.physics.arcade.collide(this.enemies, player, Player.damage);
		game.physics.arcade.collide(this.enemies, bullets, BulletHitEnemy);
		this.enemies.forEachAlive(this.enemyUpdate, this, stage);
	},
	
	enemyUpdate: function (enemy, stage) {
		//find the tile directly in front of the enemy
		var tilePos = Math.floor((enemy.scale.x == 1 ? enemy.x - 1 : enemy.x +16)/16) + Math.floor(enemy.y/16)*stage.width;
		if(stage.stage[tilePos + stage.width] == 0 || (enemy.scale.x == -1 ? enemy.body.touching.right : enemy.body.touching.left))
		{
			enemy.anchor.x = enemy.scale.x == 1 ? 1 : 0;
			enemy.scale.x = -enemy.scale.x;
		}
		enemy.body.velocity.x = -enemy.scale.x * this.speed;
	},
	
	destroy: function () {
		this.enemies.destroy();
		this.enemies = null;
	}
};

var BulletHitEnemy = function (enemy, bullet) {
	bullet.kill();
	enemy.damage(1);
	if(!enemy.alive && poofs.countDead() > 0)
	{
		var poof = poofs.getFirstExists(false);;
		poof.reset(enemy.scale.x == 1 ? enemy.x : enemy.x - 15, enemy.y);
		poof.animations.play('poof', null, false, true);
	}
};
