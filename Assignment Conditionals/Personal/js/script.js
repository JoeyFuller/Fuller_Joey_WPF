// Joey Fuller
// Personal Conditionals
// 12-12-13

//I am buying a house and this will be a system to see how much I can afford to spend on the downpayment, but will be able to be used for anyone


alert("Welcome to the house buying budget guide!");

var hello = prompt("Do you have a house picked out? (Y or N)");

if(hello === "Y"){
	alert("Congrats! Lets see if you can afford it within a year!");
	console.log("Congrats! Lets see if you can afford it within a year!");
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
var closingCosts = 1600

alert("Okay now we are getting somewhere! You have $" + saved + " and need $" + moneyNeeded + "! Also do not forget about closing costs!");

var income = prompt("How much money do you make a month? (exclude the $ symbol)")
var yearlyIncome = income*12
var totalIncome = saved + yearlyIncome
var short = moneyNeeded - totalIncome
var test = 4
(test < 0) ? console.log("CONGRATS! You can buy the house!") : console.log("I am sorry you are short by $" + short + ". Keep saving!");




