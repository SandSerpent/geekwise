// var a = function(){
//   var userName = prompt("what's your full name?").trim();
//   b(userName)
// }();
//
// function b(user){
//   alert(user);
//   var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
//   c(cased);
// }
// function c(user){
//   alert(user);
// }

// SECOND HALF

var firstName = document.getElementById("btn1");
var secondName = document.getElementById("btn2");
var div = document.getElementById("wrapper");

firstName.addEventListener('click', function(){
  firstName = prompt("What's your first name?");
  // console.log( parseInt(firstName));
  if( isNaN(firstName) ){
    // console.log('its not a number');
    btn2.disabled = false;
    btn1.disabled = true;
  }else{
    alert('please type your name');
  }

});
secondName.addEventListener('click', function(){
  var secondName = prompt("What's your second name?");
  if( isNaN(secondName) ){
    div.textContent = firstName + " " + secondName
    btn2.disabled = false;
    btn1.disabled = true;
  }else{
  alert('please type your last name')
  }
  btn1.disabled = false;
  btn2.disabled = true;
});
