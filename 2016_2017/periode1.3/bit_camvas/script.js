var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

class Rectangle {
    constructor(x, y) {
        this.x = x; //eigenschap this.x
        this.y = y; //eigenschap this.y
        this.state = false;

        addEventListener('mousedown',(evt)=>{
          var rect = canvas.getBoundingClientRect();
          let mouseX = evt.clientX - rect.left;
          let mouseY = evt.clientY - rect.top;
          if(mouseX > this.x && mouseX < this.x+100 && mouseY > this.y && mouseY < this.y + 100){
            this.state = !this.state;
            this.draw(context);
          }
        })
    }

    draw(context) {
        context.beginPath();
        if(this.state == true){
          context.fillStyle = "#ff0000";
        } else {
          context.fillStyle = "#00ff00";
        }
        context.lineWidth = 4;
        context.rect(this.x, this.y, 100, 100);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

for(var rij=0; rij<8; rij++){
  var y = 100*rij;
  for (var kolom = 0; kolom < 8; kolom++) {

      var x = kolom * 100;
      var p = new Rectangle(x, y);
      //test de eigenschap state met een random getal
      // als getal kleiner is dan 0.5 is de state true
      // zo krijg je ongeveer dat de helft true en de helft false is
      if(Math.random()<0.5){
        p.state = true;
      } else {
        p.state = false;
      }
      p.draw(context)
  }
}
