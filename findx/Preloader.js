
/**
 * Description
 * @method Preloader
 * @param {} game
 * @return 
 */
FindX.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

FindX.Preloader.prototype = {
	
	/**
	 * Description
	 * @method preload
	 * @return 
	 */
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 250, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0);
		this.load.setPreloadSprite(this.preloadBar);
        this.load.image('titlescreen', 'images/bgPirateMap.jpg');
        this.load.image('titlelogo', 'images/logo.png');
        this.load.bitmapFont('gamefont', 'font/font.png', 'font/font.fnt');
        this.load.spritesheet('PlayButton', 'images/play_spritesheet.png', 159, 82);
        this.load.spritesheet('Settings', 'images/Settings.png', 273, 82);
        this.load.spritesheet('HighScore', 'images/leaderboardButton.png', 406, 136/2);
        this.load.audio('select_audio', 'audio/select.mp3');
        this.load.audio('wrong_audio', 'audio/argh.mp3');
        this.load.audio('coin_audio', 'audio/coinbag.mp3');
        this.load.audio('start_audio', 'audio/bgLoop.mp3');
        this.load.image('settingsBG', 'images/settingsBG.jpg');
        this.load.image('pause','images/PAUSE.png');
        this.load.spritesheet('skip','images/skipSprite.png', 142, 142);
        this.load.image('loot','images/coinPouch.png');
        this.load.image('gameoverskull','images/GameOver.png');
        this.load.image('gameoverplay','images/GameOverPLAY.png');
        this.load.image('gameoverquit','images/GameOverQUIT.png');
        this.load.image('wheelBanner','images/wheel.png');
        this.load.image('submitButton','images/submitButton.png');
        this.load.image('correct','images/green.png');
        this.load.image('wrong','images/wrong.png');
	},
	

	/**
	 * Description
	 * @method create
	 * @return 
	 */
	create: function () {
		this.preloadBar.cropEnabled = false;
        
        
	},

	/**
	 * Description
	 * @method update
	 * @return 
	 */
	update: function () {
        if(this.cache.isSoundDecoded('start_audio') && this.ready == false) {
            this.ready = true;
            this.state.start('StartMenu');
        }
	}
};