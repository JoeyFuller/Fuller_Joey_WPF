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


