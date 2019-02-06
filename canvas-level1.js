var canvas =document.querySelector("canvas");
canvas.width=window.innerWidth; //JAV BOM
canvas.height=window.innerHeight;
var c =canvas.getContext("2d");




function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;

    // this.draw=function(){
    this.draw=()=>{ //ES6 JAV ADVANCED
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle="lightblue";
        // c.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);//led color
        c.stroke();
    };
    this.update=()=>{
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }
        this.y+=this.dy;
        this.x+=this.dx;
        this.draw();
    }
}

// var x=200;
// var x=Math.random() * innerWidth;//random pốition
// // var y=200;
// var y=Math.random()*innerHeight;
// // var dx=10; 
// var dx=(Math.random() - 0.5)*10;//để dx có thể âm hoặc dương 
// //nếu ko thì sẽ chỉ từ phải qua và trên xuống
// // var dy=10;
// var dy=(Math.random() -0.5)*10;
// var radius=30;  
var circleArray=[];

for (let i = 0; i < 100; i++) {
    // var x=200;
    var x=Math.random() * innerWidth;//random pốition
    // var y=200;
    var y=Math.random()*innerHeight;
    // var dx=10; 
    var dx=(Math.random() - 0.5)*10;//để dx có thể âm hoặc dương 
    //nếu ko thì sẽ chỉ từ phải qua và trên xuống
    // var dy=10;
    var dy=(Math.random() -0.5)*10;
    var radius=30; 
    circleArray.push(new Circle(x,y,dx,dy,radius));
   
}



function animation(){
    requestAnimationFrame(animation);//react loop basicly
    // console.log('asd') //test animte; 
    c.clearRect(0,0,innerWidth,innerHeight);
    // c.beginPath();
    // c.arc(x,y,radius,0,Math.PI*2,false);
    // c.strokeStyle="lightblue";
    // c.stroke();
 
    for( var i=0 ; i<circleArray.length;  i++){
        circleArray[i].update();//Đổi i thành 1 con số sẽ vui
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