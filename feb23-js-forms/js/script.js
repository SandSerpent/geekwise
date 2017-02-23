// var a = document.getElementById();
// var b = document.getElementsByClassName();
// var c = document.getElementsByTagName();
// var d = document.querySelector();
// var e = document.querySelectorAll();

var form = document.querySelector('form');
var subBtn = document.querySelector('input[type="submit"]');
var userArr = [];

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
