var totalMarks = 500;
var obtainedmarks=0;
// for each course we put i =1 
for (var i = 1; i <= 5; i++) {
    var courseMarks = parseInt(prompt("Enter marks for course " + i));
    obtainedmarks += courseMarks;
  }
// cal and display per
var per=obtainedmarks*100/totalMarks;
alert("your percentage is " + per+"%")
// cal and display per// cal and display per
var a= 3;