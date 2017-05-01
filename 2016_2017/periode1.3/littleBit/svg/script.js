var mySvg = document.getElementById('mySvg');
var rectWidth = 10; rectHeight=10;
var numOnRow =80;
var n = 80*80;
var myImage = [];

var ega = ["#000000","#0000aa","#00aa00","#00aaaa","#aa0000","#aa00aa","#aa5500","#aaaaaa","#555555","#5555ff","#55ff55","#55ffff","#ff5555","#ff55ff","#ffff55","#ffffff"];


for(i=0; i<n;i++){
  var x = (i%numOnRow)*rectWidth;
  var y = Math.floor(i/numOnRow)*rectHeight;
  var col = Math.floor(Math.random()*16);

  var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  rect.setAttribute("x",x);
  rect.setAttribute("y",y);

  rect.setAttribute('class','bit');
  rect.setAttribute('width',rectWidth);
  rect.setAttribute('height',rectHeight);
  rect.setAttribute("fill",ega[col]);
  mySvg.appendChild(rect);
  myImage.push(rect);
}

function animate(){
  for (var i = 0; i < myImage.length; i++) {
    myImage[i].style.fill = ega[ Math.floor(Math.random()*16)]
  }
}

setInterval(animate,500);
