var students = ["matt", "david", "haley", "marisa", "micaela", "osvaldo", "rosa", "alfredo", "rigoberto", "leo", "gus", "eric", "kevin", "montgomery", "cobi", "joshua"];

function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil( Math.random() * numStudents ) - 1;
  alert( students[randStudent] );
}
randomStudent();
