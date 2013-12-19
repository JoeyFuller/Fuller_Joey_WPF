// Joey Fuller
// 12 - 19 - 13
// Functions Personal
// Will the house we want pass the tests?

var name = prompt("Hello! What is your name?"); //simple intro to get the users name
console.log("Great! Lets get started."); //intro message
alert("Great! Lets get started.");  //intro alert

var house = prompt("If you have a house picked out type your name");
if(house === name){
	var moneyNeeded = prompt("Do you have the money to buy the house without a loan? (yes or no)");
		if(money === "yes"){
			console.log("Congrats " + name + ". it looks like you will be moving to the new house in no time! Lets continue.");
			alert("Congrats " + name + ". it looks like you will be moving to the new house in no time! Lets continue.");
			var inspect = prompt("Did the house pass an inspection? (yes or no)");
				if(inspection === "yes"){
					console.log("Great it sounds like you have everything in order! Time to move in!");
					alert("Great it sounds like you have everything in order! Time to move in!");
				}else{
					console.log("That is a shame! Looks like its time to keep looking or fix it! Good luck!");
					alert("That is a shame! Looks like its time to keep looking or fix it! Good luck!");
				}
		}else{
			console.log("It looks like you will need to get a loan first! Time to call the banks!");
		}
}else{
	alert("Please pick out a house and come back! Thank you " + name + "!");
	console.log("Please pick out a house and come back! Thank you " + name + "!");
}