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
       // this.isCrossedBorder = false;
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
    // checkBottomCollision() {
    //     if (this.position.y + this.size.height >= canvas.height) {
    //       this.isCrossedBorder = true;
    //     }
    // }

    collision(car){
        if(this.position.x+this.size.width> car.position.x&&
            this.position.x< car.position.x+car.size.width&&
            this.position.y + this.size.height> car.position.y&&
            this.position.y< car.position.y+car.size.height){
                car.velocity.y = 0;
                car.velocity.x =0;
                console.log("collide");
                car.isDead = true;
            }
    }

      update(carDead) {
        this.draw();
        if (!carDead) {
            this.move();
            //this.checkBottomCollision();
          }
    }
}