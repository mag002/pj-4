var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //JAV BOM
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
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.x += this.dx;

    this.draw();
  };
}
var circle = [];

for (var i = 0; i < 10; i++) {
  var randX = Math.random() * window.innerWidth;
  var randY = Math.random() * window.innerHeight;
  var randDx = (Math.random() - 0.5) * 8;
  var randDy = (Math.random() - 0.5) * 8;
  circle.push(new Circle(randX, randY, 30, randDx, randDy));
}

function drawCircle() {
  c.clearRect(0, 0, innerWidth, innerHeight);

  requestAnimationFrame(drawCircle);
  for (var i = 0; i < circle.length; i++) {
    circle[i].update();
  }
}
drawCircle();
