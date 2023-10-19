let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

const car = new Car();
const bg = new Background(0, 0);
const bg2 = new Background(0, bg.size.height);
let enemies = [];
let score = 0;

setInterval(() => {
  enemies.push(new Enemy());
}, Math.random() * (1500 - 1000) + 1000);//enemy speed become random

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  bg.update(car.isDead);
  bg2.update(car.isDead);

  car.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update(car.isDead);
    enemies[i].collision(car);

    if(enemies[i].position.y+ enemies[i].size.height<0 ){
      score++;
      enemies.splice(i, 1);
      i--;
    }
  }

  c.font = "30px Arial";
  c.fillStyle = "white";
  c.fillText(score, 10, 40);

  if (car.isDead) {
    c.font = "30px Arial";
    c.fillStyle = "white";
    c.fillText("GAME OVER!", 150, canvas.height / 2);
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