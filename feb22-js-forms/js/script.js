var inputs = document.querySelectorAll('input:not([type="submit"])');
var goBtn = document.querySelector('input[type="submit"]');
var user = [];
// var textIn = document.querySelectorAll('input[type="text"]');
// var email = document.querySelector('input[type="email"]');
// var reqFields =  textIn + email;

console.log(inputs);

goBtn.addEventListener('click', function(evt){
  evt.preventDefault();

  var formInputs = document.querySelector('form').elements;

  for(var i = 0; i < formInputs.length - 1; i++){
    // user.push(formInputs[i].value);
    // formInputs[i].value = '';
    if(formInputs[i].type === 'radio' && formInputs[i].checked || formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value){
      user.push(formInputs[i].value);
    }
    if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
      user.push(true);
    }
    // if(formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox'){
    //   user.push(formInputs[i].value);
    // }
  }
  console.log(user);
  user = [];

  // inputs.forEach(function(e, i){
  //   user.push(inputs[i].value);
  //   inputs[i].value = '';
  // });
  // alert(user);
  // user = [];
});
