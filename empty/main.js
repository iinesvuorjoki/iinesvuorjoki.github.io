
//to count how many games the person has started, this is later used in the gameOver function
    var gamesStarted = 0;

var mainState = {
    preload: function () {
    // preloading images
        game.load.image('bat', 'assets/bat.png');
        game.load.image('startPic', 'assets/alku.png');
        game.load.image('background', 'assets/taustakuva.png');
        game.load.image('gameOver1', 'assets/go1.png');
        game.load.image('gameOver2', 'assets/go2.png');
        game.load.image('gameOver3', 'assets/go3.png');
        game.load.image('windmill', 'assets/mylly4.png');
        game.load.image('lightning', 'assets/flash.png');
        game.load.audio('music', ['assets/Pidot_paranee_ku_lepakot_lentelee.wav']);
        game.load.audio('jump', 'assets/jump.wav');
    
    },
    
    create: function () {
        
        this.background = game.add.image(0, 0, 'background');
        
    // Setting the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
    //Setting the music
        music = game.add.audio('music');
        music.loopFull();
        
    // Displaying the bird
        this.bat = game.add.sprite(100, 245, 'bat');

    // Adding physics to the bird
        game.physics.arcade.enable(this.bat);

    // Adding gravity to the bird to make it fall
        this.bat.body.gravity.y = 1000;

    // Calling the 'jump' function when the spacekey is hit
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        if(this.bat.alive === true)
        spaceKey.onDown.add(this.jump, this);
        
     // Moving the anchor to the left and downward
        this.bat.anchor.setTo(-0.2, 0.5);
    
    
        this.pipes = game.add.group();
        
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
    //keeping count of the score and displaying it
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0",
            { font: "30px Avenir", fill: "#000000" });
        //sound effects for the bat
        this.jumpSound = game.add.audio('jump');
       

    },

    update: function () {
    // If the bird is out of the screen (too high or too low)
    // calling the 'gameOver function
        if (this.bat.y < 0 || this.bat.y > 490)
        this.gameOver();
        
        if (this.bat.angle < 20)
        this.bat.angle += 1;
    
        game.physics.arcade.overlap(this.bat, this.pipes, this.hitPipe, null, this);
    },
    
    // To make the bird jump 
    jump: function () {
    // Add a vertical velocity to the bird
        this.bat.body.velocity.y = -350;
    // Creating an animation on the bird
        var animation = game.add.tween(this.bat);

    // Changing the angle of the bird to -20° in 100 milliseconds
        animation.to({angle: -20}, 100);

    // Starting the animation
        animation.start();
    
        this.jumpSound.play();
        
        if (this.bat.alive === false)
        return;
    },
    
    addLightning: function (x, y) {
    // Creating a lightning at the position x and y
        var pipe = game.add.sprite(x, y, 'lightning');

    // Adding the lightning to our previously created group
        this.pipes.add(pipe);

    // Enabling physics on the lightning 
        game.physics.arcade.enable(pipe);

    // Adding velocity to the lightning to make it move left
        pipe.body.velocity.x = -200;

    // Automatically killing the lightning when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

   addDownMill: function (x, y) {
    // Creating a windmill at the position x and y
        var pipe = game.add.sprite(x, y, 'windmill');

    // Adding the windmill to our previously created group
        this.pipes.add(pipe);

    // Enabling physics on the windmill 
        game.physics.arcade.enable(pipe);

    // Adding velocity to the windmill to make it move left
        pipe.body.velocity.x = -200;

    // Automatically killing the windmill when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    // Restarting the game
    restartGame: function () {
    // Starting the 'main' state, which restarts the games
        music.stop();
        game.state.start('main');
        gamesStarted += 1
    },
    
    //Showing the game over view when the player dies, and quitting the game 
    //as well as the music. We made 3 different game over pictures, that change 
    // due to the function below
    gameOver: function () {
    music.stop();
        if(gamesStarted % 3 === 0)
    this.background = game.add.image(0, 0, 'gameOver1');
        if(gamesStarted % 3 === 1)
    this.background = game.add.image(0, 0, 'gameOver2');
        if(gamesStarted % 3 === 2)
    this.background = game.add.image(0, 0, 'gameOver3');
        //enabling the space key to start a new game
    var spaceRestart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceRestart.onDown.add(this.restartGame, this)
    },
   
   addRowOfPipes: function () {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
        var hole = Math.floor(Math.random() * 5) + 2;
        var x = 600
    // Add the pipe
    // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i != hole - 1; i++)
        if (i != hole && i != hole + 1)
                this.addLightning(x, i * 60 + 10); 
        for (var i = 8; i > hole; i--)
            if ( i != hole + 1 && i != hole -1 && i != hole + 2)
                    this.addDownMill(x, (hole + 3) * 60 + 10);
                    
        
    this.score += 1;
        this.labelScore.text = this.score;  
},
   
    
    //Tells if the bat is hitting a lightning or a windmill
    hitPipe: function() {
    if (this.bat.alive == false)
        return;

    // Setting the alive property of the bat to false
    this.bat.alive = false;

    // Preventing new items from appearing
    game.time.events.remove(this.timer);

    // Going through all of the items, and stopping their movement
    this.pipes.forEach(function(p){
        p.body.velocity.x = 0;
    }, this);
}, 
};

// Initializing Phaser, and creating a 600px by 480px game
var game = new Phaser.Game(600, 480);

// Adding the 'mainState' and calling it 'main'
game.state.add('main', mainState); 

// Starting the state to actually start the game!
game.state.start('main');


