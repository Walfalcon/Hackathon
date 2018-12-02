var player;

var Player = {
	nextFire: 0,
	health: 3,
	movcooldown: 0,
	create: function(x, y) {
		player = game.add.sprite(x, y, 'player');
		player.maxhealth = this.health
		player.health = this.health
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.000001;
		player.body.gravity.y = 1200;
		player.body.collideWorldBounds = true;
		player.movcooldown = this.movcooldown;

		bullets = game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(50, 'bullet');
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);

	},

	fire: function() {
		if (game.time.now > this.nextFire)
		{
			this.nextFire = game.time.now + 200;
			var bullet = bullets.getFirstDead();
			if (player.scale.x > 0) {
				bullet.reset(player.x + 15, player.y + 6);
				bullet.body.velocity.x = 300;
			} else {
				bullet.reset(player.x, player.y + 6);
				bullet.body.velocity.x = -300;
			}
		}
	},

	update: function() {
		game.physics.arcade.collide(bullets, Stage.walls, BulletHitWall);
		if(!player.alive) return;
		var hitPlatform = game.physics.arcade.collide(player, Stage.walls);
		if(game.physics.arcade.collide(player, Stage.doors))
		{
			enterDoor = true;
			return;
		}
		if(game.physics.arcade.collide(player, Stage.spikes))
		{
			player.kill();
			if(poofs.countDead() > 0)
			{
				var poof = poofs.getFirstExists(false);
				poof.reset(player.x, player.y);
				poof.animations.play('poof', null, false, true);
			}
		}
		player.body.velocity.x = 0;
		player.animations.play('right');
		if (cursors.right.isDown && game.time.now > player.movcooldown)
		{
			player.body.velocity.x = 150;
		} else if (cursors.left.isDown && game.time.now > player.movcooldown)
		{
			player.body.velocity.x = -150;
		}

		if (keys.z.isDown && player.body.touching.down && game.time.now > player.movcooldown)
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
	},
	damage: function() {
		player.movcooldown = game.time.now + 300;
		player.damage(1);
		if(!player.alive && poofs.countDead() > 0)
		{
			var poof = poofs.getFirstExists(false);
			poof.reset(player.x, player.y);
			poof.animations.play('poof', null, false, true);
		}
		player.body.velocity.y = -100;
		if (player.body.touching.right) {
			player.body.velocity.x = -600;
		} else {
			player.body.velocity.x = 600;
		}
	}
}

var BulletHitWall = function (bullet, wall) {
	bullet.kill();
}
