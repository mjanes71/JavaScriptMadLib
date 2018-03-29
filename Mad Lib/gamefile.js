console.log("Program Start");

var object = prompt("Type the name of an object");
var animal = prompt("Type the name of an animal");
var verb_1 = prompt("Type a verb (an action word)");
var verb_2 = prompt("Type a verb (an action word)");
var noun = prompt ("Type a noun (a person, place, or thing)");

var message = "All alone, in a little old " + object.toLowerCase();
message += " lived a(n) " + animal.toLowerCase() + ".";
message += " His name was Gregg, and every day he wished he lived somewhere else.";
message += " One day, he " + verb_1.toLowerCase();
message += " across a genie who granted him 3 wishes.";
message += " His first wish was to " + verb_2.toLowerCase();
message += " " + noun.toLowerCase();
message += " , which resulted in his premature demise and Gregg was never seen or heard from again.";

document.write(message);
console.log("Program Complete");