var letter = require('./letter.js');

function Word (word) {
this.word = word.trim();
console.log(this.word);
this.lettersArr = this.word.split("");
console.log(this.lettersArr);
this.created = [];
this.create = function () {
	for (x=0; x<this.lettersArr.length; x++) {
	if(this.lettersArr[x] == ' ') {
	this.created.push(' ');
	} else {
		this.created.push(new Letter(this.lettersArr[x]));
		}
	}
}; // end create function/key.
	
this.populate = function() {
	var pop = [];
	for (x=0; x<this.created.length; x++) {
	if(this.created[x] == ' ') {pop.push(' ');} else {
	pop.push(this.created[x].return());
	}
	}// end loop
	console.log(pop.join(" "));
};// end populate function/key
	
this.checker = function (guess) {
	for (x=0; x<this.created.length; x++) { 
	if(this.created[x] == ' ') {
	//do nothing
	} else {
	this.created[x].check(guess); }
	}
	this.populate();
};// end checker function/key
	
this.create(); // runs the create function upon new Word(); 
};// end Word function 

var banana = new Word('  banana cream pie  ');
