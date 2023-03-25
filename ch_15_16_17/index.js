 var course=[];
 var course1=prompt(" enter course 1" );
 course.push(course1);
 var course2=prompt(" enter course 2");
 course.push(course2);

 var course3=prompt(" enter course 3");
 course.push(course3);

 var course4=prompt(" enter course 4");
 course.push(course4);

 var course5=prompt(" enter course 5" );
 course.push(course5);
 alert(course);
 ///  this code shows if user edit any course name 



course1 = prompt("Course 1", course1);
course2 = prompt("Course 2", course2);
course3 = prompt("Course 3", course3);
course4 = prompt("Course 4", course4);
course5 = prompt("Course 5", course5);
// for edit  replace in an array 
course.splice(0,1,course1);
course.splice(1,1,course2);
course.splice(2,1,course3);
course.splice(3,1,course4);
course.splice(4,1,course5);
alert(course);



