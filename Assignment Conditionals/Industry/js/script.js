// Joey Fuller
// Industry Conditionals

var inputWebsite = prompt("Do you need a website? (Y or N)")
var inputHosting = prompt("Do you need a server to host it on? (Y or N)")

if(inputWebsite === "Y" && inputHosting === "Y"){
	console.log("We see you need a website and hosting!");
	alert("We see you need a website and hosting!");
}else if(inputWebsite === "Y" && inputHosting === "N"){
	console.log("We see you only need a website!");
	alert("We see you only need a website!");
}else if(inputWebsite === "N" && inputHosting === "Y"){
	console.log("We see you only need hosting!");
	alert("We see you only need hosting!");
}else if(inputWebsite === "N" && inputHosting === "N"){
	console.log("We see that you are unsure of your choice, please contact us for more information!");
	alert("We see that you are unsure of your choice, please contact us for more information!");
}else{
	console.log("You choices of " + inputWebsite + " and " + inputHosting + " are unclear, please try again using the approved Y for yes and N for no.");
	alert("You choices of " + inputWebsite + " and " + inputHosting + " are unclear, please try again using the approved Y for yes and N for no.");
}
//End of finding out what services they need and start of pricing!

