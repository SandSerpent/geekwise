var login = document.getElementById('login');
var loginForm =
'<form>'+
  '<h1>Please Login</h1>'+
  '<label>'+
    '<span>Username</span>'+
    '<input type="text" placeholder="username"/>'+
  '</label>'+
  '<label>'+
    '<span>Password</span>'+
    '<input type="text" placeholder="password"/>'+
  '</label>'+
  '<label>'+
    '<span></span>'+
  '  <input type="submit" value="go"/>'+
  '</label>'+
'</form>';
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
});
var form = document.querySelector('#login form');

function getFormVals(){
  var formInputs = [];
  for (var i = 0; i < form.length - 1; i++) {
    formInputs.push(form.elements[i].value);
  }
  console.log(dropCapInputs(formInputs));
}
function dropCapInputs(arr){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
    });
    return arr;
  }
}
function upperCapInputs(){
    var formInputs = [].charAt(0);
    for (var i = 0; i < form.length - 1; i++){
      formInputs[i].toUpperCase();
    }
}
console.log(upperCapInputs());
