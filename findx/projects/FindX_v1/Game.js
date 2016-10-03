<<<<<<< HEAD
<<<<<<< HEAD

FindX.Game = function(game) {
    this.randomNumberTop;
    this.randomNumberBottom;
    this.operator = ['+', '-' ,'*', '/'];
    this.result;
    this.randomOperation;
    this.showNumberTop;
    this.showNumberBottom;
    this.showOperator;
    this.showUnderLine;
    this.showResult;
    this.topNumberText;
<<<<<<< HEAD
    this.endPrompt;
=======
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46

};

FindX.Game.prototype = {
    preload: function() {
        this.load.image('X', 'images/X.png');
        this.load.image('pause','images/PAUSE.png');
        this.load.image('skip','images/SKIP.png');
        this.load.image('loot','images/LOOT.png');
        this.load.image('choice1','images/choice.png');
        this.load.image('choice2','images/choice2.png');
        this.load.image('choice3','images/choice.png');
    },

    create: function() {
        this.stage.backgroundColor = '#99CCFF';  
        this.mathScene();
        this.showButtons();
<<<<<<< HEAD
        endPrompt = null; //timer is 0
=======
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46
        
    },
    //does not work....
    gameTimer: function() {
        this.time.events.add(Phaser.Timer.SECOND * 0, 0, 180, 0, false, this, this.Game, null);
    },
=======
FindX.Game = function(game){
    /* 
    
    fill in code, eg: 
    this.x;
    this.y;
    
    */
};

FindX.Game.prototype = {
>>>>>>> parent of 5e0b6f8... to be reverted
    
    create: function(){
    
<<<<<<< HEAD
    //display buttons
    showButtons: function(){
        this.add.image(this.world.centerX-250, this.world.centerY-350, 'loot', null);
        
        //i could not generate the X image to a random position
		this.add.image(this.world.centerX,this.world.centerY-this.randomXposition, 'X', null);
        
<<<<<<< HEAD
        this.add.button(this.world.centerX-250, this.world.centerY+125, 'pause', this.pauseGame, this, null, null, null, null);
        this.add.button(this.world.centerX+125, this.world.centerY+125, 'skip', this.endGame, this, null, null, null, null);
=======
        this.add.button(this.world.centerX-250, this.world.centerY+125, 'pause', this.pauseMenu, this, null, null, null, null);
        this.add.button(this.world.centerX+125, this.world.centerY+125, 'skip', this.randomGenerator, this, null, null, null, null);
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46
        
        //created variables for the buttons for later use. need to implement solution and random incorrect solutions on top of button.
        this.choice1 = this.add.button(this.world.centerX-260, this.world.centerY+275, 'choice1', this.randomGenerator, this, null, null, null, null);
        this.choice2 = this.add.button(this.world.centerX-82, this.world.centerY+275, 'choice2', this.randomGenerator, this, null, null, null, null);
        this.choice3 = this.add.button(this.world.centerX+95, this.world.centerY+275, 'choice3', this.randomGenerator, this, null, null, null, null);
    },
    
<<<<<<< HEAD
    pauseGame: function (pointer) {
		this.state.start('PauseMenu');
	},
    endGame: function (pointer) {
		this.state.start('GameOver');
	},
    
    //randomize numbers
    randomGenerator: function() {
    
        this.randomOperation = Math.floor(Math.random() * 4);
        this.randomNumberTop = Math.floor((Math.random() * 9) + 1);
        this.randomNumberBottom = Math.floor((Math.random() * 9) + 1);
        
        //tried using this for the X image ..doesn't work
        this.randomXposition = this.rnd.pick(100,200,10);
    },
=======
    //randomize numbers
    randomGenerator: function() {
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46
<<<<<<< HEAD
    
        this.randomOperation = Math.floor(Math.random() * 4);
        this.randomNumberTop = Math.floor((Math.random() * 9) + 1);
        this.randomNumberBottom = Math.floor((Math.random() * 9) + 1);
        
        //tried using this for the X image ..doesn't work
        this.randomXposition = this.rnd.pick(100,200,10);
    },
=======
    
        this.randomOperation = Math.floor(Math.random() * 4);
        this.randomNumberTop = Math.floor((Math.random() * 9) + 1);
        this.randomNumberBottom = Math.floor((Math.random() * 9) + 1);
        
        //tried using this for the X image ..doesn't work
        this.randomXposition = this.rnd.pick(100,200,10);
    },
    
<<<<<<< HEAD
    solveEquation: function() {
    
        switch(this.operator[this.randomOperation]) {
            
                case '+' : this.result = this.randomNumberTop + this.randomNumberBottom;
                            break;
                case '-' : this.result = this.randomNumberTop - this.randomNumberBottom;
                            break;
                case '*' : this.result = this.randomNumberTop * this.randomNumberBottom;
                            break;
                case '/' : this.result = this.randomNumberTop / this.randomNumberBottom;
                            break;
        }
        
    },
       
=======
FindX.Game = function(game){
    /* 
    
    fill in code, eg: 
    this.x;
    this.y;
    
    */
};

FindX.Game.prototype = {
    
    create: function(){
    
        /* fill in code */
    },
    
>>>>>>> parent of 5e0b6f8... to be reverted
    
=======
>>>>>>> 73d2723a5d332939629eee5a146f0d85edd8eff5
    
<<<<<<< HEAD
<<<<<<< HEAD
    solveEquation: function() {
    
        switch(this.operator[this.randomOperation]) {
            
                case '+' : this.result = this.randomNumberTop + this.randomNumberBottom;
                            break;
                case '-' : this.result = this.randomNumberTop - this.randomNumberBottom;
                            break;
                case '*' : this.result = this.randomNumberTop * this.randomNumberBottom;
                            break;
                case '/' : this.result = this.randomNumberTop / this.randomNumberBottom;
                            break;
        }
        
    },
       
=======
        /* fill in code */
    },
    
<<<<<<< HEAD
>>>>>>> parent of 5e0b6f8... to be reverted
    
=======
    
    /* add other functions */
    
    
<<<<<<< HEAD
=======
>>>>>>> 73d2723a5d332939629eee5a146f0d85edd8eff5
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46
    loopClick: function() {
        
        this.showNumberTop.destroy(); 
        this.showNumberBottom.destroy(); 
        this.showOperator.destroy(); 
        this.showUnderLine.destroy();
        this.showResult.destroy();
        this.mathScene();  
=======
    quitGame:function(pointer) {
        this.ding.play();
        this.state.start('StartMenu');
>>>>>>> parent of 5e0b6f8... to be reverted
=======
    /* add other functions */
    
    
    quitGame:function(pointer) {
        this.ding.play();
        this.state.start('StartMenu');
>>>>>>> parent of 5e0b6f8... to be reverted
    },
    
    update: function() {
        /*
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 73d2723a5d332939629eee5a146f0d85edd8eff5
        clicks = this.input.onDown.addOnce(this.loopClick, this);
       
=======
        this.input.onDown.addOnce(this.loopClick, this);
>>>>>>> 4a371c771b87d73fac8f67c87fbbc3f0c9692b46
    }
=======
        fill in code
        this.physics.arcade.overlap(this.x, this.x, this.x, null, this);
>>>>>>> parent of 5e0b6f8... to be reverted
=======
        fill in code
        this.physics.arcade.overlap(this.x, this.x, this.x, null, this);
>>>>>>> parent of 5e0b6f8... to be reverted
        
        */
    }  
    
};