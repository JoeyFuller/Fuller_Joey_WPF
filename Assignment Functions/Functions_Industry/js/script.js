// Joey Fuller
// 12 - 19 - 13
// Functions_Industry

var name = prompt("Hello what is your name?");
alert("Great! Welcome " + name + " lets see how long it will take for you to personally complete a website!");

var experiance = prompt("Do you have any experiance with web coding?(css, html, javaScript) (Y or N)");

var gpu = prompt("Do you have the graphics laid out? (Y or N)")

if(experiance === "Y" && gpu === "Y"){
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "y" && gpu === "y"){
	console.log("You seem to be new at this, but lets continue!");
	alert("You seem to be new at this, but lets continue!");
}else{
	console.log("You did not input a valid option, please try again!");
	alert("You did not input a valid option, please try again!");
}
	