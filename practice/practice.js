document.addEventListener('DOMContentLoaded', function() {
  // your code goes below
console.log("the page is now loaded!");
var givenNumber = prompt("give me a number");
console.log(typeof givenNumber);
var numAsint = parseInt(givenNumber);
console.log(numAsint);
console.log(typeof numAsint)
if  ( numAsint <4){
	console.log("this number is less than four");
}else{
	console.log("something went wrong")
}

})