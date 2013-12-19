// Joey Fuller
// 12 - 19 - 13
// Functions_Industry

var name = prompt("Hello what is your name?"); //a prompt to ask your name for various outputs thoughtout the code
alert("Great! Welcome " + name + " lets see how long it will take for you to personally complete a website!");

var experiance = prompt("Do you have any experiance with web coding?(css, html, javaScript) (Y or N)"); //input to check for experiance

var gpu = prompt("Do you have the graphics laid out? (Y or N)") // input to see if you have graphics picked

if(experiance === "Y" && gpu === "Y"){  //output for the variables experiance and gpu
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "y" && gpu === "y"){
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "Y" && gpu === "y"){
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "y" && gpu === "Y"){
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else{
	console.log("You seem to be new at this, but lets continue!");
	alert("You seem to be new at this, but lets continue!");
}  // end of output for variables experiance and gpu

var numberOfPages = prompt("How many pages do you plan on making?"); // input for the amount of pages on the website
	
var totalHours = function(numberOfPages){
	var hours = 4 * numberOfPages;
	return hours;
}
var userPages = totaHours(numberOfPages);
console.log(userPages);
alert(userPages);

