let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

const car = new Car();
const bg = new Background(0,0);
const bg2 = new Background(0,bg.size.height);
let enemies = [];

setInterval(() => {
    enemies.push(new Enemy());
  }, Math.random() * (1500 - 1000) + 1000);//enemy speed become random

function animate(){
    c.clearRect(0,0,canvas.width, canvas.height);
    bg.update(car.isDead);
    bg2.update(car.isDead);
   
    car.update();
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].update(car.isDead);
        //enemies[i].collision(car);
       // enemies[i].collisionWithBullet(allBullets);
        // if (enemies[i].isCrossedBorder) {
        //   car.isDead = true;
        // }
      }
    requestAnimationFrame(animate);
    
}
animate();


//listener 
//when the button is pressed i.e. when key is pressedor down

document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowUp") car.velocity.y = -5 //when up -ve
    if (event.code == "ArrowDown") car.velocity.y = 5;//when down +ve
    if (event.code == "ArrowLeft") car.velocity.x = -5;
    if (event.code == "ArrowRight") car.velocity.x = +5;
    // if (event.code === "Space")
    // allBullets.push(
    //   new Bullet(car.position.x + car.size / 2.8, car.position.y)
    // );
});

//when the key press is releaed 
document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowUp") car.velocity.y = 0;
    if (event.code === "ArrowDown") car.velocity.y = 0;
    if (event.code === "ArrowLeft") car.velocity.x = 0;
    if (event.code === "ArrowRight") car.velocity.x = 0;
})