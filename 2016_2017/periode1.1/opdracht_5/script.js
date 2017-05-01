var mijnFormulier = document.getElementById("mijnFormulier");
var invoerGeboortedatum = document.getElementById("invoerGeboortedatum");
var mijnDiv = document.getElementById('mijnDiv');
var mijnButton = document.getElementById("mijnButton")
var geboorteDatum = new Date();
var leeftijd;
var nu;
var temp;

var dag = document.getElementById('dag');
var maand = document.getElementById('maand')

for(let i = 1; i<31; i++){
  // select dagen
  let option = document.createElement('option');
  let value = document.createAttribute('value');
  option.value = i;
  let textNode = document.createTextNode(i);
  option.appendChild(textNode);
  dag.appendChild(option);
}

for(let i=0;i<12; i++){
  let option = document.createElement('option');
  let value = document.createAttribute('value');
  let months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','october','november','december'];
  option.value = i;
  let textNode = document.createTextNode(months[i]);
  option.appendChild(textNode);
  maand.appendChild(option);
}

var jaar = document.getElementById('jaar');

mijnButton.addEventListener('click',berekenLeeftijd);

function berekenLeeftijd(){
  nu = new Date();
  geboorteDatum = new Date(jaar.value,maand.value,dag.value);
  mijnDiv.innerHTML+= "je geboortedatum is: " + geboorteDatum+ "<br />";
  leeftijd = (nu - geboorteDatum)/(1000*60*60*24);//leeftijd is milliseconden
  mijnDiv.innerHTML += "er zijn tussen nu en jouw geboorte "  + Math.floor(leeftijd) + " dagen verstreken<br />";
  mijnDiv.innerHTML += "dat komt overeen met "  + Math.floor(leeftijd/365.25) + " jaar en ";
  mijnDiv.innerHTML +=  Math.floor(leeftijd % 365.25)  + " dagen<br />";
};
