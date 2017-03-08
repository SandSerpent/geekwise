var a;

const GITHUB_URL = 'http://github.com/';
console.log(GITHUB_URL);

console.log('Notification' in window);

// if( !'Notification' in window){
//   console.log('not available');
// }else{
//   console.log('is available');
// }

var btn = document.querySelector('button');

// if(!'childElementCount' in btn){
//   itIsNot();
// }else{
//   itIs();
// }

// function itIs(){
//   alert('the method is there')
// }
// function itIsNot(){
//   alert('the method is NOT there')
// }


var windowObj = document.body;

var nav = document.querySelector('nav');
var dist = 0,
    navHeight = 0,
    heroHeight = 0;

  console.log(nav);

var sec1 = document.querySelector('section:nth-of-type(1)');
var sec2 = document.querySelector('section:nth-of-type(2)');
var sec3 = document.querySelector('section:nth-of-type(3)');
var hero = document.querySelector('header')



window.addEventListener('scroll', function(evt){
  heroHeight = hero.clientHeight;
  if(dist > heroHeight){
    sec1.classList.add('vis')
  }else{
    sec1.classList.remove('vis');
  }
  navHeight = nav.clientHeight;
  console.log(navHeight);
  dist = window.scrollY;

  if(dist > navHeight){
    nav.classList.add('fixed', 'anim');
  }else{
    nav.classList.remove('fixed', 'anim');
  }
});
