// Enemy Class
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    // Resets enemy position when it goes off canvas!
    if (this.x > 575) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 400);
    }
    
    // Check for collision between player and enemies
    if (player.x < this.x + 75 &&
        player.x + 75 > this.x &&
        player.y < this.y + 75 &&
        75 + player.y > this.y) {
        //Reset player position upon collision
        player.x = 0;
        player.y = 380;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Class
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function() {
    // Keeps player on screen
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Reset player position if you reach the water
    if (this.y < 0) {
        this.x = 0;
        this.y = 380;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypress) {
    switch (keypress) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }   
};

// All enemies will be pushed into this array
var allEnemies = [];
var enemy;
// positions the enemies on these y cordinates
var enemyPosition = [60, 140, 220];

// assign a new Player with (x, y, speed) to a variable
var player = new Player(0, 380, 50);

enemyPosition.forEach(function (posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 400));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

var catGirl = document.querySelector("#cat-girl");
var boy = document.querySelector("#boy");
var hornGirl = document.querySelector("#horn-girl");
var pinkGirl = document.querySelector("#pink-girl");
var princessGirl = document.querySelector('#princess-girl');

catGirl.addEventListener('click',function(e){
    e.preventDefault();
    player.sprite = 'images/char-cat-girl.png'
});

hornGirl.addEventListener('click', function (e) {
    e.preventDefault();
    player.sprite = 'images/char-horn-girl.png'
});

princessGirl.addEventListener('click', function (e) {
    e.preventDefault();
    player.sprite = 'images/char-princess-girl.png'
});

boy.addEventListener('click', function (e) {
    e.preventDefault();
    player.sprite = 'images/char-boy.png'
});

pinkGirl.addEventListener('click', function (e) {
    e.preventDefault();
    player.sprite = 'images/char-pink-girl.png'
});