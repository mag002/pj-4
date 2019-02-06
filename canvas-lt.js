var canvas =document.querySelector("canvas");
canvas.width=window.innerWidth; //JAV BOM
canvas.height=window.innerHeight;
var c =canvas.getContext("2d");
c.fillStyle="lightcoral";// để trước fill Rect
c.fillRect(100,0,100,100);//x,y,width,height

c.fillStyle="lightblue";// để trước fill Rect
c.fillRect(150,150,100,100);

c.fillStyle="lightcyan";// để trước fill Rect
c.fillRect(100,200,100,100);


//line

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle="#fa34fa"
c.stroke();

//Arc / Circle
c.beginPath()//không có thì sẽ nối với điểm trước đó
c.arc(300,300,30,Math.PI *2 ,false);
c.stroke();

for(var i=0;i<5;i++){//make bubble of ocean animate
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.beginPath()//không có thì sẽ nối với điểm trước đó
    c.arc(x,y,30,Math.PI *2 ,false);
    c.stroke();

}