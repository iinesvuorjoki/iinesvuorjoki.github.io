window.onload = function () {
    
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 400;
    document.body.appendChild(canvas);

    var bgReady = false,
        bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;
    };
    bgImage.src = "gamebackground.jpg";

    var playerReady = false,
        playerImg = new Image();
    playerImg.onload = function () {
        playerReady = true;
    };
    playerImg.src = "frame-2.png";

    var enemyReady = false,
        enemyImg = new Image();
    enemyImg.onload = function () {
        enemyReady = true;
    };
    enemyImg.src = "spaceship.png";

    var keysDown = {};

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    var reset = function () {
            player.x = canvas.width / 2;
            player.y = canvas.height / 2;
    
            enemy.x = 32 + (Math.random() * (canvas.width - 64));
            enemy.y = 32 + (Math.random() * (canvas.height - 64));
        };

    var play = function (modifier) {
            if (38 in keysDown) {
                player.y -= player.speed * modifier;
            }
            if (40 in keysDown) {
                player.y += player.speed * modifier;
            }
            if (37 in keysDown) {
                player.x -= player.speed * modifier;
            }
            if (39 in keysDown) {
                player.x += player.speed * modifier;
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

    var draw = function () {
            if (bgReady) {
                ctx.drawImage(bgImage, 0, 0);
            }
    
            if (playerReady) {
                ctx.drawImage(playerImg, player.x, player.y);
            }
    
            if (enemyReady) {
                ctx.drawImage(enemyImg, enemy.x, enemy.y);
            }
    
            ctx.fillStyle = "rgb(250, 250, 250)";
            ctx.font = "20px Julius Sans One";
            ctx.textAlign = "right";
            ctx.textBaseline = "top";
            ctx.fillText = "Player lives: " + playerLives,
    };
    
    var main = function() {
        var now = Date.now();
        var delta = now - then;
        
        update(delta / 1000);
        play();
        
        then = now;
        
        requestAnimationFrame(main);
    };
    
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    
    var then = Date.now();
    reset();
    
    main();
    
})