const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: 0,
  y: 0,
};

const ripple = [];

const getRandomNumber = (min, max) => {
    return Math.random()*(max -min) + 1
}

class Wave {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.i = getRandomNumber()
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#000";
    ctx.stroke();
  }
  update(){
  }
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  const a = new Wave(mouse.x, mouse.y, 50);
  ripple.push(a);
  console.log(a);
  ripple.forEach((w) => {
    w.draw();
  });
});

