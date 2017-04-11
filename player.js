var player = {
    x: 320,
    y: 202,
    w: 1,
    h: 1,
    speed: 20,
    direction: 0
};

//67*59

var playerLives = 5,
    stable = 1,
    right = 2,
    left = 3;

function flyingPlayer(direction) {
    switch (direction) {
    case "left":
        player.x -= player.speed;
        if (player.x < (0+30)) {
            player.x = (0+30);
        }
        player.direction = 3;
        break;
    case "right":
        player.x += player.speed;
        if (player.x > (640 - 37)) {
            player.x = (640-37);
        }
        player.direction = 1;
        break;
    case "down":
        player.y += player.speed;
        if (player.y > (404 -22)) {
            player.y = (404-22);
        }
        player.direction = 2;
        break;
    case "up":
        player.y -= player.speed;
        if (player.y < (0+23)) {
            player.y = (0+23);
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