var readLineSync = require("readline-sync");

var chalk = require('chalk');

var username = readLineSync.question("Tell me your name : ");
console.log("Hello " + username +" " +  chalk.bgYellow(" ! Welcome to HOW_WELL_DO_YOU_KNOW_ME? "));
score = 0;

function play(q,a) {
  var useranswer = readLineSync.question(q)

  if (useranswer.toUpperCase()=== a.toUpperCase()) {
    console.log(chalk.green("That was the correct answer!!"));
    console.log(chalk.bgMagenta("Your score is: " + ++score));
    console.log(chalk.grey("--------------"));
    score = score +2
  }else {
    console.log(chalk.red("Oops! That was the wrong answer!!"));
    console.log(chalk.bgMagenta("Your score is: " + --score));
    console.log(chalk.grey("--------------"));
  }

}
var highestscores=[
 {
   name : "Atrideb",
   score : 6
 },
 {
   name: "Suyash",
   score: 5
 },
 {
   name: "Ayush",
   score: 7
 },
 {
   name: "Mayank",
   score: 6
 }
 ]

 
 
 questions =[ 
  {
   question : "Where do I live?  ",
   answer : "Hyderabad"
 },
 {
  question : "What is my favourite color? ",
  answer : "Black"
 },
 {
   question : "What is my favourite TV show? ",
   answer : "Black mirror"
 },
 {
   question : "Who is my favourite actor? ",
   answer : "Irfaan khan"
 },
 {
   question : "Wwho is my favourite Director? ",
   answer : "Tarantino"
 },
 ]

 for (i=0;i<questions.length;i++){
   play(questions[i].question,questions[i].answer);
 }
 
 
 for (i=0; i<highestscores.length;i++)
 {
   if(score > highestscores[i].score){
     console.log("Congratulations! You have beaten the highest score.".rainbow);
     break
   }
 }
 
 console.log ("Thank you for taking part in my quiz!!");

