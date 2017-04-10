var enemies = [];
var died = false;

function createEnemies() {
    
    var enemy = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        h: 20,
        w: 20,
        speed: 5,
        direction: 2
    };
    return enemy;
};

function deleteEnemy(a) {
    enemies.splice(a);
}

for (i = 0; i < 5; i++) {
    enemies.push(createEnemies());
};


function moveEnemy() {
    for ( i = 0; i < enemies.length; i++) {
        var newEnemy = enemies[i];
    }
        }

function changeSpeed(speed) {
    switch(speed) {
            
    }
};