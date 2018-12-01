var Boot = function (game) {
	
};

Boot.prototype = {
	init: function () {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setMinMax(256,240);
		this.scale.pageAlignHorizontally = true;
	},
	
	preload: function () {
		this.load.image('preloadBar', 'assets/preloaderBar.png');
	},
	
	create: function () {
		this.state.start('Preloader');
	}
};