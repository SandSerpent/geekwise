var userName = document.getElementById("btn");
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('list-four');

var lis = document.querySelectorAll('li:nth-of-type(odd)');

var ul = document.querySelector('ul');

var input = document.querySelector('input[type="text"]');
var inputBtn =  document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);
});

for(var a = 0; a < lis.length; a++){
  lis[a].style.backgroundColor = 'green';
}

console.log(lis);

// div.addEventListener('mouseover', function(){
//   alert('hovering the div');
// });

for(var i = 0; i < div.length; i++){
  div[i].addEventListener('mouseover', function(){
    alert('hovering over the div');
  });
}

for(var j = 0; j < classes.length; j++){
  classes[j].addEventListener('click', function(){
    alert('clicked on the list item');
  });
}

userName.addEventListener("click", function(){
  var crop = prompt("what is your name?");
  if(crop.trim() === '' || crop.length < 5){
    alert("no good");
  }else{
    alert(crop);
  }
});

// OR === ||
// AND === && ()
