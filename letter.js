function Letter (val) {
this.value = val ;
this.hold = '-';
this.guessed = false;
this.return = function () {
  if(this.guessed) {
console.log(this.value);
  return this.value;}
  if(!this.guessed) {
console.log(this.hold);
  return this.hold;}
  }; // end return function/key.
this.check = function(letter) {
  if(letter == this.value) {
console.log('correct');
  this.guessed = true; 
  this.return();
  } else {this.return();}
  };// end check function/key.
  console.log(this);
};// end Letter function 


module.exports = new Letter();


