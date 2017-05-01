var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var bitArray = [];
var binair = [128,64,32,16,8,4,2,1];
var decimaal = 0;
var bin = 0;

var binField = document.getElementById('binField');
var decField = document.getElementById('decField');
var hexField = document.getElementById('hexField');


for(let i=0; i<8 ; i++){
  var bit = new Bit(i*100+10,10);
  bit.draw(context);
  bitArray.push(bit);
}

addEventListener('mousedown',()=>{
  decimaal = 0;
  bin = 0;
  for(let i=0; i<bitArray.length;i++){
    bin += bitArray[i].state;
    if(bitArray[i].state){
      decimaal += Number(bitArray[i].state)*binair[i];
    }
  }
  binField.value = fillUp(decimaal.toString(2));
  decField.value = decimaal;
  hexField.value = "0x" + decimaal.toString(16);
})

function fillUp(bin){
  while(bin.length <8){
    bin = "0" + bin;
  }
  return bin;
}
