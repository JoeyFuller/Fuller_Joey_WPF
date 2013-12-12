//Joey Fuller
//12-5-13
//Conditionals Worksheet

//Last Chance for Gas!

var gasEffciency = 20
var gasReading = prompt("What percentage of your gas tank is left?")
var gasCapacity = 20 //in  gallons
var gasLeft = gasReading*.01
var gallonsLeft = gasCapacity*gasLeft

if(gasReading <= 50){
	console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get cas now while you can!");
}else{
	console.log("Yes, you can make it without stopping for gas!");
}

//End Last Chance for Gas!

//Grade Letter Calculator 

var input = prompt("What is your number grade for the class?")
var gradeAPlus = "A+"
var gradeA = "A"
var gradeBPlus = "B+"
var gradeB = "B"
var gradeCPlus = "C+"
var gradeC = "C"
var gradeD = "D"
var gradeF = "F"

if(input > 94){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeAPLUS + " in the class!");
}else if(input > 89){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeA + " in the class!");
}else if(input > 84){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeBPlus + " in the class!");
}else if(input > 79){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeB + " in the class!");
}else if(input > 75){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeCPlus + " in the class!");
}else if(input > 72){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeC + " in the class!");
}else if(input > 69){
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeD + " in the class!");
}else{
	console.log("You have a " + input + "%, which means you have earned a(n) " + gradeF + " in the class!");
}

//End of Grade Letter Calculator

//Tire Pressure I

var rightRear = prompt("What is the PSI of the right rear tire?")
var leftRear = prompt("What is the PSI of the left rear tire?")
var rightFront = prompt("What is the PSI of the right front tire?")
var leftFront = prompt("What is the PSI of the left front tire?")

if(rightRear === leftRear && rightFront === leftFront){
	console.log("The tires pass spec!");
}else{
	console.log("Get your tires checked out!");
}