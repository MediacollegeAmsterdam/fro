window.addEventListener("load",loaded,false);

function loaded(){
	var containger = document.getElementById("container");
	var myAssignment = document.getElementById("myAssignment");
	var myAnswer = document.getElementById("myAnswer");
	var feedback = document.getElementById("feedback");
	var mySum;
	var sound = new Audio();
	
	function init(){
		var a = Math.floor(Math.random()*9+1);
		var b = Math.floor(Math.random()*9+1);
		mySum = a + " * " + b;
		myAssignment.innerHTML = mySum;
		myAnswer.focus();
	}
	
	init();
	
	myAnswer.addEventListener("keydown",keyPressed,false);
	
	function keyPressed(evt){
		if(evt.keyCode == 13)
		{
			if(eval(mySum) == myAnswer.value){
				feedback.src = "img/goed.png";
				sound.src = "img/good.wav";
				sound.play();
			} else {
				feedback.src = "img/fout.png";
				sound.src = "img/wrong.wav";
				sound.play();				
			}
		window.setTimeout(waiting,2000);
			
		}
	}
	
	function waiting(){
		feedback.src = "img/feedback.png";
		myAnswer.value ="";
		init();
	}
	
}