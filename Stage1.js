var Stage1 = function (game) {
	var walls
};

Stage1.prototype = {
	create: function () {
		Stage.create(stages.stage1, stages.stage1Width);
	},
	
	update: function () {
		Player.update();
	}
};
