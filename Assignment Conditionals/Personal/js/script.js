// Joey Fuller
// Personal Conditionals
// 12-12-13

//I am buying a house and this will be a system to see how much I can afford to spend on the downpayment, but will be able to be used for anyone


alert("Welcome to the house buying budget guide!");

var hello = prompt("Do you have a house picked out? (Y or N)");

if(hello === "Y"){
	alert("Congrats! Lets see if you can afford it!");
	console.log("Congrats! Lets see if you can afford it!");
}else if(hello === "N"){
	alert("Thats okay, we can still see what your price range is!");
	console.log("Thats okay, we can still see what your price range is!");
}else{
	alert("I am not quite sure what you said, but thats okay lets continue");
	console.log("I am not quite sure what you said, but thats okay lets continue");
}

var houseCost = prompt("How much are you looking to spend? Do not include $")
var saved = prompt("How much money do you have saved? Do not include $")
var moneyNeeded = houseCost - saved

alert("Okay now we are getting somewhere! You have $" + saved + " and need $" + moneyNeeded + "! Also do not forget about closing costs!");

var credit = prompt("What is an estimate of your credit score?")
var greatCredit = .04
var goodCredit = .0475
var fairCredit = .05125
var poorCredit = .07125
if(credit > 800){
	var finalCredit = .04
}else if(credit > 750){
	var finalCredit = .0475
}else if(credit > 700){
	var finalCredit = .05125
}else if(credit > 675){
	var finalCredit = .07125
}else{
	alert("We are sorry your credit is too low to finace.");
}

var interest = finalCredit*moneyNeeded
alert("test" + interest);


