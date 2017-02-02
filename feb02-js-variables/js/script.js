
// var externalJavascript = "wha da actual heck?";

var camelCase; // Please use this!
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case;
var _underScore;

// var stVariable1; No-No bad.
var firstVar;

var CamelCase; // Please don't. For Construtor objects Only.

var SUPERUPPERCASE; // Definitely don't.

/*
// JAVASCRIPT OBJECTS
  Number
  String
  Boolean
  Float
  Array
  Object
*/
var myNumberObject = 3;

var myNewNumberObject = myNumberObject.toString();

// console.log(myNumberObject);
// console.log(myNewNumberObject);

var myStringObject = "This is a String Object";
var myOtherStringObject = "This is also a String Object";
// var myNonWorkingStringObject = "This won't work";
var myCorrectPoorGrammar = "Grammar is very important";
var myOtherCorrectPoorGrammar = "The second is great";

// console.log(myStringObject, myOtherStringObject);

// BOOLEAN Object
var myBooleanTrue = false; // 0
var myBooleanFalse = true; // 1

// FLOAT OBJECT
var myFloatObject = 3.1;

// ARRAY OBJECT (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];

// console.log(myArrayObject[3]);

// OBJECT OBJECT (identified with curley brackets)
var myObjectObject = {
  make: 'jeep',
  model: 'wrangler',
  color: 'black',
  year: 2014,
  package: function(){
    alert(this.make);
  }
};

console.log(myObjectObject);

// JAVASCRIPT MATH

var a = 5;
var b = 10;

var c = a + b;

// console.log(c);

var d = a - b;
var e = a * b;
var f = a / b;
console.log(d);
console.log(e);
console.log(f);

var g = a % b; // modulus
console.log(g);
