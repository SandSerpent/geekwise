// document.querySelector('button').addEventListener('click', function(){
//   // console.log(add(7, 3, 2));
//   console.log(addEx(3, 2, 3, 10));
// });

console.log(firstName('Alfredo') + ' ' + lastName('Colunga'));

function firstName(first){
  return first;
}
function lastName(last){
  return last;
}
document.querySelector('input[type="submit"]').addEventListener('click', function(evt){
  evt.preventDefault();
  getInfo();
});
var form = document.querySelector('form');

function getInfo(){
  console.log(
    'Welcome ' + getName(form) + 'to your site. Your email is' + getEmail(form) + '. You signed up for these' + getChecks(form)
  );
}
function getName(arr){
  var names = '';
  for(var i = 0; i < arr.elements.length; i++){
    if(arr.elements[i].type === 'text'){
      names += names + arr.elements[i].value + ' ';
    }
  }
  return names;
}
function getChecks(li){
  var check = '';
  for(var i = 0; i < li.elements.length; i++){
    if(li.elements[i].type === 'checkbox' && li.elements[i].checked){
      check += check + li.elements[i].value + ' ';
    }
  }
  return check;
}
function getEmail(arr){
    var emails = '';
    for(var i = 0; i < arr.elements.length; i++){
    if(arr.elements[i].type === 'email'){
      emails += emails + arr.elements[i].value + ' ';
    }
  }
  return emails;
}




// function add(num, num2, num3){
//   return (num + num2) / num3;
// }


var addEx = function(){
    console.log(arguments);
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
      if(typeof arguments[i] !== 'string'){
        total = arguments[i] + total;
      }
    }
    return total;
}
