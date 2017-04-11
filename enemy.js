var enemies = [];

var enemy = {
    x: Math.min(Math.max((Math.random() * 1000), 50), 520),
    y: Math.min(Math.max((Math.random() * 1000), 70), 350),
    w: 1,
    h: 1,
    speed: 20,
    direction: 1
};

function addEnemies() {
    return enemy();
}


//67*59

var stable = 1,
    right = 2,
    left = 3,
    i = 0;

for (i = 0; i < enemies[i]; i++) {
    enemies.push(addEnemies());
}

function flyingEnemy() {
    for (i = 0; i < enemies[i]; i++) {
        var flyEnemy = enemies[i];
        if (flyEnemy.x >= 350) {
            flyEnemy.direction = 2;
        }
        if (flyEnemy.x <= 50) {
            flyEnemy.direction = 1;
        }
        if (flyEnemy.direction === 1) {
            flyEnemy.x = flyEnemy.x + flyEnemy.speed;
        }
        if (flyEnemy.direction === 2) {
            flyEnemy.x = flyEnemy.x - flyEnemy.speed;
        }
    }
}

function changeSpeed(speed) {
    switch (speed) {
    case 1:
        enemy.speed = enemy.speed + 4;
        break;
    case 2:
        enemy.speed = Math.max(enemy.speed - 4, 1);
        break;
    }
} //pitääkö ottaa puolipilkku pois?