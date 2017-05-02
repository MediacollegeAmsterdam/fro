var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


class Player{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  draw(){
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.arc(this.x,this.y,5,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
}


class Bit {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.state = false;
  }

  draw(){
    context.beginPath();
    if(this.state){
      context.fillStyle = "white";
    } else {
      context.fillStyle = "blue";
    }
    context.rect(this.x,this.y,100,100);
    context.stroke();
    context.fill();
    context.closePath();
  }
}

var jelle = new Player(150,150);

addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
      jelle.x -=5;
      break;
      case 38:
      jelle.y -= 5;
      break;
      case 39:
      jelle.x += 5;
      break;
      case 40:
      jelle.y += 5;
      break;
    default:

  }
})

var grid = [];
var n = 64;
var nRow = 8;

for(let i=0; i<n; i++){
  var x = i % nRow * 100;
  var y = Math.floor(i/nRow) * 100;
  var bit = new Bit(x,y);
  grid.push(bit);
}



function animation(){
  context.clearRect(0,0,800,800);
  for (var i = 0; i < grid.length; i++) {
    if(i == findGridIndex(jelle.x,jelle.y)){
      grid[i].state = true;
    } else {
      grid[i].state = false;
    }
    grid[i].draw();
  }
  jelle.draw();
}

setInterval(animation,1);


function findGridIndex(x,y){
  return Math.floor(x/100) + Math.floor(y/100)*nRow;
}
