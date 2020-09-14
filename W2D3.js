//1- Write a function isTallEnough that takes a height (number) in inches, 
//and returns true if the input is greater than or equal to 48, and false if it's less than 48 inches.
//Calling your function should result in:
function isTallEnough(num) {
	if (num > 47) {
		return true
	}   return false
}
isTallEnough(72); //true
isTallEnough(28); //false

function isTallEnough(num) {
	//check number
	if (num > 48) {
		//if it is larger than 48 return true
		return true;
	}
     //otherwise return false
	 return false;
}
console.log(isTallEnough(72))
console.log(isTallEnough(28))

//2- Write a function isGoodFreethrowShooter that takes a shooting percentage
// (a number you can assume will be between 0 and 1 -- exclusive of 1).
//and returns based on the following criteria:
// If the number is between 0-0.65, return "Horrible freethrow shooter"
// If the number is between 0.65-0.80 return "Decent freethrow shooter"
// If the number is between 0.80-1.00 return "Great freethrow shooter"
// Each range is inclusive of the lower bound, and exclusive of the upper -- in other words, 
//0.65 is counted as a "Decent freethrow shooter" (not "Horrible freethrow shooter") 
//and 0.80 is considered a "Great freethrow shooter" (not "Decent freethrow shooter"). 
//Additionally, you can get a number as high as 0.99, but never 1 
//(this is what the original problem statement means by "exclusive of 1").
function isGoodFreethrowShooter(percent) {
	if (percent < 0.65) {
		return 'Horrible freethrow shooter'
	} else if (percent < 0.8) {
		return 'Decent freethrow shooter'
	} else if (percent < 1) {
		return 'Great freethrow shooter'
	}
}
// Calling your function should result in:
function isGoodFreethrowShooter(per) {
	//if number is out of range 
	//return wrong input
	if (per >= 1 && per < 0) {
		return 'Out of Range';
	}
	//if number is between (0 - 0.65) return "Horrible freethrow shooter"
	else if (per < 0.65) {
		return "Horrible freethrow shooter";
	}
	//if number is between (0.65- 0.8) return "Decent freethrow shooter"
	else if (per < 0.8) {
		return "Decent freethrow shooter";
	}
	//if number is between (0.8- 1) return "Great freethrow shooter"
	else return "Great freethrow shooter"
}


console.log(isGoodFreethrowShooter(0.90)); //"Great freethrow shooter"
console.log(isGoodFreethrowShooter(0.09)); //"Horrible freethrow shooter"
console.log(isGoodFreethrowShooter(0.75)); //"Decent freethrow shooter"