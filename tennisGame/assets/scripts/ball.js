class Ball {
    constructor(game) {
        this.game = game;
        this.x = game.width / 2;
        this.y = game.height / 2;
        this.radius = 15;
        this.dx = 3;
        this.dy = 3;
    }
    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = "#382EF5"
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x + this.radius > this.game.width || this.x - this.radius < 0) {
            this.dx *= -1;
        }

        if(this.y + this.radius > this.game.height || this.y - this.radius < 0) {
            this.dy *= -1;
        }
    }
}