var word = require('./word.js');
var inquirer = require('inquirer');

var totalG = 10;
var words = ['banana', 'naruto', 'league of legends'];
var rando = Math.floor(Math.random() * words.length);
var guess = new Word(words[rando]);
var totalO = 0;
for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value) {
totalO += 1;}
}

inquirer.prompt([{type: 'input', message: 'Press any letter to start NodeMan', name: 'guess'}])
.then(answers => {
  guess.checker(answers.guess);
});
