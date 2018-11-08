var Word = require('./word.js');
var inquirer = require('inquirer');

var totalGuesses = 10;
var words = ['banana', 'naruto', 'league of legends'];
var rando = Math.floor(Math.random() * words.length);
var guess = new Word(words[rando]);
words.splice(rando,1);
console.log(words);
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
 inquirer.prompt([{type: 'input', message: guess.populate() +'\nPress any letter then enter to make your guess', name: 'guess'}])
.then(answers => {
  check(answers);
  if(totalCorrect == totalOptions) {
    console.log("You've won it!");
    console.log(guess.lettersArr.join(' '));
    nextWord();
    return;
  }
  if (totalGuesses <= 0) {
    console.log("You've ran out of Gueses \nTry again next time!");
    console.log(guess.lettersArr.join(' '));
  } else {
    console.log((totalGuesses) + ' Guesses remaining.');
  }
  guess.checker(answers.guess);
  if(totalGuesses >= 1) {
    round();
  }
});
};// end round function 
round();
function check (answers) {
  var correct = false;
  for (x = 0; x < guess.created.length; x ++) {
    if(guess.created[x].value == answers.guess) {
      if(!guess.created[x].guessed) {
        totalCorrect += 1;
        correct = true;
        }
        
      }
  }
  totalGuessed += 1;
  if(!correct) {
    totalGuesses -= 1; 
  }
};
function nextWord () {
  rando = Math.floor(Math.random() * words.length);
  guess = new Word(words[rando]);
  words.splice(rando,1);
  round();
  guess.populate();
};
