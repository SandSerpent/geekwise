var stage = document.getElementById('obj');
var movieArr = [];

stage.addEventListener('click', getMovie);

function getMovie(){
  movieArr.push(prompt("what's your favorite movie?") );
  // console.log(movieArr);
  if(movieArr.length >= 3){
    // console.log(movieArr);
  }
  if(movieArr.length >= 5){
    for(var i = 0; i < movieArr.length ){
      console.log(movieArr[i]);
    }
  }

}
