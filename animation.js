window.onload = function () {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext("2d");
    canvas.width = 2000;
    canvas.height = 1262;
    document.body.appendChild(canvas);
    // addMoreEnemies();

    var bgReady = true,
        bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;
    };
    bgImage.src = "gamebackground.jpg";

    var playerReady = true,
        playerImg = new Image();
    playerImg.onload = function () {
        playerReady = true;
    };
    playerImg.src = "bird.png";
    

    var enemyReady = true,
        enemyImg = new Image();
    enemyImg.onload = function () {
        enemyReady = true;
    };
    enemyImg.src = "spaceshipenemy.png";

    
    
    var keysDown = {};

    window.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
        event.preventDefault();
    }, false);

    window.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    });

    var i = 0,
        reset = function () {
            
            var x = player.x - (player.w / 2),
                y = player.y - (player.y / 2);
        
            player.x = 320;
            player.y = 202;
    
            enemy.x = Math.min(Math.max((Math.random() * 1000), 50), 520);
            enemy.y = Math.min(Math.max((Math.random() * 1000), 70), 350);
        };

    

    var draw = function () {
        
            ctx.fillStyle = "rgb(0, 250, 250)";
            //ctx.font = "20px Julius Sans One";
            //ctx.textAlign = "right";
            //ctx.textBaseline = "top";
            //ctx.fillText = "Player lives: " + playerLives;
    
            if (bgReady) {
                ctx.drawImage(bgImage, 30, 30);
            }
    
            if (playerReady) {
                ctx.drawImage(playerImg, player.x, player.y);
            }
       // drawAndMoveEnemies(ctx);
            if (enemyReady) {
                    ctx.drawImage(enemyImg, enemy.x, enemy.y);
                
            }
            
        };
    
    var update = function (delta) {
            if (38 in keysDown) {
                flyingPlayer("up");
            }
            if (40 in keysDown) {
                flyingPlayer("down");
            }
            if (37 in keysDown) {
                flyingPlayer("left");
            }
            if (39 in keysDown) {
                flyingPlayer("right");
            }
    
            if (
                player.x <= (enemy.x + 32)
                    && enemy.x <= (player.x + 32)
                    && player.y <= (enemy.y + 32)
                    && enemy.y <= (player.y + 32)
            ) {
                --playerLives;
                reset();
            }
        };
    
    var main = function () {
        var now = Date.now(),
            delta = now - then;
        
        update(delta / 1000);
        draw();
        
        then = now;
        
        requestAnimationFrame(main);
    };
    
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    
    console.log(player);
    var then = Date.now();
    main();
    
};