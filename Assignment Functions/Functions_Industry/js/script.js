// Joey Fuller
// 12 - 19 - 13
// Functions_Industry

var name = prompt("Hello what is your name?"); //a prompt to ask your name for various outputs thoughtout the code
alert("Great! Welcome " + name + " lets see how long it will take for you to personally complete a website!");

var experiance = prompt("Do you have any experiance with web coding?(css, html, javaScript) (Y or N)"); //input to check for experiance

var gpu = prompt("Do you have the graphics laid out? (Y or N)") // input to see if you have graphics picked

if(experiance === "Y" && gpu === "Y"){  //output for the variables experiance and gpu
	var exp = true;
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "y" && gpu === "y"){ //this allows the user to put in lowercase yes answers although it asks for cap
	var exp = true; //this will keep the time per page shorter because the user has experiance 
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "Y" && gpu === "y"){ //this allows for one lower case and one upper yes
	var exp = true; //this will keep the time per page shorter because the user has experiance 
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else if(experiance === "y" && gpu === "Y"){ //this allows for the other lower and upper case
	var exp = true; //this will keep the time per page shorter because the user has experiance 
	console.log("Great you seem to be ahead of the curve!");
	alert("Great you seem to be ahead of the curve!");
}else{
	var exp = false; //this will double the time needed because the user does not have the proper experiance
	console.log("You seem to be new at this, but lets continue!");
	alert("You seem to be new at this, but lets continue!");
}  // end of output for variables experiance and gpu

var numberOfPages = prompt("How many pages do you plan on making?"); // input for the amount of pages on the website
	
var totalHours = function(pages){ //function to esitmate the hours per page it may take with no experiance
	var hours = 4 * pages;
	return hours; //return
}
var userPages = totalHours(numberOfPages); //number of pages

var final;
final = (exp === true) ? "The site will take around " + userPages + " hours to complete! Good Luck!" : "The site will take around " + 2*userPages + " hours to complete! Good luck!";

console.log(final);
alert(final);


