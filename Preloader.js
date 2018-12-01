var Preloader = function (game) {
	var preloadBar = null;
};

Preloader.prototype = {
	preload: function () {
		this.preloadBar = this.add.sprite(8, 112, 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		this.load.image('startScreen', 'assets/startScreen.png');
	},
	
	create: function () {
		cursors = game.input.keyboard.createCursorKeys();
		keys = game.input.keyboard.addKeys({'z': Phaser.KeyCode.Z, 'x' : Phaser.KeyCode.X, 'esc' : Phaser.KeyCode.ESC});
		game.stage.backgroundColor = 0xadd8e6;
		
		this.state.start('StartScreen');
	}
};