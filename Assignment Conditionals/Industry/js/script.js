// Joey Fuller
// Industry Conditionals
alert("Hello welcome to our automated pricing system! Click OK to continue!");

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
	alert("You choices of " + inputWebsite + " and " + inputHosting + " are unclear, please refresh and try again using the approved Y for yes and N for no.");
}
//End of finding out what services they need and start of pricing!

if(inputWebsite === "Y" && inputHosting === "Y"){
	alert("Now we can find a price for your website and hosting!");
	console.log("Now we can find a price for your website and hosting!");
}else if(inputWebsite === "Y" && inputHosting === "N"){
	alert("Now we can find a price for your website!");
	console.log("Now we can find a price for your website!");
}else if(inputWebsite === "N" && inputHosting === "Y"){
	alert("Now we can find a price for you hosting!");
	console.log("Now we can find a price for your hosting!");
}else{
	alert("We see that you did not use the approved inputs and have not refreshed, please refresh now and try again.");
	console.log("We see that you did not use the approved inputs and have not refreshed, please refresh now and try again.");
}

if(inputWebsite === "Y" && inputHosting === "Y"){
	var inputUpgradeBoth = prompt("Would you like the premium upgrade for both of your services for an extra $100 + $20/year? (Y or N)")
}else if(inputWebsite === "Y" && inputHosting === "N"){
	var inputUpgradeWebsite = prompt("Would you like to upgrade your website to our premium service for an extra $100? (Y or N)")
}else if(inputWebsite === "N" && inputHosting === "Y"){
	var inputUpgradeHosting = prompt("Would you like to upgrade your hosting to our premium service for an extra $20/year? (Y or N)")
}else{
	console.log("Use still has not refreshed after using incorrect inputs!");
}

var priceWeb = 400
var priceHosting = 20
var priceUpWeb = 500
var priceUpHost = 40

if(inputWebsite === "Y" && inputHosting === "Y" && inputUpgradeBoth === "Y"){
	alert("Your price will be $" + priceUpWeb + " for the website as a one time fee + $" + priceUpHost + "/year.");
}else if(inputWebsite === "Y" && inputHosting ==="Y" && inputUpgradeBoth ==="N"){
	alert("Your price will be $" + priceWeb + " for a one time fee + $" + priceHosting + "/year.");
}else if(inputWebsite ==="Y" && inputHosting === "N" && inputUpgradeWebsite === "Y"){
	alert("Your price will be $" + priceUpWeb + " as a one time fee without hosting!");
}else if(inputWebsite === "N" && inputHosting === "Y" && inputUpgradeHosting === "Y"){
	alert("Your price will be $" + priceUpHost + "/year!");
}else if(inputWebsite === "N" && inputHosting === "Y" && inputUpgradeHosting === "N"){
	alert("Your price will be $" + pricehosting + "/year!");
}else{
	alert("You did not the proper inputs somewhere! For all answers input Y or N");
}