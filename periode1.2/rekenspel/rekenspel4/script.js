var myScore;
var myTime;

var highscore = {};
var highScores = [];

//genereer 10 testscores om een highscore na te maken
for(let i=0; i<10; i++){
  myScore = Math.floor(Math.random()*100);
  myTime = Math.floor(Math.random()*100);
  highscore = {score:myScore, tijd: myTime}
  highScores.push(highscore);
};

//laat in de console per score de score en de tijd zien
for(let i=0; i<highScores.length; i++){
  console.log(i, highScores[i].score, highScores[i].tijd)
}
console.log("------------")

//sorteer de highscores oplopend op tijd
highScores.sort(function(a,b){
  console.log("hoi",a,b)
  return a.tijd-b.tijd})

//laat in de console per score de score en de tijd zien
for(let i=0; i<highScores.length; i++){
  console.log(i, highScores[i].score, highScores[i].tijd)
}
