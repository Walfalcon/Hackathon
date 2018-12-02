var Preloader = function (game) {
	var preloadBar = null;
};

Preloader.prototype = {
	preload: function () {
		this.preloadBar = this.add.sprite(8, 112, 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		this.load.image('startScreen', 'assets/startScreen.png');
		this.load.image('poof1', 'assets/poof1.png');
		this.load.image('invisWall', 'assets/invisWall.png');
		this.load.image('spikes', 'assets/spikes.png');
		this.load.image('bullet', 'assets/Bullet.png');
		
		this.load.spritesheet('player', 'assets/Player.png', 16, 16);
		this.load.spritesheet('enemy1', 'assets/enemy1.png', 16, 16);
		this.load.spritesheet('walls', 'assets/walls.png', 16, 16);
	},
	
	create: function () {
		cursors = game.input.keyboard.createCursorKeys();
		keys = game.input.keyboard.addKeys({'z': Phaser.KeyCode.Z, 'x' : Phaser.KeyCode.X, 'esc' : Phaser.KeyCode.ESC});
		game.stage.backgroundColor = 0xadd8e6;
		stages.stage1.nextStage = stages.stage2;
		stages.stage2.nextStage = stages.stage3;
		
		this.state.start('StartScreen');
	}
};
