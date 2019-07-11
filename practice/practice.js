document.addEventListener('DOMContentLoaded', function() {
	console.log("the page has loaded");
	var givenNumber=prompt("Give me a number");
	console.log(givenNumber);
	console.log(typeof givenNumber);
	var number=parseInt(givenNumber);
	console.log(number);
	console.log(typeof number);
	if(number<4){
		console.log("Yasss");
	} else if (number >=4) {
		console.log("this number is NOT less than four!");
	}
	else{
		console.log("You screwed up")
	}
})