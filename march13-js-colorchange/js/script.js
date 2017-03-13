var jeep = document.querySelector('header'),
    input = document.querySelector('input[type="color"]'),
    inputRot = document.querySelector('input[type="text"]'),
    btn = document.querySelector('input[type="submit"]'),
    nav1stLvl = document.querySelectorAll('nav > ul > li');

nav1stLvl.forEach(function(e, i){
  e.addEventListener('mouseover', function(){
    this.classList.add('hovering');
  });
  e.addEventListener('mouseout', function(){
    this.classList.remove('hovering');
  });
})

btn.addEventListener('click', function(evt){
  evt.preventDefault();
  var jeepColor = input.value;
  var jeepRot = inputRot.value;
  jeep.style.backgroundColor = jeepColor;
  jeep.style.transform = "rotate(" + jeepRot + "deg)";
})
