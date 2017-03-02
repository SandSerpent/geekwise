var content = document.getElementById('content');

var h1 = document.createElement('h1');
content.appendChild(h1).textContent = "HELLO World";

var p = document.createElement('p');
content.appendChild(p).textContent = "Hello, my name is Alfredo Colunga. Yes, that is my name. My name is nice; I like my name.";

var a = document.createElement('a');
content.appendChild(a).textContent = "Click here";
content.appendChild(a).textContent = 'Click here too';
a.id = "test";
a.href = 'http://google.com';
a.className = 'test2';
a.target = '_blank';

var ul = document.createElement('ul');
content.insertBefore(ul, a);

var input = document.createElement('input');
content.insertBefore(input, a);
input.type = "text";
input.placeholder = "hey boi";

var form = document.createElement('form');
var userName = document.createElement('input');
var submitBtn = document.createElement('input');
var br = document.createElement('br');
userName.type = 'text';
userName.placeholder = "enter your username";
submitBtn.type = 'submit';
submitBtn.value = 'accept';
form.appendChild(userName);
form.appendChild(br);
form.appendChild(submitBtn);
content.insertBefore(form, a);
var number = document.createElement('number');

number.type = 'number';
number.placeholder = 'number';

submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  getValues();
});

number.addEventListener('change', function(evt){
  evt.preventDefault(evt);
  if(evt.target.value >= 0){
    evt.target.value = 0;
  }else{
    console.log(evt.target.value);
  }
});

function getUsername(){
  console.log(userName.value);
  userName.value = '';
}

var firstName = document.createElement('input');
firstName.placeholder = 'first name'
firstName.type = 'text';

var lastName = document.createElement('input');
lastName.placeholder = 'last name'
firstName.type = 'text';

var email = document.createElement('input');
email.type = 'email';
email.placeholder = 'email';

var password = document.createElement('input');
password.type = 'text';
password.placeholder = 'password';

form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(email);
form.appendChild(password);

var formArr = [];

function getValues(){
  var loopNum = parseInt(number.value);
  for(var i = 0; i < loopNum; i++){
    li = document.createElement('li');
    ul.appendChild(li).textContent = i;
  }

  // for(var i = 0; i < form.elements.length - 1; i++ ){
  //   formArr.push(form.elements[i].value);
  // }
  // console.log(formArr);
}
