var Word = require('./word.js');
var inquirer = require('inquirer');

var totalGuesses = 0;
var words = ['banana', 'naruto', 'league of legends'];
var rando = Math.floor(Math.random() * words.length);
var guess = new Word(words[rando]);
var totalCorrect = 0;
var totalOptions = 0;
var totalGuessed = 0;
for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value) {
totalOptions += 1;}
}
console.log('below should be total # of letters to guess excluding spaces')
console.log(totalOptions);
function round () {
inquirer.prompt([{type: 'input', message: 'Press any letter then enter to start NodeMan', name: 'guess'}])
.then(answers => {
  var correct = false;
  if(totalOptions <= totalGuessed && totalCorrect < totalOptions) {
    console.log("You've ran out of Gueses \nTry again next time!");
  }
  if(totalCorrect == totalOptions) {
    console.log("You've won it!");
  }
for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value == answers.guess) {
    // if(!correct) {
      totalCorrect += 1;
      correct = true;
    // }
  
  }
}
totalGuessed += 1;
if(!correct) {
  totalGuesses += 1; 
  console.log((totalOptions-totalGuesses) + ' Guesses remaining.');
}
  guess.checker(answers.guess);
if(totalOptions > totalGuessed) {
  round();
}
});
};
round();