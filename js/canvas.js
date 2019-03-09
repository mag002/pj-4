var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //JAV BOM
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined
};
var maxRadius = 40;
var minRadius = 2;

var colorArray = [
  //Tạo mảng màu random // search kuler lấy màu
  "lightcoral",
  "lightblue",
  "lightcyan",
  "lightgreen"
  // '#FC1D29',
  // '#FF33B1',
  // '#EB33FF',
  // '#3740F4',
  // '#A82DF7',
  // '#4AD3D3',
];

window.addEventListener("mousemove", function(event) {
  // console.log(event);   //Xem thử object xem có gì
  mouse.x = event.x;
  mouse.y = event.y;
}); //jav bom

//reponsive
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth; //JAV BOM
  canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius; //Để mỗi vòng tròn có Min riêng biệt
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; //Để vậy thì ra 1 màu

  this.draw = function() {
    //ES6 JAV ADVANCED
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillStyle=colorArray[Math.floor(Math.random()*colorArray.length)];//Để vậy màu sẽ thay đổi liên tục
    c.fillStyle = this.color;
    c.fill();
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

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 && //chỈ những vòng tròn trong phạm vi 50px của trỏ
      mouse.y - this.y < 50 && // sẽ tăng kích thước
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        //Giới hạn độ lớn của vòng tron

        this.radius += 1;
      }

      // } else{ sẽ lỗi
    } else if (this.radius > this.minRadius) {
      //nếu ko có thì vòng tròn nhỏ sẽ biến mất
      this.radius -= 1; //ngược lại nằm ngoài thì nhỏ lại
    }
    this.draw();
  };
}

var circleArray = [];

for (let i = 0; i < 100; i++) {
  // var x=200;
  var x = Math.random() * innerWidth; //random pốition
  // var y=200;
  var y = Math.random() * innerHeight;
  // var dx=10;
  var dx = (Math.random() - 0.5) * 8; //để dx có thể âm hoặc dương
  //nếu ko thì sẽ chỉ từ phải qua và trên xuống
  // var dy=10;
  var dy = (Math.random() - 0.5) * 8;
  // var radius=30;
  var radius = Math.random() * 3 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animation() {
  requestAnimationFrame(animation); //react loop basicly
  // console.log('asd') //test animte;
  c.clearRect(0, 0, innerWidth, innerHeight);
  // c.beginPath();
  // c.arc(x,y,radius,0,Math.PI*2,false);
  // c.strokeStyle="lightblue";
  // c.stroke();

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update(); //Đổi i thành 1 con số sẽ vui
  }
  // if(x+radius>innerWidth || x-radius<0){
  //     dx=-dx;
  // }
  // if(y+radius>innerHeight || y-radius<0){
  //     dy=-dy;
  // }
  // y+=dy;
  // x+=dx;
}

animation();
