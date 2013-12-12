// Joey Fuller
// Industry Conditionals
// 12-12-13
alert("Hello welcome to our automated pricing system for websites and hosting! Click OK to continue!");//intro the the site/code

var inputWebsite = prompt("Do you need a website? (Y or N)")// variable to see if they need a website
var inputHosting = prompt("Do you need a server to host it on? (Y or N)")// variable to see if they need hosting

if(inputWebsite === "Y" && inputHosting === "Y"){  //if command to calculate the input of the previous var shows yes to both website and hosting
	console.log("We see you need a website and hosting!"); 
	alert("We see you need a website and hosting!");
}else if(inputWebsite === "Y" && inputHosting === "N"){  // shows yes to website and no to hosting
	console.log("We see you only need a website!");
	alert("We see you only need a website!");
}else if(inputWebsite === "N" && inputHosting === "Y"){ //shows no to website and yes to hosting
	console.log("We see you only need hosting!");
	alert("We see you only need hosting!");
}else if(inputWebsite === "N" && inputHosting === "N"){ // this shows no to both options and alerts the user to contact us for now info
	console.log("We see that you are unsure of your choice, please contact us for more information!");
	alert("We see that you are unsure of your choice, please contact us for more information!");
}else{
	console.log("You choices of " + inputWebsite + " and " + inputHosting + " are unclear, please try again using the approved Y for yes and N for no."); // this will show if the user inputs are invalid
	alert("You choices of " + inputWebsite + " and " + inputHosting + " are unclear, please refresh and try again using the approved Y for yes and N for no.");
}

//End of finding out what services they need and start of pricing!

if(inputWebsite === "Y" && inputHosting === "Y"){ //pricing for both website and hosting
	alert("Now we can find a price for your website and hosting!");
	console.log("Now we can find a price for your website and hosting!");
}else if(inputWebsite === "Y" && inputHosting === "N"){ //pricing for just website
	alert("Now we can find a price for your website!");
	console.log("Now we can find a price for your website!");
}else if(inputWebsite === "N" && inputHosting === "Y"){ //pricing for just hosting
	alert("Now we can find a price for you hosting!");
	console.log("Now we can find a price for your hosting!");
}else if(inputWebsite === "N" && inputHosting === "N"){ //user did not choose an option
	console.log("User did not choose an option");
}
if(inputWebsite === "Y" && inputHosting === "Y"){
	var inputUpgradeBoth = prompt("Would you like the premium upgrade for both of your services for an extra $100 + $20/year? (Y or N)") //for for upgrade of both options
}else if(inputWebsite === "Y" && inputHosting === "N"){
	var inputUpgradeWebsite = prompt("Would you like to upgrade your website to our premium service for an extra $100? (Y or N)")// var for upgrade of website only
}else if(inputWebsite === "N" && inputHosting === "Y"){
	var inputUpgradeHosting = prompt("Would you like to upgrade your hosting to our premium service for an extra $20/year? (Y or N)") //var for upgrade of hosting only
}else if(inputWebsite === "N" && inputHosting === "N"){
	console.log();
}else{
	alert("We see that you did not use the approved inputs and have not refreshed, please refresh now and try again."); //possibly taking this out if no longer needed
	console.log("We see that you did not use the approved inputs and have not refreshed, please refresh now and try again.");
}
		
var priceWeb = 400
var priceHosting = 20
var priceUpWeb = 500 //vars for prices of each option 
var priceUpHost = 40
			
if(inputWebsite === "Y" && inputHosting === "Y" && inputUpgradeBoth === "Y"){  // displays the output of both options and upgraded
	alert("Your price will be $" + priceUpWeb + " for the website as a one time fee + $" + priceUpHost + "/year.");
	console.log("Your price will be $" + priceUpWeb + " for the website as a one time fee + $" + priceUpHost + "/year.");
}else if(inputWebsite === "Y" && inputHosting ==="Y" && inputUpgradeBoth ==="N"){ //displays the output of both not upgraded
	alert("Your price will be $" + priceWeb + " for a one time fee + $" + priceHosting + "/year.");
	console.log("Your price will be $" + priceWeb + " for a one time fee + $" + priceHosting + "/year.");
}else if(inputWebsite ==="Y" && inputHosting === "N" && inputUpgradeWebsite === "Y"){  //displays the  website with upgrade - no hosting
	alert("Your price will be $" + priceUpWeb + " as a one time fee without hosting!");
	console.log("Your price will be $" + priceUpWeb + " as a one time fee without hosting!");
}else if(inputWebsite === "N" && inputHosting === "Y" && inputUpgradeHosting === "Y"){ //displays the hosting and upgrade -- no website
	alert("Your price will be $" + priceUpHost + "/year!");
	console.log("Your price will be $" + priceUpHost + "/year!");
}else if(inputWebsite === "N" && inputHosting === "Y" && inputUpgradeHosting === "N"){ //displays the hosting with no upgrade -- no website
	alert("Your price will be $" + pricehosting + "/year!");
	console.log("Your price will be $" + pricehosting + "/year!");
}else if(inputWebsite === "N" && inputHosting === "N"){  //user did not select an option
	console.log();
}

alert("Thank you for using our system! Have a nice day!"); //end statement
