var Word = require('./word.js');
var inquirer = require('inquirer');

var totalGuesses = 10;
var words = ['naruto', 'league of legends', 'death note', 'uzumaki', 'hinata', 'asta', 'urameshi'];
var rando = Math.floor(Math.random() * words.length);
var guess = new Word(words[rando]);
words.splice(rando,1);
var totalCorrect = 0;
var totalOptions = 0;

for (x = 0; x < guess.created.length; x ++) {
  if(guess.created[x].value) {
totalOptions += 1;}
}

function round () {
 inquirer.prompt([{type: 'input', message: guess.populate() +'\nPress any letter then enter to make your guess', name: 'guess'}])
.then(answers => {
  check(answers);
  if(totalCorrect == totalOptions) {
    console.log("You've Guessed It!");
    console.log(guess.lettersArr.join(' '));
    nextWord();
    return;
  } else if (totalGuesses <= 0) {
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
  if(!correct) {
    totalGuesses -= 1; 
  }
};
function nextWord () {
  if(words.length == 0) {
    console.log("YOU'VE WON IT ALL!!!!!!! \nCONGRATS WINNER");
    words = ['naruto', 'league of legends', 'death note', 'uzumaki', 'hinata', 'asta', 'urameshi'];
    console.log('words: '+ '\n'+words.join('\n'));
  } else {
    totalCorrect = 0;
    totalOptions = 0;
    totalGuesses = 10;
    rando = Math.floor(Math.random() * words.length);
    guess = new Word(words[rando]);
    words.splice(rando,1);
    for (x = 0; x < guess.created.length; x ++) {
      if(guess.created[x].value) {
    totalOptions += 1;}
    }
    round();    
  }
};
