var myString = "Bring me the good stuff",
    myNumber = 42,
    myBool = true,
    myFloat = 5.2,
    myArray = ['red', 8, false, true, 'chef boyardee'],
    myObject = {
      spaghetti: true,
      noodles: false,
      ramen: true,
      ravioli: 'show me the formioli',
      eight: 8
    };

// console.log(myBool);
// console.log(myString.indexOf('i', 3));
// console.log(myArray[4]);
// console.log(myObject.ravioli);

  // Number Object

var numOne = 2;
var numTwo = new Number(5);

// console.log(numOne);
// console.log(numTwo);

var numThree = "3";
var numFour = "5.2";

// console.log( parseInt(numThree));
// console.log( parseFloat(numFour));

var numFive = "Alfredo";
// console.log( parseInt(numFive));
// console.log( parseFloat(numFive));

// if( isNaN(numFive)) {
//   alert('its not a number')
// }

  // parseInt
  // parseFloat
  // isNaN

// var userLang = confirm('Do you speak English');
// var formuoli = prompt('What is your favorite flavor of ravioli');

// console.log(formuoli);

// var firstName = prompt('what is your first name?');
//
// var middleName = prompt('what is your middle name?');
//
// var lastName = prompt('what is last name?');
//
// var answer = firstName + " " + middleName + " " + lastName;
//
// console.log(answer);

// var userAge = prompt('what is your age?')
// console.log( parseInt(userAge));

// var userName = prompt("what is your name?");
//
// var intro = "welcome to my story" + userName = ". What is your dogs name?";
//
// alert(intro);

// All 3 alerts (alert, prompt, confirm)
// 4 objects. (string, number, float, boolean)
// Minimum of 10 variable savse
// Minimum of 5 confirms
// Use 1 if statement
// Use 2 mathematical operations (+, -, *, /)
/*
if( isNaN(numFive)){
  alert('its not a number');
}else{
  alert('it is a number');
}
*/

var userResp = confirm('are you a boy');
if(userResp){
  alert('yay. youre a boy');
  var gender = "boy";
}else {
  alert('youre a girl then.');
  var gender = "girl";
}
var userGender = "welcome young" + gender;
alert(userGender);
