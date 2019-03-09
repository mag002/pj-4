var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "lightblue";
    c.stroke();
  };
  this.update = function() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
var circleArray = [];
for (var i = 0; i < 10; i++) {
  var randomX = Math.random() * innerWidth;
  var randomY = Math.random() * innerHeight;
  var randomDx = (Math.random() - 0.5) * 8;
  var randomDy = (Math.random() - 0.5) * 8;

  circleArray.push(new Circle(randomX, randomY, 30, randomDx, randomDy));
}
var mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse.x + " - " + mouse.y);
});

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  // console.log(circle);
}
animate();
