// Joey Fuller
// Personal Conditionals
// 12-12-13

//I am buying a house and this will be a system to see how much I can afford to spend on the downpayment, but will be able to be used for anyone


alert("Welcome to the house buying budget guide!");//welcome

var hello = prompt("Do you have a house picked out? (Y or N)");//first prompt 

if(hello === "Y"){   //message based upon the users first input being yes
	alert("Congrats! Lets see if you can afford it within a year!");
	console.log("Congrats! Lets see if you can afford it within a year!");
}else if(hello === "N"){ //message based upon the users first input being no
	alert("Thats okay, we can still see what your price range is!");
	console.log("Thats okay, we can still see what your price range is!");
}else{ //message if user puts a random answer
	alert("I am not quite sure what you said, but thats okay lets continue");
	console.log("I am not quite sure what you said, but thats okay lets continue");
}

var houseCost = prompt("How much are you looking to spend? Do not include $") //total cost of the house
var saved = prompt("How much money do you have saved? Do not include $") //money saved at the start of the year
var moneyNeeded = houseCost - saved  //how much money is needed to buy the house outside of the money saved
var income  //yearly income
var totalIncome //var place holder for total income
alert("Okay now we are getting somewhere! You have $" + saved + " and need $" + moneyNeeded + "! Also do not forget about closing costs!"); //message alerting the user how much they need to make in a year

var income = prompt("How much money do you make in a year? (exclude the $ symbol)") //input on how much the user makes in a year
var totalIncome = saved + income; //savings plus the total year income
var short = moneyNeeded - totalIncome;  //if they user is short this is the amount they will be short by
var final //var place holder
final = (short < 0) ? "CONGRATS! You can buy the house!" : "I am sorry you are short by $" + short + ". Keep saving!"; //message displaying the choice and if short the amount short.
console.log(final);
alert(final);




