var Stage1 = function (game) {
	var stage = null;
};

Stage1.prototype = {
	create: function () {
		this.stage = stages.stage1;
		Stage.create(this.stage.stage, this.stage.width);
		
	},
	
	update: function () {
		Player.update();
		Enemy1.update(this.stage);
	}
};
