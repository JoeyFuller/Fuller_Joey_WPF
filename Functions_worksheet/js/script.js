// Joey Fuller
// 12 - 19 - 13
// Functions_worksheet

// Circumference
var circleCircumference = circleRadius(10); // this is the return variable or where the return reports too using a anon function

function circleRadius(radius){  //thi is the function that does the calculations for the circumference
	var circumference = 2 * radius * Math.PI;
	return circumference;//this is the return that spits the results back into the anon function
}

console.log("The circumference of the circle is " + circleCircumference); //simple print out

//START OF Stung!

var stings = stingsPerWeight(10);//the return variable

function stingsPerWeight(weight){ //the main function that calulated the amount of stings needed to kill an animal at a certain weight
	var total = 8.666666667 * weight;
	return total; //the return back to the variable stings
}
console.log("It takes " + stings + " to kill this animal."); //print out of the results to concole.



