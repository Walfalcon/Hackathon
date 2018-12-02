var poofs;
var currentStage;
var enterDoor;

var Stage1 = function (game) {
	var song = null;
};

Stage1.prototype = {
	create: function () {
		currentStage = stages.stage1;
		Stage.create(currentStage.stage, currentStage.width);
		poofs = game.add.group();
		poofs.createMultiple(5, 'poof1');
		poofs.forEach(this.poofSetup, this);
		game.sound.add('song', 1, true);
		game.sound.play('song', 1, true);
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
		Enemy1.update(currentStage);
	},
	
	poofSetup: function (poof) {
		poof.animations.add('poof', [0], 4);
	}
};
