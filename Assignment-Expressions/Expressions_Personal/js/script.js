// Expressions Personal
//Joey Fuller
//12-5-13

//on average how many sodas were drank in a weeks time

alert("Hello, lets see how many sodas you drink on an average day!");
var input1 = prompt("How many sodas did you drink on day 1?");//start of user input
var input2 = prompt("How many sodas did you drink on day 2?");
var input3 = prompt("How many sodas did you drink on day 3?");
var input4 = prompt("How many sodas did you drink on day 4?");
var input5 = prompt("How many sodas did you drink on day 5?");
var input6 = prompt("How many sodas did you drink on day 6?");
var input7 = prompt("How many sodas did you drink on day 7?");//end of user input
var days = [input1, input2, input3, input4, input5, input6, input7];//array for user input average
var total = days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6];
var averageSodas = total/7;

var sodasPerWeek = total;

alert("You drink " + averageSodas + " per day on average! " + "That is " + sodasPerWeek + " per week!");
