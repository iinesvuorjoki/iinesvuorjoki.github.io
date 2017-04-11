

function enemy(x, y, w, h, speed, direction) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.direction = direction;
}
var enemies = [];

function createEnemies(x, y, w, h, speed, direction) {
    enemies.push(new enemy(x, y, w, h, speed, direction));
}
function addMoreEnemies() {
    createEnemies(100, 100, 30, 30, 75, 1);
    createEnemies(150, 150, 30, 30, 75, 2);
    createEnemies(200, 200, 30, 30, 75, 3);
    createEnemies(250, 250, 30, 30, 75, 4);
    createEnemies(300, 300, 30, 30, 75, 1);
    createEnemies(350, 350, 30, 30, 75, 2);
    createEnemies(400, 400, 30, 30, 75, 3);
    createEnemies(450, 450, 30, 30, 75, 4);
}

/*for (i = 0; i < 8; i++ ) {
        var enemy = {
            x: 2,
            y: 2,
            w: 45,
            h: 45,
            speed: 30,
            direction: 2
        };
*/

var i = 0;

function flyingEnemies() {
    for (i = 0; i < enemies.length[i]; i++) {
        var flyingEnemy = enemies[i];
        if (flyingEnemy.x >= 250) {
            flyingEnemy.direction = 2;
        }
        
        if (flyingEnemy.x <= 10) {
            flyingEnemy.direction = 1;
        }
        if (flyingEnemy.direction === 1) {
            flyingEnemy.x = flyingEnemy.x + flyingEnemy.speed;
        }
        if (flyingEnemy.direction === 2) {
            flyingEnemy.x = flyingEnemy.x - flyingEnemy.speed;
        }
        
    }
    
     
    
}

