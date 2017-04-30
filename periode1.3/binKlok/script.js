var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var time;
var myTime = document.getElementById("myTime");

class Bit{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = true;
    this.image_true = new Image();
    this.image_true.src = "true.jpg";
    this.image_false = new Image();
    this.image_false.src = "false.jpg";
  }

  draw(context){
    if(this.state){
      this.image_true.addEventListener('load',()=>{
        context.drawImage(this.image_true,this.x,this.y);
      })
    } else {
      this.image_true.addEventListener('load',()=>{
        context.drawImage(this.image_false,this.x,this.y);
      })
    }

  }
}


function animate(){
  time = new Date();
  myTime.value = time.getHours() +":"+ time.getMinutes() + ":"+ time.getSeconds();

}

setInterval(animate,10)
