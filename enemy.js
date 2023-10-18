class Enemy {
    constructor() {
        this.position = {
            x: Math.random() * (canvas.width - 40)+40,
            y: canvas.height+20,
        };
        this.velocity = {
            x: 0,
            y: -5,
        }
        this.size = {
            width: 50,
            height: 100,
        }
        this.isCrossedBorder = false;
        this.isDead = false;
        const images = ["images/black-car.png", "images/police-car.png"];
        this.image = new Image();
        this.image.src = images[Math.floor(Math.random() * 2)];




    }

    draw(){
        c.beginPath();
        c.fillStyle = "red";
       // if (this.isDead) this.image.src = "./explosion.png";
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height,
        );
    }
    move() {
        this.position.y += this.velocity.y;
    }
    checkBottomCollision() {
        if (this.position.y + this.size.height >= canvas.height) {
          this.isCrossedBorder = true;
        }
      }
      update(carDead) {
        this.draw();
        if (!carDead) {
            this.move();
            this.checkBottomCollision();
          }
    }
}