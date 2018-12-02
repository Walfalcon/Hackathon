var poofs;
var stage;
var enterDoor;

var Stage1 = function (game) {
	
};

Stage1.prototype = {
	create: function () {
		stage = stages.stage1;
		Stage.create(stage.stage, stage.width);
		poofs = game.add.group();
		poofs.createMultiple(5, 'poof1');
		poofs.forEach(this.poofSetup, this);
	},
	
	update: function () {
		Player.update();
		if(enterDoor)
		{
					Stage.destroy();
		Enemy1.destroy();
		stage = stage.nextStage;
		Stage.create(stage.stage, stage.width);
		enterDoor = false;
			return;
		}
		Enemy1.update(stage);
	},
	
	poofSetup: function (poof) {
		poof.animations.add('poof', [0], 4);
	},
	
	enterDoor: function() {
		Stage.destroy();
		Enemy1.destroy();
		stage = stage.nextStage;
		Stage.create(stage.stage, stage.width);
		enterDoor = false;
	}
};
