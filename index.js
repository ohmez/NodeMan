var Word = require('./word.js');
var word = new Word();
var inquirer = require('inquirer');

var totalG = 10;
var words = ['banana', 'naruto', 'league of legends'];
var rando = Math.floor(Math.random() * words.length);
var guess = new word(words[rando]);
var totalC = 0;
for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value) {
totalO += 1;}
}

inquirer.prompt([{type: 'input', message: 'Press any letter to start NodeMan', name: 'guess'}])
.then(answers => {
for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value == answers.guess) {
  totalC += 1;
  }
}
  
if(totalC <= 0) {
  totalG -= 1; 
  console.log(totalG + ' Guesses remaining.');
}
  guess.checker(answers.guess);
});
