var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //JAV BOM
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Arc / Circle
c.beginPath(); //không có thì sẽ nối với điểm trước đó
c.strokeStyle = "#ffffff";
c.arc(300, 300, 30, Math.PI * 2, false);
c.stroke();

for (var i = 0; i < 5; i++) {
  //make bubble of ocean animate
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath(); //không có thì sẽ nối với điểm trước đó
  c.arc(x, y, 30, Math.PI * 2, false);
  c.stroke();
}
