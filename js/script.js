const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgba(0, 0, 0, 0.50)";

let mouse = {
  x: 0,
  y: 0,
};

let counter = 1;

const ripple = [];
const colors = ["#FFFFFF", "#2C3E50", "#4CA1AF"];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = (colors) => {
  return colors[getRandomNumber(0, colors.length - 1)];
};

class Wave {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.increment = getRandomNumber(2, 5);
  }
  draw() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = getRandomColor(colors);
    ctx.shadowColor = getRandomColor(colors);
    ctx.shadowBlur = 100;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
  }
  update() {
    this.radius += this.increment;
    this.draw();
  }
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  ripple.push(new Wave(mouse.x, mouse.y, getRandomNumber(20, 50)));
});

const animate = () => {
  counter++;
  ripple.forEach((w) => {
    w.update();
    if ((w.radius > 100 || w.radius > 300) && counter % 2 == 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripple.shift();
      counter = 0;
    }
  });
  requestAnimationFrame(animate);
  console.log(counter);
};

animate();
