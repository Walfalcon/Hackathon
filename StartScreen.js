var StartScreen = function (game) {
	var background = null;
};

StartScreen.prototype = {
	create: function () {
		this.background = game.add.image(0,0,'startScreen');
	},
	
	update: function () {
		if(keys.x.isDown)
		{
			this.background.destroy();
			//this.state.start('Stage1');
		}
	}
};