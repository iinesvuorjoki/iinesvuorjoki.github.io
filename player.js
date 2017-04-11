var player = {
    x: 100,
    y: 100,
    w: 35,
    h: 35,
    speed: 20,
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
        if (player.x < 0) {
            player.x = 0;
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
        if (player.y > 400) {
            player.y = 400;
        }
        player.direction = 2;
        break;
    case "up":
        player.y -= player.speed;
        if (player.y < 0) {
            player.y = 0;
        }
        break;
    }
} //pitääkö ottaa puolipilkku pois?

function changeSpeed(speed) {
    switch (speed) {
    case 1:
        player.speed = player.speed + 4;
        break;
    case 2:
        player.speed = Math.max(player.speed - 4, 1);
        break;
    }
} //pitääkö ottaa puolipilkku pois?