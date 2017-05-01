var mySvg = document.getElementById('mySvg');
var decBox = document.getElementById("decBox");
var binBox = document.getElementById("binBox");
var octBox = document.getElementById("octBox");
var hexBox = document.getElementById("hexBox");
var dec = 0;
var ns = "http://www.w3.org/2000/svg";

var byte = [];
var bin = [128,64,32,16,8,4,2,1];

for(let i=0; i<8; i++){
  var pixel = document.createElementNS(ns,'rect');
  pixel.setAttribute('class','bit');
  pixel.setAttribute('x',100*i);
  pixel.setAttribute('y',0);
  pixel.setAttribute('width',100);
  pixel.setAttribute('height',100);
  pixel.setAttribute('fill','	lightskyblue');
  pixel.setAttribute('stroke','aliceblue');
  pixel.value = i;
  pixel.state = false;
  var text = document.createElementNS(ns,'text');
  var textNode = document.createTextNode(Math.pow(2,(7-i)));

  text.setAttribute('x',10+100*i);
  text.setAttribute('y',20);
  text.setAttribute('width',100);
  text.setAttribute('height',100);
  text.setAttribute('fill','aliceblue');
  text.setAttribute('font-family',"Verdana");
  text.setAttribute('font-size','12px');

  text.setAttribute('textContent',"hallo");
  text.appendChild(textNode)
  mySvg.appendChild(pixel);
  mySvg.appendChild(text);
  byte.push(pixel);

}

for (var i = 0; i < byte.length; i++) {
  byte[i].addEventListener('mousedown',(pixel)=>{
      pixel.target.state = ! pixel.target.state
    if(pixel.target.state){
      pixel.target.style.fill = "blue";
    } else {
      pixel.target.style.fill = "lightskyblue";
    }
  })
}

addEventListener('click',()=>{
  dec = 0;
  for (var i = 0; i < byte.length; i++) {
    if(byte[i].state){
      dec += bin[i];
    }
  }
  decBox.value = dec;
  binBox.value = "0b" + fill(dec.toString(2),8);
  octBox.value = "0" + dec.toString(8);
  hexBox.value = "0x" + fill(dec.toString(16),2);
})

function fill(num,len){
  var ans = num;
  while(ans.length<len){
    ans = "0" + ans;
  }
  return ans
}
