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
	},
	
	update: function (stage) {
		
	}
};
	