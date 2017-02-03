var firstString = "A literal string";
var secondString = new String("A string object");


var concatString = firstString + secondString;

// console.log( concatString );

// concagenation

var firstName = "Alfredo";
var lastName = "Colunga";

var fullName = firstName + " " + "Osvaldo" + " " + lastName;

// console.log(fullName);

var getIndex = firstString.match("it");
// console.log(getIndex);

// first name, last name, age, use math to determine your age in 2020

var birth = 1999;

var twenty = 2020;

var newAge = twenty - birth;

var concatIntro = "My name is " + fullName + ". I was born on " + birth + "  and in 2020, I will be " + newAge;
console.log(concatIntro);
