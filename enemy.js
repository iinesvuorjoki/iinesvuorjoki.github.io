var enemyPic = new Image();
enemyPic.src = "spaceship.png";

function enemy(x,y,w,h,speed,direction){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.direction = direction;
}
var enemies = [];

function createEnemies(x,y,w,h,speed,direction) {
    enemies.push(new enemy(x,y,w,h,speed,direction));
};
function addMoreEnemies() {
    var xcor = 100,
        ycor = 100,
        wid = 50,
        hei = 50,
        spd = 75,
        dir = 1;
    for(0 until 5) {
        createEnemies(xcor,ycor,wid,hei,spd,dir)
        x += 50
        y += 50
        dir += 1
    }
};

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

