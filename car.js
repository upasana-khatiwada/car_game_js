class Car{
    constructor(){
        this.position = {
            x: canvas.width/2.5,
            y: canvas.height/2.7,
            
        }
        this.velocity ={
            x: 0,
            y: 0,
        }
        this.size = {
            width: 50,
            height: 100,
        };
        //this.isAlive = true;
        this.isDead =false;
        this.image = new Image();
        this.image.src = "images/orange-car.png"
    }

    draw(){
        c.beginPath();
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height,
        )

    }
    move(){
        this.position.x += this.velocity.x;
        this.position.y+= this.velocity.y;
    }

    update(){
        this.draw();
        if (!this.isDead) {
            this.move();
          }
    }
}