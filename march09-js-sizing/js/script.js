(function(){
  var distance = document.querySelector('#meter li:nth-child(1) span'),
      winW = document.querySelector('#meter li:nth-child(1) span'),
      winH = document.querySelector('#meter li:nth-child(2) span'),
      hero = document.querySelector('header'),
      heroH = document.querySelector('#meter li:nth-of-type(3) span'),
      sec1 = document.querySelector('section:nth-child(1)'),
      sec2 = document.querySelector('section:nth-child(2)'),
      sec3 = document.querySelector('section:nth-child(3)');

  console.log(sec1);

  distance.textContent = dist;
  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  if(window.innerHeight > sec1.offsetTop){
    sec1.classList.add('visible');
  }

  console.log(window);
  var dist = 0,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      heroHeight = hero.clientHeight,
      sec1Height = 0,
      sec2Height = 0,
      sec3Height = 0;


  // width = innerWidth
  // height = innerHeight

  window.addEventListener('resize', function(){
    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
    heroH.textContent = hero.clientHeight;

    if(window.innerHeight > sec1.offsetTop){
      sec1.classList.add('visible');
    }else{
      sec1.classList.remove('visible');
    }
  });


  window.addEventListener('scroll', function(){
    dist = window.scrollY;
    distance.textContent = dist;
    // console.log(winHeight - sec1.offsetTop);
    // console.log((sec1.offsetTop - dist) - winHeight );

    if((sec1.offsetTop - dist) - winHeight <= 0 ){
      sec1.classList.add('colorIn');
    }else{
      sec1.classList.remove('colorIn');
    }
    if((sec2.offsetTop - dist) - winHeight <= 0 ){
      sec2.classList.add('colorGr');
    }else{
      sec2.classList.remove('colorGr');
    }
    if((sec3.offsetTop - dist) - winHeight <= 0 ){
      sec3.classList.add('colorBl');
    }else{
      sec3.classList.remove('colorBl');
    }
  });

}());
