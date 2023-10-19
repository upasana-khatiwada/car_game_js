class Car {
    constructor() {
        this.position = {
            x: canvas.width / 2.8,
            y: canvas.height / 2.7,

        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.size = {
            width: 50,
            height: 100,
        };
        this.isCrossedBorder = false;
        //this.isAlive = true;
        this.isDead = false;
        this.image = new Image();
        this.image.src = "images/orange-car.png"
    }

    draw() {
        c.beginPath();
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height,
        )

    }
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    checkBorderCollision() {
        if (this.position.y + this.size.height >= canvas.height) {
            this.isCrossedBorder = true;
            this.position.y = canvas.height - this.size.height;
        } else if (this.position.y <= 0)
        {
            this.position.y= 0;
        }
        if (this.position.x + this.size.width >= canvas.width) {
            this.isCrossedBorder = true;
            this.position.x = canvas.width - this.size.width;
        } else if (this.position.x <= 0)
        {
            this.position.x= 0;
        }
        
    }

    update() {
        this.draw();
        if (!this.isDead) {
            this.move();
            this.checkBorderCollision();
        }
    }
}