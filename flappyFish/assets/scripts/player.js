class Player {
    constructor(game){
        this.game = game;
        this.x = 20;
        this.y;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width;
        this.height;
        this.speedY;
        this.flapSpeed;
    }
    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        //this.x++;
        this.y += this.speedY;
        if(!this.isTouchingBotton()) {
            this.speedY += this.game.gravity;
        }
        if(this.isTouchingBotton()) {
            this.y = this.game.height - this.height;
            console.log(this.speedY);
        }
    }
    resize() {
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedY = -8 * this.game.ratio;
        this.flapSpeed = 5 * this.game.ratio;
    }
    isTouchinTop() {
        return this.y <= 0;
    }
    isTouchingBotton() {
        return this.y >= this.game.height - this.height;
    }
    flap() {
        if(!this.isTouchinTop()) {
            this.speedY = -this.flapSpeed;
        }
    }
}