// Joey Fuller
// 12 - 19 - 13
// Functions Wacky
// Story time wih parameters!

alert("Hello! Welcome to story time with parameters! You will be prompted to input different parts of the story and then we will see what comes of it! Enjoy!");
console.log("Hello! Welcome to story time with parameters! You will be prompted to input different parts of the story and then we will see what comes of it! Enjoy!");

var character = prompt("Lets start with the main character! What is their name?");
var trait = prompt("Now we have a name, what is their main trait? (ex. Happy, brave, etc.)");
var year = prompt("Great! Now what year is " + character + " living in?");
var house = prompt("Okay, we have a main character and a time, now where does " + character + " live?");
var friend = prompt("There is always a side kick or friend! Pick one and be creative!");
var activity = prompt("We are getting closer to the story, which is an activity. Our characters need an activity too!(make it in the past tense");
var end = prompt("The story is ending! Finish this sentence! ...and they lived (blank)");
alert("Okay, now lets see what we came up with!");
console.log("Okay, now lets see what we came up with!");

var story = function storyTime(character, trait, year, house, friend, activity, end){
	var finish = "Once upon a time in the year" + year + ", there was a " + trait + " adventurer, whos name was " + character + ". " + friend + " was " + character + "'s sidekick and they were always getting in trouble! Once they even " + activity + "! After that life went on as normal and they lived " + end + "!";
	return finish;
}
var complete = story(character, trait, year, house, friend, activity, end);
alert(complete);

