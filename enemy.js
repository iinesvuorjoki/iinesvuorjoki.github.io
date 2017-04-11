var enemies = [];

function createEnemies() {
    
    var enemy = {
            x: 2,
            y: 2,
            speed: 300
        };
    
    return enemy;
    
};

for (i = 0; i < 8; i++) {
    enemies.push(createEnemies());
};

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
    
    var stable = 1,
        moving = 2;
    
    function changeSpeed(speed) {
        switch (speed) {
                
        }
    };
    
}
