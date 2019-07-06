// Enemies
const Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position and speed
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 220);
    };

    // Checks for collisions between the player and the enemies
    if (player.x < this.x + 75 &&
        player.x + 75 > this.x &&
        player.y < this.y + 55 &&
        55 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    };
};

// Renders enemy
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
const Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-cat-girl.png';
};

Player.prototype.update = function (dt) {

};

// Renders user
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Moves Player
Player.prototype.handleInput = function (keyPress) {

    if (keyPress == 'left' && this.x > 0) {
        this.x -= 100;
    };
    if (keyPress == 'right' && this.x < 400) {
        this.x += 100;
    };
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 80;
    };
    if (keyPress == 'down' && this.y < 400) {
        this.y += 80;
    };

//position reset after .4 sec
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 400;
        }, 400);
    };
};


// All enemies in an array
const allEnemies = [];

// Enemy Location
const enemyLocation = [60, 150, 230];

enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});

//start location
const player = new Player(200, 400);


// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
