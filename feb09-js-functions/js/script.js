// IIFE - Immediately Invoked Function Executable
// (function(){


    // Function Declaration
    function funcDec(userMessage, userAge){
      // alert('this is from the declaration');
      console.log(userMessage, userAge);
    }
    // PARAMETER
    // ARGUMENT
    // funcDec('goodbye', 21);

    // funcDec(); //  calling (aka invoking aka running) the function
    var funcExp = function(){
      // Function Expression
      myNum = 3;
      // funcDec();
    }(); // Immediately invoke the function with ()
    // funcExp(); // calling (aka invoking, aka running) the function

    // hoisting - places all function DECLARATIONS and variable names to memory before calling (aka invoking aka running) scripts

    // SCOPE - variable that exists only within the function where it was created

    // RETURN

    function getFullName(a, b){
      return a + ' ' + b;
    };
    // console.log( getFullName('Alfredo', "Colunga") );
    // WHAT I DID
    // function funcFirst(){
    //   var first = prompt('What is your first Name?');
    //   var message = ( " it's good to have you here");
    //   return first + message;
    // // }
    // funcFirst();
    //
    // function funcAlert(){
    //   alert(messageFull);
    // }
    // funcAlert();

    // function

    // HIGLEY'S SOLUTION
    function getUserName(){
      var userName = prompt('what your name');
      var userMag = "hello " + userName + '!';
      return userMag;
    }
    function alertUserName(){
      alert( getUserName() );
    }
    alertUserName();
// }());
