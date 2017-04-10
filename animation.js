window.onload {
    
    var canvas = documen.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
}


var background = false;
var backgroundImg =  new Image ();
backgroundImg.onload = function() {
    background = true;
};
backgroundImg.src = "gamebackground.jpg";

var playerI = false;
var playerImg = new Image() {
    playerImg.onload= function() {
        playerI = true;
    };
    playerImg.src = "frame-2.png"
    
    var enemyImg = new Image();
    enemyImg.onload = function() {
        playerI = true;
    };
    enemyImg.src = "spaceship.png";
    
    
    var keyPressed= {};
    
    function drawPlayer(context) {
        
        var x = player.x - player.w / 2);
        var y = player.y - player.h / 2
        
        if(player.direction === 0) {
           context.drawImage(playerImg, 150, 100, 50, 50, x, y, 50, 50);
        } else if(player.direction === 1) {
            context.drawImage(playerImg, 200, 200, 50, 50, x, y, 50, 50);
        } else if(player.direction === 2) {
            context.drawImage(playerImg, 150, 0, 50, 50, x, y, 50, 50);
        } else if(player.direction === 3) {
            context.drawImage(playerImg, 200, 50, 50, 50, x, y, 50, 50)
        }
    }
}

function drawEnemy(context, enemy) {
    var x = enemy.x - enemy.w / 2);
    var y = enemy.y - enemy.h / 2);
        context.drawImage(enemyImg,0 ,0, 45, 45, x, y, 50, 50);
}
