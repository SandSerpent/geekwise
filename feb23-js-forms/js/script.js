// var a = document.getElementById();
// var b = document.getElementsByClassName();
// var c = document.getElementsByTagName();
// var d = document.querySelector();
// var e = document.querySelectorAll();

var form = document.querySelector('#contactForm');
    subBtn = document.querySelector('#contactForm input[type="submit"]'),
    loginForm = document.querySelector('#loginForm'),
    loginBtn = document.querySelector('#loginForm input[type="submit"]');
    custom =  document.querySelector('.custom');

var loginArr = [];
var userArr = [];

var username = '';
if(localStorage.getItem('username')){
  username = localStorage.getItem('username');
  alert(username + 'please enter your password to continue');
  password();
}else{
  alert('please log in boi');
  login();
}
console.log(username);


subBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    for(var i = 0; i < form.elements.length - 1; i++){
      if(form.elements[i].type === 'text' || form.elements[i].type === 'email' || form.elements[i].type === 'textarea'){
        userArr.push(form.elements[i].value);
      }
      if(form.elements[i].type === 'checkbox' && form.elements[i].checked){
        userArr.push(true);
      }
    }
    console.log(userArr);
});

loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();


    for(var i = 0; i < loginForm.elements.length - 1; i++){
      if(loginForm.elements[i].type === 'text'){
        localStorage.setItem('username', loginForm.elements[i].value);
      }
      if(loginForm.elements[i].type === 'password'){
        sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
      }
      custom.textContent = 'Hello ' +localStorage.getItem('username')+ '.';
      for(var i = 0; i < contactForm.length; i++){
        contactForm.elements[i].disabled = false;
      }
    }
});
function password(){
  loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    if(MD5(loginForm.elements[1].value) === sessionStorage.getItem('password')){
      alert('passwords match. good job, continue');
    }else{
      alert('your password was wron. you suck.');
    }
  })
}
/*
  .setItem('key', 'value');
  .getItem('key');
  .removeItem('key');
  .clear();
*/
