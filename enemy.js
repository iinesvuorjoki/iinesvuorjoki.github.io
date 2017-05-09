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
    enemies.push(enemy());
}

//67*59


function flyingEnemy() {
    for (var i in enemies) {
        switch (enemies[i].direction) {
            case 1:
                enemies[i].x -= enemies[i].speed;
                if (enemies[i].x >= 350) {
                    enemies[i].direction = 2;
                }
                break;
            case 2:
                enemies[i].x += enemies[i].speed;
                if (enemies[i].x <= 50) {
                    enemies[i].direction = 1;
                }
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