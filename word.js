var letter = require('./letter.js');

function Word (word) {
this.word = word;
this.lettersArr = word.split();
this.create = function () {
lettersArr.foreach(new letter());
  new letter(); 
  };

};

Word('bananas');
