// var str = "AlFreDo";
// var modStr = str.substr(1, 4);
// var userName = prompt('whats your name?').trim();
// console.log(userName);

// console.log(str, modStr);

//toLowerCase() - lowercase string
//toUpperCase() - uppercase string
//substr() - get characters from starting index up to & indluding ending index
// trim() - removes excess spaces before and after

  // My attempt

  // function funcName(){
  //   var fullName = prompt("what your full name?").trim();
  //   return fullName;
  // }
  // var funcCap = function(){
  //   var userName = funcName();
  //   var modUpperCase = userName.substr(0, 1).toUpperCase(), modLowerCase = userName.substr(1).toLowerCase();
  //   var modProduct = modUpperCase + modLowerCase;
  //   return modProduct;
  // }();
  // function funcAlert(){
  //   alert(funcCap);
  // }
  // funcAlert();


  // SUCCESS!!

  // MATTHEW'S Solution
  // function getUserName(){
  //   return prompt('whats your name?').trim();
  // }
  // var modUserName = function(){
  //   var user = getUserName();
  //   var moddedName = user.charAt(0).toUpperCase() +
  //   user.substr(1).toLowerCase();
  //   alertUserName(moddedName);
  // }

var extBtn = document.getElementById('external');
var content = document.getElementById('content');
var voidBtn = document.getElementById('void');

extBtn.addEventListener('click', function(){
  var userName = content.textContent = prompt("what's your name?");
});
voidBtn.addEventListener('click', function(){
  content.textContent = "";
});

function changeColor(){
  var randNum = Math.random();
  console.log(randNum);
  var randHue = randNum * 360;
  console.log(randHue);
  var roundHue = Math.floor(randHue);
  console.log(randHue);
  var addOne = roundHue + 1;
  console.log(addOne);
  document.body.style.backgroundColor = 'hsl('+ addOne +', 50%, 50%)';
  // var randNum = Math.floor(Math.random() * 360) + 1;
  // // console.log(randNum);
  // document.body.style.backgroundColor = 'hsl(' + rand + ', 50%, 50%)';
}
