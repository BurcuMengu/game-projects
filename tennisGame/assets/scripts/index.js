class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = canvas.width;
        this.height = canvas.height;
        this.baseHeight = 400;
        this.ratio = this.height / this.baseHeight;
        this.ball = new Ball(this);

        this.paddleWidth = 20;
        this.paddleHeight = 120;

        this.leftPaddleY = (this.height - this.paddleHeight) / 2;
        this.rightPaddleY = (this.height - this.paddleHeight) / 2;

    }
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.fillStyle = "#F8FFB5";
        this.ctx.fillRect(5, this.leftPaddleY, this.paddleWidth, this.paddleHeight)
        this.ctx.fillRect(this.width - this.paddleWidth - 5, this.rightPaddleY, this.paddleWidth, this.paddleHeight)
        this.ball.update();
        this.ball.draw();
    }
}

window.addEventListener("load", function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;

    const game = new Game(canvas,ctx);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render();
        requestAnimationFrame(animate)
    }
    this.requestAnimationFrame(animate)
})


/*let gameRunning = false;
let stopClickCount = 0;

let scoreOne = 0;
let scoreTwo = 0;

const alertGame = document.getElementById("alert");
const gameScore = document.getElementsByClassName("scoreBoard");
const leftBox = document.getElementById("leftBox");
const rightBox = document.getElementById("rightBox");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


function scorePointOne() {
    scoreOne++;
    document.getElementById("playerOne").textContent = scoreOne;
}

function scorePointTwo() {
    scoreTwo++;
    document.getElementById("playerTwo").textContent = scoreTwo;
}

function startGame() {
    if(gameRunning) return;
    gameRunning = true;
    stopClickCount = 0;
    alertGame.textContent = "Game Started!"
    alertGame.classList.add("blink");

    gameLoop();

    setTimeout(() => {
        let count = 3;
        alertGame.textContent = count;

        const timer = setInterval(() => {
            count--;
            alertGame.textContent = count;
            if(count === 0) {
                clearInterval(timer);
                alertGame.classList.remove("blink");
                alertGame.style.display = "none";
            }
        }, 1000);
    }, 1000);
}

function stopGame() {

    if (gameRunning) {
        gameRunning = false;
        stopClickCount = 1;

        alertGame.style.display = "block";
        alertGame.textContent = "Game Stopped!";
        return;
    }

    if (!gameRunning && stopClickCount === 1) {
        resetGame();
        stopClickCount = 0;

        alertGame.textContent = "Game Reset!";
        setTimeout(() => {
            alertGame.style.display = "none";
        }, 1000);
    }
}

let initialLeftBoxY = 0;

function resetGame() {
    scoreOne = 0;
    scoreTwo = 0;
    document.getElementById("playerOne").textContent = scoreOne;
    document.getElementById("playerTwo").textContent = scoreTwo;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 1;
    ball.dy = 1;

    leftBoxY = initialLeftBoxY;
    leftBox.style.top = leftBoxY + "px";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


let leftBoxY = 0;
const moveSpeed = 15;

window.onload = () => {
    initialLeftBoxY = leftBox.offsetTop;
    leftBoxY = leftBox.offsetTop;
};

document.addEventListener("keydown", (e) => {
    if (!gameRunning) return;

    const key = e.key.toLowerCase();
    const container = document.querySelector(".containerCanvas");
    const containerHeight = container.offsetHeight;
    const boxHeight = leftBox.offsetHeight;

    if (key === "w" || key === "arrowup") {
        leftBoxY -= moveSpeed;
    }

    if (key === "s" || key === "arrowdown") {
        leftBoxY += moveSpeed;
    }

    if (leftBoxY < 0) leftBoxY = 0;
    if (leftBoxY > containerHeight - boxHeight) {
        leftBoxY = containerHeight - boxHeight;
    }

    leftBox.style.top = leftBoxY + "px";
});

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 8,
    dx: 1,
    dy: 1
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = "#382EF5";
    ctx.fill();
    ctx.closePath();
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if(ball.y < ball.r || ball.y > canvas.height - ball.r) {
        ball.dy *= -1;
    }

    const leftRect = leftBox.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    const paddleTop = leftRect.top - canvasRect.top;
    const paddleBottom = paddleTop + leftBox.offsetHeight;
    
    if (
        ball.x - ball.r < 20 &&
        ball.y > paddleTop &&
        ball.y < paddleBottom
    ) {
        ball.dx *= -1;
    }

    if (ball.x > canvas.width) {
        scorePointOne();
        resetBall();
    }

    if (ball.x < 0) {
        scorePointTwo();
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1;
}

function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveBall();
    drawBall();

    requestAnimationFrame(gameLoop);
}*/