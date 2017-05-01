class Bit{
  constructor(x,y){
    this.state=false;
    this.x = x;
    this.y = y;

    addEventListener("mousedown",(evt)=>{
      var mouse = getMousePos(canvas,evt);
      if(mouse.x >= this.x && mouse.x < this.x+80 && mouse.y >= this.y && mouse.y < this.y+80){
        this.state = !this.state;
        this.draw(context);
      }
    });

    function getMousePos(canvas, evt){
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }


  }
  draw(context){
    if(this.state){
      context.fillStyle = "red";
    } else {
      context.fillStyle = "white";
    }

    context.strokeRect(this.x,this.y,80,80);
    context.fillRect(this.x,this.y,80,80);
  }
}
