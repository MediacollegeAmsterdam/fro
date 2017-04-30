var mySvg = document.getElementById('mySvg');
var width = 1000;
var height = 600;
mySvg.setAttribute("width", width)
mySvg.setAttribute("height", height)

var car = document.createElementNS('http://www.w3.org/2000/svg',"image");
car.setAttributeNS('http://www.w3.org/1999/xlink','href', 'car.png');
car.setAttribute('x',"0");
car.setAttribute('y',"0");
car.setAttribute('id','myCar')


for(let i=0; i< Math.floor(height/20); i++){
  var line = document.createElementNS('http://www.w3.org/2000/svg',"line");
  if(i*20%100 == 0){
      line.setAttribute('stroke-width',"4");
  } else{
      line.setAttribute('stroke-width',"1");
  }
  line.setAttribute('x1',"0");
  line.setAttribute('y1',i*20);
  line.setAttribute('x2',width);
  line.setAttribute('y2',i*20);
  line.setAttribute('stroke','black');
  mySvg.appendChild(line);
}


for(let i=0; i< width/20; i++){
  var line = document.createElementNS('http://www.w3.org/2000/svg',"line");
  if(i*20%100 == 0){
      line.setAttribute('stroke-width',"4");
  } else{
      line.setAttribute('stroke-width',"1");
  }
  line.setAttribute('x1',i*20);
  line.setAttribute('y1',0);
  line.setAttribute('x2',i*20);
  line.setAttribute('y2',height);
  line.setAttribute('stroke','black');
  mySvg.appendChild(line);
}

mySvg.appendChild(car);
