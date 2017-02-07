// var students = ["matt", "david", "haley", "marisa", "micaela", "osvaldo", "rosa", "alfredo", "rigoberto", "leo", "gus", "eric", "kevin", "montgomery", "cobi", "joshua"];
//
// function randomStudent(){
//   var numStudents = students.length;
//   var randStudent = Math.ceil( Math.random() * numStudents ) - 1;
//   alert( students[randStudent] );
// }
// randomStudent();

var fruits = ['apple', 'pear', 'tangerine', 'pomegranate', 'orange' ]
// console.log(fruits);

// Push- addds to the end of an array
fruits.push('dragonfruit');
// console.log(fruits);

// Pop - removes from the end of an array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// Unshift - adds to the front of an array

fruits.unshift('kiwi');
// console.log(fruits);

// Shift - removes from the front of an array
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// IndexOf - finds the index of an item in an array
var posFruit = fruits.indexOf("tangerine");
// console.log(posFruit);

// Splice - remove and item by index number
var remFruit = fruits.splice(1, 1);
//                           ^  ^
//                       index   number removed
// console.log(fruits);
// console.log(remFruit);

// Slice - copies an array
var copyFruit = fruits.slice(1, 3);
//                           ^  ^
//              starting index  up-to but no including
// console.log(copyFruit);
// console.log(fruits);

var subject = ["Math"];

subject.unshift("English", "Band");

subject.push("History", "Sociology");
console.log(subject);

var remSub = subject.slice(3, 4);

// Sort - machine alphabetization
console.log(remSub);
console.log(subject);
subject.sort();

// Reverse
console.log(subject);
subject.reverse();
console.log(subject);

var nums = [0, 53, 5, 103, 7, 78, 10];
nums.sort();
console.log(nums);
