function Letter () {
this.value = 'a' ;
this.hold = '-';
this.guessed = false;
this.return = function () {
  if(guessed) {
  return this.value;}
  if(!guessed) {
  return this.hold;}
  }; // end return function/key.
this.check = function(letter) {
  if(letter == this.value) {
  this.guessed = true; 
  this.return();
  } else {this.return();}
  };// end check function/key.
};// end Letter funcion 
