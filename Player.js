var Player = {
	create: function(x, y) {
		player = game.add.sprite(x, y, 'player');
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		player.animations.add('right', [0], 10, true);
		player.animations.add('jump', [2], 10, true);
	},

	update: function() {
		//var hitPlatform = game.physics.arcade.collide(player, Stage.walls);
		player.body.velocity.x = 0;
		player.animations.play('right');
		if (cursors.right.isDown)
		{
			player.body.velocity.x = 150;
		} else if (cursors.left.isDown)
		{
			player.body.velocity.x = -150;
		}

		if (keys.z.isDown)
		{
			player.body.acceleration.y = -200;
		}

		if (player.body.acceleration.y > 1 || player.body.velocity < 1) {
			player.frame = 2;
		}
		if (player.body.acceleration.y < 1 && player.body.acceleration.y > -1) {
			player.frame = 1;
		}
		if (player.body.velocity.x < 0) {
			player.frame = 0;
		}
		if (player.body.velocity.x > 0) {
			player.frame = 0;
		}
	}
}
