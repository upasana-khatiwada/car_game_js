class Background {
    constructor(x = 0, y = 0) {
        this.position = {
            x: x,
            y: y,
        }

        this.size = {
            width: canvas.width,
            height: canvas.height,
        }
        this.velocity = {
            x: 0,
            y: -1,

        }
        this.bg = new Image();
        this.bg.src = "images/road2.png";
    }
    draw() {
        c.drawImage(
            this.bg,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
    move() {
        if (this.position.y + this.size.height <= 0) {
            this.position.y = this.size.height;
        }
        this.position.y += this.velocity.y;
    }

    update(isDead) {
        this.draw();
        if (!isDead) {
            this.move();
        }
    }
}