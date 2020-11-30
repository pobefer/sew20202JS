window.onload=function() {
    canvs=document.getElementById("gc");
    context=canvs.getContext("2d");
    document.addEventListener("keydown",teclaPulsada);
    setInterval(jugar,1000/15);
}
snakeX=snakeY=10;
gs=campo=20;
enemyX=enemyY=15;
speedX=speedY=0;
snake=[];
score = 5;
function jugar() {
    snakeX+=speedX;
    snakeY+=speedY;
    if(snakeX<0) {
        snakeX= campo-1;
    }
    if(snakeX>campo-1) {
        snakeX= 0;
    }
    if(snakeY<0) {
        snakeY= campo-1;
    }
    if(snakeY>campo-1) {
        snakeY= 0;
    }
    context.fillStyle="black";
    context.fillRect(0,0,canvs.width,canvs.height);
 
    context.fillStyle="lime";
    for(var i=0;i<snake.length;i++) {
        context.fillRect(snake[i].x*gs,snake[i].y*gs,gs-2,gs-2);
        if(snake[i].x==snakeX && snake[i].y==snakeY) {
            score = 5;
        }
    }
    snake.push({x:snakeX,y:snakeY});
    while(snake.length>score) {
    snake.shift();
    }
 
    if(enemyX==snakeX && enemyY==snakeY) {
        score++;
        enemyX=Math.floor(Math.random()*campo);
        enemyY=Math.floor(Math.random()*campo);
    }
    context.fillStyle="red";
    context.fillRect(enemyX*gs,enemyY*gs,gs-2,gs-2);
}
function teclaPulsada(evt) {
    switch(evt.keyCode) {
        case 37:
            speedX=-1;speedY=0;
            break;
        case 38:
            speedX=0;speedY=-1;
            break;
        case 39:
            speedX=1;speedY=0;
            break;
        case 40:
            speedX=0;speedY=1;
            break;
    }
}