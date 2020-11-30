window.onload = function () {
    game = new Snake();
    canvs = document.getElementById("gc");
    context = canvs.getContext("2d");
    document.addEventListener("keydown", game.teclaPulsada);
    setInterval(game.jugar(game), 1000 / 15);
}

class Snake {
    constructor() {
        this.snakeX = this.snakeY = 10;
        this.gs = this.campo = 20;
        this.enemyX = this.enemyY = 15;
        this.speedX = this.speedY = 0;
        this.snake = [];
        this.score = 5;
    }
    jugar(game) {
        game.snakeX += game.speedX;
        game.snakeY += game.speedY;
        if (game.snakeX < 0) {
            game.snakeX = game.campo - 1;
        }
        if (game.snakeX > game.campo - 1) {
            game.snakeX = 0;
        }
        if (game.snakeY < 0) {
            game.snakeY = game.campo - 1;
        }
        if (game.snakeY > game.campo - 1) {
            game.snakeY = 0;
        }
        context.fillStyle = "black";
        context.fillRect(0, 0, canvs.width, canvs.height);

        context.fillStyle = "lime";
        var parent = game;
        for (var i = 0; i < parent.snake.length; i++) {
            context.fillRect(parent.snake[i].x * parent.gs, parent.snake[i].y * parent.gs, parent.gs - 2, parent.gs - 2);
            if (parent.snake[i].x == parent.snakeX && parent.snake[i].y == parent.snakeY) {
                parent.score = 5;
            }
        }
        game.snake.push({ x: game.snakeX, y: game.snakeY });
        while (game.snake.length > game.score) {
            game.snake.shift();
        }

        if (game.enemyX == game.snakeX && game.enemyY == game.snakeY) {
            game.score++;
            game.enemyX = Math.floor(Math.random() * game.campo);
            game.enemyY = Math.floor(Math.random() * game.campo);
        }
        context.fillStyle = "red";
        context.fillRect(game.enemyX * game.gs, game.enemyY * game.gs, game.gs - 2, game.gs - 2);
    }
    teclaPulsada(evt) {
        switch (evt.keyCode) {
            case 37:
                this.speedX = -1; this.speedY = 0;
                break;
            case 38:
                this.speedX = 0; this.speedY = -1;
                break;
            case 39:
                this.speedX = 1; this.speedY = 0;
                break;
            case 40:
                this.speedX = 0; this.speedY = 1;
                break;
        }
    }
}