//Joey Fuller 
//12-5-13
//Expressions Industry

// How long will it take for a water service company to fill a pool or any size depending on the input givens


alert("Hello, Welcome to the pool filling calculator!"); //greeting
var userInputDepth = prompt("How many deep is your pool? (In Feet):"); //input
var userInputRadius = prompt("What is the radius of your pool? (In Feet):"); //input
var userInputGallons = prompt("How fast can you pump the water? (Gallons/Min):"); //input
var poolDepth = userInputDepth; //depth of the pool
var poolRadius = userInputRadius; //radius of the pool
var gallonsPerMin = userInputGallons; //the rate in which water can be pumped into a pool
var totalGallons = 3.14 * (Math.pow(poolRadius,2) * poolDepth) * 7.48; //v=pi*r2*h 
var timeTaken = totalGallons / gallonsPerMin;
alert("It will take " + timeTaken + " minutes to fill your pool!"); //cannot figure out how to round off the number to 2 decimal points on lower ratios
