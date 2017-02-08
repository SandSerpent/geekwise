(function(){
// var userName = prompt('what yo name?');
// var num1 = parseInt(prompt('pick a number'));
// var num2 = parseInt(prompt('pick another number'));
// Function Declaration
// function funcDec(a, b, c){
//   alert(a + (b + c));
// }

// funcDec(userName, num1, num2);

var car = {
  make: "honda",
  size: "little",
  year: 2002
};

// function myModel(mine){
//   alert(mine);
// }
// parameter 'a' is SCOPED to function myModel

// myModel(car.make);

// Function Executable
// var funcEx = function(){
//   alert(arguments[0]);
//   // arguments create a collection of items
// }('Alfredo', 7);

var firstNames = ["Alf", "Os", "Van", "Ros", "Matt"].sort();

var cereal = ["coco", "crunch", "honey nut", "bunches", "cookies"].sort();

console.log(firstNames);
console.log(cereal);

function randomCereal(){
  var numCer = cereal.length;
  var randCereal = Math.ceil( Math.random() * numCer ) - 1;
  alert( cereal[randCereal ] );
}
randomCereal();


function randName(){
  var numName = firstNames.length;
  var randName = Math.ceil( Math.random() * numName ) - 1;
  alert( firstNames[randName ] );
}
randName();

var spyname = function(){
  alert(arguments[0] + ' ' + arguments[1]);
}(spyname);


})();
