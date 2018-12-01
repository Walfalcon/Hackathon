var Player = {
	create: function(x, y) {
		player = game.add.sprite(x, y, 'player');
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.000001;
		player.body.gravity.y = 300;
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

		if (keys.z.isDown && player.body.velocity.y > -1 && player.body.velocity.y < 0)
		{
			player.body.velocity.y = -200;
		}

		if (player.body.velocity.x < 0) {
			player.frame = 0;
		}
		if (player.body.velocity.x > 0) {
			player.frame = 0;
		}
		if (player.body.velocity.x == 0 && player.body.acceleration.y == 0) {
			player.frame = 1;
		}
		if (player.body.velocity.y < -0.834 || player.body.velocity.y > 0) {
			player.frame = 2;
		}
	}
}
