// let ball = document.getElementById('ball');
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
let body = document.getElementById('body');
let velocityX = 5;
let velocityY = 3;
let positionX = 0;
let positionY = 0;



function moveBall(ball) {
    // get window width and height each time function executes
    // console.log(ball);
    let windowX = body.clientWidth;
    let windowY = body.clientHeight;

    // if ball is greater than window width/height, or less than zero, reverse velocity
    if (positionX >= windowX - ball.clientWidth || positionX < 0) {
    ball.style.backgroundColor = "purple";
    velocityX = -velocityX
    }

    if (positionY > windowY - ball.clientHeight || positionY < 0) {
    ball.style.backgroundColor = "blue";
    velocityY = -velocityY
    }

    // move the ball - X axis
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';


    // move the ball - Y axis
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';



  
};



function moveBallInterval(ballParam) {
  setInterval(moveBall, 10, ballParam);
}

moveBallInterval(ball1);
// setTimeout(moveBallInterval, 1000, ball2);
// moveBallInterval(ball3, 10);
// moveBallInterval(ball4, 10);
// moveBallInterval(ball5, 10);
