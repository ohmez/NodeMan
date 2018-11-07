var Letter = function (letter) {
    this.value = letter;
    this.hold = '-';
    this.guessed = false;
    this.return = function () {
      if(this.guessed) {
      return this.value;}
      if(!this.guessed) {
      return this.hold;}
      }; // end return function/key.
    this.check = function(letter) {
      if(letter == this.value) {
      this.guessed = true; 
      this.return();
      } else {this.return();}
      };// end check function/key.
      // console.log(this);    
};// end Letter function 


module.exports = Letter;


