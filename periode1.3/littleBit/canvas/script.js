var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

class Rectangle{
  constructor(x,y){
    this.x = x; //eigenschap this.x
    this.y = y; //eigenschap this.y
  }
  draw(context){
    context.beginPath();
    context.fillStyle = "#ff0000";
    context.lineWidth = "4";
    //teken de rechthoek op coordinaten this.x, this.y
    context.rect(this.x,this.y,96,96);
    context.stroke();
    context.fill();
    context.closePath();
  }
}

for(let i =0; i<8;i++){
  var p = new Rectangle(i*100,0);
  p.draw(context);
}
