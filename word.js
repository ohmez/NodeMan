var letter = require('./letter.js');

function Word (word) {
this.word = word;
this.lettersArr = word.split("");
this.created = [];
this.create = function () {
for (x=0; x<this.lettersArr.length; x++) {
this.created.push(new Letter(this.lettersArr[x]));
}
  }; // end create function/key.
this.populate = function() {
	var pop = [];
for (x=0; x<this.created.length; x++) {
pop.push(this.created[x].return());
	};// end loop
console.log(pop.join(" "));
};// end populate function/key
this.checker = function (guess) {
for (x=0; x<this.created.length; x++) { 
this.created[x].check(guess);
}
this.populate();
};// end checker function/key
this.create(); // runs the create function upon new Word(); 
};// end Word function 

var banana = new Word('bananas');
