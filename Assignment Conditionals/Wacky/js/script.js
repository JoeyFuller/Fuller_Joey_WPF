// Joseph Fuller
// Wackey Conditional
// 12-12-13
//Game show host

alert("Welcome to my mini question based game!");										//INTRO 
alert("You have to get at least 3 questions correct to win!");							//TO THE
alert("Lets get started... first question.... answer 1 for true and 2 for false!");		//GAME SHOW!


//FIRST QUESTION
var first = prompt("True or false: I am making this for a school assignment!");			//FIRST INPUT
if(first === "1"){
	alert("Correct!");
	var one = 1;
}else{
	alert(".... you are wrong....");
}//END OF FIRST QUESTION

//SECOND QUESTION
var second = prompt("True or false: Pizza is amazing!");								//SECOND INPUT
if(second === "1"){
	var two = 1;
	alert("Correct!");
}else{
	alert("Sorry NO");
}//END OF SECOND QUESTION

//THRID QUESTION
var third = prompt("True or false: Online classes are awful!");							//THIRD INPUT
if(third === "2"){
	alert("Correct!");
	var three = 1;
}else{
	alert("Incorrect");
}//END OF THIRD QUESTION

//FOURTH QUESTION
var fourth = prompt("True or false: Steelers are the best NFL team ever.");				//FOURTH INPUT
if(fourth === "1"){
	alert("Correct!");
	var four = 1;
}else{
	alert("ERR WRONG");
}//END OF FOURTH QUESTION

//FIFTH QUESTION
var fifth = prompt("True or false: I have green eyes.");								//FIFTH INPUT
if(fifth === "2"){
	alert("Correct!");
	var five = 1;
}else{
	alert("Wrong!");
}//END OF FIFTH QUESTION

if(one + two + three + four + five > 3){
	alert("Congrats you win!");
}else{
	alert("Sorry you lost, try again!");
}