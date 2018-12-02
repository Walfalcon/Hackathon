var poofs;
var currentStage;
var enterDoor;
var dead = false;
var song;

var Stage1 = function (game) {
	var song = null;
	var deathTimer = null;
};

Stage1.prototype = {
	create: function () {
		currentStage = stages.stage1;
		Stage.create(currentStage.stage, currentStage.width);
		poofs = game.add.group();
		poofs.createMultiple(5, 'poof1');
		poofs.forEach(this.poofSetup, this);
		game.sound.add('song', 1, true);
		song = game.sound.play('song', 1, true);
	},
	
	update: function () {
		Player.update();
		if(enterDoor)
		{
			Enemy1.destroy();
			currentStage = currentStage.nextStage;
			Stage.destroy();
			Stage.create(currentStage.stage, currentStage.width);
			enterDoor = false;
			return;
		}
		if(dead)
		{
			if(this.deathTimer == null) this.deathTimer = game.time.now + 1000;
			if(game.time.now > this.deathTimer)
			{
				Player.destroy();
				Enemy1.destroy();
				Stage.destroy();
				game.sound.stopAll();
				this.deathTimer = null;
				dead = false;
				this.state.start('StartScreen');
				return;
			}
		}
		Enemy1.update(currentStage);
	},
	
	poofSetup: function (poof) {
		poof.animations.add('poof', [0], 4);
	}
};
