var Player = {
	create: function(x, y) {
		player = game.add.sprite(x, y, 'player');
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.000001;
		player.body.gravity.y = 1200;
		player.body.collideWorldBounds = true;
	},

	update: function() {
		var hitPlatform = game.physics.arcade.collide(player, Stage.walls);
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
		} else if (player.body.velocity.x > 0) {
			player.frame = 0;
		}
		if (player.body.velocity.x == 0 && player.body.touching.down) {
			player.frame = 1;
		}
		if (!player.body.touching.down) {
			player.frame = 2;
		}
	}
}
