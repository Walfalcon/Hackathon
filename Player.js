var player;

var Player = {
		nextFire: 0,
	create: function(x, y) {
		player = game.add.sprite(x, y, 'player');
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.000001;
		player.body.gravity.y = 1200;
		player.body.collideWorldBounds = true;

		bullets = game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(50, 'bullet');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);

	},

	fire: function() {
		console.log(this.nextFire);
		if (game.time.now > this.nextFire)
		{
			this.nextFire = game.time.now + 200;
			var bullet = bullets.getFirstDead();
			bullet.reset(player.x + 16, player.y + 6);
			if (player.scale.x > 0) {
				bullet.body.velocity.x = 300;
			} else {
				bullet.body.velocity.x = -300;
			}
		}
	},

	update: function() {
		var hitPlatform = game.physics.arcade.collide(player, Stage.walls);
		if(game.physics.arcade.collide(player, Stage.doors))
		{
			enterDoor = true;
			return;
		}
		player.body.velocity.x = 0;
		player.animations.play('right');
		if (cursors.right.isDown)
		{
			player.body.velocity.x = 150;
		} else if (cursors.left.isDown)
		{
			player.body.velocity.x = -150;
		}

		if (keys.z.isDown && player.body.touching.down)
		{
			player.body.velocity.y = -400;
		}

		if (player.body.velocity.x < 0) {
			player.frame = 0;
			player.scale.x = -1;
			player.anchor.x = 1;
		} else if (player.body.velocity.x > 0) {
			player.frame = 0;
			player.scale.x = 1;
			player.anchor.x = 0;
		}
		if (player.body.velocity.x == 0 && player.body.touching.down) {
			player.frame = 1;
		}
		if (!player.body.touching.down) {
			player.frame = 2;
		}

		if (keys.x.isDown) {
			this.fire();
		}
	}
}

