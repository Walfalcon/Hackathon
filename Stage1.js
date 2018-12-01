var Stage1 = function (game) {
	var stage = null;
	var poofs = null;
};

Stage1.prototype = {
	create: function () {
		this.stage = stages.stage1;
		Stage.create(this.stage.stage, this.stage.width);
		this.poofs = game.add.group();
		this.poofs.createMultiple(5, 'poof1');
		this.poofs.forEach(this.poofSetup, this);
	},
	
	update: function () {
		Player.update();
		Enemy1.update(this.stage);
	},
	
	poofSetup: function (poof) {
		poof.animations.add('poof', [0], 4);
	}
};
