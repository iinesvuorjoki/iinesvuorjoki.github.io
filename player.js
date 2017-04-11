var player = {
    x: 0,
    y: 0,
    speed: 200,
    direction: 0
};

var playerLives = 5,
    stable = 1,
    right = 2,
    left = 3;

function flyingPlayer(direction) {
    switch (direction) {
    case "left":
        player.x -= player.speed;
        if (player.x < 20) {
            player.x = 20;
        }
        player.direction = 3;
        break;
    case "right":
        player.x += player.speed;
        if (player.x > 400) {
            player.x = 400;
        }
        player.direction = 1;
        break;
    case "down":
        player.y += player.speed;
        if (player.y > 380) {
            player.y = 380;
        }
        player.direction = 2;
        break;
    }
};

function changeSpeed(speed) {
    switch (speed) {
            
    }
};