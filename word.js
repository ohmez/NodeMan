var Letter = require('./letter.js');


var Word = function (word) {
	this.word = word.trim();
	this.lettersArr = this.word.split("");
	this.created = [];
	this.create = function () {
		for (x=0; x<this.lettersArr.length; x++) {
		if(this.lettersArr[x] == ' ') {
		this.created.push(' ');
		} else {
			var a = new Letter(this.lettersArr[x])
			this.created.push(a);
			}
		}
	}; // end create function/key.
	this.create(); // runs the create function upon new Word(); 
		
	this.populate = function() {
		var pop = [];
		for (x=0; x<this.created.length; x++) {
		if(this.created[x] == ' ') {pop.push(' ');} else {
		pop.push(this.created[x].return());
		}
		}// end loop
		// console.log(pop.join(" "));
		return pop.join(" ");
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
};// end Word function 

// var test = process.argv[2];
// var a = new Word('banana split');
// console.log(a.checker('n'));
// // a.checker('b');

module.exports = Word;