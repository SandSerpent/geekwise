var myArr = ['red', ' orange', ' yellow, '];
var newArray = [];

var add = document.getElementById("btn-add");
var remove = document.getElementById("btn-remove");

add.addEventListener('click', function(){
  // var color = prompt("What color would you like to add?");
  askForColor();
})
remove.addEventListener('click', function(){
  // alert("This is to remove the last color from your list of colors");
  // var re = /ab+/;
  // console.log(re);

  // var myRe = /d(b+)d/g;
  // var myArray = myRe.exec('cdbbdbsbz');
  // console.log(myArray);
})

function askForColor(){
  var userColor = prompt("color please");
  console.log(userColor);
  console.log(!userColor);
  if(userColor !== null && userColor.trim() !== ''){ //if user wants to play
    var userColorCheck = userColor.toLowerCase().trim();
    console.log(userColor);
    console.log(parseInt(userColor));
    console.log( isNaN(parseInt(userColor)) );
    if( !isNaN(parseInt(userColorCheck)) ){
      askForColor();
    }else{
      alert('you chose a color! huzzah!');
      newArray.push(userColorCheck);
      console.log(newArray);
    }
  }else{
    alert("Are you sure you want to leave?! Not choosing a color can result in serious consequences.");
  }


//    === and
// || === or


  /*
  if( !isNaN(parseInt(userColor))){
    alert('you typed a number fool.');
  }else if(userColor === ''){
    alert('you typed blank');
  }else{
    alert('you did not type a number, nice');
  }
  */


  // '4' !== 4

  /*
  if( !isNaN(parseInt(userColor)) ){
    // this code what is evaluated is true
    alert('will always run!');
  }else{
    alert('will never run!');
  }
  */


  // null
  // blank (empty space)
  // string

  // NaN
  // we will need isNaN()
}

// .concat()
// .sort();
// .slice();
// .splice();

// .push();
// .pop();
// .shift();
// .unshift();
