var winW = document.querySelector('#fixed li:nth-of-type(1) span'),
    winH = document.querySelector('#fixed li:nth-of-type(2) span');


    /* Changes in style - webpage */

var form = document.querySelector('form'),
    inp1 = document.querySelector('#fixed input:nth-of-type(1)'),
    headName = document.querySelector('header span'),
    inp2 = document.querySelector('#fixed input:nth-of-type(2)'),
    inp3 = document.querySelector('#fixed input:nth-of-type(3)'),
    anchor = document.querySelector('nav a'),
    subBtn = document.querySelector('#fixed input:nth-of-type(4)'),
    header = document.querySelector('header');


    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;


  window.addEventListener('resize', function(){
    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
  });
subBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  var firstName = inp1.value,
      color = inp2.value;
      textCol = inp3.value;

      headName.textContent = firstName;
      header.style.backgroundColor = color;
      anchor.style.color = textCol;


      inp1.value = '';
      inp2.value = '';
      inp3.value = '';
});
